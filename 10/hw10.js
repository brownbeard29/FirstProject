
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', myfirst, false);


function myfirst() {
    
//alert("Event listener is working");
    
//storing the user's input into a local variable called userinput1 
var userinput1 = parseInt(document.getElementById("input1").value);
var userinput2 = parseInt(document.getElementById("input2").value);
   

if (userinput1 > 10 && userinput2 > 10) {
    message = "Both numbers are greater than ten!";
}
else if(userinput1 > 10) {
    message = userinput1 + " is greater than ten!";
}
else if (userinput2 > 10) {
    message = userinput2 + " is greater than ten!";
}
else {
    message = "Both numbers are less than ten!";
}

    
document.getElementById("answer").innerHTML = message;



      

}//to end the function
 
  
