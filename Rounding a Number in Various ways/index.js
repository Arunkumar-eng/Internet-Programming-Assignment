function roundToInteger(number){
    var N = parseFloat(number);
    var y = Math.floor( N + .5 );
    document.getElementById("integer").innerHTML = "Rounding a number " + N +  " to integer gives " + y +  " .";

}