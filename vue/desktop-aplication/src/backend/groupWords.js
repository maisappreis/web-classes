module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            // ['ana', 'ana', 'ana', 'bia', 'bia']; transformar esse array em um objeto como:
            // { ana: 3, bia: 2 }

            const groupedWords = words.reduce((obj, word) => {
                if(obj[word]) {
                    obj[word] = obj[word] + 1 // vai incrementando a cada vez que encontra a palavra.
                } else {
                    obj[word] = 1 // quando encontra a palavra pela primeira vez.
                }
                return obj
            }, {})

            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({ name: key, amount: groupedWords[key]}))
                .sort((w1, w2) => w2.amount - w1.amount) // ordedando.
            
           resolver(words)
        } catch (e) {
            reject(e)
        }
    })
}