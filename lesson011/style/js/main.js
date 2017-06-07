$(document).ready(function(){
    $('#move').mousemove(function(move){
        var x = move.pageX; 
        var y = move.pageY; 
        $('p').text(x+':'+y); 
    });
});