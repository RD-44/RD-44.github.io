window.onscroll = function() {shift()};

var navbar = document.getElementById("nBar");
var main = document.getElementById("main");
var sticky = navbar.offsetTop+1;
function shift(){
	if (window.pageYOffset >= sticky) {
    	navbar.classList.add("sticky")
    	main.classList.add("shift")
  	} else {
    	navbar.classList.remove("sticky");
    	main.classList.remove("shift")
  	}
}

var videos = document.getElementsByTagName("video");
var hasPlayed = Array(videos.length).fill(false)
function checkScroll() {
  var fraction = 0.95; // Play when 80% of the player is visible.
  for(var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > video.HAVE_CURRENT_DATA;
    bounding = video.getBoundingClientRect();
    if (bounding.top < 500 && !isPlaying && !hasPlayed[i]) { //"visible > fraction"
      video.play();
      hasPlayed[i]=true
    }
  }
}
checkScroll();
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);



