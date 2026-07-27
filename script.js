/* ===== Typing effect ===== */
var typedEl = document.getElementById('typed');
var phrases = ['interactive websites', 'math animations', 'creative projects', 'cool things'];
var phraseIdx = 0;
var charIdx = 0;
var isDeleting = false;
var typeSpeed = 80;

function type() {
  var current = phrases[phraseIdx];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    typeSpeed = 40;
  } else {
    typedEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    typeSpeed = 80;
  }

  if (!isDeleting && charIdx === current.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    typeSpeed = 400;
  }

  setTimeout(type, typeSpeed);
}
type();

/* ===== Cursor glow ===== */
var glow = document.getElementById('cursorGlow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', function (e) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
} else if (glow) {
  glow.style.display = 'none';
}

/* ===== Navbar scroll ===== */
var nav = document.getElementById('nav');
function onScroll() {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
onScroll();
window.addEventListener('scroll', onScroll, false);

/* ===== Scroll reveal ===== */
var reveals = document.querySelectorAll('.reveal');
function checkReveal() {
  for (var i = 0; i < reveals.length; i++) {
    var rect = reveals[i].getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      reveals[i].classList.add('visible');
    }
  }
}
checkReveal();
window.addEventListener('scroll', checkReveal, false);

/* ===== Stat counter ===== */
var counters = document.querySelectorAll('.stat-number[data-count]');
var counted = false;
function animateCounters() {
  if (counted) return;
  var first = counters[0];
  if (!first) return;
  var rect = first.getBoundingClientRect();
  if (rect.top > window.innerHeight) return;
  counted = true;

  for (var i = 0; i < counters.length; i++) {
    var el = counters[i];
    var target = parseInt(el.getAttribute('data-count'), 10);
    var current = 0;
    var step = Math.max(1, Math.floor(target / 30));
    var interval = setInterval(function (el, target, step) {
      return function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.textContent = current + '+';
      };
    }(el, target, step), 40);
  }
}
animateCounters();
window.addEventListener('scroll', animateCounters, false);

/* ===== Smooth scroll for anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var id = a.getAttribute('href');
    if (id === '#') return;
    var target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===== Tilt effect on project cards ===== */
var cards = document.querySelectorAll('.project-card');
cards.forEach(function (card) {
  card.addEventListener('mousemove', function (e) {
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var cx = rect.width / 2;
    var cy = rect.height / 2;
    var rotateX = (y - cy) / cy * -3;
    var rotateY = (x - cx) / cx * 3;
    card.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
  });
  card.addEventListener('mouseleave', function () {
    card.style.transform = '';
  });
});

/* ===== Page transition on internal links ===== */
document.querySelectorAll('a[href$=".html"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto')) return;
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function () {
      window.location.href = href;
    }, 350);
  });
});
