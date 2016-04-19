
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', myfirst, false);


function myfirst() {
    
//alert("Event listener is working");
    
//storing the user's input into a local variable called userinput1 
var userinput1 = parseInt(document.getElementById("input1").value);    
   

if (userinput1 < 0) {
    message = "The number entered is negative!";
}
else if (userinput1 < 10) {
    message = "The number entered is less than ten!";
}
else {
    message = "The number entered is greater than ten!";
}
    
document.getElementById("answer").innerHTML = message;



      

}//to end the function
 
  
