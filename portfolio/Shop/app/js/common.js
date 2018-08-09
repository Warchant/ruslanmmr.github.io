$(function() {
    $('.owl1').each(function() {
        $(this).owlCarousel({
            items: 1,
            loop: true,
            dots: false,
        });
        $('.arrow_right').click(function() {
            $('.owl1').trigger('next.owl.carousel');
        })
        $('.arrow_left').click(function() {
            $('.owl1').trigger('prev.owl.carousel');
        })
    });
});
$(function() {
    $('.owl2').each(function() {
        $(this).owlCarousel({
            items: 3,
            loop: true,
            dots: false,
        });
        $('.arrow_right_owl2').click(function() {
            $('.owl2').trigger('next.owl.carousel');
        })
        $('.arrow_left_owl2').click(function() {
            $('.owl2').trigger('prev.owl.carousel');
        })
    });
});
$(function() {
    $('.owl3').each(function() {
        $(this).owlCarousel({
            items: 3,
            loop: true,
            dots: false,
        });
        $('.arrow_right_owl2').click(function() {
            $('.owl3').trigger('next.owl.carousel');
        })
        $('.arrow_left_owl2').click(function() {
            $('.owl3').trigger('prev.owl.carousel');
        })
    });
});

$(function() {
    $('.owl4').each(function() {
        $(this).owlCarousel({
            items: 7,
            loop: true,
            dots: false,
        });
        $('.arrow_right_owl4').click(function() {
            $('.owl4').trigger('next.owl.carousel');
        })
        $('.arrow_left_owl4').click(function() {
            $('.owl4').trigger('prev.owl.carousel');
        })
    });
});

$(".carousel_block").not(":first").hide();
        $(".shares .item").click(function() {
            $(".shares .item").removeClass("active_p").eq($(this).index()).addClass("active_p");
            $(".carousel_block").hide().eq($(this).index()).fadeIn(500)
        }).eq(0).addClass("active");

$(".about .tab_content").not(":first").hide();
        $(".about .item").click(function() {
            $(".about .item").removeClass("active_p").eq($(this).index()).addClass("active_p");
            $(".about .tab_content").hide().eq($(this).index()).fadeIn(500)
        }).eq(0).addClass("active");
      