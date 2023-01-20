
// Código para interceptar e baixa a página 'header.html' e colocar o conteudo dentro do elemento com a propriedade 'wm-include'

import $ from 'jquery';

// vai criar um Array de funções Callbacks que serão chamadas quando uma requisição for feita de forma bem sucedida.
// Ou seja, se carregar uma pagina HTML de forma bem sucedida, para que eu possa executar algo logo depois do carregamento da pagina.

const loadHtmlSuccessCallbacks = []; // array definido.

export function onLoadHtmlSuccess(callback) { // essa função registra as funções para o array ali de cima.
    if(!loadHtmlSuccessCallbacks.includes(callback)) // se a função não estiver incluida, então, incluir.
    loadHtmlSuccessCallbacks.push(callback) // então adiciona a callback para dentro do array.
}

function loadIncludes(parent) {
    if(!parent) parent = 'body';
    $(parent).find('[wm-include]').each(function(index, element) {
        const url = $(element).attr('wm-include');
        $.ajax({
            url,
            success(data) {
            $(element).html(data)
            $(element).removeAttr('wm-include') // deleta para não ser processada uma segunda vez.

            loadHtmlSuccessCallbacks.forEach(callback => callback(data))
            loadIncludes(element)
            }
        })
    }) 
}

loadIncludes();