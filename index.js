var mesAtual = 'janeiro';
var entradas = 8000;
var saidas = 400;
var saldo = 1000;
<<<<<<< HEAD
var salario = 8000;
var alimentacao = 8000;
var receita = [{
    description: 'Salário',
    value: 4000,
}]
var gastos = [{
    description: 'Alimentação',
    value: 800,
}]
=======
var salario = {
  description: 'Salário',
  value: 4000,
};
var alimentacao = 800;
>>>>>>> 75aed75567fa4c572d528770270484453e6c17b8

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = entradas;

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

// Minha receita: Salário
<<<<<<< HEAD
document.getElementById('salary').innerHTML = `${receita[0].description}: R$${receita[0].value}`;
=======
document.getElementById(
  'salary'
).innerHTML = `${salario.description}: R$ ${salario.value}`;
>>>>>>> 75aed75567fa4c572d528770270484453e6c17b8

// Meus gastos: Alimentação
document.getElementById('food').innerHTML = `${gastos[0].description}: R$${gastos[0].value}`;