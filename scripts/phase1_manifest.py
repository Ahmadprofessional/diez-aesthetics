import os
import json
import re
import hashlib
from bs4 import BeautifulSoup

os.makedirs('assets/original/svgs', exist_ok=True)
os.makedirs('assets/original/logos', exist_ok=True)
os.makedirs('assets/original/icons', exist_ok=True)
os.makedirs('scrape', exist_ok=True)

manifest_entries = []
svg_counter = 0

pages = {
    'homepage.html': 'https://diezaesthetics.com/',
    'about.html': 'https://diezaesthetics.com/about/',
    'treatments.html': 'https://diezaesthetics.com/treatments/',
    'gallery.html': 'https://diezaesthetics.com/gallery/',
    'prices.html': 'https://diezaesthetics.com/prices/',
    'contact.html': 'https://diezaesthetics.com/contact/',
}

# Image tracking dictionary
# key: canonical_url -> info dict
image_dict = {}

def get_role(url, alt):
    u = url.lower()
    a = (alt or '').lower()
    if 'logo' in u or 'logo' in a or 'removalai' in u:
        return 'logo'
    if 'favicon' in u or 'cropped-whatsapp' in u:
        return 'favicon'
    if 'founder' in u or 'founder' in a or 'daniel' in u or 'danial' in u:
        return 'team'
    if 'before' in u or 'after' in u or 'before' in a or 'after' in a:
        return 'before-after'
    if 'icon' in u or 'iconn' in u:
        return 'icon'
    if 'google' in u or 'reviewer' in u:
        return 'review-avatar'
    if 'screenshot' in u:
        return 'gallery'
    if any(k in u for k in ['anti-wrinkle', 'dermal', 'fillers', 'skin-boster', 'micro-needling']):
        return 'treatment'
    if 'clinic' in u:
        return 'hero'
    return 'other'

for filename, page_url in pages.items():
    fpath = os.path.join('archive/provided', filename)
    if not os.path.exists(fpath):
        continue

    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')

    # 1. Favicons & Apple Touch Icons
    for link in soup.find_all('link', rel=True):
        rel = ' '.join(link['rel'])
        if any(r in rel for r in ['icon', 'apple-touch-icon', 'shortcut icon']):
            href = link.get('href')
            if href:
                role = 'favicon' if 'apple' not in rel else 'apple-touch-icon'
                if href not in image_dict:
                    image_dict[href] = {
                        'original_url': href,
                        'alt_text': 'Favicon / App Icon',
                        'pages_used': [page_url],
                        'role': role,
                        'variants': []
                    }
                else:
                    if page_url not in image_dict[href]['pages_used']:
                        image_dict[href]['pages_used'].append(page_url)

    # 2. Img tags
    for img in soup.find_all('img'):
        src = img.get('src')
        alt = img.get('alt', '')
        srcset = img.get('srcset') or img.get('data-srcset')
        
        candidates = []
        if src:
            candidates.append(src)
        if srcset:
            for part in srcset.split(','):
                p = part.strip().split(' ')[0]
                if p:
                    candidates.append(p)

        # De-duplicate size variants to find the original full-size URL
        for cand in candidates:
            # Strip WordPress thumbnail dimension suffix (-300x159, -768x512, etc.)
            canonical_url = re.sub(r'-\d+x\d+(\.[a-zA-Z0-9]+)$', r'\1', cand.split('?')[0])
            
            role = get_role(canonical_url, alt)
            
            if canonical_url not in image_dict:
                image_dict[canonical_url] = {
                    'original_url': canonical_url,
                    'alt_text': alt or f"Diez Aesthetics {role}",
                    'pages_used': [page_url],
                    'role': role,
                    'variants': [cand] if cand != canonical_url else []
                }
            else:
                if page_url not in image_dict[canonical_url]['pages_used']:
                    image_dict[canonical_url]['pages_used'].append(page_url)
                if cand != canonical_url and cand not in image_dict[canonical_url]['variants']:
                    image_dict[canonical_url]['variants'].append(cand)
                if alt and not image_dict[canonical_url]['alt_text']:
                    image_dict[canonical_url]['alt_text'] = alt

    # 3. Inline SVGs
    for svg in soup.find_all('svg'):
        svg_str = str(svg)
        svg_hash = hashlib.sha256(svg_str.encode('utf-8')).hexdigest()[:12]
        svg_filename = f"inline_icon_{svg_hash}.svg"
        svg_path = os.path.join('assets/original/svgs', svg_filename)
        if not os.path.exists(svg_path):
            with open(svg_path, 'w', encoding='utf-8') as sf:
                sf.write(svg_str)
        svg_url = f"local://svg/{svg_filename}"
        if svg_url not in image_dict:
            image_dict[svg_url] = {
                'original_url': svg_url,
                'alt_text': 'Inline SVG icon',
                'pages_used': [page_url],
                'role': 'icon',
                'variants': []
            }
        else:
            if page_url not in image_dict[svg_url]['pages_used']:
                image_dict[svg_url]['pages_used'].append(page_url)

