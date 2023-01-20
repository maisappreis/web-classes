
// Temporalizador: hora, minuto e segundo.

// Função Autoinvocada.

(function ($) {
    $.fn.temporizador = function(opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',         // esses 2 como valores padrão, caso em 'plugin2.html' não tivesse a mensagem.
            horario: '23:59:59'
        }, opcoes)    // mas se lá tiver os valores, então 'opcoes' vai sobreescrever.

        const horaDezena = $('<span class="digito">').html('0');
        const horaUnidade = $('<span class="digito">').html('0');
        const minutoDezena = $('<span class="digito">').html('0');
        const minutoUnidade = $('<span class="digito">').html('0');
        const segundoDezena = $('<span class="digito">').html('0');
        const segundoUnidade = $('<span class="digito">').html('0');

        const separadorHora = $('<span class="separador">').html(':');
        const separadorMinuto = $('<span class="separador">').html(':');
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem);

        $(this).addClass('temporizador');
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/); // padrão universal do horario. Grupo de captura da Hora : Minuto : Segundo
        const horarioAlvo = regex.exec(opcoesFinais.horario);
        // console.log(horarioAlvo); // Retorna um ARRAY: ['18:00:00', '18', '00', '00', index: 0, input: '18:00:00', groups: undefined] 

        let temporizador = setInterval(() => {
            const agora = new Date();
            const alvo = new Date();
            alvo.setHours(horarioAlvo[1]); // a HORA ficou na posição 1 do array.
            alvo.setMinutes(horarioAlvo[2]);
            alvo.setSeconds(horarioAlvo[3]);

            const diferencaEmMilisegundos = alvo.getTime() - agora.getTime(); // se for negativo, ou seja, menor que 0, não precisa fazer nada.
            if(diferencaEmMilisegundos >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMilisegundos).toISOString());
                // console.log(diferenca);
                // new Date() apenas, leva em conta o Time Zone, ou seja, GMT-03.
                // new Date().toISOString não leva em conta o Time Zone.

                horaDezena.html(diferenca[1][0]); // pega o primeiro dígito da hora.
                horaUnidade.html(diferenca[1][1]); // pega o segundo dígito da hora.
                minutoDezena.html(diferenca[2][0]);
                minutoUnidade.html(diferenca[2][1]);
                segundoDezena.html(diferenca[3][0]);
                segundoUnidade.html(diferenca[3][1]);
                // console.log(diferenca);
            } else {
                clearInterval(temporizador);
            }
        }, 1000)


        return this
    }
})(jQuery)

