$(document).ready(function() {
    HeightCards();
    sliderSidebar();
    moreSidebar();
    selectedSort();
    selectedCount();
});
$(window).resize(function() {
	  $(".description_section").css("height", "auto");
	  mh = 0;
	  setTimeout(function(){
        HeightCards();
    }, 200);
});

var mh = 0;
//авто-высота карточек товаров
function HeightCards() {
    $(".description_section").each(function() {
        var h_block = parseInt($(this).height());
        if (h_block > mh) {
            mh = h_block;
        };
    });
    $(".description_section").height(mh);
};


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
	  $(".sort-block, .sort-block .selected").on('click', function() {
         $('.sort-block').toggleClass("open");
         $('.delivery-count').removeClass("open");
	  });
};
function selectedCount() {
	  $(".delivery-count, .delivery-count .selected").on('click', function() {
         $('.delivery-count').toggleClass("open");
         $('.sort-block').removeClass("open");
	  });
};
