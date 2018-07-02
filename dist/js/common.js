$('.btn').bind('touchstart',function(){
     $(this).addClass('touched');
     }).bind('touchend',function(){
     $t=setTimeout(function(){$(this).removeClass('touched');},10);
});