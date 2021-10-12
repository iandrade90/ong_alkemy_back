const config = require("../config/config").development;
const AllRepository = require("../repositories");
const Repository = new AllRepository();
const {
  findByIdAndEditEntry,
  findByIdEntry,
  createNews,
  deleteById,
} = require("../services/entriesService");
const { uploadImageService } = require("../services/upliadImages");

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
  const { id } = req.params;
  const { name, content, type } = req.body;
  const { image } = req.files;

  try {
    const imageName = Date.now() + "_" + image?.name;
    const imageUploadedPath = await uploadImageService(image, imageName);

    const entryUpdated = await Repository.updatePayload(entity, id, {
      name,
      content,
      type,
      image: `${config.basePath}/static/${imageName}`,
    });
    !entryUpdated
      ? res
          .status(200)
          .json({ message: "No se encuentra el testimonio con ese ID." })
      : res.status(200).json({
          status: "ok",
          message: "Testimonio actualizado.",
          data: entryUpdated,
        });
  } catch (error) {
    next(error);
  }
};

/* Crea una nueva novedad */
const postNews = async (req, res, next) => {
  const { name, content, type } = req.body;
  const { image } = req.files;

  try {
    const imageName = Date.now() + "_" + image?.name;
    const imageUploadedPath = await uploadImageService(image, imageName);
    const newEntry = await createNews({
      name,
      content,
      image: `${config.basePath}/static/${imageName}`,
      type: "News",
    });
    res.status(201).json({
      status: "ok",
      message: "Novedad creada correctamente.",
      data: newEntry,
    });
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
