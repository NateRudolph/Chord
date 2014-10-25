var chordCounter=0;

$( document ).ready(function(){
    spanTheLyrics();
    wordClick();

    $.getJSON("js/chordChart.json", function(data){
        chordData = data;
    });
    
    
});

function wordClick(){
    $(".word").click(function(){
        var widthOfTargetWord = ($(this).width());
        $(this).append("<span class='chordContainer'><span id="+chordCounter+" class='chord'>Em</span></span>");
        var widthOfChord = $("#"+chordCounter).width();
        $("#"+chordCounter).css('left',(widthOfTargetWord/2*-1)+(widthOfChord/2*-1));
        chordCounter++;
    });  
}

function spanTheLyrics(){
    $(".verse p, .chorus p").each(function(){
        var text = $(this).text().split(' ');
        var len = text.length;
        var result = [];
        
        for(var i=0; i<len; i++){
            result[i] = "<span class='word'>" + text[i] + "</span>";
        }
        $(this).html(result.join(' '));
    });   
}