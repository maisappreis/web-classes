
// CSS - Anotações importantes.

// Aplicativo para pegar o código de qualquer cor: Color Picker.

// CTRL + espaço vê a lista de possibilidades de estilos.
// Focar em criar 'class' para implementar o CSS
// Padronizar a nomenclatura do código, escolher 1: dash-case; camelCase; underscore_case
// Na vida real, a BOA PRATICA é colocar os CSS em arquivos próprios de CSS, não junto com o HTML

// você faz importações de CSS (usando 'style') e de JavaScript (usando 'script') para dentro do código HTML

// o 'id' é um tipo de identificador, deve ser único dentro da página inteira -->
// um 'id' no CSS é criado a partir do #nomeDoId -->

// a 'class' também é um tipo de identificador, associada ao estilo, pode-se aplicar mais de uma vez, pode marcar um elemento com mais de uma classe -->
// uma 'class' no CSS é criada a partir do .nomeDaClasse -->

// pegar id ou classe no Console com: document.querySelector(".nomeDaClasse") ou ("#nomeDoId") ou ("[atributo-criado]") -->

// CSS in line é quando dentro da tag, usando 'style', colocar um CSS diretamente - Não é boa prática
// Para fazer uma ANCORA: href="#nomeDoId"
// A ancora não é enviada para o backend

// SELETORES
// Seletor universal: *
// Seletor de elemento: selecionar pela tag: um 'h1', uma 'div', um 'p'
// Seletor de classe: .class
// Seletor de id: #id
// Seletor de atributo: abrituto criado por mim [atributo]
// :pseudo-class > palavra-chave adiciona ao seletor para especificar um estado especial, exemplo, :hover  - quando o mouse está em cima.
// ::pseudo-elements > palavra-chave adiciona ao seletor para estilizar uma parte específica do elemento.

// Algumas :pseudo-classes   >> :hover :visited :checked :active - https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes
// Alguns :pseudo-elements   >> ::first-line ::after ::before ::first-letter ::grammar-error - https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elements

// COMBINAR SELETORES
// Adjacent Sibling: div + p | (irmãos lado a lado, um seguido do outro)
// General Sibling: div ~ p | (irmãoes gerais, possuem o mesmo pai, mas não precisam estar um do lado do outro)
// Child: div > p | (filho direto)
// Descendant: div p | (qqr elemento 'p' dentro de 'div)


// Ordem de importância das ESPECIFICAÇÕES

// 1 - Estilo Inline
// 2 - Seletores ID
// 3 - Pseudo-classes
// 4 - Atributos seletores
// 5 - Classes seletoras
// 6 - Tags Seletoras (elementos e psudo-elementos) Que seria apenas as TAGs
// 7 - Seletores Universais

// https://developer.mozilla.org/pt-BR/docs/Web/CSS/Specificity
// https://specificity.keegan.st/

// Google Fontes, copia os link na head, e copia a font-family no style.

// BOX: conteúdo, padding, border, margin. (indo de dentro para fora)
// box-sizing: border-box; Faz com que a CAIXA se ajuste ao tamanho da página, sem precisar de barra de rolagem.
// border-box > tamanho da borda para dentro.
// content-box > tamanho apenas do conteúdo. 
// Margin Collapse: quando as margens se sobrepõe. Para evitar usar: float: left / right | position: absolute | display: inline-block

// DISPLAY
// Display: block; cada texto terá seu próprio bloco, sua própria linha/caixa.
// Display: inline; os textos ficam na mesma linha. Mas NÃO é possível dar 'width' e 'height' para a BOX.
// Display: inline-block; os textos ficam na mesma linha. Mas agora, é possível dar 'width' e 'height' para a BOX.
// width e height podem ter valores absolutos (em pixels) ou valores relativos (em %).


// FlexBox é mais interessante de usar do que o 'float'.

// UNIDADES:
// Absolutos: px, cm, mm
// Viewport: vh, vw, vmin, vmax, % | tamanho da tela, da página | 10vh 10% da view h | vmax é sempre a maior dimentação da box e vmin a menor
// Font: rem, em, % | 'rem' relativo ao raiz | 'em' relativo ao que está mais próximo | 2em da fonte pai, se a fonte pai é 12px, vai ser 2x12


// JavaScript

// Transformar ARRAY em TEXTO/OBJETO/ARRAY, usar REDUCE.
// Transformar ARRAY em ARRAY filtrando dados, menos elementos, usar FILTER.
// Transformar ARRAY em ARRAY filtrando dados, mesma qtd elementos, usar MAP.