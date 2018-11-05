$(document).ready(function() {
  resizeNav();
  Nav();
  openNav();
});

$(window).resize(function() {
  resizeNav();
  Nav();
});

function resizeNav() {
  if ($(window).width() < 768) {
    $('.nav_content').appendTo('.nav_mobile');
  } else {
    $('.nav_content').insertAfter('.center_logo');
  }
}

function Nav() {
	var height = $(window).height();
	console.log(height);
  if (height < 550) {
    $(".nav_mobile").css('overflow-y', 'scroll');
  } else {
    $(".nav_mobile").css('overflow-y', 'visible');
  }
}

function openNav() {
  $('.nav-btn a').click(function(event) {
    event.preventDefault();
    $(".nav-btn a").toggleClass("a_active");
    $(".nav_mobile").toggleClass("nav_active");
    $("body").toggleClass("body_fixed");
  });
}