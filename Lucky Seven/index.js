var arr = [1,2,3,4,3,8,1,5];

var ok = false;

var n = arr.length;

var i = 0;
for(i = 0; i<n-2;i++){
    var tot = arr[i] + arr[i+1] + arr[i+2];
    if(tot == 7){
        ok = true;
        break;
    }
}

if(ok){
    console.log("Lucky seven exists");
}else{
    console.log("Lucky seven does not exists");
}