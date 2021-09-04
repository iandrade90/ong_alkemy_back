const express = require('express');
const router = express.Router();
const slideController = require('../controller/slideController');
const { slideValidation } = require('../middleware/slide/slideMiddleware');

router.get('/slides', slideController.getSlides);

router.post('/slides/create', slideValidation, slideController.createSlide);

router.put('/slides/update/:id', slideValidation, slideController.updateSlide);

router.delete('/slides/delete/:id', slideController.deleteSlide);

module.exports = router;