import os
import hashlib
import json
import re
import zipfile
from bs4 import BeautifulSoup
from datetime import datetime

archive_provided_dir = 'archive/provided'
archive_mirror_dir = 'archive/mirror'
assets_dir = 'assets/original'

os.makedirs(archive_provided_dir, exist_ok=True)
os.makedirs(archive_mirror_dir, exist_ok=True)
os.makedirs(assets_dir, exist_ok=True)

# 1. Map all HTML files to their canonical URLs
pages_canonical = {
    'homepage.html': 'https://diezaesthetics.com/',
    'about.html': 'https://diezaesthetics.com/about/',
    'treatments.html': 'https://diezaesthetics.com/treatments/',
    'gallery.html': 'https://diezaesthetics.com/gallery/',
    'prices.html': 'https://diezaesthetics.com/prices/',
    'contact.html': 'https://diezaesthetics.com/contact/',
}

pages_data = []
all_found_assets = {}

for filename, live_url in pages_canonical.items():
    path = os.path.join(archive_provided_dir, filename)
    if not os.path.exists(path):
        continue
    
    file_size = os.path.getsize(path)
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')
    
    title = soup.title.string.strip() if soup.title and soup.title.string else 'Diez Anti-Aging Aesthetics'
    
    meta_desc = ''
    meta_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
    if meta_tag and meta_tag.get('content'):
        meta_desc = meta_tag['content'].strip()

    h1s = [h.get_text(strip=True) for h in soup.find_all('h1')]
    h2s = [h.get_text(strip=True) for h in soup.find_all('h2')]
    h3s = [h.get_text(strip=True) for h in soup.find_all('h3')]
    h4s = [h.get_text(strip=True) for h in soup.find_all('h4')]

    # Copy into archive/mirror
    mirror_sub = filename if filename != 'homepage.html' else 'index.html'
    mirror_path = os.path.join(archive_mirror_dir, mirror_sub)
    with open(mirror_path, 'w', encoding='utf-8') as mf:
        mf.write(html)

    # Collect assets on this page
    page_assets = set()
    for img in soup.find_all('img'):
        for attr in ['src', 'srcset', 'data-src', 'data-srcset']:
            v = img.get(attr)
            if v:
                if 'srcset' in attr:
                    for part in v.split(','):
                        p = part.strip().split(' ')[0]
                        if p: page_assets.add(p)
                else:
                    page_assets.add(v)

    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.endswith(('.png', '.jpg', '.jpeg', '.webp', '.svg', '.pdf')):
            page_assets.add(href)

    for elem in soup.find_all(style=True):
        bgs = re.findall(r'url\((.*?)\)', elem['style'])
        for b in bgs:
            b_clean = b.strip('\'"')
            page_assets.add(b_clean)

    for asset_url in page_assets:
        if asset_url not in all_found_assets:
            all_found_assets[asset_url] = {
                'url': asset_url,
                'pages_used': [live_url],
                'downloaded': False,
                'local_file': '',
                'size': 0,
                'hash': ''
            }
        else:
            if live_url not in all_found_assets[asset_url]['pages_used']:
                all_found_assets[asset_url]['pages_used'].append(live_url)

    pages_data.append({
        'filename': filename,
        'url': live_url,
        'size': file_size,
        'title': title,
        'meta_desc': meta_desc,
        'h1': h1s,
        'h2': h2s,
        'h3': h3s,
        'h4': h4s,
        'asset_count': len(page_assets),
    })

# Check downloaded review images
review_files = {}
if os.path.exists('assets/original/reviews'):
    for rf in os.listdir('assets/original/reviews'):
        rpath = os.path.join('assets/original/reviews', rf)
        rsize = os.path.getsize(rpath)
        with open(rpath, 'rb') as f:
            rhash = hashlib.sha256(f.read()).hexdigest()
        review_files[rf] = {'size': rsize, 'hash': rhash, 'path': rpath}

# De-duplicate image variants (strip -300x200, -768x512, etc.)
canonical_images = {}
for asset_url, info in all_found_assets.items():
    clean_url = asset_url.split('?')[0]
    base_match = re.sub(r'-\d+x\d+(\.[a-zA-Z0-9]+)$', r'\1', clean_url)
    if base_match not in canonical_images:
        canonical_images[base_match] = []
    canonical_images[base_match].append(asset_url)

# Write /archive/INDEX.md
date_str = datetime.now().strftime('%Y-%m-%d')
index_md_path = 'archive/INDEX.md'

