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
function checkScroll() {
    var fraction = 0.95; // Play when 80% of the player is visible.
    for(var i = 0; i < videos.length; i++) {
        var video = videos[i];
        var y = video.offsetTop, h = video.offsetHeight, b = y + h, //bottom UNDERSTAND THIS AND REFINE.
            visibleY, visible;
            //Find out what each line does
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
            visible = visibleY / h;
            //window.pageYOffset >  video.offsetTop && window.pageYOffset < video.offsetTop - video.innerHeight
            if (visible > fraction) {
              if(video.currentTime <= 0){  //Nested if statement to account for video already started and in view
                video.play();
              }
            }else{
              video.currentTime = 0;
              video.pause();
            }
            //Try make video reset when scrolled out of view.
    }
}
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);



