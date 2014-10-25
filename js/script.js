$( document ).ready(function(){
    $(".verse p, .chorus p").each(function(){
        var text = $(this).text().split(' ');
        var len = text.length;
        var result = [];
        
        for(var i=0; i<len; i++){
            result[i] = "<span class='word'>" + text[i] + "</span>";
        }
        $(this).html(result.join(' '));
    });
    $(".word").click(function(){
        var widthOfTargetWord = ($(this).width());
        $(this).append("<span class='chordWord'><span class='chord'>Em</span></span>");
    });
});