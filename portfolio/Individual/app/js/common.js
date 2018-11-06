$(document).ready(function() {
  resizeNav();
  Nav();
  openNav();
  navigation();
});

$(window).resize(function() {
  resizeNav();
  Nav();
  imgResize();
});
var init = false;

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
    $("header").css('position', 'fixed');
    $(".nav-btn").css('position', 'fixed');
  } else {
    $(".nav_mobile").css('overflow-y', 'visible');
    $("header").css('position', 'absolute');
    $(".nav-btn").css('position', 'absolute');
  }
}

function openNav() {
  $('.nav-btn').click(function(event) {
    event.preventDefault();
    $(".nav-btn").toggleClass("nav_btn_active");
    $(".nav_mobile").toggleClass("nav_active");
    $("body").toggleClass("body_fixed");
  });
  $('.nav_mobile .main_nav a').click(function() {
    $(".nav-btn").toggleClass("nav_btn_active");
    $(".nav_mobile").toggleClass("nav_active");
    $("body").toggleClass("body_fixed");
  });
}

//gallery
function gallery() {
  $('.gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.nav-slider'
  });
  $('.nav-slider').slick({
    slidesToShow: 9,
    slidesToScroll: 9,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.gallery-slider',
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          centerMode: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          centerMode: false
        }
      }
    ]
  });
  $(".gallery-slider_container img").each(function() {
    var place = $(this).siblings(".bg");
    $(this).clone().prependTo(place);
  });
  //$(".gallery-slider_container .slick-current img").clone().prependTo(".gallery-slider_container .slick-current .bg")
}

function imgResize() {
  var img_w = $(".gallery-slider_container .slide img").width();
  var slide_w = $(".gallery-slider_container .slide").width();
  if (img_w > slide_w) {
    $(".gallery-slider_container .slide img").addClass("resize");
  } else {
    $(".gallery-slider_container .slide img").removeClass("resize");
  }
}

//nav
function navigation() {
  $('.trigger').click(function(event) {
    event.preventDefault();
    if ($(this).parent().hasClass("link")) {
      $('.trigger').removeClass("active_link");
      $('.trigger').parent().addClass("link");
      $('.desc').hide();
      $(this).addClass("active_link");
      $(this).parent().removeClass("link");
      if ($(this).hasClass("link4")) {
        $('.bg_page').hide();
        $('.start-page').fadeIn(1000);
        $('.start_bg').fadeIn(200);
      } else if ($(this).hasClass("link3")) {
        $('.bg_page').hide();
        $('.gallery-page').fadeIn(1000);
        imgResize();
        if (init == false) {
          gallery();
          init = true;
        }
        $('.nav-slider').slick("setPosition");
        $('.gallery-slider').slick("setPosition");
      }
    }
  });
}