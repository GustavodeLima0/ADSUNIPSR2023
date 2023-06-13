let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let num5 = document.querySelector('#num5');
let btExibir = document.querySelector('#btExibir');
let resultado = document.querySelector('#resultado');

function verificarOrdemDecrescente() {
  let valor1 = Number(num1.value);
  let valor2 = Number(num2.value);
  let valor3 = Number(num3.value);
  let valor4 = Number(num4.value);
  let valor5 = Number(num5.value);

  if (valor1 === 0 && valor2 === 0 && valor3 === 0 && valor4 === 0 && valor5 === 0) {
    resultado.innerHTML = 'Nenhum valor foi fornecido.';
    return;
  }

  if (valor1 === valor2 && valor1 === valor3 && valor1 === valor4 && valor1 === valor5) {
    resultado.innerHTML = 'Os valores são iguais.';
    return;
  }

  let valores = [valor1, valor2, valor3, valor4, valor5];
  valores.sort((a, b) => b - a);

  resultado.innerHTML = 'A ordem decrescente dos numeros é: ' + valores.join(', ');
}

btExibir.addEventListener('click', verificarOrdemDecrescente);

//ex02

let lado1 = document.querySelector('#lado1');
let lado2 = document.querySelector('#lado2');
let lado3 = document.querySelector('#lado3');
let btVerificar = document.querySelector('#btVerificar');
let resultado2 = document.querySelector('#resultado2');

function verificarTriangulo() {
  let valor1 = Number(lado1.value);
  let valor2 = Number(lado2.value);
  let valor3 = Number(lado3.value);

  if (valor1 <= 0 || valor2 <= 0 || valor3 <= 0) {
    resultado2.innerHTML = 'Informe valores positivos para os lados do triângulo.';
    return;
  }

  if (valor1 + valor2 > valor3 && valor1 + valor3 > valor2 && valor2 + valor3 > valor1) {
    if (valor1 === valor2 && valor1 === valor3) {
      resultado2.innerHTML = 'É um triângulo equilátero.';
    } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
      resultado2.innerHTML = 'É um triângulo isósceles.';
    } else {
      resultado2.innerHTML = 'É um triângulo escaleno.';
    }
  } else {
    resultado2.innerHTML = 'Os valores fornecidos não formam um triângulo.';
  }
}

btVerificar.addEventListener('click', verificarTriangulo);

//ex03
let valorReais = document.querySelector('#valorReais');
let btCalcularNotas = document.querySelector('#btCalcularNotas');
let resultado3 = document.querySelector('#resultado3');

function calcularNotas() {
  let valor = Number(valorReais.value);

  if (valor <= 0) {
    resultado3.innerHTML = 'Informe um valor válido em reais.';
    return;
  }

  let notas100 = Math.floor(valor / 100);
  valor %= 100;

  let notas50 = Math.floor(valor / 50);
  valor %= 50;

  let notas10 = Math.floor(valor / 10);
  valor %= 10;

  let notas5 = Math.floor(valor / 5);
  valor %= 5;

  let notas1 = valor;

  resultado3.innerHTML = `Valor lido: R$ ${Number(valorReais.value).toFixed(2)}<br>`;
  resultado3.innerHTML += `Notas de 100: ${notas100}<br>`;
  resultado3.innerHTML += `Notas de 50: ${notas50}<br>`;
  resultado3.innerHTML += `Notas de 10: ${notas10}<br>`;
  resultado3.innerHTML += `Notas de 5: ${notas5}<br>`;
  resultado3.innerHTML += `Notas de 1: ${notas1}`;
}

btCalcularNotas.addEventListener('click', calcularNotas);

//ex04
let anoCarro = document.querySelector('#anoCarro');
let valorTabela = document.querySelector('#valorTabela');
let btCalcularImposto = document.querySelector('#btCalcularImposto');
let resultado4 = document.querySelector('#resultado4');

function calcularImposto() {
  let ano = Number(anoCarro.value);
  let valor = Number(valorTabela.value);

  if (isNaN(ano) || isNaN(valor)) {
    resultado4.innerHTML = 'Informe valores válidos para o ano e valor de tabela do carro.';
    return;
  }

  let taxa = 0;

  if (ano < 1990) {
    taxa = 0.01;
  } else {
    taxa = 0.015;
  }

  let imposto = taxa * valor;

  resultado4.innerHTML = `Ano do carro: ${ano}<br>`;
  resultado4.innerHTML += `Valor de tabela: R$ ${valor.toFixed(2)}<br>`;
  resultado4.innerHTML += `Imposto a ser pago: R$ ${imposto.toFixed(2)}`;
}

btCalcularImposto.addEventListener('click', calcularImposto);

//ex05

let salarioFuncionario = document.querySelector('#salarioFuncionario');
let cargoFuncionario = document.querySelector('#cargoFuncionario');
let btCalcularSalario = document.querySelector('#btCalcularSalario');
let resultado5 = document.querySelector('#resultado5');

function calcularSalario() {
  let salario = Number(salarioFuncionario.value);
  let cargo = cargoFuncionario.value;
  let novoSalario = 0;

  if (cargo === 'Gerente') {
    novoSalario = salario + (salario * 0.1);
  } else if (cargo === 'Engenheiro') {
    novoSalario = salario + (salario * 0.2);
  } else if (cargo === 'Técnico') {
    novoSalario = salario + (salario * 0.3);
  } else {
    novoSalario = salario + (salario * 0.4);
  }

  let diferenca = novoSalario - salario;

  resultado5.innerHTML = `Salário antigo: R$ ${salario.toFixed(2)}<br>`;
  resultado5.innerHTML += `Novo salário: R$ ${novoSalario.toFixed(2)}<br>`;
  resultado5.innerHTML += `Diferença: R$ ${diferenca.toFixed(2)}`;
}

