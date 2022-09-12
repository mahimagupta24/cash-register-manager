const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", validateBillAndCashAmount);


function validateBillAndCashAmount() {
  hideMessage()
  var cash=Number(cashGiven.value);
var bill=Number(billAmount.value);

  if((bill>0) && (cash>0)){
    if(cash<bill){
      showMessage("Do you wanna wash plates?", "orange");
     }else if(bill==cash){
      showMessage("Thanks for paying the cash exactly equals to bill amount.","blue")
     }
     else{
      const amountToBeReturned = (cash-bill);
    calculateChange(amountToBeReturned);
  } 
  
} else {
    showMessage("Invalid bill amount", "red");
  }
}


function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg, color) {
  message.style.display = "block";
  message.innerText = msg;
  message.style.color = color;
}


