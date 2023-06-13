
//TRABALHO FEITO SOZINHO POR GUSTAVO DE LIMA RA:00246437//

//Exercicio 1//

function calcularArea() {
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);

    let area = comprimento * largura;

    document.getElementById("resultado").innerHTML = "A area do terreno e: " + area + " metros quadrados.";
}

    //Exercicio 2//

function calcularFerraduras() {
    let numeroCavalos = parseInt(document.getElementById("numeroCavalos").value);

    
    let quantidadeFerraduras = numeroCavalos * 4;

    document.getElementById("resultado").innerHTML = "Quantidade de ferraduras necessárias: " + quantidadeFerraduras;
}

    //Exercicio 3//

function calcularDados() {
    let quantidadePao = parseInt(document.getElementById("quantidadePaes").value);
    let quantidadeBroas = parseInt(document.getElementById("quantidadeBroas").value);

    let valorPao = 0.12;
    let valorBroa = 1.50;

    let totalVendas = (quantidadePao * valorPao) + (quantidadeBroas * valorBroa);
    let valorPoupanca = totalVendas * 0.1;

    document.getElementById("resultado").innerHTML = "Valor arrecadado: R$ " + totalVendas.toFixed(2) + "<br>" +
        "Valor a ser guardado na poupança: R$ " + valorPoupanca.toFixed(2);
}

    //Exercicio 4//


function calcularDiasVida() {
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);

    let diasVida = idade * 365;

    document.getElementById("resultado").innerHTML = nome.toUpperCase() + ", VOCÊ JÁ VIVEU " + diasVida + " DIAS";
}


    //Exercicio 5//

function calcularLitrosGasolina() {
    let precoLitro = parseFloat(document.getElementById("precoLitro").value);
    let valorPagamento = parseFloat(document.getElementById("valorPagamento").value);

    let litrosGasolina = valorPagamento / precoLitro;

    document.getElementById("resultado").innerHTML = "Litros de Gasolina: " + litrosGasolina.toFixed(2);
}

    //Exercicio 6//

function calcularValorPagar() {
    let pesoPrato = parseFloat(document.getElementById("pesoPrato").value);

    let valorPagar = pesoPrato * 12;

    document.getElementById("resultado").innerHTML = "Valor a Pagar: R$" + valorPagar.toFixed(2);
}

    //Exercicio 7//

        function calcularDiasDesdeInicioDoAno() {
            let dia = parseInt(document.getElementById("dia").value);
            let mes = parseInt(document.getElementById("mes").value);

            let diasDesdeInicioDoAno = (mes - 1) * 30 + dia;

            document.getElementById("resultado").innerHTML = "Dias desde o Início do Ano: " + diasDesdeInicioDoAno;
        }

        //Exercicio 8//

        function calcularValorArrecadado() {
            let quantidadePequenas = parseInt(document.getElementById("quantidadePequenas").value);
            let quantidadeMedias = parseInt(document.getElementById("quantidadeMedias").value);
            let quantidadeGrandes = parseInt(document.getElementById("quantidadeGrandes").value);

            let valorArrecadado = quantidadePequenas * 10 + quantidadeMedias * 12 + quantidadeGrandes * 15;

            document.getElementById("resultado").innerHTML = "Valor Arrecadado: R$" + valorArrecadado.toFixed(2);
        }

    //EXERCICIO 9//


        function calcularDistancia() {
            let x1 = parseFloat(document.getElementById("x1").value);
            let y1 = parseFloat(document.getElementById("y1").value);
            let x2 = parseFloat(document.getElementById("x2").value);
            let y2 = parseFloat(document.getElementById("y2").value);

            let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

            document.getElementById("resultado").innerHTML = "A distância entre os pontos é: " + distancia.toFixed(2);
        }

    //EXERCICIO 10 

        function converterTempo() {
            let diasTrabalhados = parseInt(document.getElementById("dias").value);

            let anos = Math.floor(diasTrabalhados / 365);
            let meses = Math.floor((diasTrabalhados % 365) / 30);
            let dias = (diasTrabalhados % 365) % 30;

            document.getElementById("resultado").innerHTML = "Tempo de trabalho: " + anos + " anos, " + meses + " meses, " + dias + " dias.";
        }

    //EXERCICIO 11

        function calcularSalario() {
        let salarioInicial = parseFloat(document.getElementById("salario").value);
        let aumento = salarioInicial * 0.15;
        let salarioComAumento = salarioInicial + aumento;
        let impostos = salarioComAumento * 0.08;
        let salarioFinal = salarioComAumento - impostos;

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Salário inicial: R$ " + salarioInicial.toFixed(2) + "<br>";
        resultado.innerHTML += "Salário com aumento: R$ " + salarioComAumento.toFixed(2) + "<br>";
        resultado.innerHTML += "Salário final: R$ " + salarioFinal.toFixed(2) + "<br>";
    }
   

    //EXERCICIO 12

    function imprimirNumero() {
        let numero = parseInt(document.getElementById("numero").value);

        let centena = Math.floor(numero / 100);
        let dezena = Math.floor((numero % 100) / 10);
        let unidade = numero % 10;

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "CENTENA = " + centena + "<br>";
        resultado.innerHTML += "DEZENA = " + dezena + "<br>";
        resultado.innerHTML += "UNIDADE = " + unidade + "<br>";
        resultado.style.display = "block";
    }

    //EXERCICIO 13

    function calcularArea() {
        let raio = parseFloat(document.getElementById("raio").value);

        let area = Math.PI * Math.pow(raio, 2);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "A área da pizza é: " + area.toFixed(2) + " unidades de área";
        resultado.style.display = "block";
    }

    //EXERCICIO 14

    function calcularRacha() {
        let valorTotal = parseFloat(document.getElementById("valorTotal").value);
        
        let valorSemCentavos = Math.floor(valorTotal / 3);
        let valorRestante = valorTotal - (valorSemCentavos * 2);
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Carlos deve pagar: R$ " + valorSemCentavos.toFixed(2) + "<br>" +
                              "André deve pagar: R$ " + valorSemCentavos.toFixed(2) + "<br>" +
                              "Felipe deve pagar: R$ " + valorRestante.toFixed(2);
        resultado.style.display = "block";
    }
