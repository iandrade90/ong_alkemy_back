const { Slide } = require('../models');
const {Organization} = require('../models');

exports.getSlides = async function (req, res, next) {
    try {
       const slide = await Slide.findAll();
       res.status(200).json(slide); 
    } catch (error) {
       next(error); 
    }
}

exports.createSlide = async function (req, res, next){
   const { imageUrl, text, order, organizationId } = req.body;

   try {
      await Slide.create({imageUrl: imageUrl, text: text, order: order, organizationId: organizationId})
      res.status(200).json({message: 'Created'})
   } catch (error) {
      next(error);
   }
}


exports.updateSlide = async function (req, res, next){
   const id = req.params.id;
   const { imageUrl, text, order, organizationId } = req.body;

   try {
      await Slide.update({imageUrl: imageUrl, text: text, order: order, organizationId: organizationId}, {where: {id: id}});
      res.status(200).json({message: 'Updated'})
   } catch (error) {
      next(error);
   }
}

exports.deleteSlide = async function (req, res, next) {
   const id = req.params.id;

   try {
      await Slide.destroy({where: {id: id}});
      res.status(200).json({message: 'Deleted'});
   } catch (error) {
      next(error); 
   }
}