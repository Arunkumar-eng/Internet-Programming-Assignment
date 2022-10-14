function coin_tossing(){
    var  n = Math.floor((Math.random() * (2)) + 1);
    // console.log(n);
    if(n == 1){
        document.getElementById("heading").innerHTML = "TAIL";
       document.getElementById("image").src = "tail.jpg";
       var tail_cnt = parseInt(document.getElementById("tail").innerHTML);
       console.log("tail count: " + tail_cnt);
       tail_cnt += 1;
       document.getElementById("tail").innerHTML = tail_cnt;
    }else{
        document.getElementById("heading").innerHTML = "HEAD";
        document.getElementById("image").src = "head.jpg";
        var head_cnt = parseInt(document.getElementById("head").innerHTML);
        console.log("head count: " + head_cnt);
        head_cnt += 1;
        document.getElementById("head").innerHTML = head_cnt;
    }
    

}
