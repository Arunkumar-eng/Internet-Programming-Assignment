function story(){
    var articles = [" the", " a", " one", " some", " any"];
    var noun = [" boy", " girl", " dog", " town"," car"];
    var verb = [" drove", " jumped", " ran", " walked", " skipped"];
    var proposition = [" to", " from", " over", " under", " on"];
    var index1 = articles.length;
    var index2 = noun.length;
    var index3 = verb.length;
    var index4 = proposition.length;
    var story = "Once upon a time";
    for(var i = 0; i<20; i++){
        var random1 = Math.floor((Math.random() * (index1 - 1)) + 1);
        var random2 = Math.floor((Math.random() * (index2 - 1)) + 1);
        var random3 = Math.floor((Math.random() * (index3 - 1)) + 1);
        var random4 = Math.floor((Math.random() * (index4 - 1)) + 1);
        if(i == 0){
            
            story += articles[random1];
        }else{
            var s = articles[random1];
            var first = s.charAt(1);
            // console.log(s.charAt(1))
            s = first.toUpperCase() + s.substring(2,s.length);
            story += s;
        }
        
        story +=  (noun[random2]);
        story += verb[random3];
        story += proposition[random4];
        random1 = Math.floor((Math.random() * (index1 - 1)) + 1);
        random2 = Math.floor((Math.random() * (index2 - 1)) + 1);
        story += articles[random1];
        story += noun[random2];
        story += ". \n";
    }
    story += " THE END."
    document.getElementById("box").value = story;
}