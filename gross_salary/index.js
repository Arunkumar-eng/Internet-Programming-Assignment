function solve(inputs){
    const main_div = document.querySelector('div');
    for(var i = 0; i<inputs; i++){
        
        const inp = document.createElement('input');
        const br = document.createElement('br');
        const p = document.createElement('p');
        main_div.append(br);
        main_div.append(p);
        p.innerText = "Enter the gross salary for employee " + (i+1) + ": ";
        main_div.append(inp);
        inp.setAttribute('id', 'amount');
        inp.setAttribute('type', 'number')
    }
    const button = document.createElement('button');
    const br1 = document.createElement('br');
    main_div.append(br1);
    const br2 = document.createElement('br');
    main_div.append(br2);
    main_div.append(br1);
    main_div.append(button);
    button.innerText = "Submit";
    button.onclick = solve1;
}
function solve1(){
    const main_div = document.querySelector('div');
    var cost = [];
    var n = main_div.childElementCount;
    const secondDiv = document.querySelector('#result');
    const br = document.createElement('br');
    secondDiv.append(br);
    const heading = document.createElement('h1');
    secondDiv.append(heading);
    heading.innerText = "Salary of each Employee";
    var cnt = 1;
    var ret = [];
    for(var i = 0; i<9; i++){
        ret.push(0);
    }
    for(var i = 2; i<n-1; i+=3){
        var salary = main_div.childNodes[i].value;
        var cost = solve3(salary);
        if(cost >= 200 && cost <= 299) ret[0] += 1;
        else if(cost >= 300 && cost <= 399) ret[1] += 1;
        else if(cost >= 400 && cost <= 499) ret[2] += 1;
        else if(cost >= 500 && cost <= 599) ret[3] += 1;
        else if(cost >= 600 && cost <= 699) ret[4] += 1;
        else if(cost >= 700 && cost <= 799) ret[5] += 1;
        else if(cost >= 800 && cost <= 899) ret[6] += 1;
        else if(cost >= 900 && cost <= 999) ret[7] += 1;
        else ret[8] += 1;
    }
    var output = document.querySelector('#result');
    output.innerText = "Number of people who earbed salaries " + "in the following ranges: \n" + 
    "$200-299  \t " + ret[0] + "\n" +
    "$300-399  \t " + ret[1] + "\n" +
    "$400-499  \t " + ret[2] + "\n" +
    "$500-599  \t " + ret[3] + "\n" +
    "$600-699  \t " + ret[4] + "\n" +
    "$700-799  \t " + ret[5] + "\n" +
    "$800-899  \t " + ret[6] + "\n" +
    "$900-999  \t " + ret[7] + "\n" +
    "$1000 and over  \t " + ret[8];
}
function solve3(salary){
    var ret = 200 + (salary * 0.09);
    return ret;
}