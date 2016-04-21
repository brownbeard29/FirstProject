event = document.getElementById("button1");
event.addEventListener('click', taxCal, false);



function taxCal(){
    
    //initialise and define the variables
    taxNone = 0;
    taxTwenty = 0;
    taxForty = 0;
    netSalary = 0
    
    //alert("The button works!");
    var userinput1 = parseInt(document.getElementById("salary").value);
    
    if(userinput1 < 10000){
      //run this code if the salary entered is less than 10000
        
        document.getElementById("answer3").innerHTML = "You pay no tax!";
        document.getElementById("answer").innerHTML = "Your salary is £" + userinput1;
        
    }
    else if (userinput1 > 10000 && userinput1 <= 31000){
     //run this code if the salary entered is between 10000 and 31000
        
         salarybetween10and31 = userinput1 - 10000;
         taxat20 = salarybetween10and31 * 0.2;
         netsalary = userinput1 - taxat20;
        
         document.getElementById("answer").innerHTML = "Your salary is £" + userinput1;
         document.getElementById("answer3").innerHTML = "Tax at 20% is " + taxat20;
         document.getElementById("answer5").innerHTML = "Your net salary is " + netsalary;
        
    }
    else {
         //run this code if the salary entered is greater than 31000
        
        //find the amount of tax for 21000 
        taxat20 = 21000 * 0.2;
        // find the salary entered above 31000
        salaryabove31 = userinput1 - 31000;
        //find the tax on the salary above 31000
        taxat40 = salaryabove31 * 0.4;
        //total tax at 40
        total40tax = taxat20 + taxat40;
        netsalary = userinput1 - total40tax;
    
        document.getElementById("answer").innerHTML = "Your salary is £" + userinput1;
        document.getElementById("answer3").innerHTML = "Tax at 20% is " + taxat20;
       document.getElementById("answer4").innerHTML = "Tax at 40% is " + taxat40;
       document.getElementById("answer5").innerHTML = "Your net salary is " + netsalary;
    }
    
    
   
    
   
    
    

}