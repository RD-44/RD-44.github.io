var navbar = document.getElementById("nBar");
var main = document.getElementById("main");
var sticky = navbar.offsetTop + 1;

function shift() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    if (main) main.classList.add("shift");
  } else {
    navbar.classList.remove("sticky");
    if (main) main.classList.remove("shift");
  }
}
window.onscroll = function () { shift(); };
shift();

var videos = document.getElementsByTagName("video");
var hasPlayed = Array(videos.length).fill(false);
function checkScroll() {
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > video.HAVE_CURRENT_DATA;
    var bounding = video.getBoundingClientRect();
    if (bounding.top < window.innerHeight && bounding.bottom > 0 && !isPlaying && !hasPlayed[i]) {
      video.play();
      hasPlayed[i] = true;
    }
  }
}
checkScroll();
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

var breakdown = document.getElementById('breakdown');
if (breakdown) {
  var dropbtn = breakdown.querySelector('.dropbtn');
  dropbtn.addEventListener('click', function (e) {
    e.stopPropagation();
    breakdown.classList.toggle('open');
  });
  var droplinks = breakdown.querySelectorAll('.topicDrop a');
  for (var i = 0; i < droplinks.length; i++) {
    droplinks[i].addEventListener('click', function () {
      breakdown.classList.remove('open');
    });
  }
  document.addEventListener('click', function (e) {
    if (!breakdown.contains(e.target)) {
      breakdown.classList.remove('open');
    }
  });
}

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
