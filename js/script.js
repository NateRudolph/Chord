$( document ).ready(function(){
    $(".verse p").each(function(){
        var text = $(this).text().split(' ');
        var len = text.length;
        var result = [];
        
        for(var i=0; i<len; i++){
            result[i] = "<span class='word'>" + text[i] + "</span>";
        }
        $(this).html(result.join(' '));
    });
});