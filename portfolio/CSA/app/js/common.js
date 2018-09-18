//Общее


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
        $("#home_page").fadeIn(500);
        //$(".slider1").slick('reinit');
        //new
        $("#start_page").css("width", "0%");
        $("#header_top").removeClass("header_top_last");
        totalWheel = 700;
    });

    $('#header_nav .container .header_nav .right_section ul li a').click(function(event) {
        $(".header_nav").addClass("header_nav_transformed");
        $(".header_top").addClass("header_top_transformed");
        $("#start_page").addClass("active");
        $("#start_page").css("width", "0%");
        $("#home_page").fadeOut(500);
        $("#last_page").delay(500).fadeIn(500);
        $("#header_top").addClass("header_top_last");
        totalWheel = 901;
        once = 2;
    });

    $('#header_top .header_top .logo a').click(function(event) {
        event.preventDefault();
        $(".header_nav").removeClass("header_nav_transformed");
        $(".header_top").removeClass("header_top_transformed");
        $("#home_page").fadeOut(500);
        $("#start_page").fadeIn(250);
        $("#start_page").removeClass("active");
        $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        //$(".slider1").slick('reinit');
        $("#last_page").fadeOut(500);
        //new
        $("#start_page").css("width", "100%");
        totalWheel = 0;
    });

    var totalWheel = 0;
    var once = 1;

    window.onwheel = function(e) {
        var delta = e.deltaY;
        totalWheel += delta;
        if (totalWheel < 0) {
            totalWheel = 0;
        } else if ((document.documentElement.clientWidth > 1025) && totalWheel > 0 && totalWheel < 700) {
            once = 1;
            $("#last_page").hide();
            $("#home_page").fadeIn(500);
            //$(".slider1").slick('reinit');
            if (totalWheel >= 100 && totalWheel < 200) {
                $("#start_page").removeClass("active");
            } else if (totalWheel >= 200 && totalWheel < 300) {
                $("#start_page").addClass("active");
                $("#start_page").css("width", "100%");
                $(".header_nav").removeClass("header_nav_transformed");
                $(".header_top").removeClass("header_top_transformed");
                $("#header_nav .first_link .link a").parent().removeClass("active_link");
                $("#header_nav .first_link .link a").removeClass("active_icon");
                $("#header_nav .link_trigger a").parent().removeClass("active_link");
            } else if (totalWheel >= 300 && totalWheel < 400) {
                $("#start_page").css("width", "75%");
                $(".header_nav").addClass("header_nav_transformed");
                $(".header_top").addClass("header_top_transformed");
                $("#header_nav .first_link .link a").parent().addClass("active_link");
                $("#header_nav .first_link .link a").addClass("active_icon");
            } else if (totalWheel >= 400 && totalWheel < 500) {
                $("#start_page").css("width", "50%");
            } else if (totalWheel >= 500 && totalWheel < 600) {
                $("#start_page").css("width", "25%");
            } else if (totalWheel >= 600 && totalWheel < 700) {
                $("#start_page").css("width", "0%");
            }
        } else if (totalWheel >= 700 && totalWheel < 900) {
            once = 1;
            $("#home_page").fadeIn(500);
            $("#last_page").hide();
            //$(".slider1").slick('reinit');
            $("#header_top").removeClass("header_top_last");
            $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
            $("#header_nav .link_trigger a").parent().removeClass("active_link");
            $("#header_nav .first_link .link a").parent().addClass("active_link");
            $("#header_nav .first_link .link a").addClass("active_icon");
        } else if (totalWheel > 900) {
            totalWheel = 900;
            if (once == 1) {
                $("#home_page").hide();
                $("#last_page").fadeIn(500);
                $("#header_top").addClass("header_top_last");
                $('.slider2').slick('slickGoTo', 0);
                $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
                $("#header_nav .link_trigger a").parent().removeClass("active_link");
                $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link1").addClass("active_link");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
            $("#last_page .custom_dots ul .dot1").addClass("active_dot");
                once = 2;
            }
        }
    }

    //страница вторая

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

    //третья страница

    $('.slider2').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false
    });

    $('#header_nav .right_section .link1, #last_page .custom_dots ul .dot1').click(function(e) {
        e.preventDefault();
        $('.slider2').slick('slickGoTo', 0);
        $("#last_page .active_bg").css("left", "0%");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
        $("#last_page .custom_dots ul .dot1").addClass("active_dot");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link1").addClass("active_link");
    });
    $('#last_page .custom_dots ul .dot2').click(function(e) {
        e.preventDefault();
        $('.slider2').slick('slickGoTo', 1);
        $("#last_page .active_bg").css("left", "-100%");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
        $("#last_page .custom_dots ul .dot2").addClass("active_dot");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link1").addClass("active_link");
    });
    $('#header_nav .right_section .link2, #last_page .custom_dots ul .dot3').click(function(e) {
        e.preventDefault();
        $('.slider2').slick('slickGoTo', 2);
        $("#last_page .active_bg").css("left", "-200%");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
        $("#last_page .custom_dots ul .dot3").addClass("active_dot");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link2").addClass("active_link");
    });
    $('#header_nav .right_section .link3, #last_page .custom_dots ul .dot4').click(function(e) {
        e.preventDefault();
        $('.slider2').slick('slickGoTo', 3);
        $("#last_page .active_bg").css("left", "-300%");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
        $("#last_page .custom_dots ul .dot4").addClass("active_dot");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link3").addClass("active_link");
    });
    $('#header_nav .right_section .link4, #last_page .custom_dots ul .dot5').click(function(e) {
        e.preventDefault();
        $('.slider2').slick('slickGoTo', 4);
        $("#last_page .active_bg").css("left", "-400%");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
        $("#last_page .custom_dots ul .dot5").addClass("active_dot");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link4").addClass("active_link");
    });
    $('#header_nav .right_section .link5, #last_page .custom_dots ul .dot6').click(function(e) {
        e.preventDefault();
        $('.slider2').slick('slickGoTo', 5);
        $("#last_page .active_bg").css("left", "-500%");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
        $("#last_page .custom_dots ul .dot6").addClass("active_dot");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link5").addClass("active_link");
    });


    //слайдер новостей первого блока
    $('.slider_news').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow_left_slide1'),
        nextArrow: $('.arrow_right_slide1')
    });
    $('.slider3').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false
        //prevArrow: $('.arrow_left_slide1'),
        //nextArrow: $('.arrow_right_slide1')
    });
    $('.slider_statistic').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 5,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        nextArrow: $('#last_page .container .slider2 .slide4 .content .center_block .arrow_bottom'),
        prevArrow: $('')
    });
    $('.slider_gallery').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        nextArrow: $('.btn_bottom'),
        prevArrow: $('')
    });
    $('.photo_slider').slick({
        dots: false,
        speed: 500,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('.arrow_left_photo'),
        prevArrow: $('.arrow_right_photo')
    });
});