// Exercícios
// Questões mais fodas: 20 e 27. Refazer diariamente.

// 01
console.log("------------ Exercício 01 -----------------OK. Fácil.");

function operacoes(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b)
}

operacoes(1, 2);

// 02
console.log("------------ Exercício 02 -----------------OK. Fácil.");

function triangulo(x, y, z) {
    if (x == y && y == z && x == z) {
        console.log("Triângulo Equilátero.")
    } else if (x != y && y != z && x != z) {
        console.log("Triângulo Escaleno.")
    } else {
        console.log("Triângulo Isósceles.")
    }
}
triangulo(5, 5, 5); // equilatero
triangulo(6, 6, 5); // isosceles
triangulo(6, 5, 6); // isosceles
triangulo(5, 6, 6); // isosceles
triangulo(8, 9, 7); // escaleno

// 03
console.log("------------ Exercício 03 -----------------OK. Fácil.");

const potencia = function (base, expoente) {
    return base ** expoente
}

console.log(potencia(2, 3));

// 04
console.log("------------ Exercício 04 ----------------- Refiz 3x.");

const divisao = function (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo / divisor));
    console.log("Resto: " + dividendo % divisor);
}

divisao(11, 4);

// Para divisão ter resto diferente de 0, o resultado da divisão precisa ser um número inteiro.
// Por isso na divisão, o resultado precisa ser arredondado para baixo.

// 05
console.log("----------------- Exercício 05 ----------------- Refiz 3x");

function valorEmReais(valorDolar) {
    return console.log("R$ " + valorDolar.toFixed(2).replace(".", ","))
}

valorEmReais(0.1 + 0.2);

// 06
console.log("----------------- Exercício 06 ----------------- OK. Fácil.");

function investimentoJurosSimples(capitalInicial, taxaJuros, tempo) {
    let montanteJS;
    montanteJS = capitalInicial + (capitalInicial * taxaJuros * tempo)
    
    return `R$ ${montanteJS.toFixed(2).replace(".", ",")}`
}
function investimentoJurosComposto(capitalInicial, taxaJuros, tempo) {
    let montanteJC;
    montanteJC = capitalInicial * (1 + taxaJuros) ** tempo
    
    return `R$ ${montanteJC.toFixed(2).replace(".", ",")}`
}

console.log(investimentoJurosSimples(200, 0.1, 2));
console.log(investimentoJurosComposto(200, 0.1, 2));

// 07
console.log("----------------- Exercício 07 -----------------Refiz 3x.");


function bhaskara(ax2, bx, c) {
    const resultadosDeX = [];
    const delta = (bx ** 2) - 4 * ax2 * c;

    if (delta < 0) {
        return "Delta é negativo."
    }

    const x1 = (-bx - (Math.sqrt(delta))) / 2 * ax2;
    const x2 = (-bx + (Math.sqrt(delta))) / 2 * ax2;
    resultadosDeX.push(x1);
    resultadosDeX.push(x2);
    return resultadosDeX
}

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, 3, 2));
console.log(bhaskara(3, 1, 2));

// 08
console.log("----------------- Exercício 08 -----------------Refiz 3x.");

let pontuacoesString = "10, 20, 20, 8, 25, 3, 0, 30, 1";

function avaliaPontuacoes(pontuacoesString) {
    let pontos = pontuacoesString.split(", ");
    let qtdDeRecords = 0;
    let piorJogo = 1;
    let maiorPontuacao = pontos[0];
    let menorPontuacao = pontos[0];

    for (let i = 1; i < pontos.length; i++) {
        if (pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]
            qtdDeRecords++
        } else if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            piorJogo = i + 1;
        }
    }
    return [qtdDeRecords, piorJogo] // return precisa estar FORA do bloco FOR. E dentro da função.
}

console.log(avaliaPontuacoes(pontuacoesString));
//"10, 20, 20, 8, 25, 3, 0, 30, 1"

// 09
console.log("----------------- Exercício 09 ----------------- Código é fácil. O problema é o %. Refiz 3x.");

