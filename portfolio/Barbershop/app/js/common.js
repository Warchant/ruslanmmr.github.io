$(document).ready(function() {
    $('.nav-btn a').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#navigation").toggleClass("nav_active");
        $("body").toggleClass("wrapper_active");
    });
    $('#navigation .link').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#navigation").toggleClass("nav_active");
        $("body").removeClass("wrapper_active");
    });
});
$(".bg_page_dop").hide();
$(document).ready(function() {
    $(".moscow_page, .spb_page, .reg_page").hide();
    $(".bg_page_other").hide();
    $(".bg_page_other .msk, .bg_page_other .spb, .bg_page_other .reg, .bg_page_other .invest").hide();
    $('#home .tab_names .msc, #navigation .cena').click(function() {
        $("#home .tab_names p").removeClass("active");
        $("#home .tab_names .msc").addClass("active");
        $(".home_page, .spb_page, .reg_page").hide();
        $(".moscow_page").fadeIn(1000);
        $(".bg_page_home").hide();
        $(".bg_page_other").fadeIn(1000);
        $(".bg_page_other .spb, .bg_page_other .reg, .bg_page_other .invest").hide();
        $(".bg_page_other .msk").fadeIn(1000);
    });
    $('#home .tab_names .spb').click(function() {
        $("#home .tab_names p").removeClass("active");
        $(this).addClass("active");
        $(".home_page, .moscow_page, .reg_page").hide();
        $(".spb_page").fadeIn(1000);
        $(".bg_page_home").hide();
        $(".bg_page_other").fadeIn(1000);
        $(".bg_page_other .msk, .bg_page_other .reg").hide();
        $(".bg_page_other .spb").fadeIn(1000);
    });
    $('#home .tab_names .reg').click(function() {
        $("#home .tab_names p").removeClass("active");
        $(this).addClass("active");
        $(".home_page, .spb_page, .moscow_page").hide();
        $(".reg_page").fadeIn(1000);
        $(".bg_page_home").hide();
        $(".bg_page_other").fadeIn(1000);
        $(".bg_page_other .msk, .bg_page_other .spb").hide();
        $(".bg_page_other .reg").fadeIn(1000);
    });
    $('#header .logo a').click(function() {
        $("#home, .bg_page_home").fadeIn(1000);
        $(".tab_page").not(":first").hide();
        $("#home .tab_names p").removeClass("active");
        $(".reg_page, .spb_page, .moscow_page").hide();
        $(".home_page").fadeIn(1000);
        $(".bg_page_home").removeClass("other");
        $(".bg_page_other, .bg_page_dop").hide();
        $(".bg_page_home").fadeIn(1000);
        $("#home").addClass("animated");
    });
});




$('#navigation .dop').click(function() {
    $(".bg_page_other, .bg_page_home").hide();
    $(".bg_page_dop").fadeIn(1000);
});
$('#navigation .inv').click(function() {
    $(".bg_page_other .msk, .bg_page_other .spb, .bg_page_other .reg").hide();
    $(".bg_page_other .invest").fadeIn(1000);
});
$('#navigation .other').click(function() {
    $(".bg_page_dop, .bg_page_home").hide();
    $(".bg_page_other").fadeIn(1000);
});
$('#navigation .hidden_txt').click(function() {
    $(".bg_page_other .msk, .bg_page_other .spb, .bg_page_other .reg, .bg_page_other .invest").hide();
});


//табы проектов
$("#projects .img .img_box").hide();
$("#projects .projects_content .block").click(function() {
    $("#projects .bottom_projects").addClass("bottom_active")
    $("#projects .projects_content .block").removeClass("active").eq($(this).index()).addClass("active");
            $("#projects .img .img_box").hide().eq($(this).index()).delay(300).fadeIn(100);
});



$(".tab_page").not(":first").hide();
$("#navigation .link").click(function(event) {
    event.preventDefault();
    $(this).removeClass("link");
    $(".tab_page").hide().eq($(this).index()).fadeIn(1000).addClass("animated")
}).eq(0).addClass("active ");


$("#projects .colored").hover(function() {
    if ( $(this).hasClass("active") ) {

    } else {
        $(this).toggleClass("colored_hover");
    }
});

$("#projects .block").click(function() {
    $("#projects .colored").removeClass("colored_hover");
    $("#projects .colored").removeClass("active");
    $(this).addClass("colored_hover");
    $(this).addClass("active");
});