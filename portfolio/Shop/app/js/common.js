//Всплывающие картинки

$('.popup_img').magnificPopup({
    type: 'image'
});



$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        asNavFor: '.slider-for',
        dots: false,
        infinite: true,
        arrows: false,
        focusOnSelect: true
    });
    $('.btn_right .btn').on('click', function() {
        $('.slider-nav').slick('slickNext');
    });
    $('.btn_left .btn').on('click', function() {
        $('.slider-nav').slick('slickPrev');
    });
});



//mobule nav

$(document).ready(function() {
    $('.nav-btn a').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#mobile_nav").toggleClass("opened");
    });
});

//всплывающее окно

$(document).ready(function() {
    $('.link .link3, .close_icon').click(function(event) {
        event.preventDefault();
        $(".popup").toggleClass("popup_active");
    });
});

//маска номера

   jQuery(function($){
   $("#tel").mask("+7( 999 ) 999-99-99");
   });