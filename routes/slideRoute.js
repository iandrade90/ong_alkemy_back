const express = require('express');
const router = express.Router();
const slideController = require('../controllers/slideController');
const { slideValidation } = require('../middlewares/slide/slideMiddleware');

router.get('/slides', slideController.getSlides);

router.post('/slides/create', slideValidation, slideController.createSlide);

router.put('/slides/update/:id', slideValidation, slideController.updateSlide);

router.delete('/slides/delete/:id', slideController.deleteSlide);


module.exports = router;