function classificaNotas(nota) {
    let notaArredondada = arredondarNotas(nota)
    if (notaArredondada >= 40) {
        console.log(`Aprovado com nota ${notaArredondada}`)
    } else {
        console.log(`Reprovado com nota ${notaArredondada}`)
    }
}

function arredondarNotas(nota) {
    if (nota % 5 > 2) {                   // Essa marcou que a condição era de nota 38 para cima.
        return nota + (5 - (nota % 5))    // Essa fez o arredondamento para o próximo multiplo de 5.
    } else {
        return nota
    }
}
classificaNotas(37);
classificaNotas(38);
classificaNotas(44);
classificaNotas(55);
classificaNotas(83);

console.log(37 % 5); // Resto = 2. Por isso o resto precisa ser maior que 2, pois a nota 37 já é reprovação. E da 38 a 39 o resto da acima de 2.
console.log(38 % 5); // Resto = 3. Para ser arredondado para cima precisava ser MENOR do que 3.
console.log(39 % 5); 
console.log(40 % 5);

// Um número é divisível por outro quando o resto da divisão entre ambos é igual a zero.
// E quando o resultado do resto é 0, também significa que o DIVIDENDO é multiplo do DIVISOR.

// Em toda divisão, o RESTO sempre será MENOR que o DIVISOR. O resto é um número maior ou igual a 0, e menor que o divisor.
// Dividendo = (Divisor * Quociente) + Resto
// Dividento % Divisor = Resto


// 10
console.log("----------------- Exercício 10 ----------------- OK. Fácil.");

