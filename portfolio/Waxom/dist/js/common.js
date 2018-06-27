$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        center: false,
        rewind: false,
        checkVisibility: true,
        dots: true,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 800,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',
        slideTransition: '',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    });
    $('.arrow_right').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.arrow_left').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })
});

$(document).ready(function() {
    $(".block .content").hover(function() {
        $(this).toggleClass("onhover");

    });
});
$(document).ready(function() {
    $(".tab").click(function(event) {
        event.preventDefault();
    });​
    $(".tab_item").not(":first").hide();
    $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn(500)
    }).eq(0).addClass("active");
});

$(document).ready(function() {
      $("#my-menu").mmenu({
      	navbar: {
      		title: 'WAXOM'
      	}   
      });

      var dataMmenu = $('#my-menu').data("mmenu");

      dataMmenu.bind('open:finish', function(){
         $('.hamburger').addClass('is-active');
      }).bind('close:finish', function(){
         $('.hamburger').removeClass('is-active');
      });
      $("#my-menu").on("click","a", function() {
                setTimeout(function() { 
                    dataMmenu.close();
                 }, 800);
            });
   });

$(document).ready(function(){
    $(".navbar, #my-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});
