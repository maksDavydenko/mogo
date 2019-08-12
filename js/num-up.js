$(document).ready(function(){ 
    var show = true;
    var countbox = ".num-staff";
    $(window).on("scroll load resize", function(){
    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height();        // Высота окна браузера
    var d_height = $(document).height();      // Высота всего документа
    var e_height = $(countbox).outerHeight(); 
    if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
        $(".number-up").css('visibility', 'visible'); 
        $(".number-up").spincrement({
            duration: 3000,
            leeway: 50
            });
            show = false;
        
    }
});
});