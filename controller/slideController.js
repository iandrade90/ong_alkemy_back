const { Slide } = require('../models');

exports.getSlides = async function (req, res) {
    try {
       const slide = await Slide.findAll();
       res.status(200).json(slide); 
    } catch (error) {
       console.log(error.message); 
    }
}

exports.createSlide = async function (req, res){
   try {
      const { imageUrl, text, order, organizationId } = req.body;
      await Slide.create({imageUrl: imageUrl, text: text, order: order, organizationId: organizationId})
      res.status(200).json({message: 'Created'})
   } catch (error) {
      console.log(error.message);  
   }
}

exports.updateSlide = async function (req, res){
   try {
      const id = req.params.id;
      const { imageUrl, text, order, organizationId } = req.body;
      await Slide.update({imageUrl: imageUrl, text: text, order: order, organizationId: organizationId}, {where: {id: id}});
      res.status(200).json({message: 'Updated'})
   } catch (error) {
      console.log(error.message);
   }
}

exports.deleteSlide = async function (req, res) {
   try {
      const id = req.params.id;
      await Slide.destroy({where: {id: id}});
      res.status(200).json({message: 'Deleted'});
   } catch (error) {
      console.log(error.message); 
   }
}