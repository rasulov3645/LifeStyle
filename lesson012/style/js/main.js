$(document).ready(function(){
    /* Вхождение курсора в блок */
    $('.block').mouseout(function(){
        $('p').text('MouseOut'); 
        $('.block').css('background', '#f00')
    });
    /* Выход курсора из блока */
    $('.block').mouseover(function(){
        $('p').text('MouseOver');
        $('.block').css('background', '#fff')
    });
});