const {
  customValidationResult: validationResult,
} = require("../middlewares/commons");
const AllRepository = require("../repositories");
const Repository = new AllRepository();
const {
  findByIdAndEditEntry,
  findByIdEntry,
  createNews,
  deleteById,
} = require("../services/entriesService");

const entity = "Entries";

const getNews = async (req, res, next) => {
  try {
    const news = await Repository.findAllByParams(entity, { type: "News" }, [
      "id",
      "name",
      "content",
      "image",
      "type",
      "createdAt",
    ]);
    res.json(news);
  } catch (error) {
    console.log(error);
  }
};

/* Edita una nueva novedad y la devuelve editada */
const putNews = async (req, res, next) => {
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
const postNews = async (req, res, next) => {
  try {
    // const error = validationResult(req);

    // if (!error.isEmpty()) res.status(200).json(error);

    params = {
      ...req.body,
      type: "news",
    };

    const newEntry = await createNews(params);
    !newEntry
      ? res.status(200).json({ message: "No se pudo crear la novedad" })
      : res.status(200).json(params);
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

const deleteNews = async (req, res, next) => {
  const id = req.params.id;
  try {
    const entry = await findByIdEntry(id);

    if (!entry) {
      res.status(200).json({ message: "No existen entradas con ese ID" });
    }

    deleteById(id);
    res.status(200).json({ message: "Novedad eliminada" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postNews,
  getNews,
  putNews,
  getEntry,
  deleteNews,
};
