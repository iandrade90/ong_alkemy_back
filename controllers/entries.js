const { findByIdEntry } = require("../services/entriesService");

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
  getEntry,
};
