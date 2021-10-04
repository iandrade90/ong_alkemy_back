const express = require("express");
const { createTestimonial, deleteTestimonial } = require("../controllers/testimonialController");
const { createValidations } = require("../middlewares/testimonials");
const router = express.Router();

router.post("/testimonials", createValidations, createTestimonial);


router.delete("/testimonials/:id", deleteTestimonial);

module.exports = router;
