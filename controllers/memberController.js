const memberService = require('../services/memberService')

const getMembers = async (req, res, next) => {
  try {
    const members = await memberService.getMembers()
    res.json(members)
  } catch (err) {
    next(err);
  }
};

module.exports = { getMembers };
