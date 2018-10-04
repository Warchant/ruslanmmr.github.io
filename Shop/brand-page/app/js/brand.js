$(document).ready(function() {
    itemPrev();
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

function slider() {
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

var flag = 1;

if (document.documentElement.clientWidth < 558) {
    slider();
}

$(window).resize(function() {
    if (document.documentElement.clientWidth < 558) {
        if (flag == 1) {
            slider();
            flag = 0;
            return false;
        }
    } else {
        flag = 0;
        if (flag == 0) {
            $(".popular_collections_content").slick('unslick');
            flag = 1;
            return false;
        }
    }
});
