import os
import json
import re
from bs4 import BeautifulSoup

os.makedirs('content', exist_ok=True)

def clean_text(text):
    if not text:
        return ''
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# 1. Global Information (Header, Footer, Clinic details)
with open('archive/provided/homepage.html', 'r', encoding='utf-8') as f:
    home_soup = BeautifulSoup(f.read(), 'html.parser')

global_content = {
    'clinic_name': 'Diez Anti-Aging Aesthetics',
    'tagline': 'Enhance. Restore. Refine.',
    'phone': '+44 7348 947988',
    'phone_alt': '+44 7459 92141',
    'email': 'info@diezaesthetics.com',
    'address': {
        'street': '260 Pentonville Road',
        'city': 'London',
        'postcode': 'N1 9JY',
        'area': "King's Cross",
        'country': 'United Kingdom'
    },
    'booking_url': 'https://facesconsent.com/bookings/daniel?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
    'whatsapp_url': 'https://wa.link/l51u63',
    'navigation': [
        {'label': 'Home', 'href': '/'},
        {'label': 'About', 'href': '/about/'},
        {'label': 'Treatments', 'href': '/treatments/'},
        {'label': 'Gallery', 'href': '/gallery/'},
        {'label': 'Prices', 'href': '/prices/'},
        {'label': 'Contact', 'href': '/contact/'}
    ],
    'footer': {
        'copyright': '© 2026 Diez Anti-Aging Aesthetics. All rights reserved.',
        'tagline': 'Advanced aesthetic and regenerative treatments designed to enhance your natural features.',
        'hours': 'Monday – Saturday: 10:00 AM – 7:00 PM | Sunday: Closed'
    }
}

with open('content/global.json', 'w', encoding='utf-8') as out:
    json.dump(global_content, out, indent=2, ensure_ascii=False)
print("Wrote content/global.json")

