var chordCounter=0;

$( document ).ready(function(){
    spanTheLyrics();
    wordClick();

    transpose("G");
    
    $("#toggle").click(function(){
        $("#bpm").toggleClass("running");
        if($("#bpm").hasClass("running")){
            metronome(124);
        } else {
           stopMetronome();    
        }
    });
    
});

function metronome(bpm){
    var metronome = $("#metronome");
        function runIt() {
            metronome.animate({opacity: '1'},bpm*2);
            metronome.animate({opacity: '0.0'},bpm*2,runIt);
        }
        runIt();

}
function stopMetronome(){
    $("#metronome").animate({opacity:'0'},1000);   
}

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
                chords[i] = data.keys[chartIndex].chords[i]; 
                continue;
            }
            if(chords[i] == "ii"){
                chords[i] = data.keys[chartIndex].chords[i]; 
                continue;
            }
            if(chords[i] == "iii"){
                chords[i] = data.keys[chartIndex].chords[i]; 
                continue;
            }
            if(chords[i] == "IV"){
                chords[i] = data.keys[chartIndex].chords[i]; 
                continue;
            }
            if(chords[i] == "V"){
                chords[i] = data.keys[chartIndex].chords[i]; 
                continue;
            }
            if(chords[i] == "vi"){
                chords[i] = data.keys[chartIndex].chords[i]; 
                continue;
            }
        }
        $("#transpose").text(chords)
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