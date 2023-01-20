
module.exports = app => {
    const Stat = app.mongoose.model("Stat", {
        users: Number,
        categories: Number,
        articles: Number,
        createAt: Date
    })

    // obter do MongoDB a estatistica mais atualizada. Ele busca as infos lá.
    const get = (req, res) => {
        Stat.findOne({}, {}, { sort: { "createdAt": -1 } })
            .then(stat => {      // também trabalha com 'promise' assim como no 'db'.
                const defaultStat = {
                    users: 0,
                    categories: 0,
                    articles: 0
                }
                res.json(stat || defaultStat) // ou recebe o 'stat' settado, senão tiver, recebo o padrão todo zerado.
            })
    }
    return { Stat, get }
}

