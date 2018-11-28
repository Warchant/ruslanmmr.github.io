$(document).ready(function() {
    slider();
    tab();
});
$(window).resize(function() {
    slider();
});
var flag = 1;
//слайдер предложений
function sliderInit() {
    $('.offer_block-content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
};
function slider() {
    if (document.documentElement.clientWidth < 769) {
        if (flag == 1) {
            sliderInit();
            flag = 2;
        }
    } else {
        if (flag == 2) {
            $(".offer_block-content").slick('unslick');
            flag = 1;
        }
    }
};

function tab() {
    $(".corporate_details .title").on('click', function() {
        if (document.documentElement.clientWidth < 768) {
           $(".dropdown_content").slideToggle(300);
           $(this).toggleClass("opened");
        }
    });
}
