const express = require('express');
const router = express.Router();
const slideController = require('../controllers/slideController');
const { slideValidation } = require('../middlewares/slideMiddleware');

router.get('/slides', slideController.getSlides);

router.post('/slides', slideValidation, slideController.createSlide);

router.put('/slides/:id', slideController.updateSlide);

router.delete('/slides/:id', slideController.deleteSlide);

module.exports = router;