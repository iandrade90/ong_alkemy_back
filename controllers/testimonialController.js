const testimonialService = require('../services/testimonialService')

const createTestimonial = async (req, res, next) => {
  const { name, content } = req.body;

  try {
    const testimonialCreated = await testimonialService.create({ name, content });
    res.status(201).json({status: "ok", message: "Testimony created succesfully"});
  } catch (err) {
    next(err);
  }
};

module.exports = { createTestimonial };
