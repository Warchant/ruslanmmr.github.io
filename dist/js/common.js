var x = 1;

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 120) {
            $("#home .about").addClass("hidden");
            $("#home .bg").addClass("bg_active");
            $("#portfolio h2").css('color', 'rgb(20, 20, 20)');
            
        } else {
            $("#home .bg").removeClass("bg_active");
            $("#home .about").removeClass("hidden");
            $("#portfolio h2").css('color', 'transparent');
            $("#wrapper").css('transition', '.2s');
        }
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