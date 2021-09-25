const { findOrganizationById } = require("../services/organizationsService");

exports.findPublicOrganizations = async (req, res, next) => {
  const { id } = req.params;

  const organizationFound = await findOrganizationById(id);
  !!organizationFound
    ? res.status(200).json(organizationFound)
    : res
        .status(404)
        .json({ ok: false, msg: "No hay organizacion con ese ID" });
};
