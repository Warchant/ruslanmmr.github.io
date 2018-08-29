$('.popup_img').magnificPopup({
    type: 'image'
    // other options
});

$('.btn').magnificPopup({
    items: {
        src: '#popup',
        type: 'inline'
    }
});

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 2,
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

        responsive: {
            768: {
            },
            100: {
                items: 1
            }
        }
    });
});