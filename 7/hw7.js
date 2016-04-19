
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', myfirst, false);


function myfirst() {
    
//alert("Event listener is working");
    
//storing the user's input into a local variable called userinput1 
var userinput1 = parseInt(document.getElementById("input1").value);   

var x = userinput1 + 1;
var y = userinput1 - 1;
    
document.getElementById("answer").innerHTML = x;
document.getElementById("answer2").innerHTML = y;

//var x = document.getElementById("myText") = userinput1 + 1;
//var y = document.getElementById("myText") = userinput1 -1;
    
//console.log(x);
//console.log(y);
      

}//to end the function
 
  
