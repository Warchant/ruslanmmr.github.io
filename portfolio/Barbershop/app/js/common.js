$(document).ready(function() {
    $('.nav-btn a').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#navigation").toggleClass("nav_active");
        $("body").toggleClass("wrapper_active");
    });
});


$(document).ready(function() {
	  $(".moscow_page, .spb_page, .reg_page").hide();
	  $(".bg_page_other").hide();
    $('#home .tab_names .msc').click(function() {
        $("#home .tab_names p").removeClass("active");
    	  $(this).addClass("active");
    	  $(".home_page, .spb_page, .reg_page").hide();
    	  $(".moscow_page").fadeIn(1000);
    	  $(".bg_page_home").hide();
    	  $(".bg_page_other").fadeIn(1000);
    });
     $('#home .tab_names .spb').click(function() {
        $("#home .tab_names p").removeClass("active");
    	  $(this).addClass("active");
    	  $(".home_page, .moscow_page, .reg_page").hide();
    	  $(".spb_page").fadeIn(1000);
    	  $(".bg_page_home").hide();
    	  $(".bg_page_other").fadeIn(1000);
    });
      $('#home .tab_names .reg').click(function() {
        $("#home .tab_names p").removeClass("active");
    	  $(this).addClass("active");
    	  $(".home_page, .spb_page, .moscow_page").hide();
    	  $(".reg_page").fadeIn(1000);
    	  $(".bg_page_home").hide();
    	  $(".bg_page_other").fadeIn(1000);
    });
      $('#header .logo a').click(function() {
        $("#home .tab_names p").removeClass("active");
    	  $(".reg_page, .spb_page, .moscow_page").hide();
    	  $(".home_page").fadeIn(1000);
    	  $(".bg_page_home").removeClass("other");
    	  $(".bg_page_other").hide();
    	  $(".bg_page_home").fadeIn(1000);
    });
});