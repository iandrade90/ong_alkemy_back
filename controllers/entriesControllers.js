const { validationResult } = require("express-validator");
const AllRepository = require("../repositories");
const Repository = new AllRepository();
const {
  findByIdAndEditEntry,
  findByIdEntry,
  createNews,
} = require("../services/entriesService");

const entity = "Entries";

const getNews = async (req, res, next) => {
  try {
    const news = await Repository.findAllByParams(entity, { type: "News" }, [
      "name",
      "image",
      "createdAt",
    ]);
    res.json(news);
  } catch (error) {
    console.log(error);
  }
};

/* Edita una nueva novedad y la devuelve editada */
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

/* Crea una nueva novedad */
const postNews = async (req, res) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) res.status(200).json(error);

    params = {
      ...req.body,
      type: "news",
    };

    const newEntry = await createNews(params);
    !newEntry
      ? res.status(200).json({ message: "No se pudo crear la novedad" })
      : res.status(200).json({ message: "¡Novedad creada con exito!" });
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
  postNews,
  getNews,
  putNews,
  getEntry,
};
