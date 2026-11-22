import re
from bs4 import BeautifulSoup

with open('archive/provided/homepage.html', 'r', encoding='utf-8') as f:
    html = f.read()
    soup = BeautifulSoup(html, 'html.parser')

print('=== ALL A TAGS ===')
for a in soup.find_all('a', href=True):
    print(f"[{a.get_text(strip=True)[:40]}] -> {a['href']}")

print('\n=== ALL IMG TAGS ===')
for img in soup.find_all('img'):
    print(f"src: {img.get('src')}")
    print(f"  alt: {img.get('alt')}")
    if img.get('srcset'):
        print(f"  srcset: {img.get('srcset')[:100]}...")

bg_urls = re.findall(r'url\((.*?)\)', html)
print('\n=== ALL BACKGROUND / CSS URLS ===')
clean_bgs = set()
for b in bg_urls:
    b_clean = b.strip('\'"')
    if 'diezaesthetics' in b_clean or 'wp-content' in b_clean:
        clean_bgs.add(b_clean)

for b in sorted(clean_bgs):
    print(b)