btCalcularSalario.addEventListener('click', calcularSalario);
//ex06

let saldoMedioCliente = document.querySelector('#saldoMedioCliente');
let btCalcularCredito = document.querySelector('#btCalcularCredito');
let resultado6 = document.querySelector('#resultado6');

function calcularCredito() {
  let saldoMedio = Number(saldoMedioCliente.value);
  let percentualCredito = 0;

  if (saldoMedio >= 0 && saldoMedio <= 200) {
    percentualCredito = 0;
  } else if (saldoMedio >= 201 && saldoMedio <= 400) {
    percentualCredito = 0.2;
  } else if (saldoMedio >= 401 && saldoMedio <= 600) {
    percentualCredito = 0.3;
  } else if (saldoMedio > 600) {
    percentualCredito = 0.4;
  }

  let valorCredito = saldoMedio * percentualCredito;

  resultado6.innerHTML = `Saldo médio: R$ ${saldoMedio.toFixed(2)}<br>`;
  resultado6.innerHTML += `Valor do crédito: R$ ${valorCredito.toFixed(2)}`;
}

btCalcularCredito.addEventListener('click', calcularCredito);

//ex07
let codigoItem = document.querySelector('#codigoItem');
let quantidadeItem = document.querySelector('#quantidadeItem');
let btCalcularValor = document.querySelector('#btCalcularValor');
let resultado7 = document.querySelector('#resultado7');

function calcularValor() {
  let codigo = codigoItem.value;
  let quantidade = Number(quantidadeItem.value);
  let valorTotal = 0;

  if (codigo === '1') {
    valorTotal = 11 * quantidade;
  } else if (codigo === '2') {
    valorTotal = 8.5 * quantidade;
  } else if (codigo === '3') {
    valorTotal = 8 * quantidade;
  } else if (codigo === '4') {
    valorTotal = 9 * quantidade;
  } else if (codigo === '5') {
    valorTotal = 10 * quantidade;
  } else if (codigo === '6') {
    valorTotal = 4.5 * quantidade;
  } else {
    resultado7.innerHTML = 'Código inválido.';
    return;
  }

  resultado7.innerHTML = `Valor a ser pago: R$ ${valorTotal.toFixed(2)}`;
}

btCalcularValor.addEventListener('click', calcularValor);

//ex08
let btCalcularPeso = document.querySelector('#btCalcularPeso');
let resultado8 = document.querySelector('#resultado8');

btCalcularPeso.addEventListener('click', () => {
  let altura = Number(document.querySelector('#altura').value);
  let sexo = document.querySelector('#sexo').value;
  let pesoIdeal = 0;

  if (!altura || !sexo) {
    resultado8.innerHTML = 'Por favor, preencha todos os campos.';
    return;
  }

  if (sexo === 'homem') {
    pesoIdeal = (72.7 * altura) - 58;
  } else if (sexo === 'mulher') {
    pesoIdeal = (62.1 * altura) - 44.7;
  } else {
    resultado8.innerHTML = 'Sexo inválido.';
    return;
  }

  resultado8.innerHTML = `O peso ideal é: ${pesoIdeal.toFixed(2)} kg`;
});
//ex09


let precoEtiqueta = document.querySelector('#precoEtiqueta');
let condicaoPagamento = document.querySelector('#condicaoPagamento');
let btCalcularPagamento = document.querySelector('#btCalcularPagamento');
let resultado9 = document.querySelector('#resultado9');

const condicoesPagamento = [
  { value: 'a', label: 'À vista em dinheiro ou cheque' },
  { value: 'b', label: 'À vista no cartão de crédito' },
  { value: 'c', label: 'Em duas vezes sem juros' },
  { value: 'd', label: 'Em duas vezes com juros de 10%' }
];

condicoesPagamento.forEach(condicao => {
  let option = document.createElement('option');
  option.value = condicao.value;
  option.textContent = condicao.label;
  condicaoPagamento.appendChild(option);
});

btCalcularPagamento.addEventListener('click', () => {
  let preco = Number(precoEtiqueta.value);
  let condicao = condicaoPagamento.value;
  let valorFinal = 0;

  if (condicao === 'a') {
    valorFinal = preco - (preco * 0.1);
  } else if (condicao === 'b') {
    valorFinal = preco - (preco * 0.15);
  } else if (condicao === 'c') {
    valorFinal = preco;
  } else if (condicao === 'd') {
    valorFinal = preco + (preco * 0.1);
  } else {
    resultado9.innerHTML = 'Condição de pagamento inválida.';
    return;
  }

  resultado9.innerHTML = `Valor a ser pago: R$ ${valorFinal.toFixed(2)}`;
});
//ex10
let nivelProfessor = document.querySelector('#nivelProfessor');
let horasAula = document.querySelector('#horasAula');
let btCalcularSalario1 = document.querySelector('#btCalcularSalario1');
let resultado10 = document.querySelector('#resultado10');

btCalcularSalario1.addEventListener('click', () => {
  let nivel = nivelProfessor.value;
  let quantidadeHoras = Number(horasAula.value);
  let valorHoraAula = 0;
  let salario = 0;

  if (nivel === '1') {
    valorHoraAula = 12;
  } else if (nivel === '2') {
    valorHoraAula = 17;
  } else if (nivel === '3') {
    valorHoraAula = 25;
  } else {
    resultado10.innerHTML = 'Nível inválido.';
    return;
  }

  salario = valorHoraAula * quantidadeHoras * 4.5;
  resultado10.innerHTML = `Salário do professor: R$ ${salario.toFixed(2)}`;
});
alert('Trabalho extra');