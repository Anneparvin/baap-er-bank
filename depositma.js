// step1..addEventListener to the deposit Button
//step2...get deposit amount from the deposit input field
// step2.5...convert string deposit amount to a number type
// step 3..clear the deposit input field after getting deposit amount
// step..4...get the previous deposit total
// step..5...calculate new deposit total and set the value to the deposit total
// step..6...get the current balance +deposit amoun..

// step 1..
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);
    
    // step 3...
    depositField.value = "";

    // step 4...
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal= parseFloat(previousDepositTotalString);

    // step 5...
    const newDepositTotal = previousDepositTotal + newDepositAmount ;
    depositTotalElement.innerText = newDepositTotal;

    // step 6...
    const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
        
        // step 7...
        newBalanceTotal = previousBalanceTotalAmount + newDepositAmount; balanceTotalElement.innerText = newBalanceTotal; 

});




