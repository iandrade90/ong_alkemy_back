const AllRepository = require("../repositories");
const Repository = new AllRepository();

const entity = 'Entries';

const getNews = async (req, res, next) => {
    try {
       const news = await Repository.findAllByParams(entity, {type: 'News'}, ['name', 'image', 'createdAt']);
        res.json(news);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getNews,
}