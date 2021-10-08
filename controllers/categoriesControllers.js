const AllRepository = require("../repositories");
const Repository = new AllRepository();
const entity = "Category";
const { validationResult } = require("express-validator");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Repository.findAll(entity, [
      "id",
      "name",
      "description",
    ]);
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

const putCategories = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const editCategory = await Repository.updatePayload(entity, req.params.id, {
      name: name,
      description: description,
    });
    !editCategory
      ? res.status(204).json({ message: "No se pudo editar la categoria" })
      : res.status(201).json({
          message: "Categoria editada con éxito!",
          data: editCategory,
        });
  } catch (error) {
    next(error);
  }
};

const deleteCategories = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deleteCategory = await Repository.deleteById(entity, id);
    !deleteCategory
      ? res.status(204).json({ message: "No se pudo eliminar la categoria" })
      : res.status(201).json({
          message: "Categoria eliminada con éxito!",
        });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  putCategories,
  deleteCategories,
};
