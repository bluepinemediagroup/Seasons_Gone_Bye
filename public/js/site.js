/* ============================================================
   Seasons Gone Bye — progressive enhancement only.
   The site is fully functional with this file absent:
   nav links render, forms POST natively to Netlify, no motion.
   ============================================================ */
(function () {
  'use strict';

  /* ── Mobile nav toggle ──────────────────────────────────── */
  var nav = document.querySelector('.site-nav');
  var toggle = nav && nav.querySelector('.site-nav__toggle');
  if (nav && toggle) {
    // Enhancing: links were visible for no-JS users; now hand control to JS.
    nav.setAttribute('data-enhanced', 'true');
    nav.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    // Close the menu when a link is chosen.
    nav.querySelectorAll('.site-nav__link').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Newsletter: AJAX submit to Netlify (no page reload) ─── */
  document.querySelectorAll('form[data-netlify]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      // Let the browser fall back to a normal POST if fetch is unavailable.
      if (!window.fetch) return;
      e.preventDefault();
      var data = new URLSearchParams(new FormData(form)).toString();
      if (status) { status.setAttribute('data-state', 'pending'); status.textContent = 'Crossing the threshold…'; }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset();
        if (status) {
          status.setAttribute('data-state', 'success');
          status.textContent = form.getAttribute('data-success') ||
            'You are on the list. Watch for a letter at moonset.';
        }
      }).catch(function () {
        if (status) {
          status.setAttribute('data-state', 'error');
          status.textContent = 'The line went dead. Try again in a moment.';
        }
      });
    });
  });

  /* ── Light flicker: opt-in, reduced-motion aware ────────── */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    document.querySelectorAll('[data-flicker]').forEach(function (el) {
      el.classList.add('flicker');
    });
  }
})();
