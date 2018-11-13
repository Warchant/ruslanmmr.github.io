$(document).ready(function() {
    bannerSlider();
    labsSlider();
    brandsSlider();
    mobileNav();
    stockInit();
    capitalSlider();
});

$(window).resize(function() {
    stockInit();
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
        responsive: [{
                breakpoint: 1230,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
};

function labsSlider() {
    $('.slider_labs').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right'),
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};

function mobileNav() {
    $('.nav-btn a, .sub').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $(".mobile_nav_block").toggleClass("nav_active");
        $("body").toggleClass("body_active");
        $(".sub").fadeToggle(300);
    });
}

function stockSlider() {
    $('.stock_container').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.arrow_left-stock'),
        nextArrow: $('.arrow_right-stock'),
         responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
function capitalSlider() {
    $('.slider_capital').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.crystal-capital .arrow_left'),
        nextArrow: $('.crystal-capital .arrow_right'),
         responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
function jobSlider() {
    $('.job_container').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.arrow_left-job'),
        nextArrow: $('.arrow_right-job'),
         responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};

var flag = 1;

function stockInit() {
    if (document.documentElement.clientWidth < 769) {
        if (flag == 1) {
            stockSlider();
            jobSlider();
            flag = 2;
        }
    } else if (flag == 2) {
            $(".stock_container").slick('unslick');
            $(".job_container").slick('unslick');
            flag = 1;
    }
};
