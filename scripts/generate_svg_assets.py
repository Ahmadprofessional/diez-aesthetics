import os

def create_treatment_svg(filename, title, subtitle, icon_symbol):
    os.makedirs('public/assets/images', exist_ok=True)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="800" height="533" viewBox="0 0 800 533" fill="none">
  <defs>
    <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c5a059" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cardGrad" x1="0" y1="0" x2="800" y2="533" gradientUnits="userSpaceOnUse">
      <stop stop-color="#181818"/>
      <stop offset="1" stop-color="#0d0d0d"/>
    </linearGradient>
    <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dfbe7a"/>
      <stop offset="50%" stop-color="#c5a059"/>
      <stop offset="100%" stop-color="#9d7c38"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="800" height="533" fill="url(#cardGrad)"/>
  <circle cx="400" cy="266" r="300" fill="url(#goldGlow)"/>

  <!-- Subtle aesthetic geometric ring -->
  <circle cx="400" cy="220" r="90" stroke="#c5a059" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="6 4"/>
  <circle cx="400" cy="220" r="70" stroke="#c5a059" stroke-width="1" stroke-opacity="0.5"/>

  <!-- Inner Icon Symbol -->
  <path d="{icon_symbol}" fill="#c5a059" transform="translate(376, 196) scale(2)"/>

  <!-- Typography -->
  <text x="400" y="360" font-family="'Cormorant Garamond', Georgia, serif" font-size="32" font-weight="400" fill="url(#goldText)" text-anchor="middle" letter-spacing="3">
    {title.upper()}
  </text>
  <text x="400" y="395" font-family="'Inter', -apple-system, sans-serif" font-size="13" font-weight="300" fill="#a3a3a3" text-anchor="middle" letter-spacing="4">
    {subtitle.upper()}
  </text>
  <text x="400" y="440" font-family="'Inter', -apple-system, sans-serif" font-size="10" font-weight="500" fill="#c5a059" text-anchor="middle" letter-spacing="5">
    DIEZ ANTI-AGING AESTHETICS • KING'S CROSS
  </text>
</svg>'''
    with open(f'public/assets/images/{filename}', 'w', encoding='utf-8') as f:
        f.write(svg)

# SVG Icons
sparkle_icon = "M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
heart_icon = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
shield_icon = "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"

create_treatment_svg('anti_wrinkle.svg', 'Anti-Wrinkle Treatments', 'Dynamic Lines & Rejuvenation', sparkle_icon)
create_treatment_svg('dermal_fillers.svg', 'Dermal & Lip Fillers', 'Volume, Contour & Definition', heart_icon)
create_treatment_svg('skin_boosters.svg', 'Skin Boosters & Polynucleotides', 'Cellular Repair & Deep Hydration', sparkle_icon)
create_treatment_svg('microneedling.svg', 'Medical Microneedling', 'Collagen Remodeling & Texture', shield_icon)
create_treatment_svg('hero_clinic.svg', 'Natural Beauty That\'s Uniquely You', 'Doctor-Led Aesthetics Clinic', sparkle_icon)
create_treatment_svg('before_lip.svg', 'Lip Enhancement (Before)', 'Baseline Anatomical Structure', heart_icon)
create_treatment_svg('after_lip.svg', 'Lip Enhancement (After)', 'Balanced Natural Volume & Hydration', heart_icon)
create_treatment_svg('before_eye.svg', 'Tear Trough Polynucleotides (Before)', 'Dark Circles & Volume Depletion', sparkle_icon)
create_treatment_svg('after_eye.svg', 'Tear Trough Polynucleotides (After)', 'Cellular Repair & Microcirculation', sparkle_icon)
create_treatment_svg('before_face.svg', 'Facial Harmonisation (Before)', 'Baseline Facial Balance', shield_icon)
create_treatment_svg('after_face.svg', 'Facial Harmonisation (After)', 'Subtle Proportional Enhancement', shield_icon)

print("Created 11 branded SVG fallback visuals successfully in public/assets/images/")
