var mesAtual = 'janeiro';

// Array de objetos que representam uma ou mais entradas
var earningsList = [{ description: 'Salário', value: 4500 }];

// Array de objetos que representam uma ou mais saídas
var expensesList = [{ description: 'Alimentação', value: 800 }];

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = 2000;

// Saídas
document.getElementById('total-expenses').innerHTML = 1800;

// Saldo
document.getElementById('final-balance').innerHTML = 200;

let earningListAtHtml = document.getElementById('earning-list');
let expensesListAtHtml = document.getElementById('expense-list');

earningsList.forEach((earning) => {
  let li = document.createElement('li');
  li.innerText = `${earning.description}: R$ ${earning.value}`;
  earningListAtHtml.appendChild(li);
});

expensesList.forEach((expense) => {
  let li = document.createElement('li');
  li.innerText = `${expense.description}: R$ ${expense.value}`;
  expensesListAtHtml.appendChild(li);
});
