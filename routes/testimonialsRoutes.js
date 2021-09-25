const express = require("express");
const { createTestimonial } = require("../controllers/testimonialController");
const { createValidations } = require("../middlewares/testimonials");
const router = express.Router();

router.post("/", createValidations, createTestimonial);

module.exports = router;
