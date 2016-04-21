event = document.getElementById("button1");
event.addEventListener('click', taxCal, false);


function taxCal(){
    alert("The button works!");
    var userinput1 = parseInt(document.getElementById("salary").innerHTML).value;
    
    if(userinput1 < 10000){
        tax0 = 0;
    }
    else if (userinput1 > 10000 && userinput1<= 31000){
        tax20 = (userinput1 - 10000) * 0.2;
    }
    else (userinput1 > 31000){
        var a = (userinput - 10000);
        var b = (a - 31000) * 0.2;
        var c = b * 0.4;
        
        tax40 = c;
    }
    document.getElementById.("answer").innerHTML = userinput1;
    document.getElementById.("answer2").innerHTML = tax0;
    document.getElementById.("answer3").innerHTML = tax20;
    document.getElementById.("answer4").innerHTML = tax40;
    
}