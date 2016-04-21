
//EVENT LISTENER
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', myAlert, false);

var x = 5

function myAlert() {
    var x = 4;
    return x;

}
document.getElementById("answer").innerHTML = x;

     

 
  
