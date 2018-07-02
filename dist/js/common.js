

$('.btn').live('touchstart touchend', function(e){
    $(this).toggleClass('touched');
});