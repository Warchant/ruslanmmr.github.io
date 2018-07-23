var x = 1;

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 120) {
            $("#home .about").addClass("hidden");
            $("#home .bg").addClass("bg_active");
            $("#home .arrow").addClass("hidden");
            $("#portfolio h2").css('color', 'rgb(20, 20, 20)');
            
        } else {
            $("#home .bg").removeClass("bg_active");
            $("#home .about").removeClass("hidden");
            $("#home .arrow").removeClass("hidden");
            $("#portfolio h2").css('color', 'transparent');
            $("#wrapper").css('transition', '.2s');
        }
    });
});

$(document).ready(function(){
    $('.arrow_a, .logo a').click( function(){ 
    var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
        return false; 
    });
});

$(document).ready(function() {
    $(".block .content").hover(function() {
        $(this).toggleClass("onhover");

    });
});



$(document).ready(function() {
    $('.nav-btn a').click(function(event) {
        event.preventDefault();
        $(this).toggleClass("a_active");
        if(x == 1) {
            $("#nav")
                    .css('display', 'block')
                    .animate({ opacity: 1 }, 200);
            x = 2;
        } else {
            $("#nav")
                    .animate({ opacity: 0 }, 200,
                        function() {
                            $("#nav").css('display', 'none');
                        });
             x = 1;
        }
    });
});