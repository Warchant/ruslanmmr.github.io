$(document).ready(function() {
  choiseTabs();
  scrollToTabs();
});
$(window).resize(function() {

});

//choise page
function choiseTabs() {
  var link = $(".choise_tab-container .category_nav-item");

  $(".tab_categories_content").not(":first").hide();
  link.click(function() {
    link.removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_categories_content").hide().eq($(this).index()).fadeIn(300)
  })

  link.on('click', function() {
    if ( $(window).width() > 567 ) {
       $('html,body').animate({ scrollTop: $('.choise_tab-container .tab_content_container').offset().top + "px" }, { duration: 500 });
    } else {
       $('html,body').animate({ scrollTop: $('.tab_categories').offset().top + "px" }, { duration: 500 });
    }
  });
}