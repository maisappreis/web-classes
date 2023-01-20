const fs = require("fs"); // fire system do Node.

module.exports = paths => {
    return new Promise((resolver, reject) => {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString("uft-8"))
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                .split("\n")
           resolver(rows)
        } catch (e) {
            reject(e)
        }
    })
}