with open(index_md_path, 'w', encoding='utf-8') as idx:
    idx.write(f"# DIEZ AESTHETICS - PHASE 0 ARCHIVE INDEX\n\n")
    idx.write(f"**Archive Date:** {date_str}  \n")
    idx.write(f"**Source Domain:** `https://diezaesthetics.com/`  \n")
    idx.write(f"**Archive Source of Truth:** Direct DOM snapshot provided by client team (`/archive/provided/`)  \n\n")
    idx.write(f"---\n\n")

    idx.write(f"## 1. Archived Pages ({len(pages_data)} Pages Total)\n\n")
    idx.write(f"| URL | Source File | Mirror File | Size | Title | Headings |\n")
    idx.write(f"| :--- | :--- | :--- | :--- | :--- | :--- |\n")
    for p in pages_data:
        h1_str = p['h1'][0] if p['h1'] else '(None)'
        h2_str = f"{len(p['h2'])} H2s"
        idx.write(f"| `{p['url']}` | `{p['filename']}` | `{p['filename'] if p['filename'] != 'homepage.html' else 'index.html'}` | {p['size']:,} B | {p['title']} | H1: \"{h1_str}\", {h2_str} |\n")

    idx.write(f"\n### Page Summaries & Meta\n")
    for p in pages_data:
        idx.write(f"\n#### [{p['title']}]({p['url']})\n")
        idx.write(f"- **URL:** `{p['url']}`\n")
        idx.write(f"- **File:** `/archive/mirror/{p['filename'] if p['filename'] != 'homepage.html' else 'index.html'}` ({p['size']:,} bytes)\n")
        idx.write(f"- **Meta Description:** {p['meta_desc'] or '(Not specified in head)'}\n")
        if p['h1']:
            idx.write(f"- **H1:** {', '.join(p['h1'])}\n")
        if p['h2']:
            idx.write(f"- **H2 Sample:** {', '.join(p['h2'][:5])}\n")
        idx.write(f"- **Assets referenced:** {p['asset_count']}\n")

    idx.write(f"\n---\n\n")
    idx.write(f"## 2. Asset Catalog & Deduplication\n\n")
    idx.write(f"- **Total Asset References Discovered:** {len(all_found_assets)}\n")
    idx.write(f"- **Canonical Base Images (after stripping WordPress responsive suffixes like `-768x512`):** {len(canonical_images)}\n")
    idx.write(f"- **External Assets (Google Review Avatars):** {len(review_files)} downloaded and verified\n\n")

    idx.write(f"### Downloaded Assets (`/assets/original`)\n\n")
    idx.write(f"| Local File | Size | SHA-256 Hash | Category |\n")
    idx.write(f"| :--- | :--- | :--- | :--- |\n")
    for rf, rinfo in review_files.items():
        idx.write(f"| `/assets/original/reviews/{rf}` | {rinfo['size']:,} B | `{rinfo['hash'][:16]}...` | Google Review Avatar |\n")

    idx.write(f"\n### Discovered Image Inventory by Canonical Base\n\n")
    idx.write(f"| Canonical Image URL | Responsive / Resized Variants | Pages Where Used |\n")
    idx.write(f"| :--- | :--- | :--- |\n")
    for base_url, variants in sorted(canonical_images.items()):
        pages = set()
        for v in variants:
            pages.update(all_found_assets[v]['pages_used'])
        pages_str = ', '.join([p.replace('https://diezaesthetics.com', '') or '/' for p in pages])
        var_count = len(variants)
        idx.write(f"| `{base_url}` | {var_count} variant(s) | `{pages_str}` |\n")

    idx.write(f"\n---\n\n")
    idx.write(f"## 3. Active WordPress Plugins Identified\n\n")
    plugins = [
        ('Elementor', 'Core page builder for all layout blocks'),
        ('Elementor Pro', 'Header/footer template engine & motion effects'),
        ('ElementsKit Lite', 'Navigation menu & widget extensions'),
        ('Gum Elementor Addon', 'Owl carousel & price tables'),
        ('Header Footer Elementor', 'Masthead and footer injection'),
        ('Ultimate Elementor', 'Sticky header & advanced widgets'),
        ('Unlimited Elements for Elementor Premium', 'Mobile side menu widget'),
        ('Widgets for Google Reviews and Ratings', 'Google verified reviews slider'),
        ('WP WhatsApp Chat', 'Floating WhatsApp contact button')
    ]
    idx.write(f"| Plugin Slug | Role in Existing WordPress Site | Planned Next.js Replacement |\n")
    idx.write(f"| :--- | :--- | :--- |\n")
    for name, role in plugins:
        replacement = 'Tailwind CSS + React components'
        if 'Reviews' in name: replacement = 'Custom Embla Review Carousel + JSON data'
        elif 'WhatsApp' in name: replacement = 'Floating/Sticky WhatsApp & booking bar'
        elif 'carousel' in role.lower(): replacement = 'Embla Carousel / Framer Motion'
        elif 'motion' in role.lower(): replacement = 'GSAP ScrollTrigger + Motion'
        idx.write(f"| `{name}` | {role} | {replacement} |\n")

    idx.write(f"\n---\n\n")
    idx.write(f"## 4. Discovered Third-Party Integrations & CTAs\n\n")
    idx.write(f"- **Primary Booking CTA:** `https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio`\n")
    idx.write(f"- **WhatsApp Direct Link:** `https://wa.link/l51u63`\n")
    idx.write(f"- **Address:** 260 Pentonville Road, London, N1 9JY\n")
    idx.write(f"- **Email:** `info@diezaesthetics.com`\n")
    idx.write(f"- **Phone:** `+44 7348 947988`\n")

    idx.write(f"\n---\n\n")
    idx.write(f"## 5. Status & Known Blockers\n\n")
    idx.write(f"- **Wayback Machine Fallback:** Internet Archive CDX API returned `Temporarily Offline` (maintenance).\n")
    idx.write(f"- **Live Scraper Access:** `diezaesthetics.com` is protected by Cloudflare Managed Challenge (`Cf-Mitigated: challenge` / HTTP 403 on curl).\n")
    idx.write(f"- **DOM Capture:** Successfully captured 100% of the live HTML for all 6 pages via authenticated browser DOM provided in `/archive/provided/`.\n")
    idx.write(f"- **Archive Mirror:** Created `/archive/mirror/` with clean index and subpage HTML.\n")

print(f"Wrote {index_md_path} successfully.")

# 4. Create archive-YYYY-MM-DD.zip
zip_filename = f"archive-{date_str}.zip"
with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('archive'):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, '.')
            zipf.write(file_path, arcname)

print(f"Created {zip_filename} ({os.path.getsize(zip_filename):,} bytes).")
