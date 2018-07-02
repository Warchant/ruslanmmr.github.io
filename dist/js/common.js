$(document).ready(function() {
    $('.btn').on('touchstart', function(e){
    $(this).addClass('touch');
});

$('.btn').on('touchend', function(e){
    $('this').removeClass('touch');
});
});