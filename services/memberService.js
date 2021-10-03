const Repository = require("../repositories");
const memberRepository = new Repository();
const entity = "Member";

const getMembers = () => {
  return memberRepository.findAll(entity, ["id", "name", "image"]);
};

const createMember = (member) =>  {
  return memberRepository.createPayload(entity, member);
}


module.exports = { getMembers, createMember };
