
import $ from 'jquery';

import { onLoadHtmlSuccess } from '../core/includes'; // esse '..' ele sai da pasta atual, para ir acessar outra.

const duration = 300; // duração da exibição.

// Filtro pela cidade
// Se passar parâmetro nulo, vai ter que exibit todas as imagens.
// Se passar Nova York, quero que pego os 'wm' settados como Nova York e mostre esses elementos


function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        // cria um elemento para saber se ele é alvo da minha manipulação, ou se é nulo.
        const isTarget = $(this).attr('wm-city') === city || city === null; // a variável 'isTarget' será verdadeiro ou falso.
        if (isTarget) {
            // para tirar o bug de buracos na galeria apos a filtragem ser aplicada.
            $(this).parent().removeClass('d-none') // para esconder as 'divs' das imagens que não são alvo do filtro.
            // para fazer aparecer qnd filtrada a cidade.
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

// Agora criando o plugin.


$.fn.cityButtons = function () {    
    const cities = new Set;
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city')) // adicionando o elemento 'e' dentro do Set. O 'e' é o valor da chave 'wm-city', ou seja, o nome das cidades.
    })

    // Ai converte para array.

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>') // cria um botão para a cidade.
            .addClass(['btn', 'btn-info']).html(city) // adiciona as classes do Bootstrap e coloca o nome da cidade dentro do botão. 
        btn.click(e => filterByCity(city)) // o click do botão chama a função ali.
        return btn
    })

    const btnAll = $('<botton>').addClass(['btn', 'btn-info', 'active']).html('Todas');
    btnAll.click(e => filterByCity(null));
    btns.push(btnAll); // add o botão de todas as cidades no grupo de botões.

    const btnGroup = $('div').addClass(['btn-group']);
    btnGroup.append(btns);

    $(this).html(btnGroup); // esse 'this' é o 'cityButtons'
    return this
}

// Só vai chamar essa função aqui, quando uma página for carregada de forma bem sucedida.

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons()
})
