$(document).ready(function() {
    $('.btn').live('touchstart touchend', function(e){
    $(this).toggleClass('touch');
    //alert('alert');
});
});