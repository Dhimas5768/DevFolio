Semua perubahan penting pada project DevFolio akan didokumentasikan di file ini.

Format ini mengikuti Keep a Changelog,dan versi project mengikuti Semantic Versioning.

[1.0.0] — 2024-12-20
🎉 Ditambahkan (Added)
Umum

Struktur project terorganisir: index.html, assets/css/style.css, assets/js/script.js, assets/images/
Komentar kode lengkap di setiap bagian CSS dan JavaScript
README.md dengan panduan instalasi, kustomisasi, dan kontribusi
LICENSE (MIT) dengan third-party notices
CHANGELOG.md (file ini)
HTML — Sections

Hero — Headline, typing animation, CTA buttons, floating cards, statistik counter
About — Foto, bio, detail personal (lokasi, pengalaman, pendidikan, bahasa)
Skills — 8 skill bars (4 frontend, 4 backend) + tech chip strip
Services — 6 service cards dengan ikon dan deskripsi
Projects — 6 project cards dengan filter (All, Web App, Mobile, Design, API)
Experience — 4 timeline items dengan posisi, perusahaan, dan deskripsi
Education — 4 education cards (gelar, sertifikasi, ongoing learning)
Testimonials — 4 slide carousel dengan dots, prev/next, dan autoplay
Contact — 3 info cards + form (nama, email, subject, budget, message)
Footer — Brand, navigasi, services links, contact info, social icons
CSS — Styling

CSS Custom Properties untuk theming (light + dark)
Dark mode otomatis mengikuti preferensi sistem (prefers-color-scheme)
Glassmorphism effect (backdrop-filter: blur) pada cards
Gradient background dengan animated floating orbs di hero
Responsive design dengan 3 breakpoint:
Desktop: > 1024px
Tablet: ≤ 1024px
Mobile: ≤ 768px
Scroll reveal animations (fade-up dengan stagger delays)
Hover effects: card lift, image zoom, icon scale, color transitions
Loading screen dengan animated progress bar
Toast notification styling
Typing cursor blink animation
Navbar glassmorphism dengan auto-hide
Service card top-border reveal on hover
Timeline design dengan dot dan vertical line
Project overlay dengan icon links on hover
Form focus states dengan accent glow ring
JavaScript — Fungsionalitas

Loading screen — auto-hide setelah 2.2 detik
Dark mode toggle — simpan ke localStorage, deteksi sistem
Mobile hamburger menu — buka/tutup dengan animasi
Navbar scroll behavior — hide on scroll down, show on scroll up
Active section tracking — highlight nav link sesuai viewport
Typing animation — 5 phrase loop dengan type/delete effect
Animated skill bars — Intersection Observer trigger
Project filter — kategori-based dengan smooth transitions
Testimonial slider — prev/next, dots, 5s autoplay
Contact form — validasi, loading spinner, toast on success
Scroll reveal — semua .reveal elemen muncul saat terlihat
Counter animation — hero stats count up dari 0
Smooth scroll — fallback untuk semua anchor links
requestAnimationFrame — performa optimal untuk scroll handlers
[Unreleased]
🔄 Direncanakan (Planned)
 Blog Section — halaman terpisah untuk artikel teknis
 404 Page — halaman error kustom
 Scroll Progress Bar — indikator progress di top of page
 Back to Top Button — muncul setelah scroll 500px
 Cursor Follower — custom cursor effect (opsional, bisa di-toggle)
 Particle Background — canvas-based particle system di hero
 Scroll Snap — full-section snap scrolling (opsional)
 i18n Support — multi-bahasa (EN, ID, dll)
 SEO Meta Tags — Open Graph, Twitter Cards, structured data
 Sitemap.xml — untuk search engine crawling
 Favicon Pack — favicon, apple-touch-icon, manifest.json
 PWA Support — service worker, offline capability
 Lighthouse 100 — optimasi untuk semua kategori
 Reduced Motion — prefers-reduced-motion support penuh
 Keyboard Navigation — focus visible states, skip links
 ARIA Labels — aksesibilitas yang lebih baik
 Contact Form Backend — integrasi Formspree, EmailJS, atau custom API
 Google Analytics — tracking opsional
 Dark Mode Transition — circle-expand transition saat toggle (ala macOS)
