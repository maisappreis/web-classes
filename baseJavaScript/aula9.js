// Estrutura de controle IF.
// Estrutura de controle IF/ELSE.
// Estrutura de controle IF/ELSE IF.
// Estrutura de controle SWITCH/CASE/DEFAULT, ainda com o BREAK.

// As chaves {} são opcionais dentro da estrutura IF, exceto que sejam várias sentenças de código, ai precisa das {}.
// Caso seja apenas uma sentença, não precisa de {}. Mas melhor convêncionar para sempre usar.
// NUNCA colocar ; na definição do IF, exemplo: "if(num > 7);". Isso dá erro, ele entendende que existe uma sentença vazia após o IF.


// Estrutura IF apenas.

function vestibular(nota) {
    if (nota >= 7) {
        console.log("Aprovado com nota " + nota);
    }
}
vestibular(8);
vestibular(3); // no caso do "senão", como não existe o "else", ele não retorna nada aqui.

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade que.." + valor)
    }
}
seForVerdadeEuFalo("realmente gosto dele."); // ele retornou o "(valor)" como true, e por isso imprimiu.
seForVerdadeEuFalo(); // Não retorna nada porque considera o "(valor)" como falso, não imprime.
seForVerdadeEuFalo(null); // Não retorna nada porque considera o "(valor)" como falso, não imprime.
seForVerdadeEuFalo(undefined); // Retorna como false, ou seja, não imprime.
seForVerdadeEuFalo(""); // Retorna como false, ou seja, não imprime.
seForVerdadeEuFalo(0); // Retorna como false, ou seja, não imprime.
seForVerdadeEuFalo(-1); // Retorna como TRUE, imprime.
seForVerdadeEuFalo(" "); // Retorna como TRUE, imprime.
seForVerdadeEuFalo("?"); // Retorna como TRUE, imprime.
seForVerdadeEuFalo([]); // Array vazio. Retorna como TRUE, imprime.
seForVerdadeEuFalo([1, 2]); // Array com elementos. Retorna como TRUE, imprime.
seForVerdadeEuFalo({}); // Objeto vazio. Retorna como TRUE, imprime.


function teste(num) {
    if (num > 7)
       console.log(num); // apenas a primeira sentênça tem relação com o IF.

    console.log("Final.") // portanto esta aqui, sempre será executada, sendo true or false.
}
teste(5);
teste(8);


// Estrutura IF/ELSE.

function vestibularNota(nota2) {
    if(nota2 >= 7) {
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}
vestibularNota(8);
vestibularNota(6);


// Estrutura IF/ELSE IF.

Number.prototype.entre = function (inicio, fim) {
    return inicio <= this && this <= fim   // aqui o THIS é a NOTA da função abaixo.
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log("Quadro de Honra!")
    } else if(nota.entre(7, 8.99)) {
        console.log("Parabéns, aprovado!")
    } else if(nota.entre(4, 6.99)) {
        console.log("Recuperação.")
    } else if(nota.entre(0, 3.99)) {
        console.log("Continue tentando. Reprovado.")
    } else {
        console.log("Nota Inválida.")
    }
    console.log("Fim.")
}
imprimirResultado(10);
imprimirResultado(8.70);
imprimirResultado(4);

// ele sempre execula o "Fim."


// Estrutura SWITCH/CASE/DEFAULT, ainda com o BREAK.
// Mais usado para seleções multiplas do que o IF/ELSE IF/ELSE.
// No caso do JavaScript o SWITCH ele não executa apenas o valor do CASE, ele vai executando todos a partir do CASE.
// Para isso não ocorrer, precisa usar o BREAK.
// O DEFAULT seria tipo o ELSE. Ultima opção.


const imprimirResultado2 = function (notaTeste) {
    switch (Math.floor(notaTeste)) {
        case 10:
        case 9:
            console.log("Nota: 5 estrelas.")
            break
        case 8: case 7:
            console.log("Nota: 4 estrelas.")
            break
        case 6: case 5:
            console.log("Nota: 3 estrelas.")
            break
        case 4: case 3: case 2:
            console.log("Nota: 2 estrelas.")
            break
        case 1: case 0:
            console.log("Nota: 1 estrela.")
            break
        default:
            console.log("Nota inválida.")
    }
}
imprimirResultado2(10);
imprimirResultado2(8.99);
imprimirResultado2(-8.99);

