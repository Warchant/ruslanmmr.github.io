var flag = 1;

$(document).ready(function() {
    slider();
    brandSlider();
    brandNav();
});
$(window).resize(function() {
    slider();
});

//слайдер популярных коллекций
function sliderInit() {
    $('.popular_collections_content').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right')
    });
};

function slider() {
    if (document.documentElement.clientWidth < 578) {
        if (flag == 1) {
            sliderInit();
            flag = 2;
        }
    } else {
        if (flag == 2) {
            $(".popular_collections_content").slick('unslick');
            flag = 1;
        }
    }
};

function brandSlider() {
    $('.brand_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
};



function brandNav() {
    var pane = $('.scroll-pane');
    pane.jScrollPane(
        {
            showArrows: true,
            animateScroll: true
        }
    );
    var api = pane.data('jsp');

    $('#but-scroll-to').bind(
        'click',
        function()
        {
            // Note, there is also scrollToX and scrollToY methods if you only
            // want to scroll in one dimension
            api.scrollTo(parseInt($('#toX').val()), parseInt($('#toY').val()));
            return false;
        }
    );

    $('#but-scroll-by').bind(
        'click',
        function()
        {
            // Note, there is also scrollByX and scrollByY methods if you only
            // want to scroll in one dimension
            api.scrollBy(parseInt($('#byX').val()), parseInt($('#byY').val()));
            return false;
        }
    );
};