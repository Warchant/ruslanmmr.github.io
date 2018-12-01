$(document).ready(function() {
   parralax(); 
});
$(window).resize(function() {
    
});

//parralax
function parralax() {
	var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
}