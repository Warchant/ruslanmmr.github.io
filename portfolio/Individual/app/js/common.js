$(document).ready(function() {
  resizeNav();
  navigation();
  openNav();
  if ($(window).height() < 550) {
    scroll4();
  }
});

$(window).resize(function() {
  if ($(window).width() > 576) {
    HeightInfo();
  }
  resizeNav();
  imgResize();
  heightContainer();
  if ($(window).height() < 550) {
    scroll4();
  }
});
var init = false;

function resizeNav() {
  if ($(window).width() < 768) {
    $('.nav_content').appendTo('.nav_mobile');
  } else {
    $('.nav_content').insertAfter('.center_logo');
  }
}

function scroll6() {
  $(".stars-page .scroll_block").niceScroll({
    cursorcolor: " #d6ad6f ",
    cursorwidth: "3px",
    cursorborder: "1px solid #d6ad6f"
  });
}

function scroll1() {
  $(".barbershops-page .scroll_block").niceScroll({
    cursorcolor: " #d6ad6f ",
    cursorwidth: "3px",
    cursorborder: "1px solid #d6ad6f"
  });
}

function scroll2() {
  $(".services-page .scroll_block").niceScroll({
    cursorcolor: " #d6ad6f ",
    cursorwidth: "3px",
    cursorborder: "1px solid #d6ad6f"
  });
}

function scroll4() {
  $(".start-page .scroll_block").niceScroll({
    cursorcolor: " #d6ad6f ",
    cursorwidth: "3px",
    cursorborder: "1px solid #d6ad6f"
  });
}

function scroll7() {
  $(".contacts-page .scroll_block").niceScroll({
    cursorcolor: " #d6ad6f ",
    cursorwidth: "3px",
    cursorborder: "1px solid #d6ad6f"
  });
}

function scroll5() {
  $(".cosmetics-page .scroll_block").niceScroll({
    cursorcolor: " #d6ad6f ",
    cursorwidth: "3px",
    cursorborder: "1px solid #d6ad6f"
  });
}


function heightContainer() {
  var child = $(".child_container").height();
  $(".parent_container").css({ 'min-height': child });
}

function openNav() {
  $('.nav-btn').click(function(event) {
    event.preventDefault();
    $(".nav-btn").toggleClass("nav_btn_active");
    $(".nav_mobile").toggleClass("nav_active");
    $("body").toggleClass("body_fixed");
  });
  $('.nav_mobile .main_nav a').click(function() {
    if ($(window).width() < 768) {
      $(".nav-btn").toggleClass("nav_btn_active");
      $(".nav_mobile").toggleClass("nav_active");
      $("body").toggleClass("body_fixed");
    }
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
          slidesToScroll: 1,
          infinite: false,
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
      $('.desc').hide();
      $('.bg_page').hide();
      $('.trigger').removeClass("active_link");
      $('.trigger').parent().addClass("link");
      $(this).addClass("active_link");
      $(this).parent().removeClass("link");
      $("html, body").css({ 'min-height': "100%" });
      if ($(this).hasClass("link4")) {
        $('.start-page').fadeIn(1000);
        $('.start_bg').fadeIn(300);
        if ($(window).height() < 550) {
          scroll4();
        }
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
        scroll1();
        $(".barbershops_container .place_block").css('height', 'auto');
        if ($(window).width() > 576) {
          HeightInfo();
        }
      } else if ($(this).hasClass("link2")) {
        $('.services_bg').fadeIn(300);
        $('.services-page').fadeIn(1000);
        scroll2();
      } else if ($(this).hasClass("link7")) {
        $('.contacts_bg').fadeIn(300);
        $('.contacts-page').fadeIn(1000);
        scroll7();
      } else if ($(this).hasClass("link5")) {
        $('.cosmetics_bg').fadeIn(300);
        $('.cosmetics-page').fadeIn(1000);
        scroll5();
        heightContainer();
      } else if ($(this).hasClass("link6")) {
        $('.stars_bg').fadeIn(300);
        $('.stars-page').fadeIn(1000);
        scroll6();
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