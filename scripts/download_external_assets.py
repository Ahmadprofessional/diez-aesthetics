import os
import urllib.request
from bs4 import BeautifulSoup

os.makedirs('assets/original/reviews', exist_ok=True)
os.makedirs('assets/original/wp-uploads', exist_ok=True)
os.makedirs('archive/mirror/assets/reviews', exist_ok=True)

with open('archive/provided/homepage.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

google_imgs = []
for img in soup.find_all('img'):
    src = img.get('src', '')
    if 'googleusercontent.com' in src:
        google_imgs.append(src)

print(f"Found {len(google_imgs)} Google reviewer avatars.")
for i, url in enumerate(set(google_imgs)):
    filename = f"reviewer_{i+1}.png"
    filepath = os.path.join('assets/original/reviews', filename)
    mirror_path = os.path.join('archive/mirror/assets/reviews', filename)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp, open(filepath, 'wb') as out:
            data = resp.read()
            out.write(data)
            with open(mirror_path, 'wb') as m_out:
                m_out.write(data)
        print(f"Downloaded {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed {url}: {e}")
