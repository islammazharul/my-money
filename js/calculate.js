document.getElementById('btn-calculate').addEventListener('click', function(){
    const totalIncome = getTextValue('income-total');
    const foodExpense = getTextValue('food-expense');
    const rentExpense = getTextValue('rent-expense');
    const clotheExpense = getTextValue('clothe-expense');

    const totalExpense = foodExpense + clotheExpense + rentExpense;

    const remainingIncome = totalIncome - totalExpense;

    if(isNaN(totalExpense) || isNaN(remainingIncome)){
        alert('Fields can be a number')
    }
    else if(totalIncome < 0 || foodExpense < 0 || rentExpense < 0 || clotheExpense < 0){
        alert('Fields cannot be a negative !!!')
    }
    else if(totalExpense > totalIncome){
        alert('You do not have sufficient income !!!');
        setText(0, 'balance-total');
        setText(totalExpense, 'total-expense');
        setText('', 'save-amount');
        setText('', 'remain-balance');

    }
    else{
        setText(remainingIncome, 'balance-total');
        setText(totalExpense, 'total-expense')
    }
})