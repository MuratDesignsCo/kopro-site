import Script from "next/script";

export default function SiteScripts() {
  return (
    <>
      <Script
        id="wf-mod-js"
        strategy="beforeInteractive"
      >{`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}</Script>

      <Script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        strategy="beforeInteractive"
      />
      <Script id="webfont-load" strategy="beforeInteractive">{`WebFont.load({ google: { families: ["Poppins:300,400,500,600,700"] } });`}</Script>

      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c11e3ba5e041d7d54d%2Fimportucanddefinelocales-1.1.1.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c16b483cfc95edb442%2Fcssimporter-0.1.0.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=693414c0a24bd9a413f912b8"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.14.2/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.14.2/SplitText.min.js"
        strategy="afterInteractive"
      />
      <Script id="gsap-register-then-kopro" strategy="afterInteractive">{`(function(){
  function loadKoproJs() {
    var s = document.createElement('script');
    s.src = '/js/kopro.js';
    document.body.appendChild(s);
  }
  function tryRegister(){
    if (window.gsap && window.ScrollTrigger && window.SplitText) {
      window.gsap.registerPlugin(window.ScrollTrigger, window.SplitText);
      return true;
    }
    return false;
  }
  function boot() {
    if (tryRegister()) {
      loadKoproJs();
    } else {
      var attempts = 0;
      var timer = setInterval(function(){
        attempts += 1;
        if (tryRegister()) {
          clearInterval(timer);
          loadKoproJs();
        }
        if (attempts > 40) clearInterval(timer);
      }, 150);
    }
  }
  boot();
})();`}</Script>

      <Script id="count-up-animation" strategy="afterInteractive">{`
(function(){
  var counters = document.querySelectorAll("[data-count-to]");
  if (!counters.length) return;
  var duration = 1000;
  function easeOutCirc(t) { return Math.sqrt(1 - Math.pow(t - 1, 2)); }
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count-to"), 10);
    var prefix = el.getAttribute("data-count-prefix") || "";
    var suffix = el.getAttribute("data-count-suffix") || "";
    var start = performance.now();
    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutCirc(progress);
      var current = Math.round(eased * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function(el) { observer.observe(el); });
})();
`}</Script>

      <Script id="accordion-dropdown" strategy="afterInteractive">{`
(function(){
  var dropdowns = document.querySelectorAll(".dropdown-wrapper .dropdown-isolation");
  if (!dropdowns.length) return;
  var firstToggle = dropdowns[0].querySelector(".dropdown-toggle");
  var firstList = dropdowns[0].querySelector(".dropdown-list-isolation");
  if (firstToggle) firstToggle.classList.add("w--open");
  if (firstList) firstList.classList.add("w--open");
  dropdowns.forEach(function(dd) {
    var toggle = dd.querySelector(".dropdown-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      var list = dd.querySelector(".dropdown-list-isolation");
      var isOpen = toggle.classList.contains("w--open");
      dropdowns.forEach(function(other) {
        var otherToggle = other.querySelector(".dropdown-toggle");
        var otherList = other.querySelector(".dropdown-list-isolation");
        if (otherToggle) otherToggle.classList.remove("w--open");
        if (otherList) otherList.classList.remove("w--open");
      });
      if (!isOpen) {
        toggle.classList.add("w--open");
        if (list) list.classList.add("w--open");
      }
    });
  });
})();
`}</Script>

      <Script id="mobile-nav" strategy="afterInteractive">{`
(function(){
  var btn = document.querySelector('.w-nav-button');
  var navC = document.querySelector('.navbar-components');
  if (!btn || !navC) return;
  btn.addEventListener('click', function() {
    navC.classList.toggle('nav-menu-open');
  });
  navC.querySelectorAll('.w-nav-menu .nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      navC.classList.remove('nav-menu-open');
    });
  });
})();
`}</Script>

      <Script id="marquee-drag" strategy="afterInteractive">{`
