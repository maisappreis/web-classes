// Numa aplicação Desktop o servidor não é remoto, é interno.

const { ipcMain } = require("electron"); // ipc = inter process comunication.

const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");
const groupWords = require("./groupWords");

ipcMain.on("process-subtitle", (event, paths) => {
    console.log(paths)

    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply("process-subtitles", groupedWords))
        
})