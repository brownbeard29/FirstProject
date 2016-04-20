
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', checkGuess, false);



//generating random number
var ran = Math.floor(Math.random() * 100) +1;

//var count = 0;


function checkGuess(){
    
    //alert("random number = " + ran);
    var userinput1 = parseInt(document.getElementById("userguess").value);
   
    document.getElementById("ug").innerHTML = "Your last guess was " + userinput1;
    
    
    if(userinput1===ran){
        message = "YEAH! - you guessed correctly!";
        //count +=;
    }
    else if (userinput1 < ran) {
        message = "Sorry too small, try again";
        //count +=;
    }
    else {
        message = "Sorry too big, try again";
        //count +=;
    }

    
    document.getElementById("answer").innerHTML = message;
    
    
    
    
    
} //end of function DO NOT DELETE