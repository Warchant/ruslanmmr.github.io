$(function() {
    $("a").click(function() {
        $(this).addClass("hinge");
        setTimeout(function(){
             $(".post").addClass("game_over");
        }, 1000);
         setTimeout(function(){
             $(".lin1").addClass("active");
        }, 2000);
          setTimeout(function(){
             $(".lin2").addClass("active");
        }, 3000);
           setTimeout(function(){
             $(".lin3").addClass("active");
        }, 4000);
            setTimeout(function(){
             $(".lin4").addClass("active");
        }, 5000);
        setTimeout(function(){
             $(".post").addClass("end");
        }, 6000);
        setTimeout(function(){
             $(".post").addClass("hinge");
        }, 7000);
    });
});