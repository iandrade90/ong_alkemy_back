const memberService = require("../services/memberService");

const getMembers = async (req, res, next) => {
  try {
    const members = await memberService.getMembers();
    res.json(members);
  } catch (err) {
    next(err);
  }
};

const createMember = async (req, res, next) => {
  //! REVISAR: No especifica nada sobre la imagen
  const { name } = req.body;

  try {
    const memberCreated = await memberService.createMember({ name });
    res.status(201).json({status: "ok", message: "Miembro creado correctamente.", data: memberCreated});
  } catch (err) {
    next(err);
  }
};

module.exports = { getMembers, createMember };
