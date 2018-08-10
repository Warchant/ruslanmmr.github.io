jQuery:
            $(".tab_item").not(":first").hide();
        $(".wrapper .tab").click(function() {
            $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_item").hide().eq($(this).index()).fadeIn(300)
        }).eq(0).addClass("active");