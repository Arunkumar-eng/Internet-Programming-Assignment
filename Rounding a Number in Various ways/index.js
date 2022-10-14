function roundToInteger(number){
    let N = parseFloat(number);
    let y = Math.floor( N + .5 );
    document.getElementById("integer").innerHTML = "Rounding a number " + N +  " to integer gives " + y +  " .";

}

function roundToTength(number){
    let N = parseFloat(number);
    console.log("Hello World");
    let y = Math.floor(N * 10 + .5) / 10;
    document.getElementById("tenth").innerHTML = "Rounding a number " + N + " to tenths position gives " + y + " .";

}

function roundToHundredths(number){
    let N = parseFloat(number);
    let y = Math.floor(N * 100 + .5) / 100;
    document.getElementById("hundred").innerHTML = "Round a number " + N + " to hundredth position gives " + y + " .";
}

function roundToThousand(number){
    let N = parseFloat(number);
    let y = Math.floor(N * 1000 + .5) / 1000;
    document.getElementById("thousand").innerHTML = "Round a number " + N + " to thousand position gives " + y + " .";
}
