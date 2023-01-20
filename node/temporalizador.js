
// Instalando o Schedule
// PS C:\apps> npm i node-schedule@1.3.0 -E

const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 3', function() {  // de "5 em 5 seg * horas * mês ignorado * dia da semana" - Domingo: 0 Sábado: 6.
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) 

setTimeout(function () {  // temporalizador padrão do JavaScript.
    tarefa1.cancel();
    console.log("Cancelando Tarefa 1!")
}, 20000) // Cancelando tarefa 1 depois de 20 segundos.

// Temporalizadores padrão do JavaScript.
// setTimeout
// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule() // regra de recorrencia.
regra.dayOfWeek = [new schedule.Range(1, 5)]   // executar de segunda-feira à sexta-feira.
regra.hour = 14 // ver a hora agora.
regra.second = 40 // ver o segundo.

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log("Executando Tarefa 2!", new Date().getSeconds())
})


