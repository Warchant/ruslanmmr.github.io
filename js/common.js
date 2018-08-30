 $("header .content .btn").click(function(event) {
             event.preventDefault();
            $("header .content .btn").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_name").hide().removeClass("animated").eq($(this).index()).addClass("animated").fadeIn(1000);
        })

$(document).ready(function() {
    $(".portf").click(function(event) {
        $("#footer").addClass("f_active");
        setTimeout(function() {
            $('header').addClass("active_header_bg");
        }, 300);
    });
    $(".cntcts").click(function(event) {
        setTimeout(function() {
            $("#footer").removeClass("f_active");
        }, 200);
    });
    $(".hm").click(function(event) {
        $('header').removeClass("active_header_bg");
        setTimeout(function() {
            $("#footer").removeClass("f_active");
        }, 200);
    });
});

$(document).ready(function() {
    $(".block .content").hover(function() {
        $(this).toggleClass("onhover");

    });
});

$(document).ready(function() {
    particlesJS.load('particles-js', '../libs/particles.js-master/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
});


$(document).ready(function() {
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var up = false;
    var newscroll;
    mywindow.scroll(function() {
        newscroll = mywindow.scrollTop();
        if (newscroll > mypos && !up) {
            $('header').stop().addClass("active_header");
            up = !up;
            console.log(up);
        } else if (newscroll < mypos && up) {
            $('header').stop().removeClass("active_header");
            up = !up;
        }
        mypos = newscroll;
    });
});