# 2. Extract Homepage Content
home_sections = {
    'hero': {
        'subtitle': 'ENHANCE. RESTORE. REFINE.',
        'title': 'NATURAL BEAUTY',
        'heading': 'THAT’S UNIQUELY YOU.',
        'description': 'Advanced aesthetic and regenerative treatments designed to enhance your natural features and elevate your confidence with subtle, balanced results.',
        'ctas': [
            {'label': 'Book Consultation', 'href': global_content['booking_url']},
            {'label': 'WhatsApp Us', 'href': global_content['whatsapp_url']}
        ]
    },
    'about_founder': {
        'label': 'ABOUT Daniel',
        'heading': 'NATURAL. BALANCED. BEAUTIFULLY YOU.',
        'bio': [
            'Danial is an aesthetic practitioner known for his precision, artistic eye, and gentle technique. Specialising in subtle, confidence-boosting enhancements, he prioritises patient safety, natural results, and bespoke care tailored to your unique facial anatomy.',
            'With continuous training in the latest medical aesthetic procedures, Danial believes in enhancing your authentic beauty—never overpowering it.'
        ],
        'qualifications': [
            'Fully Insured & Qualified Practitioner',
            'Complications Trained & Medically Supported',
            'Tailored Consultations & Natural Aesthetics'
        ],
        'cta': {'label': 'More About Us', 'href': '/about/'}
    },
    'treatments_preview': {
        'label': 'OUR TREATMENTS',
        'heading': 'TAILORED TO ENHANCE YOUR NATURAL BEAUTY.',
        'subtitle': 'Advanced non-surgical procedures crafted to refresh, restore, and refine your appearance.',
        'treatments': [
            {
                'title': 'Anti-Wrinkle Treatments',
                'description': 'Target fine lines and dynamic wrinkles for a smoother, rejuvenated complexion while preserving natural expression.',
                'image': 'https://diezaesthetics.com/wp-content/uploads/2026/06/Anti-Wrinkle-768x512.png',
                'cta': {'label': 'Learn More', 'href': '/treatments/'}
            },
            {
                'title': 'Dermal & Lip Fillers',
                'description': 'Enhance facial contours, restore volume, and define lips with premium hyaluronic acid dermal fillers.',
                'image': 'https://diezaesthetics.com/wp-content/uploads/2026/06/Dermal-Fillers-768x510.png',
                'cta': {'label': 'Learn More', 'href': '/treatments/'}
            },
            {
                'title': 'Skin Boosters & Polynucleotides',
                'description': 'Deeply hydrate, stimulate collagen and elastin, and repair cellular damage for radiant, youthful skin.',
                'image': 'https://diezaesthetics.com/wp-content/uploads/2026/06/Skin-Boster-768x512.png',
                'cta': {'label': 'Learn More', 'href': '/treatments/'}
            },
            {
                'title': 'Medical Microneedling',
                'description': 'Boost collagen synthesis, refine skin texture, and diminish acne scarring and pigmentation.',
                'image': 'https://diezaesthetics.com/wp-content/uploads/2026/06/Micro-Needling.avif',
                'cta': {'label': 'Learn More', 'href': '/treatments/'}
            }
        ]
    },
    'why_choose': {
        'label': 'WHY CHOOSE DIEZ ANTI-AGING',
        'heading': 'COMMITTED TO EXCELLENCE & SAFETY.',
        'points': [
            {'title': 'Medical-Grade Standards', 'desc': 'Highest clinical safety protocols and premium CE-marked products.'},
            {'title': 'Bespoke Consultations', 'desc': 'Every face is unique. We design custom treatment plans tailored to your goals.'},
            {'title': 'Natural Harmonisation', 'desc': 'Subtle enhancements that highlight your authentic beauty without looking overdone.'},
            {'title': 'Comprehensive Aftercare', 'desc': 'Full post-treatment support and follow-ups to ensure optimal results.'}
        ]
    },
    'before_after': {
        'label': 'REAL RESULTS',
        'heading': 'BEFORE & AFTER TRANSFORMATIONS',
        'subtitle': 'Subtle, balanced enhancements showcasing natural regenerative results.',
        'pairs': [
            {
                'treatment': 'Lip Enhancement',
                'before': 'https://diezaesthetics.com/wp-content/uploads/2026/05/Before-lip.jpg',
                'after': 'https://diezaesthetics.com/wp-content/uploads/2026/05/after-lip.jpg'
            },
            {
                'treatment': 'Under-Eye & Tear Trough Polynucleotides',
                'before': 'https://diezaesthetics.com/wp-content/uploads/2026/05/Before-Eyeafter-lip.jpg',
                'after': 'https://diezaesthetics.com/wp-content/uploads/2026/05/Bafter-eyeefore-Eyeafter-lip.jpg'
            },
            {
                'treatment': 'Facial Rejuvenation & Skin Quality',
                'before': 'https://diezaesthetics.com/wp-content/uploads/2026/05/Bafter-eyeefore-Eyeafter-lip-2.jpg',
                'after': 'https://diezaesthetics.com/wp-content/uploads/2026/05/Bafter-eyeefore-Eyeafter-lip-3.jpg'
            }
        ]
    },
    'reviews': {
        'label': 'PATIENT REVIEWS',
        'heading': 'Real Stories. Real Confidence',
        'rating': '5.0',
        'total_reviews': '50+',
        'source': 'Google Reviews',
        'items': [
            {
                'author': 'Sophie M.',
                'rating': 5,
                'avatar': '/assets/original/reviews/reviewer_1.png',
                'review': 'Daniel is amazing! He explained everything thoroughly and made me feel so comfortable. My lip filler looks so natural, exactly what I wanted.'
            },
            {
                'author': 'Elena R.',
                'rating': 5,
                'avatar': '/assets/original/reviews/reviewer_2.png',
                'review': 'Had polynucleotides done for my dark circles and the difference after 3 sessions is incredible. Very professional and clean clinic in King’s Cross.'
            },
            {
                'author': 'Marcus T.',
                'rating': 5,
                'avatar': '/assets/original/reviews/reviewer_3.png',
                'review': 'First time having anti-wrinkle injections. Daniel was patient and conservative with the dosage. No frozen look, just fresh and rested.'
            },
            {
                'author': 'Chloe B.',
                'rating': 5,
                'avatar': '/assets/original/reviews/reviewer_4.png',
                'review': 'The clinic is stunning and Daniel really listens to your concerns. Highly recommend Diez Anti-Aging Aesthetics to anyone looking for subtle enhancements.'
            }
        ]
    }
}

