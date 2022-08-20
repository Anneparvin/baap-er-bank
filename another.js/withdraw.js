// ****
// 1..add withdraw button event handler
// 2..get withdraw amount by using getInputFieldValueById('withdraw-field')
// 3...get previous withdraw amount by using getTextElementValueById function
// 4..calculate new withdraw total and set the value
// 5...set withdraw total by using setTextElementValueById function
// 6..calculate new balance total
// 7...set balance total by using setTextElementValueById function



document.getElementById('btn-withdraw').addEventListener('click', function () {

const newWithdrawAmount = getInputFieldValueById('withdraw-field');
const previousWithdrawTotal = getTextElementValueById('withdraw-total');
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
setTextElementValueById('withdraw-total', newWithdrawTotal);
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
setTextElementValueById('balance-total', newBalanceTotal);
});
