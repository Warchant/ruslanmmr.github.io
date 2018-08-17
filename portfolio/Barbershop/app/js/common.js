$(document).ready(function() {
    $('.nav-btn a').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#navigation").toggleClass("nav_active");
        $("body").toggleClass("wrapper_active");
    });
    $('#navigation .cena').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#navigation").toggleClass("nav_active");
        $("body").removeClass("wrapper_active");
    });
    $('#navigation .contacts').click(function(event) {
        event.preventDefault();
        $(".nav-btn a").toggleClass("a_active");
        $("#navigation").toggleClass("nav_active");
        $("body").removeClass("wrapper_active");
    });
});

$(document).ready(function() {
	  $(".moscow_page, .spb_page, .reg_page").hide();
	  $(".bg_page_other").hide();
      $("#contacts_tab").hide();
    $('#home .tab_names .msc, #navigation .cena').click(function() {
        $("#home .tab_names p").removeClass("active");
    	  $("#home .tab_names .msc").addClass("active");
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
        $("#contacts_tab").hide();
         $("#home, .bg_page_home").fadeIn(1000);
        $("#home .tab_names p").removeClass("active");
    	  $(".reg_page, .spb_page, .moscow_page").hide();
    	  $(".home_page").fadeIn(1000);
    	  $(".bg_page_home").removeClass("other");
    	  $(".bg_page_other").hide();
    	  $(".bg_page_home").fadeIn(1000);
    });
      $('#navigation .contacts').click(function() {
          $("#home, .bg_page_home").hide();
          $("#contacts_tab").fadeIn(1000);
    });
    $('#navigation .cena').click(function() {
           $("#contacts_tab").hide();
         $("#home").fadeIn(1000);
    });
    $('#navigation .current').click(function(event) {
         event.preventDefault();
           $("#contacts_tab").hide();
         $("#home").fadeIn(1000);
         $(".nav-btn a").toggleClass("a_active");
        $("#navigation").toggleClass("nav_active");
        $("body").removeClass("wrapper_active");
    });
});


//табы проектов

$("#home .img .img_box").not(":first").hide();
        $("#home .projects_content .block").click(function() {
            $("#home .projects_content .block").removeClass("active").eq($(this).index()).addClass("active");
            $("#home .img .img_box").hide().eq($(this).index()).fadeIn(300)
}).eq(0).addClass("active");