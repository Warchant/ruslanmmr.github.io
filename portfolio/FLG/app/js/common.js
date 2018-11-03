$(document).ready(function() {
    $('.nav-btn a, .sub').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $(".nav-container").toggleClass("nav_active");
        $("body").toggleClass("body_active");
        $(".sub").fadeToggle(300);
    });
});
