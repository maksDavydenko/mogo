    $('.menu-btn').on('click', function(e){
        e.preventDefult;
        $(this).toggleClass('menu-btn_active');
        $(".adaptive-nav").toggle();
 
        if ( $('body').css('overflow-y') == 'auto' )
        $('body').css('overflow-y','hidden');
      else
        $('body').css('overflow-y','auto');
    });  
