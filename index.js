//receitas
let receita = [
  {
    description: 'Salário',
    value: 4000,
  },
  {
    description: 'freela',
    value: 300,
  },
];

//gastos
var gastos = [
  {
    description: 'Alimentação',
    value: 800,
  },
  {
    description: 'gas',
    value: 120,
  },
];

// receitas out
let somaReceita = 0;
let textReceita = '';

for (let i = 0; i < receita.length; i++) {
  somaReceita += receita[i].value;
  textReceita += `<li>${receita[i].description}: R$${receita[i].value}</li>`;
}

// gastos out
let somaGastos = 0;
let textGastos = '';

for (let i = 0; i < gastos.length; i++) {
  textGastos += `<li>${gastos[i].description}: R$${gastos[i].value}</li>`;
  somaGastos += gastos[i].value;
}

//mes atual

let mesAtual = new Date().getMonth();

switch (mesAtual) {
  case 0:
    mesAtual = 'Janeiro';
    break;
  case 1:
    mesAtual = 'Fevereiro';
    break;
  case 2:
    mesAtual = 'Março';
    break;
  case 3:
    mesAtual = 'Abril';
    break;
  case 4:
    mesAtual = 'Maio';
    break;
  case 5:
    mesAtual = 'Junho';
    break;
  case 6:
    mesAtual = 'Julho';
    break;
  case 7:
    mesAtual = 'Agosto';
    break;
  case 8:
    mesAtual = 'Setembro';
    break;
  case 9:
    mesAtual = 'Outubro';
    break;
  case 10:
    mesAtual = 'Novembro';
    break;
  case 11:
    mesAtual = 'Dezembro';
    break;
  default:
    window.alert('Mês inválido!');
    break;
}

//saldo calculado
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

// Meus gastos: Alimentação
document.getElementById('food').innerHTML = textGastos;