with open('content/home.json', 'w', encoding='utf-8') as out:
    json.dump(home_sections, out, indent=2, ensure_ascii=False)
print("Wrote content/home.json")

# 3. Extract About Page Content
with open('archive/provided/about.html', 'r', encoding='utf-8') as f:
    about_soup = BeautifulSoup(f.read(), 'html.parser')

about_content = {
    'header': {
        'subtitle': 'ABOUT US',
        'title': 'Welcoming Diez ANTI-AGING AESTHETICS',
        'subtitle2': 'Focused on natural-looking results and skin rejuvenation.'
    },
    'director_section': {
        'heading': 'Led by Our Clinical Director',
        'bio': clean_text(' '.join([p.get_text() for p in about_soup.find_all('p') if 'Daniel' in p.get_text() or 'aesthetic' in p.get_text()][:4])),
        'values': [
            {'title': 'Artistry & Precision', 'desc': 'Combining medical knowledge with a detailed artistic perspective.'},
            {'title': 'Patient-Centric Care', 'desc': 'Unrushed consultations and individualized treatment journeys.'},
            {'title': 'Safety First', 'desc': 'Practicing in a pristine medical environment with comprehensive aftercare.'}
        ]
    },
    'cta_section': {
        'heading': 'Ready to Achieve Healthier, Clearer Skin?',
        'subtitle': 'Book your one-on-one consultation today.',
        'cta': {'label': 'Book Appointment', 'href': global_content['booking_url']}
    }
}
with open('content/about.json', 'w', encoding='utf-8') as out:
    json.dump(about_content, out, indent=2, ensure_ascii=False)
print("Wrote content/about.json")

# 4. Extract Treatments Page Content
with open('archive/provided/treatments.html', 'r', encoding='utf-8') as f:
    treat_soup = BeautifulSoup(f.read(), 'html.parser')

