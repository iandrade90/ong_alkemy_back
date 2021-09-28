const { Contacts } = require('../models');
const AllRepository = require("../repositories");
const Repository = new AllRepository();

exports.createContact = async (req, res, next) => {
    try {
        const { name, email } = req.body;

        const newContact = await Repository.createPayload("Contacts", { name: name, email: email });
        !newContact
            ? res.status(204).json({ message: "No se pudo crear el contacto!" })
            : res.status(201).json({ message: "Contacto creada con exito!" });
    } catch (error) {
        next(error);
    }
};