function verificaNumero(num1) {
    if (num1 % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaNumero(3));
console.log(verificaNumero(2));
console.log(verificaNumero(150));

// A divisão fica com resto quando o divisor se mantem um número inteiro.
// Um número é divisivel por outro quando o resultado da divisão dá um número inteiro.
// Se der com virgula, não é divisivel, e háverá um resto, que não é 0.

// 11
console.log("----------------- Exercício 11 ----------------- Código é fácil. O problema é o %. Refiz 3x.");

function analisaAnoBissexto(ano) {

    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) { // Precisava pegar o ano, e dividir de 400 em 400 anos. Tendo um número inteiro no quociente, e resto 0.
        return true
    } else if (ano % 100 == 0) { // Precisava ser divisível.
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}
// Um número é divisível por outro quando o resto da divisão entre ambos é igual a zero.
// E quando o resultado do resto é 0, também significa que o DIVIDENDO é multiplo do DIVISOR.

console.log(analisaAnoBissexto(0)) // FALSE. Não aceita ano 0, ou ano negativo.
console.log(analisaAnoBissexto(4)) // TRUE
console.log(analisaAnoBissexto(100)) // FALSE
console.log(analisaAnoBissexto(400)) // TRUE
console.log(analisaAnoBissexto(800)) // TRUE
console.log(analisaAnoBissexto(2020)) // TRUE
console.log(analisaAnoBissexto(2021)) // FALSE



// 12
console.log("----------------- Exercício 12 ----------------- LOOP: função retornando função. Refiz 3x..")

function fatorial(numero) {
    
    if (numero < 0) {
        return "Número negativo"
    } else if (numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(-1)); // negativo
console.log(fatorial(0)); // 1
console.log(fatorial(4)); // 24
console.log(fatorial(5)); // 120

// O que é o Fatorial? 5! = 5 * 4 * 3 * 2 * 1
// Fatorial de 0! é igual a 1 por padrão.


// 13
console.log("----------------- Exercício 13 ----------------- OK. Fácil.")


function diasDaSemana(dia) {
    switch (dia) {
        case 1: case 7:
            console.log("É final de semana.")
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log("É dia de semana.")
            break
        default:
            console.log("Dia Inválido")
    }
}
diasDaSemana(1);
diasDaSemana(2);
diasDaSemana(3);
diasDaSemana(4);
diasDaSemana(5);
diasDaSemana(6);
diasDaSemana(7);
diasDaSemana(0);


// 14
console.log("----------------- Exercício 14 ----------------- OK. Fácil.")

function venderFrutas(fruta) {
    switch (fruta) {
        case "maçã":
            console.log("Não vendemos esta fruta aqui.")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis.")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo.")
            break
        default:
            console.log("Erro: fruta inválida.")
    }
}

venderFrutas("maçã");
venderFrutas("kiwi");
venderFrutas("melancia");
venderFrutas("pera");

// 15
console.log("----------------- Exercício 15 ----------------- OK. Fácil.")

function comprarCarro(carro) {
    switch (carro) {
        case "hatch":
            return "Compra efetuada com sucesso."
            break
        case "sedans": case "motocicletas": case "camionetes":
            return "Tem certeza que prefere este modelo?"
            break
        default:
            return "Não trabalhamos com esse tipo de automóvel."
    }
}

console.log(comprarCarro("hatch"));
console.log(comprarCarro("motocicletas"));
console.log(comprarCarro("caminhao"));

// 16
console.log("----------------- Exercício 16 ----------------- OK. Fácil.")

function somarDoisNumeros(a, b, c) {
    switch (b) {
        case "+":
            console.log(a + c)
            break
        case "-":
            console.log(a - c)
            break
        case "*":
            console.log(a * c)
            break
        case "/":
            console.log(a / c)
            break
        default:
            console.log("Operação inválida.")

    }
}
somarDoisNumeros(2, "+", 3);
somarDoisNumeros(2, "-", 3);
somarDoisNumeros(2, "*", 3);
somarDoisNumeros(2, "/", 3);
somarDoisNumeros(2, 5, 3);

// 17
console.log("----------------- Exercício 17 ----------------- OK. Fácil.")

function calcularAumentoSalario(salarioAtual, plano) {
    switch (plano) {
        case "a":
            return salarioAtual + (salarioAtual * 0.1)
            break
        case "b":
            return salarioAtual + (salarioAtual * 0.15)
            break
        case "c":
            return salarioAtual + (salarioAtual * 0.2)
            break
        default:
            return "Plano inválido."
    }
}
console.log(calcularAumentoSalario(2000, "a"));
console.log(calcularAumentoSalario(2000, "b"));
console.log(calcularAumentoSalario(2000, "c"));
console.log(calcularAumentoSalario(2000, "j"));

// 18
console.log("----------------- Exercício 18 ----------------- OK. Fácil.")

function escreverNumero(numeroX) {
    switch (numeroX) {
        case 0:
            return "Zero"
            break
        case 1:
            return "Um"
            break
        case 2:
            return "Dois"
            break
        case 3:
            return "Três"
            break
        case 4:
            return "Quatro"
            break
        case 5:
            return "Cinco"
            break
        case 6:
            return "Seis"
            break
        case 7:
            return "Sete"
            break
        case 8:
            return "Oito"
            break
        case 9:
            return "Nove"
            break
        case 10:
            return "Dez"
            break
        default:
            return "Número fora do intervalo."

    }
}
console.log(escreverNumero(2));
console.log(escreverNumero(5));
console.log(escreverNumero(8));
console.log(escreverNumero(22));

// 19
console.log("----------------- Exercício 19 ----------------- OK. Fácil.")


function fazerPedido(codigoItem, quantidade) {
    switch (codigoItem) {
        case 100:
            return "R$ " + 3 * quantidade
            break
        case 200:
            return "R$ " + 4 * quantidade
            break
        case 300:
            return "R$ " + 5.5 * quantidade
            break
        case 400:
            return "R$ " + 7.5 * quantidade
            break
        case 500:
            return "R$ " + 3.5 * quantidade
            break
        case 600:
            return "R$ " + 2.8 * quantidade
            break
        default:
            return "Produto não existe."
    }
}

console.log(fazerPedido(300, 1));
console.log(fazerPedido(400, 2));
console.log(fazerPedido(600, 1));
console.log(fazerPedido(700, 2));

// 20
console.log("----------------- Exercício 20 ----------------- Código difícil. Resolução complexa.")

function sacarDinheiro(valorSaque) {
    let contador100 = 0;
    let contador50 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador1 = 0;
    let valorNota = calcularValorNota(valorSaque) 
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque = valorSaque - 100
                contador100++
                break
            case 50:
                valorSaque = valorSaque - 50
                contador50++
                break
            case 10:
                valorSaque = valorSaque - 10
                contador10++
                break
            case 5:
                valorSaque = valorSaque - 5
                contador5++
                break
            case 1:
                valorSaque = valorSaque - 1
                contador1++
                break
        }
        valorNota = calcularValorNota(valorSaque)
    }
