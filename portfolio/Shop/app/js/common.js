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
        asNavFor: '.slider-nav',
        responsive: [{
                breakpoint: 1920,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    fade: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    dots: true,
                    fade: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    fade: false,
                    dots: true
                }
            }
        ]
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        asNavFor: '.slider-for',
        dots: false,
        infinite: true,
        arrows: false,
        focusOnSelect: true,
    });
    $('.btn_right .btn').on('click', function() {
        $('.slider-nav').slick('slickNext');
    });
    $('.btn_left .btn').on('click', function() {
        $('.slider-nav').slick('slickPrev');
    });
});

$(document).ready(function() {
    $('.slider_bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 1920,
                settings: {
                    dots: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    fade: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    fade: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.carousel_block .btn_right').on('click', function() {
        $('.slider_bottom').slick('slickNext');
    });
    $('.carousel_block .btn_left').on('click', function() {
        $('.slider_bottom').slick('slickPrev');
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

jQuery(function($) {
    $("#tel").mask("+7( 999 ) 999-99-99");
});

//табы

$(".tab_block").not(":first").hide();
$(".tab_name .tab_item").click(function() {
    $(".tab_name .tab_item").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_block").hide().eq($(this).index()).fadeIn(300)
}).eq(0).addClass("active");

//кнопка кабинета

$(document).ready(function() {
    $('.btn_cabinet a').click(function(event) {
        event.preventDefault();
        $(".btn_cabinet a").toggleClass("a_active");
        $(".cabinet_block").toggleClass("cabinet_block_active");

    });
});

//кнопка зфгрузки

$(document).ready(function() {
    $('.upload_block .btn').click(function(event) {
        event.preventDefault();
        $(".upload_content").toggleClass("upload_content_active");

    });
});

//комменты

$(".reviews .tab_item").not(":first").hide();
$(".tab_name_reviews").click(function() {
    $(".tab_name_reviews").removeClass("active").eq($(this).index()).addClass("active");
    $(".reviews .tab_item").hide().eq($(this).index()).fadeIn(300)
}).eq(0).addClass("active");

//скролл по табам

$(window).resize(function() {
    if (document.documentElement.clientWidth < 569) {
        $('#card .tab_item').on('click', function() {
            $('html,body').animate({ scrollTop: $('#card .tab_content').offset().top + "px" }, { duration: 100});
        });
    }
});