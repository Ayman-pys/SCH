/* ============================================================
   SUDAN CYBER HOUSE — main.js
   Vanilla JavaScript — no dependencies
   ============================================================ */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     0. LANGUAGE ENGINE
     Every translatable element carries data-ar / data-en.
     Placeholder text uses data-ar-placeholder / data-en-placeholder.
     Default language: Arabic (RTL). Persisted via localStorage.
  --------------------------------------------------------- */
  const LANG_KEY = "sch-lang";

  function getLang() {
    return localStorage.getItem(LANG_KEY) || "ar";
  }

  function applyLang(lang) {
    const html = document.documentElement;
    html.setAttribute("lang", lang === "ar" ? "ar" : "en");
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-ar]").forEach((el) => {
      const text = lang === "ar" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
      if (text !== null) el.innerHTML = text;
    });

    document.querySelectorAll("[data-ar-placeholder]").forEach((el) => {
      const text =
        lang === "ar"
          ? el.getAttribute("data-ar-placeholder")
          : el.getAttribute("data-en-placeholder");
      if (text !== null) el.setAttribute("placeholder", text);
    });

    document.querySelectorAll(".lang-toggle .lang-label").forEach((el) => {
      el.textContent = lang === "ar" ? "EN" : "عربي";
    });

    document.title =
      lang === "ar"
        ? document.documentElement.getAttribute("data-title-ar") || document.title
        : document.documentElement.getAttribute("data-title-en") || document.title;

    localStorage.setItem(LANG_KEY, lang);
    window.dispatchEvent(new CustomEvent("sch:langchange", { detail: lang }));
  }

  function initLang() {
    applyLang(getLang());
    document.querySelectorAll(".lang-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = getLang() === "ar" ? "en" : "ar";
        applyLang(next);
      });
    });
  }

  /* ---------------------------------------------------------
     1. LOADING SCREEN
  --------------------------------------------------------- */
  function initLoader() {
    const loader = document.getElementById("loading-screen");
    if (!loader) return;
    window.addEventListener("load", () => {
      setTimeout(() => loader.classList.add("hidden"), 500);
    });
    // Fallback in case 'load' already fired
    if (document.readyState === "complete") {
      setTimeout(() => loader.classList.add("hidden"), 500);
    }
  }

  /* ---------------------------------------------------------
     2. NAVBAR — scroll state + mobile menu
  --------------------------------------------------------- */
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    const burger = document.getElementById("navBurger");
    const links = document.getElementById("navLinks");
    if (!navbar) return;

    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (burger && links) {
      burger.addEventListener("click", () => {
        burger.classList.toggle("open");
        links.classList.toggle("open");
      });
      links.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          burger.classList.remove("open");
          links.classList.remove("open");
        })
      );
    }
  }

  /* ---------------------------------------------------------
     3. SMOOTH SCROLL for in-page anchors
  --------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href");
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ---------------------------------------------------------
     4. SCROLL REVEAL
  --------------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------
     5. ANIMATED COUNTERS
  --------------------------------------------------------- */
  function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    const animate = (el) => {
      const target = parseFloat(el.getAttribute("data-counter"));
      const decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals")) : 0;
      const duration = 1800;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
        const value = target * eased;
        el.textContent = value.toFixed(decimals);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals);
      }
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------
     6. BACK TO TOP
  --------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener(
      "scroll",
      () => btn.classList.toggle("show", window.scrollY > 500),
      { passive: true }
    );
    btn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* ---------------------------------------------------------
     7. FAQ ACCORDION
  --------------------------------------------------------- */
  function initFaq() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const q = item.querySelector(".faq-q");
      if (!q) return;
      q.addEventListener("click", () => {
        const wasOpen = item.classList.contains("open");
        item.closest(".faq-list")
          ?.querySelectorAll(".faq-item")
          .forEach((i) => i.classList.remove("open"));
        if (!wasOpen) item.classList.add("open");
      });
    });
  }

  /* ---------------------------------------------------------
     8. TESTIMONIALS SLIDER
  --------------------------------------------------------- */
  function initTestimonials() {
    const track = document.getElementById("testiTrack");
    const dotsWrap = document.getElementById("testiDots");
    if (!track) return;
    const slides = track.children;
    let index = 0;
    let timer = null;

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      const dir = document.documentElement.getAttribute("dir");
      const offset = index * 100 * (dir === "rtl" ? 1 : -1);
      track.style.transform = `translateX(${offset}%)`;
      if (dotsWrap) {
        [...dotsWrap.children].forEach((d, di) =>
          d.classList.toggle("active", di === index)
        );
      }
    }

    if (dotsWrap) {
      [...slides].forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "testi-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Testimonial " + (i + 1));
        dot.addEventListener("click", () => {
          goTo(i);
          resetTimer();
        });
        dotsWrap.appendChild(dot);
      });
    }

    function resetTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(() => goTo(index + 1), 6000);
    }

    goTo(0);
    resetTimer();

    // re-align on language direction change
    window.addEventListener("sch:langchange", () => goTo(index));
  }

  /* ---------------------------------------------------------
     9. CONTACT FORM (front-end validation, no backend)
  --------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const status = document.getElementById("formStatus");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#cf-name");
      const email = form.querySelector("#cf-email");
      const subject = form.querySelector("#cf-subject");
      const message = form.querySelector("#cf-message");

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid =
        name.value.trim().length > 1 &&
        emailPattern.test(email.value.trim()) &&
        subject.value.trim().length > 1 &&
        message.value.trim().length > 5;

      if (!status) return;
      status.classList.remove("ok", "err", "show");

      if (!isValid) {
        const lang = getLang();
        status.textContent =
          lang === "ar"
            ? "يرجى تعبئة جميع الحقول بشكل صحيح."
            : "Please fill in all fields correctly.";
        status.classList.add("err", "show");
        return;
      }

      const lang = getLang();
      status.textContent =
        lang === "ar"
          ? "تم استلام رسالتك بنجاح. سنقوم بالرد عليك قريبًا عبر البريد الإلكتروني."
          : "Your message has been received. We'll get back to you via email shortly.";
      status.classList.add("ok", "show");
      form.reset();
    });
  }

  /* ---------------------------------------------------------
     10. BINARY BACKGROUND GENERATOR (subtle ambient texture)
  --------------------------------------------------------- */
  function initBinaryBg() {
    const el = document.querySelector(".bg-binary");
    if (!el) return;
    let str = "";
    for (let i = 0; i < 900; i++) {
      str += Math.round(Math.random()) + (i % 60 === 0 ? "\n" : " ");
    }
    el.textContent = str;
  }

  /* ---------------------------------------------------------
     11. ACTIVE NAV LINK based on current page
  --------------------------------------------------------- */
  function initActiveLink() {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a, .tabbar a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === current || (current === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  }

  /* ---------------------------------------------------------
     12. SERVICE FILTER (services.html)
  --------------------------------------------------------- */
  function initServiceFilter() {
    const chips = document.querySelectorAll(".filter-chip");
    const cards = document.querySelectorAll("[data-category]");
    if (!chips.length || !cards.length) return;

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const cat = chip.getAttribute("data-filter");
        cards.forEach((card) => {
          const show = cat === "all" || card.getAttribute("data-category") === cat;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---------------------------------------------------------
     INIT
  --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initLang();
    initNavbar();
    initSmoothScroll();
    initReveal();
    initCounters();
    initBackToTop();
    initFaq();
    initTestimonials();
    initContactForm();
    initBinaryBg();
    initActiveLink();
    initServiceFilter();
  });
})();
