const express = require("express");
const { createTestimonial } = require("../controllers/testimonialController");
const { createValidations } = require("../middlewares/testimonials");
const router = express.Router();

router.post("/testimonials", createValidations, createTestimonial);

module.exports = router;
