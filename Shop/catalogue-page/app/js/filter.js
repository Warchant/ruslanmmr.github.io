$(document).ready(function() {
    count();
    brands();
    filter();
});

// Диапазоны
function brands() {
    instance = $range.data("ionRangeSlider");

    $input_from.on("change keyup", function() {
        var val = $(this).prop("value");

        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
    $input_to.on("change keyup", function() {
        var val = $(this).prop("value");

        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
}

//бренды и серии
function brands() {
    $('.brands .checkbox_item').on('change', function() {
        var chk = $(".brands").find('input[type=checkbox]:checked').length;
        if (chk == 1) {
            $('.filter .series').addClass("section_stab");
        } else {
            $('.filter .series').removeClass("section_stab");
        }
    });
    $('.brands .reset').click(function() {
        $('.filter .series').removeClass("section_stab");
        $('.filter .series .checkbox_item').prop('checked', false).removeClass('active');
        $('.filter .series .item').fadeOut();
        $(".filter .series .tab_title").siblings().slideUp(300);
        $(".filter .series .tab_title").removeClass("title_active");
    });

    $('.input_end, .input_start').on('input keyup', function(e) {
        $(this).addClass('active');
    });
}

//табы и кнопки
function filter() {
    $(".filter .tab_title .open_button, .filter .tab_title .section_title").on('click', function() {
        $(this).parents(".tab_title").toggleClass("title_active");
        if ($(this).parents(".tab_title").hasClass("title_active")) {
            $(this).parents(".tab_title").siblings().slideDown(300);
        } else {
            $(this).parents(".tab_title").siblings().slideUp(300);
        }
    });
    $(".filter .param_more").on('click', function() {
        $(this).siblings(".drop_down_list").slideToggle(300);
        $(this).toggleClass("param_more_active");
        if ($(this).hasClass("param_more_active")) {
            $(this).text("Свернуть");
        } else {
            $(this).text("Показать все");
        }
    });
    $(".filter_show_btn").on('click', function() {
        $(".left-sidebar").slideToggle(300).toggleClass("f_active");
        if ($(".left-sidebar").hasClass("f_active")) {
            $(this).text("Скрыть фильтр");
        } else {
            $(this).text("Фильтр");
        }
    });
}

//сброс, вывод товаров
function count() {
    var timer = setTimeout(function() {
        $('.found_amount').fadeOut();
    }, 3000);
    var $range = $(".js-range-slider"),
        $input_from = $(".input_start"),
        $input_to = $(".input_end"),
        instance,
        min = 0,
        max = 100000;

    $('.checkbox_item, .input_end, .input_start').on('change', function() {
        var pos = $(this).parent().offset();
        var posFilter = $(this).parents(".filter").offset();
        var countPos = pos.top - posFilter.top;
        clearTimeout(timer);
        timer = setTimeout(function() {
            $('.found_amount').fadeOut();
        }, 3000);
        $('.found_amount').css("top", countPos).show();
        if ($(this).prop('checked')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: min,
        to: max,
        hide_min_max: true,
        hide_from_to: true,
        grid: false,
        onStart: function(data) {
            $input_from.prop("value", data.from);
            $input_to.prop("value", data.to);

        },
        onChange: function(data) {
            $input_from.prop("value", data.from);
            $input_to.prop("value", data.to);
        },
        onFinish: function(data) {
            $(".range .item").fadeIn();
            $('.found_amount').css("top", "90px").show();
            clearTimeout(timer);
            timer = setTimeout(function() {
                $('.found_amount').fadeOut();
            }, 3000);
        }
    });

    $('.checkbox_item, .input_end, .input_start').on('change', function() {
        if ($(this).parents(".tab_content").find(".active").length) {
            $(this).parents(".tab_content").siblings(".tab_title").find(".item").fadeIn();
        } else {
            $(this).parents(".tab_content").siblings(".tab_title").find(".item").fadeOut();
        }
    });

    $('.filter .reset').on('click', function() {
        $('.found_amount').fadeOut();
        $(this).parents(".tab_title").siblings(".tab_content").find(".checkbox_item").prop('checked', false).removeClass('active');
        $(this).parents(".tab_title").siblings(".tab_content").find(".input_end").val(max).removeClass('active');
        $(this).parents(".tab_title").siblings(".tab_content").find(".input_start").val(min).removeClass('active');
        $(".js-range-slider").data("ionRangeSlider").update({
            from: min,
            to: max
        });
        $(this).parents(".item").fadeOut();
        $(this).parents(".tab_title").siblings().slideUp(300);
        $(this).parents(".tab_title").removeClass("title_active");
    });

}