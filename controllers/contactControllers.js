const { Contacts } = require('../models');
const AllRepository = require("../repositories");
const Repository = new AllRepository();

exports.createContact = async (req, res, next) => {
    try {
        const { name, phone, email, message } = req.body;

        const newContact = await Repository.createPayload("Contacts", { name, phone, email, message });
        !newContact
            ? res.status(200).json({ message: "No se pudo crear el contacto!" })
            : res.status(201).json({ message: "Contacto creado con éxito!" });
    } catch (error) {
        next(error);
    }
};
