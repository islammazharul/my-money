document.getElementById('btn-save').addEventListener('click', function(){
    const savingPercent = getTextValue('saving-percent');
    const totalIncome = getTextValue('income-total');
    const foodExpense = getTextValue('food-expense');
    const rentExpense = getTextValue('rent-expense');
    const clotheExpense = getTextValue('clothe-expense');

    const savingPercentAmount = parseInt((totalIncome * savingPercent) / 100);

    const totalAmount = savingPercentAmount + foodExpense + clotheExpense + rentExpense;

    const remainingTotalIncome = totalIncome - totalAmount;

    const totalExpense = foodExpense + clotheExpense + rentExpense;

    const remainingIncome = totalIncome - totalExpense;


    if(isNaN(totalExpense) || isNaN(remainingIncome)){
        alert('Fields can be a number')
    }
    else if(totalIncome < 0 || foodExpense < 0 || rentExpense < 0 || clotheExpense < 0 || savingPercent < 0){
        alert('Fields cannot be a negative !!!')
    }
    else if(totalExpense > totalIncome){
        alert('You do not have sufficient income !!!');
        setText(0, 'balance-total');
        setText(totalExpense, 'total-expense');
        setText('', 'save-amount');
        setText('', 'remain-balance');

    }
    else if(isNaN(savingPercent)){
        alert('Please enter the percentage of your income that you would');
        setText('', 'save-amount');
        setText('', 'remain-balance');
    }
    else if(savingPercentAmount > remainingIncome){
        alert('You cannot save now, because the amount you want to save');
        setText('', 'save-amount');
        setText('', 'remain-balance');
    }
    else{
        setText(savingPercentAmount, 'save-amount');
        setText(remainingTotalIncome, 'remain-balance');
    }
})