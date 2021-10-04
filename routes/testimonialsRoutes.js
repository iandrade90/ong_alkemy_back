const express = require("express");
const { createTestimonial, updateTestimonial } = require("../controllers/testimonialController");
const { createValidations } = require("../middlewares/testimonials");
const router = express.Router();

router.post("/testimonials", createValidations, createTestimonial);

router.put("/testimonials/:id", updateTestimonial);

module.exports = router;
