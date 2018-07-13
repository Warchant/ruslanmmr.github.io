
//Обработка клика на стрелку вправо        
$(document).on('click', ".carousel-button-right", function() {
            var carusel = ('.carousel');
            right_carusel(carusel);
            return false;
        });
        //Обработка клика на стрелку влево
        $(document).on('click', ".carousel-button-left", function() {
            var carusel = ('.carousel');
            left_carusel(carusel);
            return false;
        });

        function left_carusel(carusel) {
            var block_width = $(carusel).find('.block_news').outerWidth();
            $(carusel).find(".carousel-items .block_news").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
            $(carusel).find(".carousel-items").css({
                "left": "-" + block_width + "px"
            });
            $(carusel).find(".carousel-items .block_news").eq(-1).remove();
            $(carusel).find(".carousel-items").animate({
                left: "0px"
            }, 100);

        }

        function right_carusel(carusel) {
            var block_width = $(carusel).find('.block_news').outerWidth();
            $(carusel).find(".carousel-items").animate({
                left: "-" + block_width + "px"
            }, 100, function() {
                $(carusel).find(".carousel-items .block_news").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
                $(carusel).find(".carousel-items .block_news").eq(0).remove();
                $(carusel).find(".carousel-items").css({
                    "left": "0px"
                });
            });
        }