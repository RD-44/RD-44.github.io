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
