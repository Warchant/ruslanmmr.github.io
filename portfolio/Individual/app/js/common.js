$(document).ready(function() {
  resizeNav();
  Nav();
  navigation();
  if ($(window).width() < 768) {
    openNav();
  }
});

$(window).resize(function() {
  if ($(window).height() > 550) {
    $("html, body").css('min-height', "100%");
  }
  if ($(window).width() > 576) {
    HeightInfo();
  }
  if ($(window).width() < 768) {
    openNav();
  }
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
  var content_height = $(document).height();
  var height = $(window).height();
  var width = $(window).width();
  if (content_height > height) {
    $(".nav_mobile").css('overflow-y', 'scroll');
    $("header, .nav-btn, .backgrounds").css('position', 'fixed');
    $("html, body").css({ 'overflow-y': "visible", 'min-height': content_height });
  } else {
    if (width > 1479) {
      $("html, body").css({ 'min-height': "800px", 'overflow-y': "hidden" });
    } else {
      $("html, body").css({ 'min-height': "550px", 'overflow-y': "hidden" });
    }
    $(".nav_mobile").css('overflow-y', 'visible');
    $("header, .nav-btn, .backgrounds").css('position', 'absolute');
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
      $("html, body").css('min-height', "550px");
      $('.trigger').removeClass("active_link");
      $('.trigger').parent().addClass("link");
      $('.desc').hide();
      $('.bg_page').fadeOut(300);
      $(this).addClass("active_link");
      $(this).parent().removeClass("link");
      setTimeout(function() { Nav(); }, 500);
      if ($(this).hasClass("link4")) {
        $('.start-page').fadeIn(1000);
        $('.start_bg').fadeIn(300);
      } else if ($(this).hasClass("link3")) {
        $('.gallery-page').fadeIn(1000);
        imgResize();
        if (init == false) {
          gallery();
          init = true;
        }
        $('.nav-slider').slick("setPosition");
        $('.gallery-slider').slick("setPosition");
      } else if ($(this).hasClass("link1")) {
        $('.barber_bg').fadeIn(300);
        $('.barbershops-page').fadeIn(1000);
        $(".barbershops_container .place_block").css('height', 'auto');
        if ($(window).width() > 576) {
          HeightInfo();
        }
      }
    }
  });
}
var mh = 0;

function HeightInfo() {
  $(".barbershops_container .place_block").css('height', 'auto');
  $(".barbershops_container .place_block").each(function() {
    var h_block = parseInt($(this).height());
    if (h_block > mh) {
      mh = h_block;
    };
  });
  $(".barbershops_container .place_block").height(mh);
};