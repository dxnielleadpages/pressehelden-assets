/* =========================================================================
   PresseHelden · ph-motion.js · v0.1 (draft, 09.11.2026)
   Behaviour for ph.css. No dependencies; lottie-web is loaded lazily.
   Every timing is a multiple of 40 ms (25 fps grid of the original Lotties).
   ========================================================================= */
(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;
  root.classList.add("js");

  var mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var RM = mqReduce.matches;
  var mqDesktop = window.matchMedia("(min-width: 1025px)");

  var $ = function (sel, ctx) { return (ctx || doc).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var num = function (v, d) { var n = parseFloat(v); return isNaN(n) ? d : n; };

  /* ---------- easing (cubic-bezier, solved by bisection) ---------- */
  function bezier(x1, y1, x2, y2) {
    function at(a1, a2, s) { return ((1 - 3 * a2 + 3 * a1) * s + (3 * a2 - 6 * a1)) * s * s + 3 * a1 * s; }
    return function (t) {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      var lo = 0, hi = 1, s = t;
      for (var i = 0; i < 24; i++) {
        s = (lo + hi) / 2;
        if (at(x1, x2, s) < t) lo = s; else hi = s;
      }
      return at(y1, y2, s);
    };
  }
  var EASE = {
    enter: bezier(.17, 0, 0, 1),
    draw: bezier(.17, .17, .67, 1)
  };

  /* ---------- in-view helper ---------- */
  function onView(el, cb, threshold, once) {
    if (!("IntersectionObserver" in window)) { cb(true); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        cb(e.isIntersecting, e);
        if (e.isIntersecting && once !== false) io.unobserve(el);
      });
    }, { threshold: threshold == null ? .2 : threshold });
    io.observe(el);
    return io;
  }

  /* ---------- autoplay controller ----------
     Pauses out of view, in hidden tabs and while the mouse really moves over
     the component (movementX/Y ≠ 0, so a resting cursor does not block it). */
  function Autoplay(el, tick, firstDelay) {
    var self = this, timer = null, visible = false, hover = false, next = firstDelay;
    this.stopped = false;
    function sync() {
      var go = visible && !hover && !doc.hidden && !self.stopped;
      if (go && !timer && next != null) timer = setTimeout(run, next);
      if (!go && timer) { clearTimeout(timer); timer = null; }
    }
    function run() { timer = null; next = tick(); if (next == null) return; sync(); }
    this.restart = function (ms) { if (timer) clearTimeout(timer); timer = null; next = ms; sync(); };
    this.pause = function (on) { hover = on; sync(); };
    onView(el, function (v) { visible = v; sync(); }, .3, false);
    el.addEventListener("mousemove", function (e) { if ((e.movementX || e.movementY) && !hover) { hover = true; sync(); } });
    el.addEventListener("mouseleave", function () { hover = false; sync(); });
    el.addEventListener("focusin", function () { hover = true; sync(); });
    el.addEventListener("focusout", function () { hover = false; sync(); });
    doc.addEventListener("visibilitychange", sync);
  }

  /* =======================================================================
     1 · Reveal on scroll
     ======================================================================= */
  function initReveal() {
    $$("[data-reveal-stagger]").forEach(function (group) {
      $$(":scope > [data-reveal]", group).forEach(function (el, i) { el.style.setProperty("--i", i); });
    });
    $$("[data-reveal]").forEach(function (el) {
      if (RM) { el.classList.add("is-in"); return; }
      onView(el, function (v) { if (v) el.classList.add("is-in"); }, .2);
    });
  }

  /* =======================================================================
     2 · Count-up
     ======================================================================= */
  var fmtCache = {};
  function fmt(v, dec) {
    var key = dec || 0;
    if (!fmtCache[key]) fmtCache[key] = new Intl.NumberFormat("de-DE", { minimumFractionDigits: key, maximumFractionDigits: key });
    return fmtCache[key].format(v);
  }
  function countTo(el) {
    var target = num(el.getAttribute("data-count"), 0);
    var dec = num(el.getAttribute("data-decimals"), 0);
    var pre = el.getAttribute("data-prefix") || "";
    var suf = el.getAttribute("data-suffix") || "";
    var dur = num(el.getAttribute("data-duration"), 1600);
    var paint = function (v) { el.textContent = pre + fmt(v, dec) + suf; };
    if (el._countRaf) cancelAnimationFrame(el._countRaf);
    if (RM) { paint(target); return; }
    var t0 = performance.now();
    (function frame(now) {
      var p = Math.min(1, (now - t0) / dur);
      paint(target * EASE.enter(p));
      if (p < 1) el._countRaf = requestAnimationFrame(frame);
    })(t0);
  }
  function resetCount(el) {
    var dec = num(el.getAttribute("data-decimals"), 0);
    el.textContent = (el.getAttribute("data-prefix") || "") + fmt(0, dec) + (el.getAttribute("data-suffix") || "");
  }
  function initCounts() {
    $$("[data-count]").forEach(function (el) {
      if (el.closest(".v-shelf, [data-steps], [data-play-manual]")) return;
      if (!RM) resetCount(el);
      onView(el, function (v) { if (v) countTo(el); }, .4);
    });
  }

  /* =======================================================================
     3 · Play state for visuals (.v-rank, .v-clicks, .v-gap, [data-play])
     ======================================================================= */
  function play(el, on) {
    el.classList.toggle("is-play", on);
    $$("[data-count]", el).forEach(function (c) { if (on) countTo(c); else if (!RM) resetCount(c); });
  }
  function initPlay() {
    $$(".v-rank, .v-clicks, .v-gap, [data-play]").forEach(function (el) {
      if (el.closest(".v-shelf, [data-steps], [data-play-manual]")) return;
      if (RM) { play(el, true); return; }
      onView(el, function (v) { if (v) play(el, true); }, .4);
    });
  }

  /* =======================================================================
     4 · Marquee (JS-driven, draggable)
     ======================================================================= */
  function initMarquee() {
    $$("[data-marquee]").forEach(function (box) {
      var track = $(".ph-marquee__track", box);
      if (!track) return;
      var items = Array.prototype.slice.call(track.children);
      var copy = function () {
        items.forEach(function (n) {
          var c = n.cloneNode(true);
          c.setAttribute("aria-hidden", "true");
          if (c.tagName === "IMG") c.alt = "";
          track.appendChild(c);
        });
      };
      copy();
      if (RM) return;
      box.classList.add("is-js");
      var speed = num(box.getAttribute("data-speed"), 30);
      var dir = box.getAttribute("data-direction") === "right" ? 1 : -1;
      var x = 0, half = 0, last = 0, visible = false, drag = null;
      var measure = function () {
        half = track.scrollWidth / 2;
        while (half < box.clientWidth + 10 && track.children.length < 200) { copy(); copy(); half = track.scrollWidth / 2; }
      };
      measure();
      window.addEventListener("resize", measure);
      if (dir === 1) x = -half;
      onView(box, function (v) { visible = v; if (v) { last = performance.now(); requestAnimationFrame(step); } }, 0, false);
      function step(now) {
        if (!visible) return;
        var dt = Math.min(64, now - last); last = now;
        if (!drag && !doc.hidden) x += dir * speed * dt / 1000;
        if (x <= -half) x += half;
        if (x > 0) x -= half;
        track.style.transform = "translate3d(" + x.toFixed(2) + "px,0,0)";
        requestAnimationFrame(step);
      }
      box.addEventListener("pointerdown", function (e) {
        drag = { x0: e.clientX, start: x };
        box.classList.add("is-dragging");
        box.setPointerCapture(e.pointerId);
      });
      box.addEventListener("pointermove", function (e) { if (drag) x = drag.start + (e.clientX - drag.x0); });
      var end = function () { drag = null; box.classList.remove("is-dragging"); };
      box.addEventListener("pointerup", end);
      box.addEventListener("pointercancel", end);
    });
  }

  /* =======================================================================
     5 · Article columns (duplicate content for a seamless -50% loop)
     ======================================================================= */
  function initColumns() {
    $$(".ph-columns__track").forEach(function (track) {
      Array.prototype.slice.call(track.children).forEach(function (n) {
        var c = n.cloneNode(true);
        c.setAttribute("aria-hidden", "true");
        if (c.tagName === "IMG") c.alt = "";
        track.appendChild(c);
      });
    });
  }

  /* =======================================================================
     6 · Rotator (statements + images)
     ======================================================================= */
  function initRotator() {
    $$("[data-rotator]").forEach(function (box) {
      var lines = $$(".ph-rotator__lines li", box);
      var imgs = $$(".ph-rotator__media img", box);
      if (!lines.length) return;
      var step = num(box.getAttribute("data-step"), 2500);
      var first = num(box.getAttribute("data-first"), 1500);
      var i = 0;
      var set = function (n) {
        i = (n + lines.length) % lines.length;
        lines.forEach(function (l, k) { l.classList.toggle("is-active", k === i); });
        imgs.forEach(function (m, k) { m.classList.toggle("is-active", k === i); });
      };
      set(0);
      if (RM) return;
      var auto = new Autoplay(box, function () { set(i + 1); return step; }, first);
      lines.forEach(function (l, k) {
        l.addEventListener("mouseenter", function () { set(k); auto.restart(step); });
      });
    });
  }

  /* =======================================================================
     7 · Glass sequence (once)
     ======================================================================= */
  function initSequence() {
    $$("[data-sequence]").forEach(function (box) {
      var cards = Array.prototype.slice.call(box.children);
      var step = num(box.getAttribute("data-step"), 2000);
      var all = function (on) { cards.forEach(function (c) { c.classList.toggle("is-active", on); }); };
      if (RM) { all(true); return; }
      onView(box, function (v) {
        if (!v) return;
        cards.forEach(function (c, i) {
          setTimeout(function () { cards.forEach(function (o, k) { o.classList.toggle("is-active", k === i); }); }, i * step);
        });
        setTimeout(function () { all(false); }, cards.length * step);
        setTimeout(function () { all(true); }, cards.length * step + 1000);
      }, .3);
    });
  }

  /* =======================================================================
     8 · Lottie (lazy, works on http(s) and file://)
     ======================================================================= */
  var lottieLib = null;
  function libPath() {
    var s = $('script[src*="ph-motion"]');
    var base = s ? s.getAttribute("src").replace(/ph-motion\.js.*$/, "") : "";
    return root.getAttribute("data-ph-lottie-lib") || base + "assets/lib/lottie_svg.min.js";
  }
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = doc.createElement("script");
      s.src = src; s.async = true;
      s.onload = res; s.onerror = function () { rej(new Error("load " + src)); };
      doc.head.appendChild(s);
    });
  }
  function hasLottie() { return window.lottie && typeof window.lottie.loadAnimation === "function"; }
  function getLottie() {
    if (hasLottie()) return Promise.resolve(window.lottie);
    if (!lottieLib) lottieLib = loadScript(libPath()).then(function () {
      if (!hasLottie()) throw new Error("lottie-web not available (element with id=\"lottie\" on the page?)");
      return window.lottie;
    });
    return lottieLib;
  }
  function lottieData(path) {
    var name = path.split("/").pop().replace(/\.json$/, "");
    if (location.protocol !== "file:") return Promise.resolve({ path: path });
    window.PH_LOTTIE = window.PH_LOTTIE || {};
    if (window.PH_LOTTIE[name]) return Promise.resolve({ animationData: window.PH_LOTTIE[name] });
    var js = path.replace(/[^/]+\.json$/, "js/" + name + ".js");
    return loadScript(js).then(function () { return { animationData: window.PH_LOTTIE[name] }; });
  }
  function mountLottie(el) {
    if (el._anim) return el._anim;
    var path = el.getAttribute("data-lottie");
    var loop = el.getAttribute("data-loop") === "true";
    var label = el.getAttribute("data-label");
    if (label) { el.setAttribute("role", "img"); el.setAttribute("aria-label", label); }
    el._anim = Promise.all([getLottie(), lottieData(path)]).then(function (r) {
      var cfg = { container: el, renderer: "svg", loop: loop, autoplay: false, rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true } };
      if (r[1].path) cfg.path = r[1].path; else cfg.animationData = JSON.parse(JSON.stringify(r[1].animationData));
      var anim = r[0].loadAnimation(cfg);
      return new Promise(function (res) {
        anim.addEventListener("DOMLoaded", function () {
          el.classList.add("is-ready");
          var poster = $(".ph-lottie__poster", el);
          if (poster) poster.remove();
          res(anim);
        });
      });
    }).catch(function (err) {
      el.classList.add("is-failed");
      if (window.console) console.warn("[ph-motion] Lottie", path, err);
      return null;
    });
    return el._anim;
  }
  function endFrame(el, anim) {
    var f = el.getAttribute("data-end-frame");
    return f != null ? num(f, anim.totalFrames - 1) : anim.totalFrames - 1;
  }
  function playLottie(el) {
    return mountLottie(el).then(function (anim) {
      if (!anim) return wait(0);
      var end = endFrame(el, anim);
      if (RM) { anim.goToAndStop(end, true); return; }
      return new Promise(function (res) {
        var done = function () { anim.removeEventListener("complete", done); res(); };
        if (anim.loop) { anim.goToAndPlay(0, true); res(); return; }
        anim.addEventListener("complete", done);
        anim.playSegments([0, end], true);
      });
    });
  }
  function initLottie() {
    $$("[data-lottie]").forEach(function (el) {
      var trigger = el.getAttribute("data-trigger") || "view";
      if (el.closest("[data-steps]")) {
        onView(el, function (v) { if (v) mountLottie(el); }, 0);
        return;
      }
      if (trigger === "manual") return;
      if (trigger === "scroll") {
        mountLottie(el).then(function (anim) {
          if (!anim) return;
          var update = function () {
            var r = el.getBoundingClientRect(), vh = window.innerHeight;
            var p = Math.min(1, Math.max(0, (vh - r.top) / (vh * .6)));
            anim.goToAndStop(RM ? anim.totalFrames - 1 : p * (anim.totalFrames - 1), true);
          };
          update();
          window.addEventListener("scroll", update, { passive: true });
        });
        return;
      }
      onView(el, function (v) {
        if (!v) { if (el._anim) el._anim.then(function (a) { if (a && a.loop) a.pause(); }); return; }
        if (el._played && el._anim) { el._anim.then(function (a) { if (a && a.loop && !RM) a.play(); }); return; }
        el._played = true;
        playLottie(el);
      }, .3, false);
    });
  }

  /* =======================================================================
     9 · Steps
     ======================================================================= */
  function initSteps() {
    $$("[data-steps]").forEach(function (box) {
      var steps = $$(".ph-step", box);
      if (!steps.length) return;
      var hold = num(box.getAttribute("data-hold"), 1500);
      var idle = num(box.getAttribute("data-idle"), 4000);
      var i = 0, token = 0, auto = null;

      var visualsOf = function (s) { return $$(".v-rank, .v-clicks, .v-gap, [data-play]", s); };

      if (!mqDesktop.matches || RM) {
        steps.forEach(function (s) {
          s.classList.add("is-active");
          visualsOf(s).forEach(function (v) { onView(v, function (on) { if (on) play(v, true); }, .3); });
          var l = $("[data-lottie]", s);
          if (l) onView(l, function (on) { if (on) playLottie(l); }, .3);
        });
        return;
      }

      var activate = function (n) {
        i = (n + steps.length) % steps.length;
        var my = ++token;
        steps.forEach(function (s, k) {
          s.classList.toggle("is-active", k === i);
          visualsOf(s).forEach(function (v) { play(v, k === i); });
        });
        var lot = $("[data-lottie]", steps[i]);
        if (!lot) return Promise.resolve(idle);
        return playLottie(lot).then(function () { return my === token ? hold : null; });
      };

      var run = function (k) {
        activate(k).then(function (ms) { if (ms != null && auto) auto.restart(ms); });
      };
      auto = new Autoplay(box, function () { run(i + 1); return null; }, null);
      onView(box, function (v) { if (v) run(0); }, .3);
      steps.forEach(function (s, k) {
        s.addEventListener("mouseenter", function () { if (k !== i) run(k); });
      });
    });
  }

  /* =======================================================================
     10 · Testimonials
     ======================================================================= */
  function initTesti() {
    $$("[data-testi]").forEach(function (box) {
      var panels = $$(".ph-testi__panel", box);
      var thumbs = $$(".ph-testi__thumb", box);
      var rail = $(".ph-testi__rail", box);
      var track = $(".ph-testi__railtrack", box);
      var every = num(box.getAttribute("data-autoplay"), 5000);
      var i = 0;
      var set = function (n) {
        i = (n + panels.length) % panels.length;
        panels.forEach(function (p, k) { p.classList.toggle("is-active", k === i); p.setAttribute("aria-hidden", k === i ? "false" : "true"); });
        thumbs.forEach(function (t, k) { t.classList.toggle("is-active", k === i); t.setAttribute("aria-pressed", k === i ? "true" : "false"); });
        if (track && rail && thumbs[i] && window.matchMedia("(min-width: 768px)").matches) {
          requestAnimationFrame(function () {
            var t = thumbs[i];
            var off = t.offsetTop - (rail.clientHeight - t.offsetHeight) / 2;
            var max = Math.max(0, track.scrollHeight - rail.clientHeight + 16);
            track.style.transform = "translateY(" + (-Math.min(max, Math.max(0, off))) + "px)";
          });
        }
      };
      set(0);
      var auto = RM ? null : new Autoplay(box, function () { set(i + 1); return every; }, every);
      var go = function (n) { set(n); if (auto) auto.restart(every); };
      thumbs.forEach(function (t, k) { t.addEventListener("click", function () { go(k); }); });
      var prev = $(".ph-testi__prev", box), next = $(".ph-testi__next", box);
      if (prev) prev.addEventListener("click", function () { go(i - 1); });
      if (next) next.addEventListener("click", function () { go(i + 1); });
    });
  }

  /* =======================================================================
     11 · SERP swap
     ======================================================================= */
  function initSerp() {
    $$("[data-serp]").forEach(function (box) {
      if (RM) { box.classList.add("is-swapped"); return; }
      var loop = num(box.getAttribute("data-loop"), 0);
      onView(box, function (v) {
        if (!v) return;
        setTimeout(function () { box.classList.add("is-swapped"); }, 1200);
        if (loop) {
          setInterval(function () {
            if (doc.hidden) return;
            box.classList.remove("is-swapped");
            setTimeout(function () { box.classList.add("is-swapped"); }, 1200);
          }, loop);
        }
      }, .4);
    });
  }

  /* =======================================================================
     12 · Typing (.v-prompt / .v-search)
     ======================================================================= */
  function initTyping() {
    $$("[data-type]").forEach(function (el) {
      var host = el.closest(".v-prompt, .v-search, [data-typing]") || el.parentNode;
      var text = el.getAttribute("data-type");
      var loop = host.hasAttribute("data-type-loop");
      var isPrompt = host.classList.contains("v-prompt");
      if (RM) { el.textContent = text; host.classList.add("is-answered"); return; }
      el.textContent = "";
      var running = false, visible = false;
      var cycle = function () {
        running = true;
        var k = 0;
        host.classList.remove("is-sent", "is-answered");
        return wait(400).then(function typeNext() {
          if (k > text.length) return;
          el.textContent = text.slice(0, k++);
          return wait(80).then(typeNext);
        }).then(function () {
          if (!isPrompt) return wait(1600);
          return wait(400).then(function () {
            host.classList.add("is-sent");
            return wait(240);
          }).then(function () {
            host.classList.add("is-answered");
            return wait(3200);
          });
        }).then(function () {
          if (!loop) { running = false; return; }
          host.classList.remove("is-answered", "is-sent");
          var n = el.textContent.length;
          return wait(400).then(function del() {
            if (n < 0) return;
            el.textContent = text.slice(0, n--);
            return wait(40).then(del);
          }).then(function () { return wait(600); }).then(function () {
            if (visible && !doc.hidden) return cycle();
            running = false;
          });
        });
      };
      onView(host, function (v) {
        visible = v;
        if (v && !running) cycle();
      }, .4, false);
    });
  }

  /* =======================================================================
     13 · Hero shelf
     ======================================================================= */
  function initShelf() {
    $$("[data-shelf]").forEach(function (box) {
      var slides = $$(".v-shelf__slide", box);
      var n = slides.length;
      if (!n) return;
      var every = num(box.getAttribute("data-autoplay"), 4000);
      var i = 0;
      var set = function (k) {
        i = (k + n) % n;
        slides.forEach(function (s, idx) {
          var pos = idx - i;
          if (pos > n / 2) pos -= n;
          if (pos < -n / 2) pos += n;
          if (pos > 3) pos = 3;
          if (pos < -3) pos = -3;
          s.setAttribute("data-pos", String(pos));
          s.setAttribute("aria-hidden", pos === 0 ? "false" : "true");
          var on = pos === 0;
          $$(".v-card", s).forEach(function (c) {
            if (on) setTimeout(function () { if (s.getAttribute("data-pos") === "0") play(c, true); }, RM ? 0 : 600);
            else play(c, false);
          });
        });
      };
      set(0);
      var auto = RM ? null : new Autoplay(box, function () { set(i + 1); return every; }, every);
      var go = function (k) { set(k); if (auto) auto.restart(every); };
      $$("[data-shelf-prev]", box).forEach(function (b) { b.addEventListener("click", function () { go(i - 1); }); });
      $$("[data-shelf-next]", box).forEach(function (b) { b.addEventListener("click", function () { go(i + 1); }); });
      box.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { go(i - 1); e.preventDefault(); }
        if (e.key === "ArrowRight") { go(i + 1); e.preventDefault(); }
      });
    });
  }

  /* =======================================================================
     14 · Goal line (scroll progress)
     ======================================================================= */
  function initGoals() {
    $$("[data-goals]").forEach(function (box) {
      var line = $(".ph-goals__line", box);
      var dots = line ? $$("i", line) : [];
      var tabs = $$(".ph-goal", box);
      var update = function () {
        var r = box.getBoundingClientRect(), vh = window.innerHeight;
        var p = Math.min(1, Math.max(0, (vh * .85 - r.top) / (vh * .6)));
        if (line) line.style.setProperty("--p", p.toFixed(3));
        var active = 0;
        dots.forEach(function (d, k) {
          var passed = p >= k / Math.max(1, dots.length - 1) - .001;
          d.classList.toggle("is-passed", passed);
          if (passed) active = k;
        });
        tabs.forEach(function (t, k) { t.classList.toggle("is-active", k === active); });
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
    });
  }

  /* =======================================================================
     15 · Navigation
     ======================================================================= */
  function initNav() {
    $$(".ph-nav").forEach(function (nav) {
      var btn = $(".ph-burger", nav);
      if (!btn) return;
      var set = function (on) { nav.classList.toggle("is-open", on); btn.setAttribute("aria-expanded", on ? "true" : "false"); };
      btn.addEventListener("click", function () { set(!nav.classList.contains("is-open")); });
      doc.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
      doc.addEventListener("click", function (e) { if (!nav.contains(e.target)) set(false); });
      $$(".ph-nav__menu a", nav).forEach(function (a) { a.addEventListener("click", function () { set(false); }); });
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    initNav();
    initReveal();
    initCounts();
    initPlay();
    initMarquee();
    initColumns();
    initRotator();
    initSequence();
    initLottie();
    initSteps();
    initTesti();
    initSerp();
    initTyping();
    initShelf();
    initGoals();
  }
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.PH = { countTo: countTo, play: play, playLottie: playLottie, mountLottie: mountLottie, reducedMotion: RM };
})();
