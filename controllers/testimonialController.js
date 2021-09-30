const { uploadToBucket } = require("../services/S3");
const testimonialService = require("../services/testimonialService");
const AllRepository = require("../repositories");
const Repository = new AllRepository();

const createTestimonial = async (req, res, next) => {
  const { name, content } = req.body;
  const { image } = req.files;
  const payload = { key: image.name, buffer: image.data };

  try {
    const { Location: imageUrl } = await uploadToBucket(payload);
    const testimonialCreated = await testimonialService.create({ name, content, image: imageUrl });
    res.status(201).json({ status: "ok", message: "Testimonio creado correctamente.", data: testimonialCreated });

  } catch (error) {
    next(error);
  }
};

const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;

    const testimonialDeleted = await Repository.deleteById("Testimonials", id);
    !testimonialDeleted
      ? res.status(200).json({ message: "No se pudo eliminar el testimonio con ese ID." })
      : res.status(200).json({ message: "Testimonio eliminado!" });

  } catch (error) {
    next(error);
  }
};

module.exports = { createTestimonial, deleteTestimonial };
