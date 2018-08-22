$('.slider1').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.arrow_left1'),
  nextArrow: $('.arrow_righ1')
        });
        $('.slider1').slick('slickGoTo', 1)

        $("#home_page").hide();


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


    $('#header_nav .first_link .link a').click(function(event) {
        event.preventDefault();
        $(".header_nav").addClass("header_nav_transformed");
        $(".header_top").addClass("header_top_transformed");
        $("#start_page").hide();
        $("#home_page").fadeIn(1000);
        $(".slider1").slick('reinit');
    });

    $('#header_top .header_top .logo a').click(function(event) {
        event.preventDefault();
        $(".header_nav").removeClass("header_nav_transformed");
        $(".header_top").removeClass("header_top_transformed");
        $("#home_page").hide();
        $("#start_page").fadeIn(1000);
        $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
        $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
        $("#header_nav .link_trigger a").parent().removeClass("active_link");
    });

    $(window).bind('mousewheel DOMMouseScroll', function(event) {
        if ((document.documentElement.clientWidth > 1023) && event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            event.preventDefault();
            $(".header_nav").removeClass("header_nav_transformed");
            $(".header_top").removeClass("header_top_transformed");
            $("#home_page").hide();
            $("#start_page").fadeIn(1000);
            $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
            $("#header_nav .left_section .icons_block a, #header_nav .first_link .link a").removeClass("active_icon");
            $("#header_nav .link_trigger a").parent().removeClass("active_link");

        } else if (document.documentElement.clientWidth > 1023) {
            event.preventDefault();
            $(".header_nav").addClass("header_nav_transformed");
            $(".header_top").addClass("header_top_transformed");
            $("#start_page").hide();
            $("#home_page").fadeIn(1000);
            $("#header_nav .first_link .link a").parent().addClass("active_link");
            $("#header_nav .first_link .link a").addClass("active_icon");
            $(".slider1").slick('reinit');
        }
    });
});