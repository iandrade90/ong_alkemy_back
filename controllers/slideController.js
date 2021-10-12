const { Slide } = require('../models');
const AllRepository = require("../repositories");
const Repository = new AllRepository();
const { uploadToBucket } = require("../services/S3");
const config = require('../config/config').development
const { uploadImageService } = require('../services/upliadImages')

exports.getSlides = async function (req, res, next) {
   try {
      const slide = await Slide.findAll();
      res.status(200).json(slide);
   } catch (error) {
      next(error);
   }
}

exports.createSlide = async function (req, res, next) {
   const { imageUrl, text, order, organizationId } = req.body;

   try {
      await Slide.create({ imageUrl: imageUrl, text: text, order: order, organizationId: organizationId })
      res.status(200).json({ message: 'Created' })
   } catch (error) {
      next(error);
   }
}

exports.updateSlide = async (req, res, next) => {
   const { id } = req.params
   const { text, order, organizationId } = req.body;
   try {
      const image = req.files?.imageUrl;

      if (image) {
         const imageName = Date.now() + '_' + image?.name
         const imageUploadedPath = await uploadImageService(image, imageName)
         const slideUpdated = await Repository.updatePayload("Slide", id, {
            text: text,
            imageUrl: `${config.basePath}/static/${imageName}`,
            order: order, organizationId: organizationId
         });
         !slideUpdated
            ? res.status(200).json({ message: "No se encuentra el slide con ese ID." })
            : res.status(200).json({ message: "Slide actualizado." });
      } else {
         const slideUpdated = await Repository.updatePayload("Slide", id, {
            text: text,
            order: order, organizationId: organizationId
         });
         !slideUpdated
            ? res.status(200).json({ message: "No se encuentra el slide con ese ID." })
            : res.status(200).json({ message: "Slide actualizado." });
      }

      // !slideUpdated
      //    ? res.status(200).json({ message: "No se encuentra el slide con ese ID." })
      //    : res.status(200).json({ message: "Slide actualizado." });
   } catch (error) {
      next(error);
   }
}

exports.deleteSlide = async function (req, res, next) {
   const id = req.params.id;

   try {
      await Slide.destroy({ where: { id: id } });
      res.status(200).json({ message: 'Deleted' });
   } catch (error) {
      next(error);
   }
}