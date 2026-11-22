import os
import json
import re
from bs4 import BeautifulSoup

scripts_found = []
plugins_found = set()
tracking_ids = {
    'gtm': set(),
    'ga4': set(),
    'meta_pixel': set(),
    'google_ads': set(),
    'wpcode_snippets': []
}

html_files = [f for f in os.listdir('archive/provided') if f.endswith('.html')]

for fname in html_files:
    fpath = os.path.join('archive/provided', fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')

    # Plugins from script/style urls
    for tag in soup.find_all(['script', 'link']):
        src = tag.get('src') or tag.get('href')
        if src and '/wp-content/plugins/' in src:
            plugin_name = src.split('/wp-content/plugins/')[1].split('/')[0]
            plugins_found.add(plugin_name)

    # Search for tracking patterns
    # GTM
    gtm_matches = re.findall(r'GTM-[A-Z0-9]+', html)
    for g in gtm_matches:
        tracking_ids['gtm'].add(g)

    # GA4
    ga_matches = re.findall(r'G-[A-Z0-9]+', html)
    for g in ga_matches:
        tracking_ids['ga4'].add(g)

    # Google Ads
    aw_matches = re.findall(r'AW-[A-Z0-9]+', html)
    for a in aw_matches:
        tracking_ids['google_ads'].add(a)

    # Meta Pixel
    meta_matches = re.findall(r'fbq\([\'\"]init[\'\"],\s*[\'\"](\d+)[\'\"]\)', html)
    for m in meta_matches:
        tracking_ids['meta_pixel'].add(m)

# Plugins mapping with roles and replacements
plugin_catalog = {
    'elementor': {
        'role': 'Core visual page builder',
        'fires_on': 'All pages (DOM structure)',
        'replacement': 'Tailwind CSS + Next.js Server & Client Components'
    },
    'elementor-pro': {
        'role': 'Header/footer builder & motion effects / theme builder',
        'fires_on': 'Global layout',
        'replacement': 'Next.js App Router RootLayout + Header/Footer components'
    },
    'elementskit-lite': {
        'role': 'Navigation menu widgets and icon bundles',
        'fires_on': 'Header/Footer',
        'replacement': 'Responsive Tailwind Navigation + Lucide Icons'
    },
    'gum-elementor-addon': {
        'role': 'Price table layouts and Owl Carousel',
        'fires_on': 'Homepage & Pricing pages',
        'replacement': 'Custom Tailwind Pricing Grid + Embla Carousel'
    },
    'header-footer-elementor': {
        'role': 'Header Footer builder template injector',
        'fires_on': 'All pages',
        'replacement': 'Standard Next.js components in layout.tsx'
    },
    'ultimate-elementor': {
        'role': 'Sticky header & enhanced widgets',
        'fires_on': 'Header / mobile menu',
        'replacement': 'Tailwind sticky navigation + Framer Motion mobile sheet'
    },
    'unlimited-elements-for-elementor-premium': {
        'role': 'Slide-out mobile navigation drawer',
        'fires_on': 'Mobile viewport (<768px)',
        'replacement': 'Accessible Radix UI Dialog / Sheet with Motion transitions'
    },
    'widgets-for-google-reviews-and-ratings': {
        'role': 'Google 5-star review carousel slider',
        'fires_on': 'Homepage reviews section',
        'replacement': 'Lightweight Embla Carousel with verified Google schema markup'
    },
    'wp-whatsapp-chat': {
        'role': 'Floating WhatsApp button',
        'fires_on': 'Global floating anchor',
        'replacement': 'Mobile sticky WhatsApp/Booking bar + desktop floating pill'
    }
}

inventory = {
    'third_party_scripts': [
        {
            'name': 'Google Tag Manager (GTM)',
            'ids_found': list(tracking_ids['gtm']),
            'where_fires': 'Header / All pages',
            'what_it_does': 'Container for analytics and conversion tags',
            'nextjs_replacement': 'Next.js Script with strategy="afterInteractive" or Partytown'
        },
        {
            'name': 'Google Analytics 4 (GA4)',
            'ids_found': list(tracking_ids['ga4']),
            'where_fires': 'All pages via GTM / gtag',
            'what_it_does': 'Visitor traffic & page view telemetry',
            'nextjs_replacement': 'Google Tag with Consent Mode v2 integration'
        },
        {
            'name': 'Google Ads Conversion Tags',
            'ids_found': list(tracking_ids['google_ads']),
            'where_fires': 'Booking CTA clicks and WhatsApp initiates',
            'what_it_does': 'Conversion tracking for PPC campaigns',
            'nextjs_replacement': 'Conversion event triggers bound to booking & WhatsApp buttons'
        },
        {
            'name': 'Meta Pixel (Facebook/Instagram)',
            'ids_found': list(tracking_ids['meta_pixel']),
            'where_fires': 'All pages',
            'what_it_does': 'Ad attribution and retargeting from Instagram traffic',
            'nextjs_replacement': 'Consent-gated Meta Pixel script firing Lead / Contact events'
        },
        {
            'name': 'RAG Chatbot Widget (WPCode Injected)',
            'ids_found': [],
            'where_fires': 'Global floating corner',
            'what_it_does': 'Interactive AI consultation assistant',
            'nextjs_replacement': 'Deferred script or custom React conversational widget (loaded idle)'
        },
        {
            'name': 'WhatsApp Direct Click-to-Chat',
            'ids_found': ['https://wa.link/l51u63'],
            'where_fires': 'Header, hero, floating button, mobile bar',
            'what_it_does': 'Direct lead generation to clinic practitioner WhatsApp',
            'nextjs_replacement': 'Optimized native button component with conversion tracking event'
        },
        {
            'name': 'FacesConsent Booking Engine',
            'ids_found': ['https://facesconsent.com/bookings/daniel'],
            'where_fires': 'Header CTA, hero CTA, treatment cards, booking buttons',
            'what_it_does': 'Medical aesthetics booking and consultation scheduler',
            'nextjs_replacement': 'Direct secure links with UTM pass-through and click conversion tracking'
        }
    ],
    'active_plugins': [
        {
            'plugin': p,
            'role': plugin_catalog.get(p, {}).get('role', 'WordPress extension'),
            'fires_on': plugin_catalog.get(p, {}).get('role', 'Various pages'),
            'replacement': plugin_catalog.get(p, {}).get('replacement', 'Native React / Tailwind component')
        }
        for p in sorted(list(plugins_found))
    ]
}

os.makedirs('scrape', exist_ok=True)
with open('scrape/third_party_inventory.json', 'w', encoding='utf-8') as out:
    json.dump(inventory, out, indent=2, ensure_ascii=False)

print("Wrote scrape/third_party_inventory.json")
print("Plugins cataloged:", len(plugins_found))
