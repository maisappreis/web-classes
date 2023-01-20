
// SELECIONANDO ELEMENTOS a partir da DOM.

// .getElementById() | Um único elemento com um ID único.
// .getElementsByTagName() | Retorna um HTMLCollection com a lista de Tags solicitadas. No caso aqui, as 3 divs ali em cima.
// .getElementsByClassName() | Retorna um HTMLCollection com a lista de classes.
// .getElementsByName('pesquisa'); name='pesquisa' | Retorna NodeList


// SELECIONANDO ELEMENTOS, usando jQuery.

// document.querySelector('#nomeID'); 
// document.querySelectorAll('#nomeClass');
// Ele espera qualquer elemento, portanto, especificar: '#nomeID' '.nomeClasse' 'tag' '[nomeAtributo]'
// Esse seletor retorna um 'NodeList'.

// Para transformar em Array:
// Array.from(querySelectorAll('div)); --- ou---
// [...document.querySelectorAll('div)];

// Caso necessário, deve-se transformar o HTMLCollection ou o NodeList em array, para percorrar com 'forEach', ou 'for' ou qqr coisa.
// Pois esses elementos nem sempre possuem das funções .forEach, .for, e todas as demais.
// No site: Can I use - você pode ser o suporte dos browsers em relação as ferramentas.


// SELECIONANDO ATRIBUTOS.

// img.getAttribute('src')
// img.src
// img['src']
// src.nodeType
// src.nodeName
// src.nodeValue


// CRIANDO ELEMENTOS.

// document.createElement('div');