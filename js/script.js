var chordCounter=0;

$( document ).ready(function(){
    spanTheLyrics();
    wordClick();

    transpose("Bb");
    
    
});

function transpose(key) {
    $.getJSON("js/chordChart.json", function(data){
        var chartIndex;
        var chords = $("#transpose").text().split(' ');
        
        for(var i=0; i<data.keys.length; i++){
            if(data.keys[i].key==key){
                chartIndex = i;  
            }
        }
        
        for(var i=0; i<chords.length; i++){
            if(chords[i] == "I"){
                console.log(data.keys[chartIndex].chords[i]); 
                continue;
            }
            if(chords[i] == "ii"){
                console.log(data.keys[chartIndex].chords[i]); 
                continue;
            }
            if(chords[i] == "iii"){
                console.log(data.keys[chartIndex].chords[i]); 
                continue;
            }
            if(chords[i] == "IV"){
                console.log(data.keys[chartIndex].chords[i]); 
                continue;
            }
            if(chords[i] == "V"){
                console.log(data.keys[chartIndex].chords[i]); 
                continue;
            }
            if(chords[i] == "vi"){
                console.log(data.keys[chartIndex].chords[i]); 
                continue;
            }
        }
    });
    
}

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