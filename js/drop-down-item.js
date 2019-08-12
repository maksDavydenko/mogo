$(document).ready(function(){ 
    $('.photography-item').on('click', function(){
       
        $('.arrow-photography').toggleClass(' arrow-revers');
        $('.photography-drop-down').slideToggle(500);
    });

    $('.creativity-item').on('click', function(){
        $('.arrow-creativity').toggleClass(' arrow-revers');
        $(".creativity-drop-down").slideToggle(500);
    });
        
    $('.web-desig-item').on('click', function(){
        $('.arrow-web-design').toggleClass(' arrow-revers');
        $('.web-desig-drop-down').slideToggle(500); 
    });                   
});
            

