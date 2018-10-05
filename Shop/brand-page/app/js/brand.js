var flag = 1;

$(document).ready(function() {
    itemPrev();
    slider();
});
$(window).resize(function() {
    slider();
});

function itemPrev() {
    $(document).mousemove(function(e) {
        var X = e.pageX;
        var Y = $('.wrapper').width();
        var Z = Y - X;
        if (Z < 250) {
            $(".droppable_preview").addClass("left_var");
        } else if (Z > 250) {
            $(".droppable_preview").removeClass("left_var");
        }
    });
};


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