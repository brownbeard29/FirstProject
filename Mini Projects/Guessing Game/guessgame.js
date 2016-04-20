
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', checkGuess, false);
//EVENT LISTENER
/*var event2 = document.getElementById("b2");
//event listener whcih invokes the function
event2.addEventListener('click', newGame, false); */  





//generating random number
var ran = Math.floor(Math.random() * 100) +1;

var count = 0;

/*function newGame(){
    //alert("new game");
    document.getElementById("guessgame").reset();
    
    
}*/



function checkGuess(){
    
    //alert("random number = " + ran);
    var userinput1 = parseInt(document.getElementById("userguess").value); //intantiating user value with the users input
   
    document.getElementById("ug").innerHTML = "Your last guess was " + userinput1; //
    
    
    if(userinput1===ran){
         count = count + 1;
        message = "YEAH! - you guessed correctly! - You had <b>" + count + "</b> guess.<br> Would you like another game? <button id='b2>'>Start New game</button>";
        /*var x = document.getElementById("ug")
        x.setAttribute("type", "hidden");
        document.body.appendChild(x);*/
    }

    
    else if (userinput1 < ran) {
         count = count +1;
        message = "Sorry too small, You have had <b>" + count + "</b> guess.";
    }
       
    
    else {
        count = count + 1;
         message = "Sorry too big, You have had <b>" + count + "</b> guess.";
        
    }

    
    document.getElementById("answer").innerHTML = message;
    
    
    
    
    
} //end of function DO NOT DELETE