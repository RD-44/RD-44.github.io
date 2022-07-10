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

// start video at frame 0
var time = 0;
// lower numbers = faster playback
playbackConst = 200;
// select video element         
vid = document.getElementById("v0"); 
debug = document.getElementById("test"); 

// Use requestAnimationFrame for smooth playback
function scrollPlay(){ 
  debug.innerHTML = (window.pageYOffset);
  var time  = (window.pageYOffset/playbackConst);
  vid.currentTime  = time;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);