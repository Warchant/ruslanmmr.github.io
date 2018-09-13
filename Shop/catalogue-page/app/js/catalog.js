var mh = 0;
   $(".description_section").each(function () {
       var h_block = parseInt($(this).height());
       if(h_block > mh) {
          mh = h_block;
       };
   });
   $(".description_section").height(mh);