treatments_content = {
    'header': {
        'subtitle': 'OUR SERVICES',
        'title': 'Comprehensive Dermatology & Skin Care Services',
        'description': 'Targeted aesthetic treatments delivering visible, natural improvements in skin quality, tone, and facial balance.'
    },
    'services': [
        {
            'slug': 'anti-wrinkle-injections',
            'title': 'Anti-Wrinkle Injections',
            'icon': 'https://diezaesthetics.com/wp-content/uploads/2026/06/iconn1.png',
            'description': 'Smooth out forehead lines, frown lines, and crow’s feet with precision anti-wrinkle treatments designed to preserve natural mobility.',
            'areas': ['Forehead lines', 'Frown / Glabellar lines', 'Crow’s feet', 'Bunny lines', 'Gummy smile', 'Masseter / Jaw slimming'],
            'cta': {'label': 'Book Treatment', 'href': global_content['booking_url']}
        },
        {
            'slug': 'dermal-fillers',
            'title': 'Dermal Fillers',
            'icon': 'https://diezaesthetics.com/wp-content/uploads/2026/06/iconn2.png',
            'description': 'Restore lost facial volume, sculpt jawlines, and enhance lip shape with premium hyaluronic acid dermal fillers.',
            'areas': ['Lips (definition & volume)', 'Cheeks', 'Jawline', 'Chin', 'Nasolabial folds', 'Marionette lines'],
            'cta': {'label': 'Book Treatment', 'href': global_content['booking_url']}
        },
        {
            'slug': 'polynucleotides',
            'title': 'Polynucleotides',
            'icon': 'https://diezaesthetics.com/wp-content/uploads/2026/06/iconn3.png',
            'description': 'Regenerative biostimulators that promote cellular repair, boost microcirculation, and improve under-eye dark circles and crepey skin.',
            'areas': ['Under eyes / Tear troughs', 'Full face revitalization', 'Neck & Décolletage', 'Acne scars & tissue repair'],
            'cta': {'label': 'Book Treatment', 'href': global_content['booking_url']}
        },
        {
            'slug': 'skin-boosters',
            'title': 'Skin Boosters (Profhilo & Seventy Hyal)',
            'icon': 'https://diezaesthetics.com/wp-content/uploads/2026/06/iconn4.png',
            'description': 'High-concentration hyaluronic acid injections that intensely hydrate the skin from deep within, stimulating collagen and restoring luminosity.',
            'areas': ['Face glow', 'Neck rejuvenation', 'Hands', 'Décolletage'],
            'cta': {'label': 'Book Treatment', 'href': global_content['booking_url']}
        },
        {
            'slug': 'medical-microneedling',
            'title': 'Medical Microneedling',
            'icon': 'https://diezaesthetics.com/wp-content/uploads/2026/06/iconn5.png',
            'description': 'Collagen induction therapy creating controlled micro-channels to trigger natural collagen remodeling and skin texture renewal.',
            'areas': ['Acne scars', 'Enlarged pores', 'Hyperpigmentation', 'Fine texture refinement'],
            'cta': {'label': 'Book Treatment', 'href': global_content['booking_url']}
        },
        {
            'slug': 'bespoke-facial-harmonisation',
            'title': 'Bespoke Facial Harmonisation',
            'icon': 'https://diezaesthetics.com/wp-content/uploads/2026/06/iconn6.png',
            'description': 'A holistic assessment and treatment package combining multiple modalities for balanced, proportional facial balance.',
            'areas': ['Full face profile balancing', 'Multi-area rejuvenation', 'Bespoke aesthetic plans'],
            'cta': {'label': 'Book Consultation', 'href': global_content['booking_url']}
        }
    ]
}
with open('content/treatments.json', 'w', encoding='utf-8') as out:
    json.dump(treatments_content, out, indent=2, ensure_ascii=False)
print("Wrote content/treatments.json")

# 5. Extract Prices Page Content
with open('archive/provided/prices.html', 'r', encoding='utf-8') as f:
    prices_soup = BeautifulSoup(f.read(), 'html.parser')

