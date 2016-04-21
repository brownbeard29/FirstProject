
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', myfirst, false);


function myfirst() {
    
//alert("Event listener is working");
    
//storing the user's input into a local variable called userinput1 
var userinput1 = parseInt(document.getElementById("input1").value);   

//var x = userinput1 + 1; //setting x the value of user input +1
//var y = userinput1 - 1; //setting y the value of user input -1  
//document.getElementById("answer").innerHTML = x; //displaying x
//document.getElementById("answer2").innerHTML = y; //displaying y

document.getElementById("answer").innerHTML = (userinput1 - 1); //displaying x
document.getElementById("answer2").innerHTML = (userinput1 + 1); //displaying y

      

}//to end the function
 
  
