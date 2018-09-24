$(document).ready(function() {
    $(".filter .tab_title").on('click', function() {
        $(this).toggleClass("title_active");
        if ($(this).hasClass("title_active")) {
            $(this).siblings().slideDown(300);
        } else {
            $(this).siblings().slideUp(300);
        }
    });

    //кнопки 'показать все'
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
        if ( $(".left-sidebar").hasClass("f_active") ) {
            $(this).text("Скрыть фильтр");
        } else {
            $(this).text("Фильтр");
        }
    });

    // Диапазоны
    var $range = $(".js-range-slider"),
        $input_from = $(".input_start"),
        $input_to = $(".input_end"),
        instance,
        min = 0,
        max = 100000;

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
        onFinish: function (data) {
              $(".range .item").fadeIn();
        }
    });

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



    $('.checkbox_item').on('change', function() {
        if ($(this).prop('checked')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });


    $('.input_end, .input_start').on('input keyup', function(e) {
       $(this).addClass('active');
});


    $('.checkbox_item, .input_end, .input_start').on('change', function() {
        if ($(this).parents(".tab_content").find(".active").length) {
            $(this).parents(".tab_content").siblings(".tab_title").find(".item").fadeIn();
        } else {
            $(this).parents(".tab_content").siblings(".tab_title").find(".item").fadeOut();
        }
    });
    $('.filter .reset').on('click', function() {
        $(this).parents(".tab_title").siblings(".tab_content").find(".checkbox_item").prop('checked', false).removeClass('active');
        $(this).parents(".tab_title").siblings(".tab_content").find(".input_end").val(max).removeClass('active');
        $(this).parents(".tab_title").siblings(".tab_content").find(".input_start").val(min).removeClass('active');
        $(".js-range-slider").data("ionRangeSlider").update({
            from: min,
            to: max
        });
        $(this).parents(".item").fadeOut();
    });

});