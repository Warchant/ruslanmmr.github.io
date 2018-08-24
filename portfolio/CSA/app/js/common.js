$('.slider1').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: $('.arrow_left1'),
    nextArrow: $('.arrow_right1'),
    responsive: [{
            breakpoint: 808,
            settings: {
                dots: true,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 320,
            settings: {}
        }
    ]
});

$("#home_page").hide();

$('.slider1').on('afterChange', function(event, slick, currentSlide) {
    if (currentSlide == 1) {
        $("#home_page .arrow_right1 span, #home_page .arrow_left1 span").fadeIn(300);
    } else {
        $("#home_page .arrow_right1 span, #home_page .arrow_left1 span").fadeOut(300);
    }
});
$('.slider1').on('afterChange', function(event, slick, currentSlide) {
    if (currentSlide == 0) {
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
$('.slider1').on('afterChange', function(event, slick, currentSlide) {
    if (currentSlide == 6) {
        $("#home_page .arrow_right1").fadeOut(300);
    } else {
        $("#home_page .arrow_right1").fadeIn(300);
    }
});

$('#header_nav .fr_link a').click(function(e) {
    e.preventDefault();
    $('.slider1').slick('slickGoTo', 0);
});
$('#header_nav .first_link .link a').click(function(e) {
    e.preventDefault();
    $('.slider1').slick('slickGoTo', 1);
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
        //new
        $("#start_page").css( "width", "0%" );
          totalWheel = 700;
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
        //new
         $("#start_page").css( "width", "100%" );
          totalWheel = 0;
    });


    $(window).bind('mousewheel', function(e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            console.log('scrolling up !');
        } else {
            console.log('scrolling down !');
        }
    });

    /*$(window).bind('mousewheel DOMMouseScroll', function(event) {
        if ((document.documentElement.clientWidth > 1025) && event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
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

        } else if (document.documentElement.clientWidth > 1025) {
            event.preventDefault();
            $(".header_nav").addClass("header_nav_transformed");
            $(".header_top").addClass("header_top_transformed");
            $("#start_page").addClass("active");
            //$("#start_page").delay(1000).fadeOut();
            $("#home_page").fadeIn(250);
            $("#header_nav .first_link .link a").parent().addClass("active_link");
            $("#header_nav .first_link .link a").addClass("active_icon");
            $(".slider1").slick('reinit');
        }
    }); */
});

var totalWheel = 0

window.onwheel = function(e) {
    var delta = e.deltaY;
    totalWheel += delta;
    if (totalWheel < 0) {
        totalWheel = 0;
    } else if ((document.documentElement.clientWidth > 1025) && totalWheel > 0 && totalWheel < 700) {
                $("#home_page").fadeIn(250);
                $(".slider1").slick('reinit');
            if (totalWheel >= 100 && totalWheel < 200) {
                $("#start_page").removeClass("active");
            } else if (totalWheel >= 200 && totalWheel < 300) {
                $("#start_page").addClass("active");
                $("#start_page").css( "width", "100%" );
                $(".header_nav").removeClass("header_nav_transformed");
               $(".header_top").removeClass("header_top_transformed");
               $("#header_nav .first_link .link a").parent().removeClass("active_link");
               $("#header_nav .first_link .link a").removeClass("active_icon");
               $("#header_nav .link_trigger a").parent().removeClass("active_link");
            } else if (totalWheel >= 300 && totalWheel < 400) {
               $("#start_page").css( "width", "75%" );
               $(".header_nav").addClass("header_nav_transformed");
               $(".header_top").addClass("header_top_transformed");
               $("#header_nav .first_link .link a").parent().addClass("active_link");
               $("#header_nav .first_link .link a").addClass("active_icon");
            } else if (totalWheel >= 400 && totalWheel < 500) {
                $("#start_page").css( "width", "50%" );
            } else if (totalWheel >= 500 && totalWheel < 600) {
                $("#start_page").css( "width", "25%" );
            } else if (totalWheel >= 600 && totalWheel < 700) {
                $("#start_page").css( "width", "0%" );
            }
    } 
}