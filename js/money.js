// document.getElementById('btn-calculate').addEventListener('click', function(){
//     const foodExpense = document.getElementById('food-expense');
//     const foodExpenseString = foodExpense.value;
//     const newFoodExpense = parseFloat(foodExpenseString);
    
//     const rentExpense = document.getElementById('rent-expense');
//     const rentExpenseString = rentExpense.value;
//     const newRentExpense = parseFloat(rentExpenseString);

//     const clotheExpense = document.getElementById('clothe-expense');
//     const clotheExpenseString = clotheExpense.value;
//     const newClotheExpense = parseFloat(clotheExpenseString);

//     const totalAmountExpense = newFoodExpense + newClotheExpense + newRentExpense;
//     // console.log(totalExpense)

//     const totalExpense = document.getElementById('total-expense')
//     const previousTotalExpenseString = totalExpense.innerText;
//     const previousTotalExpense = parseFloat(previousTotalExpenseString)
//     const newTotalExpense = previousTotalExpense + totalAmountExpense;
//     totalExpense.innerText = newTotalExpense;
//     // console.log(newTotalExpense)

//     const totalIncome = document.getElementById('income-total');
//     const totalIncomeString = totalIncome.value;
//     const newTotalIncome = parseFloat(totalIncomeString);

//     const remainingIncome = newTotalIncome - newTotalExpense;

//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotal.innerText
//     const newBalanceTotal = parseFloat(previousBalanceTotalString);

//     const currentBalanceTotal = newBalanceTotal + remainingIncome;
//     balanceTotal.innerText = currentBalanceTotal

    

// })


// document.getElementById('btn-save').addEventListener('click', function(){

//     const foodExpense = document.getElementById('food-expense');
//     const foodExpenseString = foodExpense.value;
//     const newFoodExpense = parseFloat(foodExpenseString);
    
//     const rentExpense = document.getElementById('rent-expense');
//     const rentExpenseString = rentExpense.value;
//     const newRentExpense = parseFloat(rentExpenseString);

//     const clotheExpense = document.getElementById('clothe-expense');
//     const clotheExpenseString = clotheExpense.value;
//     const newClotheExpense = parseFloat(clotheExpenseString);

//     const totalAmountExpense = newFoodExpense + newClotheExpense + newRentExpense;

//     const totalExpense = document.getElementById('total-expense')
//     const previousTotalExpenseString = totalExpense.innerText;
//     const previousTotalExpense = parseFloat(previousTotalExpenseString)
//     const newTotalExpense = previousTotalExpense + totalAmountExpense;
//     totalExpense.innerText = newTotalExpense;

//     const totalIncome = document.getElementById('income-total');
//     const totalIncomeString = totalIncome.value;
//     const newTotalIncome = parseFloat(totalIncomeString);
//     const remainingIncome = newTotalIncome - newTotalExpense;

//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotal.innerText
//     const newBalanceTotal = parseFloat(previousBalanceTotalString);

//     const currentBalanceTotal = newBalanceTotal + remainingIncome;
//     balanceTotal.innerText = currentBalanceTotal;

//     const savingPercent = document.getElementById('saving-percent');
//     const newSavingPercentString = savingPercent.value;
//     const newSavingPercent = parseFloat(newSavingPercentString)
//     const savingPercentAmount = (newTotalIncome * newSavingPercent) / 100;

//     // console.log(savingPercentAmount)

//     const savingAmount = document.getElementById('save-amount')
//     const previousSavingAmountString = savingAmount.innerText;
//     const previousSavingAmount = parseFloat(previousSavingAmountString);
//     const currentSavingAmount = previousSavingAmount + savingPercentAmount
//     savingAmount.innerText = currentSavingAmount;

//     const remainingBalance = document.getElementById('remain-balance').innerText;
//     const previousRemainingBalanceString = remainingBalance;
//     const newRemainingBalance = parseFloat(previousRemainingBalanceString);

//     const currentRemainingBalance = (currentBalanceTotal - currentSavingAmount) + newRemainingBalance;
//     remainingBalance.innerText = currentRemainingBalance
//     console.log(currentRemainingBalance)
// })