(function(){
  var wrapper = document.querySelector("[data-marquee]");
  if (!wrapper) return;
  var track = wrapper.querySelector("[data-marquee-track]");
  if (!track) return;
  var original = track.querySelector("[data-marquee-group]");
  if (!original) return;

  // Clone enough groups so the track is always wider than the viewport
  // We need at least 3x viewport width to handle fast drags in both directions
  function ensureClones() {
    var wrapperW = wrapper.offsetWidth;
    var groupW = original.offsetWidth + parseFloat(getComputedStyle(track).gap || 0);
    if (groupW <= 0) return;
    var needed = Math.ceil((wrapperW * 3) / groupW) + 1;
    var current = track.children.length;
    for (var i = current; i < needed; i++) {
      var clone = original.cloneNode(true);
      clone.removeAttribute("data-marquee-group");
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    }
  }
  ensureClones();
  window.addEventListener("resize", ensureClones);

  // Stop CSS animation, we drive everything via JS
  track.style.animation = "none";

  var isDragging = false;
  var isInertia = false;
  var startX = 0;
  var currentTranslate = 0;
  var prevTranslate = 0;
  var velocity = 0;
  var lastX = 0;
  var lastTime = 0;
  var autoSpeed = 0.8;

  function getGroupWidth() {
    return original.offsetWidth + parseFloat(getComputedStyle(track).gap || 0);
  }

  // Modulo wrap: keeps currentTranslate in range [-groupW, 0)
  function wrapPosition() {
    var gw = getGroupWidth();
    if (gw <= 0) return;
    currentTranslate = ((currentTranslate % gw) + gw) % gw;
    if (currentTranslate > 0) currentTranslate -= gw;
  }

  function setPosition() {
    track.style.transform = "translate3d(" + currentTranslate + "px,0,0)";
  }

  // Main animation loop — auto-scrolls when not dragging/inerting
  function tick() {
    if (!isDragging && !isInertia) {
      currentTranslate -= autoSpeed;
      wrapPosition();
      setPosition();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function getX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  function onPointerDown(e) {
    isDragging = true;
    isInertia = false;
    velocity = 0;
    startX = getX(e);
    prevTranslate = currentTranslate;
    lastX = startX;
    lastTime = performance.now();
    wrapper.classList.add("is-grabbing");
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    var x = getX(e);
    var now = performance.now();
    var dt = now - lastTime;
    if (dt > 0) velocity = (x - lastX) / dt;
    lastX = x;
    lastTime = now;
    currentTranslate = prevTranslate + (x - startX);
    wrapPosition();
    setPosition();
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    wrapper.classList.remove("is-grabbing");

    // Inertia phase
    isInertia = true;
    var friction = 0.94;
    function step() {
      if (Math.abs(velocity) < 0.005) { isInertia = false; return; }
      velocity *= friction;
      currentTranslate += velocity * 16;
      wrapPosition();
      setPosition();
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  wrapper.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);
  wrapper.addEventListener("touchstart", onPointerDown, {passive: false});
  window.addEventListener("touchmove", onPointerMove, {passive: false});
  window.addEventListener("touchend", onPointerUp);
  wrapper.addEventListener("dragstart", function(e){ e.preventDefault(); });
})();
`}</Script>

      <Script id="slater-load" strategy="afterInteractive">{`document.addEventListener(\"DOMContentLoaded\", function() {function loadkopro(e){let t=document.createElement(\"script\");t.setAttribute(\"src\",e),t.setAttribute(\"type\",\"module\"),document.body.appendChild(t),t.addEventListener(\"load\",()=>{console.log(\"Slater loaded KOPRO.js: https://slater.app/18135.js\")}),t.addEventListener(\"error\",e=>{console.log(\"Error loading file\",e)})}let src=window.location.host.includes(\"webflow.io\")?\"https://slater.app/18135.js\":\"https://assets.slater.app/slater/18135.js?v=1.0\";loadkopro(src);})`}</Script>


      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c16b483cfc95edb450%2Femptyfieldsremoval-1.1.0.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c112a7dbb31adf19af%2Fmetadatahandler-0.0.5.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c1548e903d14de2c3f%2Fenablevisiblebuttons-0.0.7.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c112a7dbb31adf19d5%2Fenableuploadstateview-0.0.3.js"
        strategy="afterInteractive"
      />
    </>
  );
}
