const config = require('../config/config').development
const Repositories = require('../repositories')
const { uploadToBucket } = require('../services/S3')
const testimonialService = require('../services/testimonialService')
const { uploadImageService } = require('../services/upliadImages')
const Repository = new Repositories()

console.log(config)
const createTestimonial = async (req, res, next) => {
  const { name, content } = req.body
  const { image } = req?.files
  try {
    const imageName = Date.now() + '_' + image?.name
    const imageUploadedPath = await uploadImageService(image, imageName)
    const testimonialCreated = await testimonialService.create({
      name,
      content,
      image: `${config.basePath}/static/${imageName}`,
    })
    res.status(201).json({ status: 'ok', message: 'Testimonio creado correctamente.', data: testimonialCreated })
  } catch (error) {
    next(error)
  }
}

const listTestimonials = async (req, res, next) => {
  try {
    const listTestimonials = await Repository.findAll('Testimonials')
    res.status(201).json({
      status: 'ok',
      message: 'Lista de testimonios.',
      data: listTestimonials,
    })
  } catch (error) {
    next(error)
  }
}

const testimonial = async (req, res, next) => {
  const { id } = req.params
  try {
    const testimonial = await Repository.findById('Testimonials', id)
    res.status(201).json(testimonial)
  } catch (error) {
    next(error)
  }
}

const updateTestimonial = async (req, res, next) => {
  const { id } = req.params
  const { name, content } = req.body
  const { image } = req.files

  try {
    const imageName = Date.now() + '_' + image?.name
    const imageUploadedPath = await uploadImageService(image, imageName)

    const testimonialUpdated = await Repository.updatePayload('Testimonials', id, {
      name: name,
      content: content,
      image: `${config.basePath}/static/${imageName}`,
    })
    !testimonialUpdated
      ? res.status(200).json({ message: 'No se encuentra el testimonio con ese ID.' })
      : res.status(200).json({ message: 'Testimonio actualizado.', testimonialUpdated })
  } catch (error) {
    next(error)
  }
}
const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params

    const testimonialDeleted = await Repository.deleteById('Testimonials', id)
    !testimonialDeleted
      ? res.status(200).json({ message: 'No se pudo eliminar el testimonio con ese ID.' })
      : res.status(200).json({ message: 'Testimonio eliminado!' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  listTestimonials,
  testimonial,
}
