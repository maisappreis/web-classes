// Operador Rest (juntar) e/ou Spread (espalhar).
// Tagged Template: processas Tamplate String a partir de uma função.
// Map()
// Função .has() diz se um elemento está ou não está contido dentre do Map(). 'has' de 'tem' em inglês.
// E o atributo .size para dizer quantos elementos estão presentes/contidos no Map()
// Set() - estrutura de conjunto, não indexada, que não aceita repetição.
// For of | enquanto o antigo For in operava em cima de índice, o For of opera em cima de valores.
// Promises (linha 206)

// --------------------------------------------------------------------------------------------

// Operador Rest/Spread (juntar e espalhar).
// Usar Rest como parâmetro de função.

// Usar Spread com Objeto.

const funcionario = { nome: 'Maisa', salario: 15998.45 };
const copia = { ativo: true, ...funcionario }; // está pegando todos os atributos de funcionario, e espalhando para um novo objeto cópia.

console.log(copia);

// Usar Spread com Array.
const grupoA = ['João', 'Maria', 'Ana'];
const grupoFinal = ['Beatriz', ...grupoA, 'Paulo'];

console.log(grupoA);
console.log(grupoFinal);


console.log("------------------ Tagged Tamplates ----------------------")

// Tagged Template: processas Tamplate String a partir de uma função.

function tag(partes, ...valores) {
    console.log(partes)   // array de partes [ '', ' está ', '' ]  indices dos elementos [0, 2, 4];
    console.log(valores)  // array de valores [ 'Gui', 'Aprovado' ] indices dos elementos [1, 3];
    return 'Outra string'
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}`);

// Controlar o 'parser' de uma Template String a partir de uma função.
// recebe os valores da template string todos fatiados, e recebe um array com tudo que foi interpolado.
// Em cima destes dois array consegue fazer uma mescla para poder gerar um string com um 'parser' diferente.
// Isolar o 'parser' de uma template string

// Agora vamos contruir uma função que vai fazer um 'parser' em todas as variáveis interpoladas e vai aplicar uma mascara de dinheiro em cima.

function real(partes, ...valores) {
    const resultado = [];
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor);
    })
    return resultado.join('')
}

const preco = 29.989;
const precoParcela = 11;
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`);


// Map()
// no objeto você tem chave e valor, a chave é literal, é uma string.
// já no Map() você pode ter a chave como sendo uma função, como um numero, como um objeto. Mas ele não veio para substituir o objeto.

const tecnologias = new Map()
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react); // undefined - não funciona assim como o Map(), assim é pra objeto.
console.log(tecnologias.get('react'));
console.log(tecnologias.get('angular').framework);


const chaveVariadas = new Map([  // a partir de uma array, matriz.
    [function () {}, 'Função'],  // uma função como chave, e uma string como valor.
    [{}, 'Objeto'],              // um objeto como chave, e uma string como valor.
    [123, 'Numero']              // um numero como chave, e uma string como valor.
])

chaveVariadas.forEach((valor, chave) => { // cara, seu eu altero ordem nos parâmetros aqui, muda minha ordem no console.log
    console.log(chave, valor)
})

// Função .has() diz se um elemento está ou não está contido dentre do Map()
// E o atributo .size para dizer quantos elementos estão presentes/contidos no Map()

console.log(chaveVariadas.has(123)); // true
chaveVariadas.delete(123);
console.log(chaveVariadas.has(123)); // true
console.log(chaveVariadas.size); // 2

// Não aceita repetição na 'chave', se repetir a mesma chave, mudando o valor, será considerado o ultimo valor.
// Aceita repetição no 'valor', desde que, com chaves diferentes.

chaveVariadas.set(123, 'a'); // alterou o valor para 'a'.
chaveVariadas.set(123, 'b'); // alterou o valor para 'b'.
console.log(chaveVariadas); // permaneceu apenas o valor de 'b', porque ele não aceita essa repetição.

/*
 Map(3) {
  [Function (anonymous)] => 'Função',
  {} => 'Objeto',
  123 => 'b'
}
*/

chaveVariadas.set(123, 'b');
chaveVariadas.set(456, 'b');
console.log(chaveVariadas); // permaneceu as duas chaves, ambas com o valor 'b'.

/*
Map(4) {
    [Function (anonymous)] => 'Função',
    {} => 'Objeto',
    123 => 'b',
    456 => 'b'
  }
  */


  // Set() - estrutura de conjunto, não indexada, que não aceita repetição.

  const times = new Set()
  times.add('Vasco');
  times.add('São Paulo').add('Palmeiras').add('Corinthians');
  times.add('Flamengo');
  times.add('Vasco'); // aqui uma repetição. Ele ignora essa linha.

  console.log(times); // Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }

  console.log(times.size); // 5
  console.log(times.has('vasco')); // false
  console.log(times.has('Vasco')); // true
  times.delete('Flamengo'); 
  console.log(times.has('Flamengo')); // false

  // outra forma de criar um Set()

  const nomes = ['Rafael', 'Joana', 'Julia', 'Lais', 'Renan', 'Joana']; // array
  const nomesSet = new Set(nomes)
  console.log(nomesSet); // criou ignorando as repetições.


  // For of | enquanto o antigo For in operava em cima de índice, o For of opera em cima de valores.


  // FOR OF percorrendo String.

  for (let letra of 'Maisa') { // percorre cada letra de Maisa - Para letra de Maisa... imprima letra.
      console.log(letra)
  }

  // FOR OF percorrendo Array.

  const assuntos = ['Map', 'Set', 'Promise'];

  for (let i in assuntos) {   // FOR IN opera em cima dos índices.
      console.log(i)          // retorna os índices.
  }

  for (let assunto of assuntos) {  
      console.log(assunto)          // retorna cada assunto de assuntos.
  }

  // FOR OF percorrendo Map().

  const assuntosMap = new Map([
      ['Map', { abordado: true }],
      ['Set', { abordado: true }],
      ['Promisse', { abordado: false }]
  ])

  for (let assunto of assuntosMap) {
      console.log(assunto)
  }

  // para percorrer apenas as chaves deste Map().

  for (let chave of assuntosMap.keys()) {
      console.log(chave)
  }

  // para percorrer apenas os valores deste Map().

  for (let valor of assuntosMap.values()) {
      console.log(valor)
  }

  // para percorrer as entradas deste Map().
  // Aqui foi usando o destruturing.

  for (let [ch, vl] of assuntosMap.entries()) {
      console.log(ch, vl)
  }

  // FOR OF percorrendo Set().

  const set = new Set(['a', 'b', 'c'])
  for (let letra of set) {
      console.log(letra)
  }

  