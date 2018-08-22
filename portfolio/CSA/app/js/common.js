$(function(){
  $('#home_page .logo_content').width($('.logo_content').height());

  $(window).resize(function(){
    $('#home_page .logo_content').width($('.logo_content').height());
  });
});

$('.nav-btn a').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#mobile_nav").toggleClass("active_nav");
        $("body").toggleClass("body_active");
    });

$('#header_nav .link_trigger a').click(function(event) {
	  event.preventDefault();
	  $("#header_nav .link_trigger a").parent().removeClass("active_link");
    $(this).parent().addClass("active_link");
});