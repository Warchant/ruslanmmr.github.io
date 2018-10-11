$(document).ready(function() {
    navigationClick();
    homepageSlider();
    footerFunc();
    dopSliders();
    withCards();
    if (document.documentElement.clientWidth > 1025) {
        navigationScroll();
        lastSlider();
        gallerySlider();
        autoWith();
    }
    if (document.documentElement.clientWidth < 1026) {
        bgFixed();
        mobileScroll();
    }
});

var jqBar = $('#last_page').position().top;
var totalWheel = 0,
    once = 1;

//Вся навигация по кликам
function navigationClick() {
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
        $("#start_page").css("width", "0%");
        $("#header_top").removeClass("header_top_last");
        totalWheel = 700;
    });
    $('#header_nav .container .header_nav .right_section ul li a').click(function(event) {
        $(".header_nav").addClass("header_nav_transformed");
        $(".header_top").addClass("header_top_transformed");
        $("#start_page").addClass("active");
        $("#home_page").fadeOut(500);
        $("#last_page").fadeIn(500);
        $("#header_top").addClass("header_top_last");
        totalWheel = 901;
        once = 2;
        $("#start_page").css("width", "0%");
    });
    $('#header_top .header_top .logo a, #footer .logo a').click(function(event) {
        event.preventDefault();
        $(".header_nav").removeClass("header_nav_transformed");
        $(".header_top").removeClass("header_top_transformed");
        $("#last_page").hide();
        $("#home_page").fadeIn(500);
        $("#start_page").fadeIn(250);
        $("#header_top").removeClass("header_top_last");
        $("#start_page").removeClass("active");
        $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#start_page").css("width", "100%");
        totalWheel = 0;
    });
};

//Вся навигация по скроллу (только колесо мыши)
function navigationScroll() {
    window.onwheel = function(e) {
        var delta = e.deltaY;
        totalWheel += delta;
        if (totalWheel < 0) {
            totalWheel = 0;
            $("#start_page").removeClass("active");
            $("#start_page").css("width", "100%");
        } else if ((document.documentElement.clientWidth > 1025) && totalWheel > 0 && totalWheel < 700) {
            once = 1;
            $("#home_page").fadeIn(500);
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
};

//страница вторая(слайдеры и прочее)
function homepageSlider() {
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
                settings: {
                    dots: true,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.slider1').on('afterChange', function(event, slick, currentSlide) {
        jqBar = $('#last_page').position().top;
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
};

//третья страница
function lastSlider() {
    $('.slider2').slick({
        dots: false,
        infinite: false,
        speed: 300,
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
    $('#header_nav .right_section .link2, #last_page .custom_dots ul .dot2').click(function(e) {
        e.preventDefault();
        $('.slider2').slick('slickGoTo', 1);
        $("#last_page .active_bg").css("left", "-100%");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
        $("#last_page .custom_dots ul .dot2").addClass("active_dot");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link2").addClass("active_link");
    });
    $('#header_nav .right_section .link3, #last_page .custom_dots ul .dot3').click(function(e) {
        e.preventDefault();
        $('.slider2').slick('slickGoTo', 2);
        $("#last_page .active_bg").css("left", "-200%");
        $("#last_page .custom_dots ul .dot").removeClass("active_dot");
        $("#last_page .custom_dots ul .dot3").addClass("active_dot");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
        $("#header_nav .right_section .link3").addClass("active_link");
    });
}

//слайдер новостей первого блока
function dopSliders() {
    $('.slider_news').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow_left_slide1'),
        nextArrow: $('.arrow_right_slide1')
    });
    $('.photo_slider').slick({
        dots: false,
        speed: 500,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('.arrow_right_photo'),
        prevArrow: $('.arrow_left_photo'),
        responsive: [{
                breakpoint: 1025,
                settings: {
                    swipe: true
                }
            },
            {
                breakpoint: 0,
                settings: {}
            }
        ]
    });
}

function gallerySlider() {
    $('.slider_gallery').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        nextArrow: $('.btn_bottom'),
        prevArrow: $('')
    });
}

function mobileScroll() {
    var $page = $('html, body');
    $('#mobile_nav ul a').click(function() {
        $(".nav-btn a").removeClass("a_active");
        $("#mobile_nav").removeClass("active_nav");
        $("body").removeClass("body_active");
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
}

function bgFixed() {
    $(function() {
        var bg = $('#last_page .active_bg');
        var jqBarStatus = true;
        $(window).scroll(function() {
            if (($(window).scrollTop() > jqBar)) {
                bg.addClass("active_bg_fixed");
                jqBarStatus = false;
            } else if (($(window).scrollTop() < jqBar) && jqBarStatus == false) {
                bg.removeClass("active_bg_fixed");
                jqBarStatus = true;
            }
        });
    });
}


//блоки колезеев
function placeTabs() {
    $('.slider2 .place_block').click(function() {
        $(".slider2 .place_block").removeClass("active_place");
        $(this).addClass("active_place");
    });

    $("#last_page .container .slide3 .top_title span").not(":first").hide();
    $("#last_page .slide3 .slide_content").not(":first").hide();
    $("#last_page .place_block").click(function() {
        $("#last_page .place_block").removeClass("active_place").eq($(this).index()).addClass("active_place");
        $("#last_page .slide3 .slide_content").hide().eq($(this).index()).fadeIn(1000);
        $("#last_page .container .slide3 .top_title span").hide().eq($(this).index()).fadeIn(1000)
    });
};

function sliderPlace() {
    $('.place_slider_1').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('#last_page .slide3 .tab_container .btn_right1'),
        prevArrow: $('#last_page .slide3 .tab_container .btn_left1')
    });

    $('.place_slider_2').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('#last_page .slide3 .tab_container .btn_right2'),
        prevArrow: $('#last_page .slide3 .tab_container .btn_left2')
    });
    $('.place_slider_3').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('#last_page .slide3 .tab_container .btn_right3'),
        prevArrow: $('#last_page .slide3 .tab_container .btn_left3')
    });
};

function autoWith() {
    $('.slide3 .place_block .img_block').width($(".slide3 .place_block .img_block").height());
}

function withCards() {
    $.when(sliderPlace()).then(function() {
        setTimeout(function() {
            placeTabs();
        }, 1000);
    });
};


function footerFunc() {
    $(document).mousemove(function(e) {
        var Y = e.pageY;
        var X = $('#wrapper').height();
        var Z = X - Y;
        if (Z < 15) {
            $("#header_nav, #footer").addClass("active_footer");
        } else if (Z > 154) {
            $("#header_nav, #footer").removeClass("active_footer");
        }
    });
};