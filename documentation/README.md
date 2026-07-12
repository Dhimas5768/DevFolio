DevFolio
Premium One-Page Developer Portfolio
Modern, responsive, dan inspired oleh desain Framer & Webflow.

Features • Preview • Quick Start • Customization • Structure • License

✨ Features
Feature	Description
🌗 Dark Mode	Toggle tema gelap/terang, tersimpan di localStorage, otomatis deteksi preferensi sistem
⏳ Loading Screen	Animated progress bar dengan logo branding
⌨️ Typing Animation	Multi-phrase loop dengan efek ketik dan hapus yang realistis
📊 Animated Skill Bars	Bar teranimasi saat masuk viewport menggunakan Intersection Observer
🔍 Project Filter	Filter proyek berdasarkan kategori dengan transisi smooth
🪟 Glassmorphism Cards	Efek kaca buram di services, education, testimonials, dan contact
🎨 Gradient Backgrounds	Hero section dengan gradient bertema dan animated floating orbs
✨ Hover Effects	Card lift, image zoom, icon transform, link color shift
📜 Scroll Reveal	Setiap elemen muncul dengan animasi fade-up saat di-scroll
🎯 Active Nav Tracking	Navbar otomatis highlight section yang sedang terlihat
📱 Fully Responsive	3 breakpoint (desktop, tablet, mobile) dengan hamburger menu
🎠 Testimonial Slider	Carousel dengan prev/next, dot indicators, dan autoplay
📬 Contact Form	Form dengan validasi, loading state, dan toast notification
🔢 Counter Animation	Angka statistik hero naik dari 0 saat terlihat
🍞 Toast Notification	Notifikasi slide-up yang auto-dismiss
🧭 Smart Navbar	Auto-hide saat scroll ke bawah, muncul saat scroll ke atas
⚡ Zero Dependencies	Murni HTML, CSS, JS — tanpa framework apapun
🖼️ Preview
Note: Ganti gambar placeholder picsum.photos dengan screenshot kamu sendiri.

Light ModeLight Mode

Dark ModeDark Mode

🚀 Quick Start
Prerequisites
Tidak ada prerequisites — cukup browser modern.

Installation
# 1. Clone repositorygit clone https://github.com/username/devfolio.git# 2. Masuk ke folder projectcd devfolio# 3. Buka di browser#    — Klik 2x index.html, atau#    — Gunakan Live Server (VS Code), atauopen index.html        # macOSxdg-open index.html    # Linuxstart index.html       # Windows
Development (Optional — dengan Live Server)
bash

# Menggunakan Python
python3 -m http.server 8000

# Menggunakan Node.js (npx)
npx serve .

# Menggunakan PHP
php -S localhost:8000
Lalu buka http://localhost:8000 di browser.

🎨 Customization
Mengubah Warna Tema
Edit CSS variables di assets/css/style.css:

css

:root {
  /* Light Theme */
  --accent: #6C5CE7;          /* Warna utama — ubah ini */
  --accent-hover: #5A4BD1;    /* Warna utama saat hover */
  --accent-light: rgba(108, 92, 231, 0.1);  /* Warna transparan */
  --accent-glow: rgba(108, 92, 231, 0.3);   /* Efek glow */
  /* ... variabel lainnya */
}

[data-theme="dark"] {
  --accent: #A78BFA;          /* Warna utama mode gelap */
  /* ... */
}
💡 Tip: Gunakan coolors.co untuk generate palette, lalu konversi ke CSS variables.

Mengubah Font
Kunjungi Google Fonts
Pilih font, copy <link> tag
Replace di <head> pada index.html
Update font-family di CSS:
css

h1, h2, h3, h4, h5, h6 {
  font-family: 'FontBaru', sans-serif;
}

body {
  font-family: 'FontBaruBody', sans-serif;
}
Mengubah Konten
Yang Ingin Diubah
File
Cara
Nama, judul, deskripsi	index.html	Cari dan replace teks langsung di HTML
Foto profil	index.html	Ganti URL picsum.photos dengan assets/images/nama-file.jpg
Skill & persentase	index.html + style.css	Ubah teks dan nilai --target-width
Proyek	index.html	Duplikat blok .project-card, sesuaikan data-category
Testimoni	index.html + script.js	Tambah .testimonial-slide, update totalSlides
Link sosial media	index.html	Ganti href="#" dengan URL akun kamu
Info kontak	index.html	Ubah email, telepon, lokasi

Menambah Kategori Filter Proyek
Tambah tombol di .projects-filter:
Tambah kartu proyek dengan kategori baru:
Filter otomatis bekerja tanpa perlu ubah JavaScript.

Menambah/Mengurangi Section
Setiap section bersifat independen. Untuk menghapus section, cukup hapus blok <section>...</section> yang bersangkutan dari HTML dan hapus link navigasinya.

🌐 Browser Support
Browser
Versi
Chrome	88+
Firefox	78+
Safari	14+
Edge	88+
Opera	74+

backdrop-filter (glassmorphism) tidak didukung di beberapa browser lama. Fallback otomatis ke background semi-transparan.

⚡ Performance
Zero external JS frameworks — hanya vanilla JS (~8KB minified)
CSS variables untuk theming tanpa JS overhead
Intersection Observer menggantikan scroll event listeners yang berat
requestAnimationFrame untuk animasi yang smooth dan battery-friendly
No layout thrashing — semua pembacaan DOM di-batch sebelum penulisan
Font display=swap mencegah FOIT (Flash of Invisible Text)
🤝 Contributing
Kontribusi sangat diterima! Ikuti langkah berikut:

Fork repository ini
Buat branch fitur baru: git checkout -b fitur/nama-fitur
Commit perubahan: git commit -m 'Tambah fitur baru'
Push ke branch: git push origin fitur/nama-fitur
Buat Pull Request
Guidelines
Tulis kode yang bersih dan well-commented
Ikuti konvensi penamaan yang sudah ada
Test di minimal 2 browser sebelum submit PR
Jangan commit file yang tidak perlu (node_modules, .DS_Store, dll)