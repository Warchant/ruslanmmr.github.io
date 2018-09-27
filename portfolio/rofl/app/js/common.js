$(function() {
    $("a").click(function() {
        $(this).addClass("hinge");
        setTimeout(function(){
             $("body").addClass("game_over");
        }, 1000);
    });
});