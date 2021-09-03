const express = require('express');
const router = express.Router();
const slideController = require('../controller/slideController');

router.get('/slides', slideController.getSlides);

router.post('/slides/create', slideController.createSlide);

router.put('/slides/update/:id', slideController.updateSlide);

router.delete('/slides/delete/:id', slideController.deleteSlide);

module.exports = router;