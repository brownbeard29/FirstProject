
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', myfirst, false);


function myfirst() {
    
//alert("Event listener is working");
    
//storing the user's input into a local variable called userinput1 and userinput2 as numbers
var userinput1 = parseInt(document.getElementById("input1").value);   
var userinput2 = parseInt(document.getElementById("input2").value);

//if statement checking to see which input is larger or if they're the same
//var sum = 0;
    if (userinput1 === userinput2){
        document.getElementById("answer").innerHTML = "Two numbers are the same!";
        }
        else if(userinput1 > userinput2){
            message = userinput1;
            document.getElementById("answer").innerHTML = "The two numbers are different. The largest is " + message;
        }  
      

}//to end the function
 
  
