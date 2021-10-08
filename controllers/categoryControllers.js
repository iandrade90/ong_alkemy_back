const AllRepository = require("../repositories/");
const Repository = new AllRepository();
const { validationResult } = require("express-validator");

const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const newCategory = await Repository.createPayload("Category", {
      name: name,
      description: description,
    });
    !newCategory
      ? res.status(204).json({ message: "No se pudo crear la categoria" })
      : res
          .status(201)
          .json({ message: "Categoria creada con éxito!", data: newCategory });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
};
