import os
import shutil
import re
from bs4 import BeautifulSoup

pages_map = {
    'wholewebsite.md': 'homepage.html',
    'about.md': 'about.html',
    'treatments.md': 'treatments.html',
    'gallery.md': 'gallery.html',
    'prices.md': 'prices.html',
    'contact.md': 'contact.html',
}

os.makedirs('archive/provided', exist_ok=True)
os.makedirs('archive/mirror', exist_ok=True)

for src, dst in pages_map.items():
    if os.path.exists(src):
        dst_path = os.path.join('archive/provided', dst)
        shutil.copyfile(src, dst_path)
        print(f"Copied {src} -> {dst_path} ({os.path.getsize(dst_path)} bytes)")

# Analyze each page
all_images = set()
all_plugins = set()
all_scripts = set()
all_stylesheets = set()
page_details = []

for dst in pages_map.values():
    path = os.path.join('archive/provided', dst)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    title = soup.title.string.strip() if soup.title and soup.title.string else ''
    meta_desc = ''
    meta_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
    if meta_tag and meta_tag.get('content'):
        meta_desc = meta_tag['content'].strip()
    
    canonical = ''
    canon_tag = soup.find('link', rel='canonical')
    if canon_tag and canon_tag.get('href'):
        canonical = canon_tag['href'].strip()

    h1_tags = [h.get_text(strip=True) for h in soup.find_all('h1')]
    
    # Images in this page
    page_imgs = set()
    for img in soup.find_all('img'):
        for attr in ['src', 'srcset', 'data-src', 'data-srcset']:
            val = img.get(attr)
            if val:
                if attr == 'srcset' or attr == 'data-srcset':
                    # Parse srcset
                    for part in val.split(','):
                        part = part.strip().split(' ')[0]
                        if part:
                            page_imgs.add(part)
                            all_images.add(part)
                else:
                    page_imgs.add(val)
                    all_images.add(val)

    # Background images in styles or inline style
    for elem in soup.find_all(style=True):
        bgs = re.findall(r'url\((.*?)\)', elem['style'])
        for b in bgs:
            b_clean = b.strip('\'"')
            page_imgs.add(b_clean)
            all_images.add(b_clean)

    # Check plugins
    plugin_matches = re.findall(r'/wp-content/plugins/([a-zA-Z0-9_\-]+)/', html)
    for p in plugin_matches:
        all_plugins.add(p)

    # Stylesheets
    for link in soup.find_all('link', rel='stylesheet'):
        if link.get('href'):
            all_stylesheets.add(link['href'])

    # Scripts
    for script in soup.find_all('script', src=True):
        all_scripts.add(script['src'])

    page_details.append({
        'file': dst,
        'title': title,
        'meta_description': meta_desc,
        'canonical': canonical,
        'h1': h1_tags,
        'images_count': len(page_imgs),
    })

print("\n=== PAGE DETAILS ===")
for p in page_details:
    print(f"Page: {p['file']}")
    print(f"  Title: {p['title']}")
    print(f"  Canonical: {p['canonical']}")
    print(f"  H1: {p['h1']}")
    print(f"  Meta Desc: {p['meta_description'][:80]}...")
    print(f"  Images on page: {p['images_count']}")

print(f"\nTotal unique images/assets collected across all pages: {len(all_images)}")
print(f"Total WordPress plugins identified: {len(all_plugins)}")
print("Plugins:", sorted(list(all_plugins)))
