
//EVENT LISTENER
    
//Declaring the variable event1 with the document object and getElementById method
var event1= document.getElementById("button1");
    
//Add an eventlistener which invokes the myfirst function when webpage first loads - the event1 object has a method called addEventListener which accepts 3 arguments: Argument 1 is the event it is listening for, argument 2 is the function it is invoking and argument 3 is a boolean whcich is generally set to false
event1.addEventListener('click', myfirst, false);

//This function is a set of instructions that can be called repeatedly in the programme
function myfirst(){
    
//alert("Event listener is working);
    
//storing the user's input into a local variable called userinput1
var userinput1 = document.getElementById("input1").value;
//Output 1
    
//writing a local variable back to the HTML DOM where element has an id of demo
document.getElementById("demo").innerHTML =
userinput1
}
 
  
