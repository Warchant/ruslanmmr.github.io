$(document).ready(function() {
    HeightCards();
    sliderSidebar();
    moreSidebar();
    selectedSort();
});
$(window).resize(function() {
    $(".description_section").css("height", "auto");
    mh = 0;
    setTimeout(function() {
        HeightCards();
    }, 200);
});



//авто-высота карточек товаров
var mh = 0;

function HeightCards() {
    $(".description_section").each(function() {
        var h_block = parseInt($(this).height());
        if (h_block > mh) {
            mh = h_block;
        };
    });
    $(".description_section").height(mh);
};

//слайдер сайдбара
function sliderSidebar() {
    $('.slider_sidebar').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
};

//кнопки
function moreSidebar() {
    $(".popular_categories_block .param_more").on('click', function() {
        $(this).siblings(".dropdown_list").slideToggle(300);
        $(this).toggleClass("param_more_active");
        if ($(this).hasClass("param_more_active")) {
            $(this).text("Свернуть");
        } else {
            $(this).text("Все бренды");
        }
    });
};

function selectedSort() {
    $(".sort-line .selected_btn").on('click', function() {
        var drop = $(this).siblings(".sort_dropdown");
        if (drop.hasClass("open")) {
            drop.removeClass("open")
        } else {
            $('.sort_dropdown').removeClass("open");
            drop.addClass("open");
        }
    });
};