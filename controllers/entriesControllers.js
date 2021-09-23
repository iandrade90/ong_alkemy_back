const AllRepository = require("../repositories");
const Repository = new AllRepository();
const { findByIdAndEditEntry, findByIdEntry } = require("../services/entriesService");

const entity = 'Entries';

const getNews = async (req, res, next) => {
    try {
       const news = await Repository.findAllByParams(entity, {type: 'News'}, ['name', 'image', 'createdAt']);
        res.json(news);
    } catch (error) {
        console.log(error);
    }
}

const putNews = async (req, res) => {
  try {
    const entry = await findByIdAndEditEntry(req.params.id, req.body);
    !entry
    ? res.status(200).json({ message: "No existen entradas con ese ID" })
    : res.status(200).json(entry);
  } catch (error) {
    next(error);
  }
};


/* Obtiene una novedad segun su id */
const getEntry = async (req, res, next) => {
  try {
    const entry = await findByIdEntry(req.params.id);
    !entry
    ? res.status(200).json({ message: "No existen entradas con ese ID" })
    : res.status(200).json(entry);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNews,
  putNews,
  getEntry,
};
