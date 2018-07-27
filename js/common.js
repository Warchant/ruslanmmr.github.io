
$(document).ready(function() {
    $(".portf").click(function(event) {
        event.preventDefault();
        $("#portfolio").addClass("p_active");
        $("#home").removeClass("home_active_left");
        $("#home").addClass("home_active_right");
        $("#contacts").removeClass("c_active");
        $("#footer").addClass("f_active");
        $(".bg").addClass("bg_active");
        $("#contacts .content").addClass("c_hide");       
        setTimeout(function() {
            $(".hm").removeClass("active");
            $(".cntcts").removeClass("active");
            $(".portf").addClass("active");
            $("body").addClass("body_active");
        }, 700);
        setTimeout(function() {
            $('header').addClass("active_header_bg");
        }, 300);
    });
    $(".cntcts").click(function(event) {
        event.preventDefault();
        $("#portfolio").removeClass("p_active");
        $("#home").removeClass("home_active_right");
        $("#home").addClass("home_active_left");
        $("#contacts").addClass("c_active");
        $(".bg").removeClass("bg_active")
        $("body").removeClass("body_active");
        $('header').removeClass("active_header_bg");
        $("#contacts .content").removeClass("c_hide"); 
        setTimeout(function() {
            $(".hm").removeClass("active");
            $(".cntcts").addClass("active");
            $(".portf").removeClass("active");
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        }, 700);
        setTimeout(function() {
            $("#footer").removeClass("f_active");
        }, 200);
    });
    $(".hm").click(function(event) {
        event.preventDefault();
        $("#portfolio").removeClass("p_active");
        $("#home").removeClass("home_active_right");
        $("#home").removeClass("home_active_left");
        $("#contacts").removeClass("c_active");
        $("body").addClass("body_active");
        $("body").removeClass("body_active");
        $(".bg").removeClass("bg_active");
        $('header').removeClass("active_header_bg");
        $("#contacts .content").addClass("c_hide"); 
        setTimeout(function() {
            $("#footer").removeClass("f_active");
        }, 200);
        setTimeout(function() {
            $(".hm").addClass("active");
            $(".cntcts").removeClass("active");
            $(".portf").removeClass("active");
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        }, 700);
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