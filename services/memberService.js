const Repository = require("../repositories");
const memberRepository = new Repository();
const entity = "Member";

const getMembers = () => {
  return memberRepository.findAll(entity, ["id", "name", "image"]);
};

module.exports = { getMembers };
