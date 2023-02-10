var mesAtual = 'janeiro';
let receita = [{
    description: 'Salário',
    value: 4000
},
{
    description: 'freela',
    value: 300
},];

var gastos = [{
    description: 'Alimentação',
    value: 800,
},{
  description: 'gas',
  value: 120,}
  ,];

let somaReceita = 0
let textReceita = ""

for (let i = 0; i < receita.length; i++) {
  somaReceita += receita[i].value;
  textReceita += `<li>${receita[i].description}: R$${receita[i].value}</li>`;
}

let somaGastos = 0;
let textGastos = ""

for (let i = 0; i < gastos.length; i++) {
textGastos += `<li>${gastos[i].description}: R$${gastos[i].value}</li>`;
somaGastos += gastos[i].value;
}

let saldo = somaReceita - somaGastos;

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = somaReceita;

// Saídas
document.getElementById('total-expenses').innerHTML = somaGastos;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

// Minha receita: Salário
document.getElementById('earning').innerHTML = textReceita;
;

// Meus gastos: Alimentação
document.getElementById('food').innerHTML = textGastos;