// step1..addEventListener to the withdraw Button
//step2...get withdraw amount from the withdraw input field
// step2.5...convert string withdraw amount to a number type
// step 3..clear the withdraw input field after getting withdraw amount
// step..4...get the previous withdraw total
// step..5...calculate new withdraw total and set the value to the withdraw total
// step..6...get the current balance +withdraw amount..

// step 1....
document.getElementById("btn-withdraw").addEventListener("click", function() {
const withdrawField = document.getElementById("withdraw-field");
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);


// step 3....
withdrawField.value ="";

// step 4....
const withdrawTotalElement = document.getElementById("withdraw-total");
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step 5....
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = newWithdrawTotal;


// step 6....
const balanceElement = document.getElementById("balance-total");
const previousBalanceTotalString = balanceElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step 7....
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceElement.innerText = newBalanceTotal;

});










