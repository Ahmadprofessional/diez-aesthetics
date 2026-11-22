import os
import json
import re
from bs4 import BeautifulSoup

pages_info = [
    {
        'file': 'homepage.html',
        'url': 'https://diezaesthetics.com/',
        'slug': '/'
    },
    {
        'file': 'about.html',
        'url': 'https://diezaesthetics.com/about/',
        'slug': '/about/'
    },
    {
        'file': 'treatments.html',
        'url': 'https://diezaesthetics.com/treatments/',
        'slug': '/treatments/'
    },
    {
        'file': 'gallery.html',
        'url': 'https://diezaesthetics.com/gallery/',
        'slug': '/gallery/'
    },
    {
        'file': 'prices.html',
        'url': 'https://diezaesthetics.com/prices/',
        'slug': '/prices/'
    },
    {
        'file': 'contact.html',
        'url': 'https://diezaesthetics.com/contact/',
        'slug': '/contact/'
    }
]

paths_data = []
all_internal_links = set()

for page in pages_info:
    file_path = os.path.join('archive/provided', page['file'])
    if not os.path.exists(file_path):
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')

    # Title
    title = soup.title.string.strip() if soup.title and soup.title.string else ''

    # Meta Description
    meta_desc = ''
    meta_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
    if meta_tag and meta_tag.get('content'):
        meta_desc = meta_tag['content'].strip()

    # Canonical
    canonical = ''
    canon_tag = soup.find('link', rel='canonical')
    if canon_tag and canon_tag.get('href'):
        canonical = canon_tag['href'].strip()

    # H1
    h1_elements = [h.get_text(strip=True) for h in soup.find_all('h1')]
    h1 = h1_elements[0] if h1_elements else ''

    # OG & Twitter Tags
    og_tags = {}
    for meta in soup.find_all('meta'):
        prop = meta.get('property') or meta.get('name')
        if prop and (prop.startswith('og:') or prop.startswith('twitter:')):
            og_tags[prop] = meta.get('content', '')

    # JSON-LD
    json_ld = []
    for script in soup.find_all('script', type='application/ld+json'):
        try:
            if script.string:
                json_ld.append(json.loads(script.string))
        except Exception:
            pass

    # Indexability
    robots_meta = soup.find('meta', attrs={'name': 'robots'})
    robots_content = robots_meta.get('content', '') if robots_meta else 'index, follow'
    is_indexable = 'noindex' not in robots_content.lower()

    # Internal links
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.startswith('https://diezaesthetics.com') or href.startswith('/'):
            clean_href = href.split('#')[0].split('?')[0]
            if clean_href.startswith('/'):
                clean_href = 'https://diezaesthetics.com' + clean_href
            if clean_href:
                all_internal_links.add(clean_href)

    entry = {
        'url': page['url'],
        'slug': page['slug'],
        'title': title,
        'meta_description': meta_desc,
        'canonical': canonical or page['url'],
        'h1': h1,
        'all_h1s': h1_elements,
        'og_tags': og_tags,
        'twitter_tags': {k: v for k, v in og_tags.items() if k.startswith('twitter:')},
        'json_ld': json_ld,
        'status_code': 200,
        'indexability': {
            'indexable': is_indexable,
            'robots_directive': robots_content or 'index, follow'
        }
    }
    paths_data.append(entry)

os.makedirs('scrape', exist_ok=True)
with open('scrape/paths.json', 'w', encoding='utf-8') as out:
    json.dump({
        'pages': paths_data,
        'discovered_internal_urls': sorted(list(all_internal_links))
    }, out, indent=2, ensure_ascii=False)

print(f"Wrote scrape/paths.json with {len(paths_data)} main paths.")
print(f"Total internal link targets discovered: {len(all_internal_links)}")
for l in sorted(all_internal_links):
    print(f"  {l}")
