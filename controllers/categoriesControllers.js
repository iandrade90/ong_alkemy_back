const AllRepository = require("../repositories");
const Repository = new AllRepository();
const entity = 'Category';

const getCategories = async (req, res, next) => {
    try {
       const categories = await Repository.findAll(entity, ['name']);
        res.json(categories);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  getCategories,
};
