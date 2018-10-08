var flag = 1;
var init_ind = 1;
var c_with_static = $(".brand_categories_block .categories_list").width();

$(document).ready(function() {
    slider();
    brandSlider();
    brandSliderInit();
    navFixed();
});
$(window).resize(function() {
    slider();
    brandSliderInit();
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


function brandSliderInit() {
    var p_with = $(".brand_categories_block .categories_nav").width();
    var c_with = $(".brand_categories_block .categories_list").width();
    var list = $(".brand_categories_block .categories_list");
    if ( c_with > p_with ) {
            if (init_ind == 1) {
                brandNavSlider();
                list.addClass("init");
                init_ind = 2;
            }
    } else if ( c_with_static < p_with ) {
        if ( init_ind == 2 ) {
                $(".categories_list").slick('unslick');
                list.removeClass("init");
                init_ind = 1;
            }
    }
}

function brandNavSlider() {
    $('.categories_list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        slidesToScroll: 5,
        focusOnSelect: true
    });
}

function navFixed() {
    $(function () {
    var jqBar = $('.brand_categories_block .categories_nav').position().top;
    var nav = $('.brand_categories_block .categories_nav');
    var height = nav.height();
    var brand = $('.brand_categories_block');
    var jqBarStatus = true;
    $(window).scroll(function() {
        if (($(window).scrollTop() > jqBar) && jqBarStatus) { 
            brand.addClass("brand_categories_fixed");
            nav.addClass("fixed");
            jqBarStatus = false;
        } else if (($(window).scrollTop() < jqBar) && jqBarStatus == false) {
            nav.removeClass("fixed");
            brand.removeClass("brand_categories_fixed");
            jqBarStatus = true;
        }
    });
});
}