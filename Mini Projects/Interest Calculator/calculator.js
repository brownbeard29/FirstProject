//Event Listener
var event1 = document.getElementById("button1");
//event listener whcih invokes the function
event1.addEventListener('click', intCal, false);

var interest = 5

function intCal() {
    var uAmount = parseInt(document.getElementById("loanamount").value);
    var uMonths = parseInt(document.getElementById("months").value);
    var uInterest = parseInt(document.getElementById("interest").value);
    
    cInterest = uAmount * (1 + ((uInterest/100))) ;
    cAmount = uAmount;
    cTotalPay = cInterest + cAmount;
    cMonths = uMonths
    cMonthlyPay = cTotalPay/uMonths;
    cTotalInt = cInterest - cAmount
    
     document.getElementById("answer").innerHTML =  "You will pay a total interest of £" + cTotalInt + " if you want to borrow £" + cAmount + " over " + cMonths + " months with monthly repayments of £" + cMonthlyPay;
      
}

   
   