//scripts

$(document).ready(function() {
   $( ".nav a" ).hover(function() {
       $(this).parent().toggleClass("active");
});
   $(".tab_content").not(":first").hide();
   $( ".tabs .block" ).click(function() {
       $(".tabs .block").removeClass("active").eq($(this).index()).addClass("active");
       $(".tabs .content_tab").removeClass("active_t").eq($(this).index()).addClass("active_t");
       $(".tab_content").hide().eq($(this).index()).fadeIn(300)
}).eq(0).addClass("active");
});


//slider
$(document).ready(function(){
  $('.slider1 .slider_content').slick({
    dots: false,
  infinite: true,
    prevArrow: $('.arrow_left1'),
  nextArrow: $('.arrow_right1'),
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 987,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});
$(document).ready(function(){
  $('.slider2 .slider_content').slick({
    dots: false,
  infinite: true,
    prevArrow: $('.arrow_left2'),
  nextArrow: $('.arrow_right2'),
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 987,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});
