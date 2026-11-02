/* ================================================================
   main.js – Portfolio Phạm Quốc Huy
   DOM · Events · Dark Mode · Typing · Skills · Filter · Modal · Form
   ================================================================ */

"use strict";

/* ----------------------------------------------------------------
   1. DARK MODE TOGGLE
   ---------------------------------------------------------------- */
const themeToggle = document.getElementById("theme-toggle");
const themeIcon   = document.getElementById("theme-icon");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  if (theme === "dark") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ----------------------------------------------------------------
   2. NAVBAR – SCROLL EFFECT & ACTIVE LINK
   ---------------------------------------------------------------- */
const navbar  = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  // Sticky shadow
  navbar.classList.toggle("scrolled", window.scrollY > 50);

  // Scroll-to-top button
  const scrollTop = document.getElementById("scroll-top");
  scrollTop.classList.toggle("show", window.scrollY > 400);

  // Active nav link highlight
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

/* ----------------------------------------------------------------
   3. MOBILE HAMBURGER MENU
   ---------------------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const navMenu   = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
});

// Close menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("open");
  });
});

/* ----------------------------------------------------------------
   4. SCROLL TO TOP BUTTON
   ---------------------------------------------------------------- */
document.getElementById("scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ----------------------------------------------------------------
   5. TYPING ANIMATION (Hero section)
   ---------------------------------------------------------------- */
const typedEl = document.getElementById("typed-text");
const phrases = [
  "Frontend Developer",
  "Full Stack Learner",
  "CNTT – UTH Student",
  "Web Enthusiast 🚀",
];
let phraseIdx = 0;
let charIdx   = 0;
let isDeleting = false;

function typeLoop() {
  const phrase    = phrases[phraseIdx];
  const displayed = phrase.substring(0, charIdx);
  typedEl.textContent = displayed;

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIdx === phrase.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx  = (phraseIdx + 1) % phrases.length;
    delay = 400;
  }

  charIdx += isDeleting ? -1 : 1;
  setTimeout(typeLoop, delay);
}
typeLoop();

/* ----------------------------------------------------------------
   6. SKILL PROGRESS BARS (animate on scroll)
   ---------------------------------------------------------------- */
function animateSkillBars() {
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width") + "%";
    bar.style.width = targetWidth;
  });
}

// IntersectionObserver for skill bars
const skillsSection = document.getElementById("skills");
let skillsAnimated  = false;

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !skillsAnimated) {
        skillsAnimated = true;
        animateSkillBars();
      }
    });
  },
  { threshold: 0.3 }
);
if (skillsSection) skillObserver.observe(skillsSection);

/* ----------------------------------------------------------------
   7. SKILL TABS
   ---------------------------------------------------------------- */
const tabBtns     = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");

    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    const target = document.getElementById(`tab-${tabId}`);
    if (target) {
      target.classList.add("active");
      // Re-animate bars if switching to tech tab
      if (tabId === "tech") animateSkillBars();
    }
  });
});

/* ----------------------------------------------------------------
   8. PROJECT FILTER
   ---------------------------------------------------------------- */
const filterBtns   = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      const show     = filter === "all" || category === filter;
      card.style.display    = show ? "" : "none";
      card.style.animation  = show ? "fadeIn 0.4s ease" : "";
    });
  });
});

/* ----------------------------------------------------------------
   9. PROJECT MODALS
   ---------------------------------------------------------------- */
const overlay = document.getElementById("modal-overlay");

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  overlay.classList.add("active");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("active");
  document.querySelectorAll(".modal").forEach((m) =>
    m.classList.remove("active")
  );
  document.body.style.overflow = "";
}

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Expose globally (called from onclick in HTML)
window.openModal  = openModal;
window.closeModal = closeModal;

/* ----------------------------------------------------------------
   10. CONTACT FORM VALIDATION
   ---------------------------------------------------------------- */
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

function validateField(id, errorId, validators) {
  const input = document.getElementById(id);
  const error = document.getElementById(errorId);
  const value = input.value.trim();
  let   msg   = "";

  for (const { test, message } of validators) {
    if (!test(value)) {
      msg = message;
      break;
    }
  }

  input.classList.toggle("error", !!msg);
  error.textContent = msg;
  return !msg;
}

const fields = [
  {
    id: "name",
    errorId: "name-error",
    validators: [
      { test: (v) => v.length > 0,  message: "Vui lòng nhập họ tên." },
      { test: (v) => v.length >= 2, message: "Họ tên phải có ít nhất 2 ký tự." },
    ],
  },
  {
    id: "email",
    errorId: "email-error",
    validators: [
      { test: (v) => v.length > 0,                   message: "Vui lòng nhập email." },
      { test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: "Email không hợp lệ." },
    ],
  },
  {
    id: "subject",
    errorId: "subject-error",
    validators: [
      { test: (v) => v.length > 0,  message: "Vui lòng nhập chủ đề." },
      { test: (v) => v.length >= 4, message: "Chủ đề quá ngắn." },
    ],
  },
  {
    id: "message",
    errorId: "message-error",
    validators: [
      { test: (v) => v.length > 0,   message: "Vui lòng nhập nội dung tin nhắn." },
      { test: (v) => v.length >= 10, message: "Tin nhắn phải có ít nhất 10 ký tự." },
    ],
  },
];

// Live validation on blur
fields.forEach(({ id, errorId, validators }) => {
  const input = document.getElementById(id);
  input.addEventListener("blur",  () => validateField(id, errorId, validators));
  input.addEventListener("input", () => {
    if (input.classList.contains("error")) {
      validateField(id, errorId, validators);
    }
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const allValid = fields.every(({ id, errorId, validators }) =>
    validateField(id, errorId, validators)
  );

  if (!allValid) return;

  // Mở ứng dụng email của người dùng với nội dung đã điền sẵn
  const v = (id) => document.getElementById(id).value.trim();
  const body = `Xin chào Huy,\n\n${v("message")}\n\n— ${v("name")} (${v("email")})`;
  window.location.href =
    `mailto:pquochuy.293@gmail.com?subject=${encodeURIComponent(v("subject"))}&body=${encodeURIComponent(body)}`;

  contactForm.reset();
  formSuccess.innerHTML = '<i class="fas fa-check-circle"></i> Đã mở ứng dụng email của bạn. Hãy bấm Gửi để hoàn tất.';
  formSuccess.classList.add("show");
  setTimeout(() => formSuccess.classList.remove("show"), 6000);
});

/* ----------------------------------------------------------------
   11. SCROLL REVEAL (Intersection Observer)
   ---------------------------------------------------------------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

// Apply reveal class to major content blocks
const revealTargets = [
  ".about-grid",
  ".career-card",
  ".skill-bar-item",
  ".soft-skill-card",
  ".tool-badge",
  ".timeline-item",
  ".project-card",
  ".cert-item",
  ".hobby-card",
  ".contact-grid",
];
document.querySelectorAll(revealTargets.join(",")).forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

/* ----------------------------------------------------------------
   12. HERO PARTICLES (canvas-based floating dots)
   ---------------------------------------------------------------- */
(function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const canvas  = document.createElement("canvas");
  const ctx     = canvas.getContext("2d");
  container.appendChild(canvas);

  function resize() {
    canvas.width  = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const PARTICLE_COUNT = 60;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x:    Math.random() * canvas.width,
    y:    Math.random() * canvas.height,
    r:    Math.random() * 2 + 0.5,
    dx:   (Math.random() - 0.5) * 0.5,
    dy:   (Math.random() - 0.5) * 0.5,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${p.opacity})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