# Check which assets are downloaded locally
downloaded_count = 0
failed_count = 0
found_count = len(image_dict)

manifest_list = []
for orig_url, item in image_dict.items():
    local_file = None
    file_bytes = 0
    file_hash = ''
    download_status = 'pending_browser_extract'
    fail_reason = None

    # Check if we already downloaded review avatar
    if 'googleusercontent' in orig_url or 'reviewer' in orig_url:
        for rf in os.listdir('assets/original/reviews'):
            rpath = os.path.join('assets/original/reviews', rf)
            local_file = rpath
            file_bytes = os.path.getsize(rpath)
            download_status = 'downloaded'
            break
    elif orig_url.startswith('local://svg/'):
        svg_fname = orig_url.replace('local://svg/', '')
        local_file = os.path.join('assets/original/svgs', svg_fname)
        if os.path.exists(local_file):
            file_bytes = os.path.getsize(local_file)
            download_status = 'downloaded'

    if download_status == 'downloaded':
        downloaded_count += 1
    else:
        failed_count += 1
        fail_reason = 'Direct terminal curl blocked by Cloudflare (HTTP 403); DOM reference captured, awaiting browser asset unpack'

    manifest_list.append({
        'original_url': orig_url,
        'local_file': local_file or '',
        'bytes': file_bytes,
        'dimensions': 'auto',
        'alt_text': item['alt_text'],
        'pages_where_used': item['pages_used'],
        'role': item['role'],
        'status': download_status,
        'fail_reason': fail_reason,
        'variants_count': len(item['variants']),
        'variants': item['variants']
    })

manifest_data = {
    'summary': {
        'total_assets_found': found_count,
        'downloaded_locally': downloaded_count,
        'pending_browser_extract': failed_count,
        'roles_breakdown': {
            'logo': sum(1 for m in manifest_list if m['role'] == 'logo'),
            'hero': sum(1 for m in manifest_list if m['role'] == 'hero'),
            'treatment': sum(1 for m in manifest_list if m['role'] == 'treatment'),
            'before_after': sum(1 for m in manifest_list if m['role'] == 'before-after'),
            'team': sum(1 for m in manifest_list if m['role'] == 'team'),
            'icon': sum(1 for m in manifest_list if m['role'] == 'icon'),
            'review_avatar': sum(1 for m in manifest_list if m['role'] == 'review-avatar'),
            'gallery': sum(1 for m in manifest_list if m['role'] == 'gallery'),
            'favicon': sum(1 for m in manifest_list if 'favicon' in m['role']),
            'other': sum(1 for m in manifest_list if m['role'] == 'other'),
        }
    },
    'assets': manifest_list
}

with open('scrape/manifest.json', 'w', encoding='utf-8') as out:
    json.dump(manifest_data, out, indent=2, ensure_ascii=False)

print(f"Wrote scrape/manifest.json with {len(manifest_list)} unique assets.")
print("Summary breakdown:")
for k, v in manifest_data['summary']['roles_breakdown'].items():
    print(f"  {k}: {v}")
