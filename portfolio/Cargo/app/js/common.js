$(document).ready(function() {
    var owl = $('.owl1');
    owl.owlCarousel({
        items: 1,
        loop: true,
        center: false,
        rewind: false,
        checkVisibility: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,
        autoHeight: true,

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
});




var owl = $('.owl-carousel');
// Случаешь события карусели:
owl.on('changed.owl.carousel', function(event) {
  var item = event.page.index;
  if (item === 1 - 1) {
       $('.number_slide').text(item + 1);
  } else if (item === 2 - 1) {
  	   $('.number_slide').text(item + 1);
  	   $('.hint').addClass("hint_hidden");
  } else if (item === 3 - 1) {
  	   $('.number_slide').text(item + 1);
  }
})

$(function(){
  $('.owl2').each(function(){
    $(this).owlCarousel({
    	items: 1,
        loop: true,
dots: false,
    });
    $('.arrow_right').click(function() {
        $('.owl2').trigger('next.owl.carousel');
    })
  });
});

$(function(){
  $('.owl3').each(function(){
    $(this).owlCarousel({
    	items: 1,
        loop: true,
dots: false,
    });
    $('.arrow_left').click(function() {
        $('.owl3').trigger('prev.owl.carousel');
    })
  });
});


//табы

$(".tab_item").not(":first").hide();
        $(".tab_name").click(function() {
            $(".tab_name").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_item").hide().eq($(this).index()).fadeIn(300)
        }).eq(0).addClass("active");
        $(".btns a").click(function(e) {
        	  e.preventDefault();
            $(".btns a").removeClass("active").eq($(this).index()).addClass("active");
        }).eq(1).addClass("active");

$(document).ready(function(){
        var $menu = $("header");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 5){
                $menu.addClass("fixed");
            } else if($(this).scrollTop() <= 5) {
                $menu.removeClass("fixed");
            }
        });
    });