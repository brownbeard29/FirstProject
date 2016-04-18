
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', myfirst, false);


function myfirst() {
    
//alert("Event listener is working");
    
//storing the user's input into a local variable called userinput1
var userinput1 = parseInt(document.getElementById("input1").value);   
var userinput2 = parseInt(document.getElementById("input2").value);

//if statement checking to see which input is larger
var sum = 0;
    if (userinput1 > userinput2) {
      sum = userinput1;
    }
    else if  {sum = userinput2;} 
    else {document.getElementById("answer").innerHTML = "Two numbers are the same";}
      
//Output 1
    
//writing a local variable back to the HTML DOM where element has an id of answer

document.getElementById("answer").innerHTML = sum;
}
 
  
