// Temporizador
// * * * * * * = second, minute, hour, day od the month, month, day of week
// https://www.npmjs.com/package/node-schedule

const schedule = require("node-schedule");

module.exports = app => {
    schedule.scheduleJob("*/1 * * * *", async function () { // atualiza de 1 em 1 minuto.
        const usersCount = await app.db("users").count("id").first();
        const categoriesCount = await app.db("categories").count("id").first();
        const articlesCount = await app.db("articles").count("id").first();

        const { Stat } = app.api.stat;

        // última estatística.
        const lastStat = await Stat.findOne({}, {}, { sort: { "createAt": -1 }});

        const stat = new Stat({
            users: usersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createAt: new Date()
        })

        const changedUsers = !lastStat || stat.users !== lastStat.users;
        const changedCategories = !lastStat || stat.categories !== lastStat.categories;
        const changedArticles = !lastStat || stat.articles !== lastStat.articles;

        // a mudança de qualquer um deles, já habita para ser feito um novo registro dentro do MongoDB.
        if(changedUsers || changedCategories || changedArticles) {
            stat.save().then(() => console.log("[Stats] Estatísticas atualizadas!"))
        }
    })
}