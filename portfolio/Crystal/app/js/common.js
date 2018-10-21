$(document).ready(function() {
     bannerSlider();
     labsSlider();
     brandsSlider();
});

function bannerSlider() {
    $('.banner_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        draggable: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
};

function brandsSlider() {
    $('.slider_brands').slick({
        dots: false,
        arrows: true,
        infinite: true,
        draggable: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.arrow_left_brands'),
        nextArrow: $('.arrow_right_brands'),
    });
};

function labsSlider() {
    $('.slider_labs').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right'),
    });
};