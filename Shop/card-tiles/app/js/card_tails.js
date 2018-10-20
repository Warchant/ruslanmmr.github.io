$(document).ready(function() {
    HeightCards();
    categoryTabs();
    choseText();
    mobileTabs();
    categoryScroll();
    modalOpen();
    addButton();
});
$(window).resize(function() {
    resizeNotification();
    $(".description_section").css("height", "auto");
    mh = 0;
    setTimeout(function() {
        HeightCards();
    }, 200);
    if (document.documentElement.clientWidth > 576) {
        $(".sort_line .nav_tab").css("display", "flex");
    } else {
        $(".sort_line .nav_tab").css("display", "none");
    }
});

$.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
};

function modalOpen() {
    $(".modal_nav .btn_open").click(function() {
        $(".modal_nav").toggleClass("active_nav");
    });
}

function addButton() {
    $(".card_content .add_btn").click(function() {
        if ($(this).hasAttr("data-balloon")) {
            $(".card_content .add_btn").removeAttr("data-balloon");
            $(this).removeClass("add_btn_active");
        } else {
            $(this).addClass("add_btn_active");
            setTimeout(function() {
                 $(".add_btn_active").attr("data-balloon", "Убрать товар из комплекта");
            }, 1000);
        }
    });
}

function mobileTabs() {
    $(document).mouseup(function(e) {
        var block = $(".current_choise");
        var block2 = $(".sort_line .nav_tab a");
        if (!block.is(e.target) && block.has(e.target).length === 0 && !block2.is(e.target) && block2.has(e.target).length === 0 && (document.documentElement.clientWidth < 576)) {
            $(".current_choise").removeClass("active_arr");
            $(".sort_line .nav_tab").fadeOut(0);
        }
    });
    $(".current_choise").click(function() {
        if (document.documentElement.clientWidth < 576) {
            $(".sort_line .nav_tab").fadeToggle(0);
            $(this).toggleClass("active_arr");
        }
    });
    $(".sort_line .nav_tab a").click(function() {
        if (document.documentElement.clientWidth < 576) {
            $(".sort_line .nav_tab").fadeToggle(0);
            $(".current_choise").toggleClass("active_arr");
        }
    });
}

//авто-высота карточек товаров
var mh = 0;

function HeightCards() {
    $(".card_content .title_section").each(function() {
        var h_block = parseInt($(this).height());
        if (h_block > mh) {
            mh = h_block;
        };
    });
    $(".card_content .title_section").height(mh);
};

function resizeNotification() {
    var scrollDiv = document.createElement("div");

    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    if ($(window).width() < (568 - scrollbarWidth)) {
        $('#notification_container').insertAfter('.gallery_information');
    } else {
        $('#notification_container').insertAfter('#gallery');
    }
}

function choseText() {
    $(".sort_line .nav_tab a").click(function() {
        var txt = $(this).text();
        $(".current_choise").find(".txt").text(txt);
    });
}


function categoryTabs() {
    $(".tiles_catalogue-content").not(":first").hide();
    $(".sort_line .nav_tab a").click(function(e) {
        e.preventDefault();
        $(".sort_line .nav_tab a").removeClass("active_link").eq($(this).index()).addClass("active_link");
        $(".tiles_catalogue-content").hide().eq($(this).index()).fadeIn(300)
    })
}

function categoryScroll() {
    $(".to_catalog_btn").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 600);
    });
}