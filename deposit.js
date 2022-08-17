// step:1  add click event handler with the submit button
document.getElementById('btn-deposit').addEventListener('click', function() {
// step:2 get the deposit inside the deposit input field
// alwayes remember to use .value to get text from an input field
const depositField = document.getElementById('deposit-field');
const depositAmount = depositField.value;
const newDepositAmount = parseFloat(depositAmount)

depositField.value ="";

if(isNaN(newDepositAmount)){
    alert("Please enter a valid amount")
    return;
}


// step:3 get the current deposit total
// for non-input(element other than input,textarea)use innerText to get the text
const depositTotal = document.getElementById("deposit-total");
const preveasDepositTotalString = depositTotal.innerText;
const preveaDepositTotal = parseFloat(preveasDepositTotalString);

const currentDepositTotal = preveaDepositTotal + newDepositAmount;
depositTotal.innerText = currentDepositTotal;

const balanceTotalElement = document.getElementById("balance-total");
const preveasBalanceTotalString = balanceTotalElement.innerText; 
const preveasDepositTotals = parseFloat(preveasDepositTotalString);

const currentBalanceTotals = preveaDepositTotal + newDepositAmount;

balanceTotalElement.innerText = currentBalanceTotals;
});