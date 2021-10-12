const { findOrganizationById } = require("../services/organizationsService");
const { uploadToBucket } = require("../services/S3");
const AllRepository = require("../repositories");
const Repository = new AllRepository();
const config = require('../config/config').development
const { uploadImageService } = require('../services/upliadImages')

exports.findPublicOrganizations = async (req, res, next) => {
  const { id } = req.params;

  const organizationFound = await findOrganizationById(id);
  !!organizationFound
    ? res.status(200).json(organizationFound)
    : res
      .status(404)
      .json({ ok: false, msg: "No hay organizacion con ese ID" });
};

exports.updateOrganization = async (req, res, next) => {

  const { id } = req.params
  const { name, phone, address, welcomeText } = req.body;
  try {

    const image = req.files?.image;
    // console.log(image)
    if (image) {
      const imageName = Date.now() + '_' + image?.name
      const imageUploadedPath = await uploadImageService(image, imageName)
      const organizationUpdated = await Repository.updatePayload("Organization", id, {
        name: name,
        image: `${config.basePath}/static/${imageName}`,
        phone, address, welcomeText
      });
      !organizationUpdated
        ? res.status(200).json({ message: "No se encuentra la organización con ese ID." })
        : res.status(200).json({ message: "Organización actualizada." });
    } else {
      const organizationUpdated = await Repository.updatePayload("Organization", id, {
        name: name,
        phone, address, welcomeText
      });
      !organizationUpdated
        ? res.status(200).json({ message: "No se encuentra la organización con ese ID." })
        : res.status(200).json({ message: "Organización actualizada." });
    }

  } catch (error) {
    next(error);
  }
}