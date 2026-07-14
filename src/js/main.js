// MedXpertsHub — UI interactions
(function () {
  'use strict';

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }

  // ---- Scroll reveal ----
  // The <head> adds `reveal-ready` to <html>, which hides the targets via CSS.
  // Here we reveal them as they enter the viewport. If anything is unsupported
  // or errors, we remove `reveal-ready` so everything is simply shown.
  try {
    var SEL = '.catcard, .card, .fcard, .dcard, .hcard, .erow, .lrow, .srow,' +
              '.ocard, .promo-card, .promo-banner, .newsletter, .cta, .sec-head';
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || reduce) {
      document.documentElement.classList.remove('reveal-ready');
      return;
    }

    var items = document.querySelectorAll(SEL);

    // Small stagger within each parent group
    items.forEach(function (el) {
      var kids = el.parentElement ? el.parentElement.children : [el];
      var i = Array.prototype.indexOf.call(kids, el);
      el.style.transitionDelay = Math.min(i, 6) * 55 + 'ms';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(function (el) { io.observe(el); });

    // Safety net: reveal everything after load in case anything is missed
    window.addEventListener('load', function () {
      setTimeout(function () {
        document.querySelectorAll(SEL).forEach(function (el) { el.classList.add('in'); });
      }, 1500);
    });
  } catch (err) {
    document.documentElement.classList.remove('reveal-ready');
  }
})();
