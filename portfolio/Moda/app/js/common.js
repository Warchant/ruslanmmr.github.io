 //видео фон
 $(document).ready(function(){
    $('.my-background-video').bgVideo({
        showPausePlay: false,
        fullScreen: true,
    });
    $('.element-with-video-bg').css('opacity', '1');
});
//

$(document).ready(function() {
            $('.nav a').hover(function() {
                    $(this).toggleClass("active");
                    $(this).next(".bg").toggleClass("activebg");
                });
            });

$(document).ready(function() {
    $('.nav-btn a, .sub').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $(".mobile_nav").toggleClass("nav_active");
        $("body").toggleClass("body_active");
        $(".sub").toggleClass("sub_active");
    });
});

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        center: false,
        rewind: false,
        checkVisibility: true,
        dots: false,

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

        responsive:{
        0:{
            items:1,
            nav:false
        },
        480:{
            items:2,
            nav:false
        },
        768:{
            items:3,
            nav:false
        },
        1170:{
            items:4,
            nav:false,
        }
    },
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
    $('.arrow_r').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.arrow_l').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })
});