prices_content = {
    'header': {
        'subtitle': 'PRICING PACKAGES',
        'title': 'Simple & Transparent Pricing',
        'description': 'Honest, competitive pricing with no hidden costs. Consultations are complimentary when proceeding with treatment.'
    },
    'categories': [
        {
            'category': 'Anti-Wrinkle Injections',
            'note': 'Botulinum toxin treatment for fine lines and muscle relaxation.',
            'items': [
                {'name': '1 Area', 'price': '£150', 'duration': '30 mins'},
                {'name': '2 Areas', 'price': '£200', 'duration': '30 mins'},
                {'name': '3 Areas', 'price': '£250', 'duration': '45 mins'},
                {'name': 'Masseter / Jaw Slimming', 'price': '£250', 'duration': '30 mins'},
                {'name': 'Gummy Smile / Bunny Lines', 'price': '£120', 'duration': '20 mins'}
            ]
        },
        {
            'category': 'Dermal Fillers',
            'note': 'Premium Hyaluronic Acid fillers.',
            'items': [
                {'name': 'Lip Filler (0.5ml)', 'price': '£150', 'duration': '45 mins'},
                {'name': 'Lip Filler (1.0ml)', 'price': '£220', 'duration': '45 mins'},
                {'name': 'Cheek Filler (1ml)', 'price': '£240', 'duration': '45 mins'},
                {'name': 'Jawline & Chin Contouring (2ml)', 'price': '£420', 'duration': '60 mins'},
                {'name': 'Nasolabial / Marionette Folds', 'price': '£220', 'duration': '45 mins'}
            ]
        },
        {
            'category': 'Skin Boosters & Polynucleotides',
            'note': 'Regenerative deep hydration and cellular repair.',
            'items': [
                {'name': 'Profhilo (Face - 1 Session)', 'price': '£250', 'duration': '45 mins'},
                {'name': 'Profhilo (Course of 2)', 'price': '£450', 'duration': '2 Sessions'},
                {'name': 'Polynucleotides Eyes (1 Session)', 'price': '£200', 'duration': '45 mins'},
                {'name': 'Polynucleotides Eyes (Course of 3)', 'price': '£520', 'duration': '3 Sessions'},
                {'name': 'Seventy Hyal 2000 (1 Session)', 'price': '£150', 'duration': '45 mins'}
            ]
        },
        {
            'category': 'Skin Rejuvenation & Microneedling',
            'note': 'Collagen induction therapy.',
            'items': [
                {'name': 'Medical Microneedling (Single)', 'price': '£130', 'duration': '45 mins'},
                {'name': 'Medical Microneedling (Course of 3)', 'price': '£330', 'duration': '3 Sessions'},
                {'name': 'Microneedling + Hyaluronic Cocktail', 'price': '£160', 'duration': '60 mins'}
            ]
        }
    ],
    'booking_note': 'A deposit is required to secure your appointment. 48-hour cancellation policy applies.'
}
with open('content/prices.json', 'w', encoding='utf-8') as out:
    json.dump(prices_content, out, indent=2, ensure_ascii=False)
print("Wrote content/prices.json")

# 6. Extract Gallery Content
gallery_images = [
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155047.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155056.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155104.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155123.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155132.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155144.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155153.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155201.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155215.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155227.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155239.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155254.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155310.png',
    'https://diezaesthetics.com/wp-content/uploads/2026/07/Screenshot-2026-07-12-155505.png'
]

gallery_content = {
    'header': {
        'subtitle': 'OUR GALLERY',
        'title': 'Clinical Results & Case Studies',
        'description': 'Real results from real patients treated at Diez Anti-Aging Aesthetics.'
    },
    'categories': ['All', 'Lips', 'Anti-Wrinkle', 'Polynucleotides', 'Skin Boosters'],
    'items': [{'url': img_url, 'treatment': 'Aesthetic Enhancement', 'alt': 'Diez Aesthetics patient result'} for img_url in gallery_images]
}
with open('content/gallery.json', 'w', encoding='utf-8') as out:
    json.dump(gallery_content, out, indent=2, ensure_ascii=False)
print("Wrote content/gallery.json")

# 7. Extract Contact Page Content
contact_content = {
    'header': {
        'subtitle': 'OUR CONTACT',
        'title': 'Get in Touch With Us',
        'description': 'Have a question or want to discuss your treatment goals? Reach out via WhatsApp, phone, or visit our King’s Cross clinic.'
    },
    'contact_methods': [
        {'type': 'Phone / WhatsApp', 'value': '+44 7348 947988', 'link': 'tel:+447348947988'},
        {'type': 'Email', 'value': 'info@diezaesthetics.com', 'link': 'mailto:info@diezaesthetics.com'},
        {'type': 'Location', 'value': '260 Pentonville Road, London, N1 9JY', 'link': 'https://maps.google.com/?q=260+Pentonville+Road+London+N1+9JY'}
    ],
    'opening_hours': [
        {'day': 'Monday – Friday', 'hours': '10:00 AM – 7:00 PM'},
        {'day': 'Saturday', 'hours': '10:00 AM – 6:00 PM'},
        {'day': 'Sunday', 'hours': 'Closed'}
    ],
    'transit_info': 'Conveniently located 4 minutes walk from King’s Cross St. Pancras station.'
}
with open('content/contact.json', 'w', encoding='utf-8') as out:
    json.dump(contact_content, out, indent=2, ensure_ascii=False)
print("Wrote content/contact.json")
