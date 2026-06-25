// =========================================
// ANGGUN DWI PERTIWI - PORTFOLIO SCRIPT
// =========================================

const fallbackPortfolioData = {
  personal: {
    nama: 'Anggun Dwi Pertiwi',
    gelar: 'Teknik Elektronika',
    tagline: 'Passionate tentang Elektronika & Sistem Kontrol',
    email: 'anggundwipertiwi18@gmail.com',
    telepon: '087872764581',
    lokasi: 'Kota Semarang, Indonesia',
    linkedin: 'Anggun Dwi Pertiwi',
    tentang: 'Lulusan Politeknik Negeri Semarang jurusan Teknik Elektronika dengan minat kuat di bidang elektronika dan sistem kontrol. Memiliki keahlian dalam pemrograman mikrokontroler dan PLC serta penggunaan perangkat lunak seperti Arduino IDE dan MATLAB. Berpengalaman dalam berbagai proyek elektronika dan terbiasa menganalisis serta memecahkan masalah teknis. Aktif dalam organisasi mahasiswa yang mengembangkan kemampuan komunikasi dan kerja tim. Memiliki kepribadian disiplin, jujur, dan mampu bekerja baik secara individu maupun dalam tim.'
  },
  pendidikan: [
    {
      institusi: 'POLITEKNIK NEGERI SEMARANG',
      tahun: '2023 – 2026',
      jurusan: 'Diploma 3 Teknik Elektronika',
      ikon: 'assets/logo/polines-logo.png'
    },
    {
      institusi: 'SMK NEGERI 3 SEMARANG',
      tahun: '2020 – 2023',
      jurusan: 'Teknik Audio Video',
      ikon: 'assets/logo/smkn3-logo.jpg'
    }
  ],
  project: [
    {
      judul: 'Prototype Smart Vacuum Cleaner Robot Berbasis Arduino Uno',
      deskripsi: 'Robot penyedot debu otomatis yang mampu bergerak secara mandiri dengan memanfaatkan sensor ultrasonik untuk mendeteksi dan menghindari rintangan.',
      gambar: 'assets/projects/vacuum-robot.svg',
      tools: ['Arduino Uno', 'Sensor Ultrasonik', 'Motor DC']
    },
    {
      judul: 'Sistem Kendali Gas Detector Berbasis Arduino Uno dengan GUI MATLAB',
      deskripsi: 'Sistem pendeteksi kebocoran gas menggunakan sensor MQ-2 yang diproses oleh Arduino Uno, dengan antarmuka GUI MATLAB untuk memantau kadar gas secara real-time dan mengaktifkan alarm peringatan saat kadar gas melebihi ambang batas aman.',
      gambar: 'assets/projects/gas-detector.svg',
      tools: ['Arduino Uno', 'Sensor MQ-2', 'MATLAB GUI', 'Buzzer']
    },
    {
      judul: 'Alat Pengukuran Suhu Cairan Menggunakan Sensor DS18B20 dan Sensor LM35 Berbasis LabVIEW',
      deskripsi: 'Pengukuran, monitoring, dan membandingkan suhu cairan menggunakan sensor DS18B20 dan sensor LM35 berbasis Arduino Uno dan LabVIEW.',
      gambar: 'assets/projects/temperature-labview.svg',
      tools: ['LabVIEW', 'DS18B20', 'Sensor LM35', 'Arduino Uno']
    },
    {
      judul: 'Tempat Sampah Otomatis Berbasis Arduino Uno dan Sensor Ultrasonik',
      deskripsi: 'Sistem cerdas yang dirancang untuk membuka dan menutup tutup tempat sampah tanpa perlu disentuh.',
      gambar: 'assets/projects/auto-trash-bin.svg',
      tools: ['Arduino Uno', 'Sensor Ultrasonik', 'Servo Motor']
    }
  ],
  pengalaman: [
    {
      perusahaan: 'PT. Phapros Tbk',
      departemen: 'Departemen Preventive Maintenance',
      posisi: 'Magang',
      tahun: '2025',
      deskripsi: [
        'Melakukan perawatan pencegahan untuk menjaga performa dan keandalan mesin produksi.',
        'Membantu perawatan dan pemecahan masalah mesin yang mengalami gangguan.',
        'Berpartisipasi dalam inspeksi rutin dan pengembangan mesin produksi untuk meningkatkan efisiensi.'
      ]
    },
    {
      perusahaan: 'PT. Istana Argo Kencana (SANKEN)',
      departemen: 'Teknisi Servis',
      posisi: 'Magang',
      tahun: '2022',
      deskripsi: [
        'Menerima, mencatat, dan melakukan inspeksi masuk barang yang diservis.',
        'Mendiagnosis dan memperbaiki berbagai peralatan elektronik rumah tangga.',
        'Memastikan perbaikan memenuhi standar dan melakukan pemeriksaan kualitas sebelum barang dikembalikan.'
      ]
    },
    {
      perusahaan: 'PT. LG Electronics Indonesia',
      departemen: 'Layanan Pelanggan & Admin',
      posisi: 'Magang',
      tahun: '2022',
      deskripsi: [
        'Melayani pelanggan dan menangani penerimaan serta pencatatan barang masuk.',
        'Melakukan pengumpulan data administratif dan pemeriksaan kondisi barang.',
        'Mengelola data suku cadang, termasuk catatan inventaris dan pembaruan data rutin.'
      ]
    }
  ],
  keahlian_teknis: [
    { nama: 'Pemrograman Mikrokontroler & PLC', level: 90 },
    { nama: 'Troubleshooting & Perbaikan Rangkaian Elektronik', level: 88 },
    { nama: 'Pengukuran & Penggunaan Alat Ukur', level: 85 },
    { nama: 'Membaca & Memahami Diagram Skematik', level: 87 },
    { nama: 'Arduino IDE & MATLAB', level: 82 }
  ],
  keahlian_soft: [
    'Kerja Tim',
    'Pemecahan Masalah',
    'Disiplin & Tanggung Jawab',
    'Komunikasi yang Baik'
  ],
  sertifikat: [
    {
      nama: 'Sertifikat Kompetensi BNSP',
      tahun: '2025',
      ikon: '🏆'
    }
  ],
  bahasa: [
    { nama: 'Bahasa Indonesia', level: 'Native' },
    { nama: 'Bahasa Jawa', level: 'Native' },
    { nama: 'Bahasa Inggris', level: 'Basic' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const dataUrl = new URL('data/portfolio.json', window.location.href);

  fetch(dataUrl, { cache: 'no-store' })
    .then(res => {
      if (!res.ok) throw new Error(`Gagal memuat JSON (${res.status})`);
      return res.json();
    })
    .then(data => {
      buildPortfolio(data);
      initAll();
    })
    .catch(err => {
      console.warn('Gagal memuat data portfolio, memakai data cadangan.', err);
      buildPortfolio(fallbackPortfolioData);
      initAll();
    });
});

// =========================================
// BUILD DOM FROM JSON
// =========================================
function buildPortfolio(data) {
  // HERO
  document.getElementById('hero-nama').textContent = data.personal.nama;

  const heroGelar = document.getElementById('hero-gelar') || document.getElementById('typed-text');
  if (heroGelar) heroGelar.textContent = data.personal.gelar;

  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline) heroTagline.textContent = data.personal.tagline;

  document.getElementById('hero-desc').textContent = data.personal.singkat.substring(0, 220) + '...';

  // ABOUT
  document.getElementById('about-text').textContent = data.personal.tentang;

  // PENGALAMAN
  const tlContainer = document.getElementById('timeline-container');
  tlContainer.innerHTML = '';
  data.pengalaman.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="tl-header">
          <div class="tl-company">${item.perusahaan}</div>
          <div class="tl-year">${item.tahun}</div>
        </div>
        <div class="tl-dept">${item.departemen} · ${item.posisi}</div>
        <ul class="tl-list">
          ${item.deskripsi.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>`;
    tlContainer.appendChild(el);
  });

  // PROYEK
  const projectContainer = document.getElementById('project-grid');
  if (projectContainer && Array.isArray(data.project)) {
    projectContainer.innerHTML = '';
    data.project.forEach(proj => {
      const el = document.createElement('div');
      el.className = 'project-card reveal';
      const tools = Array.isArray(proj.tools)
        ? proj.tools.map(t => `<span class="project-tool-tag">${t}</span>`).join('')
        : '';
      el.innerHTML = `
        <div class="project-thumb">
          <img src="${proj.gambar}" alt="${proj.judul}" loading="lazy" />
        </div>
        <div class="project-body">
          <div class="project-title">${proj.judul}</div>
          <p class="project-desc">${proj.deskripsi}</p>
          <div class="project-tools">${tools}</div>
        </div>`;
      projectContainer.appendChild(el);
    });
  }

  // KEAHLIAN TEKNIS
  const techContainer = document.getElementById('tech-skills');
  techContainer.innerHTML = '';
  data.keahlian_teknis.forEach(skill => {
    const el = document.createElement('div');
    el.className = 'skill-item';
    el.innerHTML = `
      <div class="skill-name-row">
        <span class="skill-name">${skill.nama}</span>
        <span class="skill-pct">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-level="${skill.level}"></div>
      </div>`;
    techContainer.appendChild(el);
  });

  // SOFT SKILLS
  const softContainer = document.getElementById('soft-skills');
  softContainer.innerHTML = '';
  data.keahlian_soft.forEach(s => {
    const el = document.createElement('span');
    el.className = 'soft-tag';
    el.textContent = s;
    softContainer.appendChild(el);
  });

  // PENDIDIKAN
  const eduContainer = document.getElementById('edu-grid');
  eduContainer.innerHTML = '';
  data.pendidikan.forEach(edu => {
    const el = document.createElement('div');
    el.className = 'edu-card reveal';
    const isImagePath = /\.(png|jpe?g|svg|webp|gif)$/i.test(edu.ikon || '');
    const ikonHtml = isImagePath
      ? `<img src="${edu.ikon}" alt="Logo ${edu.institusi}" class="edu-logo" />`
      : edu.ikon;
    el.innerHTML = `
      <div class="edu-ikon">${ikonHtml}</div>
      <div class="edu-institusi">${edu.institusi}</div>
      <div class="edu-jurusan">${edu.jurusan}</div>
      <div class="edu-tahun">${edu.tahun}</div>`;
    eduContainer.appendChild(el);
  });

  // SERTIFIKAT
  const certContainer = document.getElementById('cert-container');
  certContainer.innerHTML = '';
  data.sertifikat.forEach(cert => {
    const el = document.createElement('div');
    el.className = 'cert-card reveal';
    el.innerHTML = `
      <div class="cert-icon">${cert.ikon}</div>
      <div>
        <div class="cert-name">${cert.nama}</div>
        <div class="cert-year">${cert.tahun}</div>
      </div>`;
    certContainer.appendChild(el);
  });

  // BAHASA
  const langContainer = document.getElementById('lang-list');
  langContainer.innerHTML = '';
  data.bahasa.forEach(lang => {
    const el = document.createElement('div');
    el.className = 'lang-item';
    el.innerHTML = `
      <span class="lang-name">${lang.nama}</span>
      <span class="lang-badge">${lang.level}</span>`;
    langContainer.appendChild(el);
  });

  // KONTAK
  document.getElementById('contact-email').textContent = data.personal.email;
  document.getElementById('contact-email').href = `mailto:${data.personal.email}`;
  document.getElementById('contact-phone').textContent = data.personal.telepon;
  document.getElementById('contact-lokasi').textContent = data.personal.lokasi;
}

// =========================================
// INIT ALL FEATURES
// =========================================
function initAll() {
  initLoader();
  initCursor();
  initNav();
  initScrollReveal();
  initSkillBars();
  initParticles();
}

// ---- LOADER ----
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 1600);
}

// ---- CUSTOM CURSOR ----
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx - 4 + 'px';
    dot.style.top  = my - 4 + 'px';
  });

  (function moveRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx - 16 + 'px';
    ring.style.top  = ry - 16 + 'px';
    requestAnimationFrame(moveRing);
  })();

  document.querySelectorAll('a, button, .skill-item, .timeline-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width  = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(139,92,246,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width  = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(139,92,246,0.5)';
    });
  });
}

// ---- NAVIGATION ----
function initNav() {
  const nav  = document.querySelector('nav');
  const ham  = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (ham) {
    ham.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ---- SCROLL REVEAL ----
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .timeline-item').forEach(el => io.observe(el));
}

// ---- SKILL BARS ANIMATION ----
function initSkillBars() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  const section = document.getElementById('keahlian');
  if (section) io.observe(section);
}

// ---- FLOATING PARTICLES ----
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.5 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.a  = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(167,139,250,${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });

    // lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - dist/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
}

// ---- TYPED TEXT EFFECT ----
function typedEffect(el, texts, speed = 100) {
  let ti = 0, ci = 0, del = false;

  function tick() {
    const current = texts[ti];
    if (!del) {
      el.textContent = current.substring(0, ci + 1);
      ci++;
      if (ci === current.length) {
        del = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = current.substring(0, ci - 1);
      ci--;
      if (ci === 0) {
        del = false;
        ti = (ti + 1) % texts.length;
      }
    }
    setTimeout(tick, del ? speed / 2 : speed);
  }
  tick();
}

// Init typed effect setelah DOM siap
window.addEventListener('load', () => {
  const typed = document.getElementById('typed-text');
  if (typed) {
    typedEffect(typed, [
      'Teknik Elektronika',
      'Pemrograman Mikrokontroler',
      'Pemrograman PLC',
      'Troubleshooting Elektronik'
    ], 80);
  }
});