return elaborarResultado(contador100, contador50, contador10, contador5, contador1)

}


function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = "";

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }
    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `           
    }
    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }
    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }
    return resultado
}

console.log(sacarDinheiro(150))
console.log(sacarDinheiro(18))


// 21
console.log("----------------- Exercício 21 ----------------- OK. Fácil.")


function planoDeSaude(idade) {

    if (idade < 10) {
        return "Valor do plano é R$ " + (100 + 80)
    } else if (idade >= 10 && idade <= 30) {
        return "Valor do plano é R$ " + (100 + 50)
    } else if (idade > 30 && idade <= 60) {
        return "Valor do plano é R$ " + (100 + 95)
    } else {
        return "Valor do plano é R$ " + (100 + 130)
    }
}

console.log(planoDeSaude(5));
console.log(planoDeSaude(15));
console.log(planoDeSaude(40));
console.log(planoDeSaude(65));


// 22
console.log("----------------- Exercício 22 ----------------- Refiz 3x.")

function calcularAnuidadeAssociacao(mes, valorAnuidade) {
    if (mes > 0 && mes < 13) {
        mesesAtrasados = mes - 1
        return (valorAnuidade * ((1 + 0.05) ** mesesAtrasados)).toFixed(2) // Fórmula Juros Composto Ci * ((1 + i) ** t)
    } else {
        return "Mês inválido: deve ser entre 1: Janeiro e 12: Dezembro."
    }
}

console.log(calcularAnuidadeAssociacao(1, 200));
console.log(calcularAnuidadeAssociacao(2, 200));
console.log(calcularAnuidadeAssociacao(4, 100));
console.log(calcularAnuidadeAssociacao(13, 100));

// Variável atraso. 


// 23
console.log("----------------- Exercício 23 ----------------- OK. Fácil.")


function calcularMedia(codigoAluno, n1, n2, n3) {

    if (n1 > n2 && n1 > n3) {
        mediaPonderada = ((n1 * 4) + (n2 * 3) + (n3 * 3)) / (4 + 3 + 3)
    } else if (n2 > n1 && n2 > n3) {
        mediaPonderada = ((n1 * 3) + (n2 * 4) + (n3 * 3)) / (4 + 3 + 3)
    } else {
        mediaPonderada = ((n1 * 3) + (n2 * 3) + (n3 * 4)) / (4 + 3 + 3)
    }

    if (mediaPonderada >= 5) {
        return console.log(`Código do aluno: ${codigoAluno}. Notas do Aluno: ${n1}, ${n2}, ${n3}. Média: ${mediaPonderada}. APROVADO!!`)
    } else {
        return console.log(`Código do aluno: ${codigoAluno}. Notas do Aluno: ${n1}, ${n2}, ${n3}. Média: ${mediaPonderada}. REPROVADO!!`)
    }
}

calcularMedia(123, 2.8, 6, 3.5);
calcularMedia(1155, 5, 8, 9);
calcularMedia(1255, 8, 7, 6);
calcularMedia(1545, 9, 10, 8);

console.log("----------------- Exercício 23 - Opção 2 Resolução ----------------- OK. Usando .sort . Refiz 3x.")

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? -1 : 1) // usou função arrow para orderar os elementos do array: do MAIOR para MENOR.

    let mediaFinal = ((notas[0] * 3) + (notas[1] * 3) + (notas[2] * 4)) / (4  + 3 + 3)
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Média: ${mediaFinal}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)

// Média ponderada: soma das notas multiplicadas pelos seus pesos, e depois, dividir pela soma dos pesos.

// Memorizar como se orderar ARRAY em ordem crescente.
// notas.sort((a,b) => a < b ? -1 : 1) // do MENOR para MAIOR. Crescendo... "a" crescendo para "b" e "-1" crescendo para "1")


// 24
console.log("----------------- Exercício 24 ----------------- Refiz 3x.")

function imprimir() {
    let contador = 0;
    while (contador < 11) {
        console.log("Hello World!")
        contador++
    }
}
imprimir();

// -------------- Opção 2 -----------------------------------------------------

function imprimirXisVezes(vezes) {
    let contador = 1;

    while (contador <= vezes) {
        console.log(`${contador++} - Olá, Maisa!`) // Sempre colocar "contador++" em baixo ou dentro de console.log
                                                   // Colocar em cima de console.log altera a contagem, adiciona 1 a mais.
    }
}

imprimirXisVezes(6);

// 25
console.log("----------------- Exercício 25 ----------------- Refiz 3x.")

function numeroAte50() {
    let contagem = 0;
    while (contagem < 51) {
        console.log(contagem++)
    }
}
numeroAte50();

// 26
console.log("----------------- Exercício 26 ----------------- Refiz 3x.")

function numerosParesAte100() {
    for (let index = 1; index < 101; index++) {
        if (index % 2 == 0)
            console.log(index)
    }
}

numerosParesAte100();

// 27
console.log("----------------- Exercício 27 ----------------- Resolução Prof. deve estar errada.")

function crescimentoCriancas(altura1, altura2, taxa1, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return "A criança 1 ultrapassará a criança 2 em 1 ano."
        } else if (taxa1 < taxa2) {
            return "A criança 2 ultrupassará a criança 1 em 1 ano."
        } else {
            return "Nenhuma criança ultrapassará a altura da outra."
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return "A criançã menor não ultrapassará a criança maior."
            } else {
                return "A criança menor ultrapassará a maior em " + calcularQntAnos(altura1, altura2, taxa1, taxa2) + " anos."
            }
        } else {
            if (taxa2 <= taxa1) {
                return "A criança menor ultrapassará a maior em " + calcularQntAnos(altura1, altura2, taxa1, taxa2) + " anos."
            } else {
                return "A criançã menor não ultrapassará a criança maior."
            }
        }
    }
}


function calcularQntAnos(alturaMaior, alturaMenor, taxaMaior, taxaMenor) {
    let qntAnos = 0;
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        qntAnos++
    }
    return qntAnos
}

console.log(crescimentoCriancas(150, 2, 130, 4));




// 28
console.log("----------------- Exercício 28 ----------------- Refiz 3x.")

const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function contaNumeros(numerosArray) {
    let contePares = 0;
    let conteImpares = 0;
    for (let a = 0; a < numerosArray.length; a++) {
        if (numerosArray[a] % 2 == 0) {
            contePares++
        } else {
            conteImpares++
        }
    }
    return `Quantidade números pares: ${contePares}. Quantidade números ímpares: ${conteImpares}.`
}

console.log(contaNumeros(numerosArray));

// 29
console.log("----------------- Exercício 29 ----------------- OK. Fácil.")

const array2 = [5, 8, 4, 10, 7, 11, 16, 20, 32, 66, 32];

function contarNumeros(array2) {
    let conteNumerosDentro = 0;
    let conteNumerosFora = 0;

    for (let x = 0; x < array2.length; x++) {
        if (array2[x] >= 10 && array2[x] <= 20) {
            conteNumerosDentro++
        } else {
            conteNumerosFora++
        }
    }
    return `Quantidade números dentro: ${conteNumerosDentro}. Quantidade números fora: ${conteNumerosFora}.`
}
console.log(contarNumeros(array2));

// 30
console.log("----------------- Exercício 30 ----------------- Refiz 3x. ")

const vetorInteiros = [100, 3, 5, 4, 98, 45, 16, 24, 15, 622, 55, 800];

function maiorMenorNumero(vetorInteiros) {
    let numeroMaior;
    let numeroMenor;
    for (let h = 0; h < vetorInteiros.length; h++) {
        if (numeroMaior === undefined && numeroMenor === undefined) {
            numeroMaior = vetorInteiros[h]
            numeroMenor = vetorInteiros[h]
        } else {
            if (vetorInteiros[h] > numeroMaior) {
                numeroMaior = vetorInteiros[h]
            }
            if (vetorInteiros[h] < numeroMenor) {
                numeroMenor = vetorInteiros[h]
            }
        }

    }
    return `O número maior é: ${numeroMaior}. E o número menor é: ${numeroMenor}.`
}
console.log(maiorMenorNumero(vetorInteiros));

// -----------------------------------Opção 2---------------------------------------

const vetorInteiros2 = [300, 5, 4, 98, 45, 16, 24, 15, 1, 622, 55, 1000];

function maiorMenorNumero2(vetorInteiros2) {
    let numeroMaior2;
    let numeroMenor2;
    for (let h2 = 0; h2 < vetorInteiros2.length; h2++) {
        numeroMaior2 = Math.max(...vetorInteiros2);
        numeroMenor2 = Math.min(...vetorInteiros2);
    }
    return `O número maior é: ${numeroMaior2}. E o número menor é: ${numeroMenor2}.`
}
console.log(maiorMenorNumero2(vetorInteiros2));


// 31
console.log("----------------- Exercício 31 ----------------- OK. Fácil.")

const vetorNumerosInt = [2, -6, -7, -56, 45, 8, -21, -6];

function contaNumerosNeg(vetorNumerosInt) {
    let qntNumerosNeg = 0;

    for (let o = 0; o < vetorNumerosInt.length; o++) {
        if (vetorNumerosInt[o] < 0) {
            qntNumerosNeg++
        }
    }
    return `A quantidade de número de negativos é ${qntNumerosNeg}`
}

console.log(contaNumerosNeg(vetorNumerosInt))


// 32
console.log("----------------- Exercício 32 ----------------- OK. Fácil.")

const vetorInteiros3 = [3, 5, 4, 6, 65];

function facaMediaAritm(vetorInteiros3) {
    let somaNums = 0;
    let qntNums = 0;

    for (let q = 0; q < vetorInteiros3.length; q++) {
        if (vetorInteiros3[q] != 0) {
            qntNums++                        // Usa o (++) quando quer contar
            somaNums += vetorInteiros3[q]    // Usa o (+=) quando tem um cálculo
            resultado = somaNums / qntNums
        }
    }
    return `A média aritmética do vetor é ${resultado}.`
}

console.log(facaMediaAritm(vetorInteiros3));

// 33
console.log("----------------- Exercício 33 ----------------- arguments | .concat | Refiz 3x.")

const vetorInteiro = [3, 5, 9, 7];
const vetorString = ["Maisa", "Renan", "Mirian"];
const vetorDouble = [3.1, 2.4, 9.3, 4.1];

function concat() {
    let resultado = [];
    for (let f = 0; f < arguments.length; f++) {
        resultado = resultado.concat(arguments[f])
    }
    return resultado
}

console.log(concat(vetorInteiro, vetorString));
console.log(concat(vetorString, vetorDouble));

// 34
console.log("----------------- Exercício 34 ----------------- Refiz 2x.")

const string1 = "swswsw";        // O método charAt(i) retorna o caractere no índice especificado em uma string.
const string2 = "wswsws";   // O índice do primeiro caracter é 0, o segundo carácter é 1, e assim por diante.

function retornaResult(string1, string2) {
    let estaContido = true;
    for (let n = 0; n < string1.length; n++) {
        let caracteresString1 = string1.charAt(n).toLowerCase()  // O toLowerCase() torna todas minúsculas.
        for (let m = 0; m < string2.length; m++) {
            let caracteresString2 = string2.charAt(m).toLowerCase()
            if (caracteresString1 == caracteresString2) {
                estaContido = true
                break   // esse break aqui é fundamental
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido // não entendo a necessidade dessa parte.
        }
    }
    return estaContido
}
console.log(retornaResult(string1, string2));
// todos os caracteres contidos em ambas as palavras.

// 35
console.log("----------------- Exercício 35 ----------------- Refiz 2x.")

const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

function concatena(vetorPilha, vetorAdiciona) {
    let vetorResultado = [];

    for (let z = 0; z < vetorPilha.length; z++)
        vetorResultado.push(vetorPilha[z])

    for (let a = 0; a < vetorAdiciona.length; a++)
        vetorResultado.push(vetorAdiciona[a])

    return `Vetor Resultado: ${vetorResultado}.`
}

console.log(concatena(vetorPilha, vetorAdiciona));

// 36
console.log("----------------- Exercício 36 ----------------- Refiz 3x.")

const vetorNumerico = [3, 2, 1];

function multiplica(vetorNumerico, numeroInt) {
    let vetorResult = [];

    for (let e = 0; e < vetorNumerico.length; e++) {
        vetorNumerico[e] = vetorNumerico[e] * numeroInt
        vetorResult.push(vetorNumerico[e])

    }
    return vetorNumerico
}

console.log(multiplica(vetorNumerico, 2));

console.log("----------------- Opção 2 - Exercício 36 ----------------- .forEach | Refiz 3x.")

const vetorNumerico2 = [3, 2, 1];

function multiplicaVetor(vetorNumerico2, numeroI) {
    let vetorRes = [];

    vetorNumerico2.forEach(elemento => {
        vetorRes.push(elemento * numeroI)
    });
    return vetorRes
}
console.log(multiplicaVetor(vetorNumerico2, 2));

// 37
console.log("----------------- Exercício 37 ----------------- OK. Fácil. ")


function progressaoAritimetica(n, a1, r) {
    let aN;
    let soma;

    for (let i = 0; i < n; i++) {
        aN = a1 + (i) * r           // o (n - 1) da fórmula é igual a índice do elemento "i". Porque o "i" é o numero de elementos - 1.
        soma = ((a1 + aN) * n) / 2
        console.log(aN) 
        
    }
    console.log("Soma: " + soma) 
}

progressaoAritimetica(8, 2, 3)

console.log("------------------------------")

function progressaoGeometrica(n, a1, r) {
    let aN;
    let soma;

    for (let i = 0; i < n; i++) {
        aN = a1 * (r ** i)
        soma = (a1 * ((r ** n) - 1)) / (r - 1)
        console.log(aN)
    }
console.log("Soma: " + soma)
}

progressaoGeometrica(10, 2, 2)


// 38
console.log("----------------- Exercício 38 ----------------- Troca de posições entre 2 elementos. Refiz 3x.")

function imprimir(inicio = 0, fim = 100) {
    let numEntre;
    if (inicio > fim) {
        inicio = inicio + fim
        fim = inicio - fim
        inicio = inicio - fim
    }

    for (let n = inicio; n <= fim; n++) {
        if (n % 2 != 0)
            console.log(n)
    }

}

imprimir(19, 3);

// 39
console.log("----------------- Exercício 39 ----------------- Troca de posições entre 2 elementos. Refiz 3x.")

const vetorA = [1, 2, 3];
const vetorB = [6, 7, 8];

function trocaElementos(vetorA, vetorB) {

    if (vetorA.length == vetorB.length) {

        for (let x = 0; x < vetorA.length; x++) {
            vetorA[x] = vetorA[x] + vetorB[x]
            vetorB[x] = vetorA[x] - vetorB[x]
            vetorA[x] = vetorA[x] - vetorB[x]
        }
    }
    else {
        return "Vetores de tamanhos diferentes."
    }
    console.log("Vetor A: " + vetorA);
    console.log("Vetor B: " + vetorB);
}

trocaElementos(vetorA, vetorB);

// 40
console.log("----------------- Exercício 40 ----------------- .push | Refiz 3x.")


function atribuiConceito(vetorNotas) {
    let conceitos = [];

    for (let o = 0; o < vetorNotas.length; o++) {
        if (vetorNotas[o] >= 0 && vetorNotas[o] <= 4.9) {
            conceitos.push("Conceito D")            
        } else if (vetorNotas[o] >= 5.0 && vetorNotas[o] <= 6.9) {
            conceitos.push("Conceito C")           
        } else if (vetorNotas[o] >= 7.0 && vetorNotas[o] <= 8.9) {
            conceitos.push("Conceito B")            
        } else {
            conceitos.push("Conceito A")
        }
    }
    return conceitos
}

let vetorNotas = [7, 8, 9, 5, 4];
let vetorConceitoNotas = atribuiConceito(vetorNotas);

console.log(vetorConceitoNotas);