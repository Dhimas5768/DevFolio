/* ============================================
   1. LOADING SCREEN
   — Sembunyikan loader setelah animasi selesai
   ============================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.body.style.overflow = '';
  }, 2200);
});

// Cegah scroll saat loader masih tampil
document.body.style.overflow = 'hidden';


/* ============================================
   2. DARK MODE TOGGLE
   — Simpan preferensi ke localStorage
   — Deteksi preferensi sistem saat pertama kali
   ============================================ */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function getPreferredTheme() {
  const saved = localStorage.getItem('devfolio-theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Terapkan tema sebelum halaman render
html.setAttribute('data-theme', getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('devfolio-theme', next);
});


/* ============================================
   3. MOBILE NAVIGATION
   — Hamburger menu buka/tutup
   ============================================ */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = mobileMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Tutup menu saat link diklik
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});


/* ============================================
   4. NAVBAR SCROLL BEHAVIOR
   — Sembunyikan saat scroll ke bawah
   — Tampilkan saat scroll ke atas
   — Highlight section yang sedang aktif
   ============================================ */
const navbar = document.getElementById('navbar');
const navLinksContainer = document.getElementById('navLinks');
const navLinks = navLinksContainer.querySelectorAll('a');
const sections = document.querySelectorAll('section[id]');

let lastScrollY = 0;
let ticking = false;

function updateNavbar() {
  const currentScrollY = window.scrollY;

  // Hide/show berdasarkan arah scroll
  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }

  // Tambah shadow saat sudah scroll
  navbar.classList.toggle('scrolled', currentScrollY > 10);

  // Cari section yang sedang terlihat
  let currentSection = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    if (currentScrollY >= top && currentScrollY < bottom) {
      currentSection = section.getAttribute('id');
    }
  });

  // Update active state di desktop & mobile nav
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
  });
  mobileLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
  });

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
});


/* ============================================
   5. TYPING ANIMATION
   — Ketik dan hapus kata secara bergantian
   ============================================ */
const typingElement = document.getElementById('typingText');
const typingPhrases = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'React Specialist',
  'Open Source Contributor',
  'Problem Solver'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
  const currentPhrase = typingPhrases[phraseIndex];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;
  }

  // Kata selesai — jeda lalu mulai hapus
  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 2000;
    isDeleting = true;
  }

  // Hapus selesai — pindah ke kata berikutnya
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typingPhrases.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

// Mulai setelah loader hilang
setTimeout(typeEffect, 2500);


/* ============================================
   6. ANIMATED SKILL BARS
   — Gunakan Intersection Observer agar
     bar teranimasi hanya saat terlihat
   ============================================ */
const skillBars = document.querySelectorAll('.skill-bar-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const targetWidth = getComputedStyle(fill).getPropertyValue('--target-width');
      fill.style.width = targetWidth;
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));


/* ============================================
   7. PROJECT FILTER
   — Tampilkan/sembunyikan kartu proyek
     berdasarkan kategori yang dipilih
   ============================================ */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update tombol aktif
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach((card, index) => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        card.style.transitionDelay = `${index * 0.05}s`;
      } else {
        card.classList.add('hidden');
        card.style.transitionDelay = '0s';
      }
    });
  });
});


/* ============================================
   8. TESTIMONIAL SLIDER
   — Navigasi prev/next + dots
   — Autoplay setiap 5 detik
   ============================================ */
const track = document.getElementById('testimonialTrack');
const dots = document.querySelectorAll('.testimonial-dot');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
const totalSlides = 4;
let currentSlide = 0;
let autoplayInterval;

function goToSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  currentSlide = index;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoplay(); });
nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoplay(); });

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.dataset.index));
    resetAutoplay();
  });
});

function startAutoplay() {
  autoplayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

startAutoplay();


/* ============================================
   9. CONTACT FORM
   — Simulasi pengiriman dengan loading state
   — Tampilkan toast saat berhasil
   ============================================ */
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('.form-submit');
  const originalText = submitBtn.innerHTML;

  // Tampilkan loading
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  // Simulasi delay pengiriman
  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    contactForm.reset();
    showToast("Message sent successfully! I'll get back to you soon.");
  }, 1500);
});

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}


/* ============================================
   10. SCROLL REVEAL ANIMATIONS
   — Elemen muncul saat masuk viewport
   — Menggunakan Intersection Observer
   ============================================ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


/* ============================================
   11. COUNTER ANIMATION (Hero Stats)
   — Angka naik dari 0 ke target
   ============================================ */
const counters = document.querySelectorAll('[data-count]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      let count = 0;
      const duration = 2000;
      const step = target / (duration / 16);

      function updateCounter() {
        count += step;
        if (count >= target) {
          el.textContent = target + '+';
          return;
        }
        el.textContent = Math.floor(count) + '+';
        requestAnimationFrame(updateCounter);
      }

      updateCounter();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));


/* ============================================
   12. SMOOTH SCROLL
   — Fallback untuk browser yang
     tidak mendukung scroll-behavior: smooth
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});