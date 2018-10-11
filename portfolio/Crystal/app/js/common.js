$(document).ready(function() {
     bannerSlider();
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