const { uploadToBucket } = require("../services/S3");
const testimonialService = require("../services/testimonialService");

const createTestimonial = async (req, res, next) => {
  const { name, content } = req.body;
  const { image } = req.files;
  const payload = { key: image.name, buffer: image.data };

  try {
    const { Location: imageUrl } = await uploadToBucket(payload);
    const testimonialCreated = await testimonialService.create({ name, content, image: imageUrl });
    res.status(201).json({ status: "ok", message: "Testimonio creado correctamente."  , data: testimonialCreated });
    
  } catch (error) {
    next(error);
  }
};

module.exports = { createTestimonial };
