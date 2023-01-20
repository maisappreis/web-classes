module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(" ")
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', ''))
            
           resolver(words)
        } catch (e) {
            reject(e)
        }
    })
}

function filterValidRow(row) {
    const notNumber = !parseInt(row.trim()); // para retirar linhas com números.
    const notEmpty = !!row.trim(); // se não for vazia, a expressão retorna verdadeira.
    const notInterval = !row.includes("-->");

    return notNumber && notEmpty && notInterval
}

const removePunctuation = row => row.replace(/[,?!.-]/g, "");
const removeTags = row => row.replace(/(<[^>]+)>/g, "").trim();
const mergeRows = (fullText, row) => `${fullText} ${row}`; // juntando todas as linhas, numa linha só.

// Transformar ARRAY em TEXTO/OBJETO/ARRAY, usar REDUCE.
// Transformar ARRAY em ARRAY filtrando dados, menos elementos, usar FILTER.
// Transformar ARRAY em ARRAY filtrando dados, mesma qtd elementos, usar MAP.