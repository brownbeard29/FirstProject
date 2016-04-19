
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', myfirst, false);


function myfirst() {
    
//alert("Event listener is working");
    
//storing the user's input into a local variable called userinput1 
var userinput1 = parseInt(document.getElementById("input1").value);    
var userinput2 = parseInt(document.getElementById("input1").value);   
var userinput3 = parseInt(document.getElementById("input1").value);   


var x = (userinput1 + userinput2) * userinput3; //setting x the value of user input +1
var y = userinput1 + userinput2 + userinput3; //setting y the value of user input -1  

document.getElementById("answer").innerHTML = x - y; //displaying x




      

}//to end the function
 
  
