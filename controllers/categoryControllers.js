const AllRepository = require("../repositories/");
const Repository = new AllRepository();
const { validationResult } = require("express-validator");

const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const newActivity = await Repository.createPayload("Category", {
      name: name,
      description: description,
    });
    !newActivity
      ? res.status(204).json({ message: "No se pudo crear la categoria" })
      : res.status(201).json({ message: "Categoria creada con exito!" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
};
