event = document.getElementById("button1");
event.addEventListener('click', calBMI, 'false');

var weight = 0;
var height = 0;


function calBMI(){
    
    //var aBMI[0];
    var x = document.getElementById("weight").value;
    var y = document.getElementById("height").value;
    if (x === null || x === "" && y === null || y === "") {
        alert("Both Weight and Height boxes need to be filled!!");
        return false;
    }
    
    userinput1 = parseInt(document.getElementById("weight").value);
    userinput2 = parseInt(document.getElementById("height").value);
    
    res = (userinput1/((userinput2/100)^2));
    bmi = res.toFixed(2)
    
    if(bmi >= 0 && bmi <=18.5) {
        
    //aBMI.push(bmi);
    document.getElementById("answer").innerHTML = "Your BMI = " + bmi + " which means you are Underweight."
    }
    else if (bmi > 18.5 && bmi < 25) {
        
    document.getElementById("answer1").innerHTML = "Your BMI = " + bmi + " which means you are Normal weight."
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        
    document.getElementById("answer2").innerHTML = "Your BMI = " + bmi + " which means you are Overweight."
    }
    else {
        
    document.getElementById("answer3").innerHTML = "Your BMI = " + bmi + " which means you are Obese."
    }
}

event1 = document.getElementById("button2");
event1.addEventListener('click', reset, 'false');


function reset(){
    location.reload();
}