$(function(){
  $('#start_page').height($('#start_page').width());

  $(window).resize(function(){
    $('#start_page').height($('#start_page').width());
  });
});

$('.slider1').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            prevArrow: $('.arrow_left1'),
            nextArrow: $('.arrow_right1'),
            responsive: [
    {
      breakpoint: 808,
      settings: {
        dots: true,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 320,
      settings: {
      }
    }
  ]
        });

        $("#home_page").hide();

$('.slider1').on('afterChange', function(event, slick, currentSlide){
    if ( currentSlide == 1 ) {
       $("#home_page .arrow_right1 span, #home_page .arrow_left1 span").fadeIn(300);
    } else {
       $("#home_page .arrow_right1 span, #home_page .arrow_left1 span").fadeOut(300);
    }
}); 
$('.slider1').on('afterChange', function(event, slick, currentSlide){
    if ( currentSlide == 0 ) {
       $("#home_page .arrow_left1").fadeOut(300);
       $("#header_nav .link_trigger a").parent().removeClass("active_link");
       $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
       $("#header_nav .fr_link a").parent().addClass("active_link");
    } else {
       $("#home_page .arrow_left1").fadeIn(300);
       $("#header_nav .left_section .icons_block a").removeClass("active_icon");
       $("#header_nav .fr_link a").parent().removeClass("active_link");
       $("#header_nav .first_link .link a").parent().addClass("active_link");
       $("#header_nav .first_link .link a").addClass("active_icon");
    }
});
$('.slider1').on('afterChange', function(event, slick, currentSlide){
    if ( currentSlide == 6 ) {
       $("#home_page .arrow_right1").fadeOut(300);
    } else {
       $("#home_page .arrow_right1").fadeIn(300);
    }
});    

$('#header_nav .fr_link a').click(function(e) {
   e.preventDefault();
   $('.slider1').slick('slickGoTo',0);
 });
$('#header_nav .first_link .link a').click(function(e) {
   e.preventDefault();
   $('.slider1').slick('slickGoTo',1);
 });



$(document).ready(function() {
    $('.nav-btn a').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#mobile_nav").toggleClass("active_nav");
        $("body").toggleClass("body_active");
    });

    $('#header_nav .link_trigger a').click(function(event) {
        event.preventDefault();
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $(this).parent().addClass("active_link");
        $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
    });
    $('#header_nav .left_section .icons_block a, #header_nav .first_link .link a').click(function(event) {
        event.preventDefault();
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $(this).parent().addClass("active_link");
        $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
        $(this).addClass("active_icon");
    });


    $('#header_nav .first_link .link a, #header_nav .fr_link a').click(function(event) {
        event.preventDefault();
        $(".header_nav").addClass("header_nav_transformed");
        $(".header_top").addClass("header_top_transformed");
        $("#start_page").addClass("active");
$("#home_page").fadeIn(250);
        $(".slider1").slick('reinit');
    });

    $('#header_top .header_top .logo a').click(function(event) {
        event.preventDefault();
        $(".header_nav").removeClass("header_nav_transformed");
        $(".header_top").removeClass("header_top_transformed");
        $("#home_page").fadeOut(500);
        $("#start_page").fadeIn(250);
        $("#start_page").removeClass("active");
        $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
        $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $(".slider1").slick('reinit');
    });

    $(window).bind('mousewheel DOMMouseScroll', function(event) {
        if ((document.documentElement.clientWidth > 1025) && event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            event.preventDefault();
            $(".header_nav").removeClass("header_nav_transformed");
            $(".header_top").removeClass("header_top_transformed");
            $("#start_page").removeClass("active");
            $("#home_page").fadeOut(500);
            $("#start_page").fadeIn(250);
            $("#start_page").removeClass("active");
            $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
            $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
            $("#header_nav .link_trigger a").parent().removeClass("active_link");
            $(".slider1").slick('reinit');

        } else if (document.documentElement.clientWidth > 1025) {
            event.preventDefault();
            $(".header_nav").addClass("header_nav_transformed");
            $(".header_top").addClass("header_top_transformed");
            $("#start_page").addClass("active");
            //$("#start_page").delay(250).fadeOut();
            $("#home_page").fadeIn(250);
            $("#header_nav .first_link .link a").parent().addClass("active_link");
            $("#header_nav .first_link .link a").addClass("active_icon");
            $(".slider1").slick('reinit');
        }
    });
});