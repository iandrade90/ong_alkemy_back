const Repositories = require("../repositories");
const { uploadToBucket } = require("../services/S3");
const testimonialService = require("../services/testimonialService");
const Repository = new Repositories();

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

const updateTestimonial = async (req, res, next) => {
  const { id } = req.params
  const { name, content } = req.body;
  const { image } = req.files;
  const payload = { key: image.name, buffer: image.data };

  try {
    const { Location: imageUrl } = await uploadToBucket(payload);
    const testimonialUpdated = await Repository.updatePayload("Testimonials", id, { name: name, content: content, image: imageUrl });
    !testimonialUpdated
      ? res.status(404).json({ message: "No se encuentra el testimonio con ese ID." })
      : res.status(201).json({ message: "Testimonio actualizado.", testimonialUpdated });

  } catch (error) {
    next(error);
  }
};


module.exports = { createTestimonial, updateTestimonial };
