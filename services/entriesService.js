const Repository = require("../repositories");
const entriesRepository = new Repository();
const entity = "Entries";

/* Busca una entrada, si la encuentra la actualiza, en caso de no encotrarla devuelve un mensaje */
const findByIdAndEditEntry = (id, params) =>
  entriesRepository.updatePayload(entity, id, params);

module.exports = {
  findByIdAndEditEntry,
};
