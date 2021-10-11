const { Contacts } = require('../models');
const AllRepository = require("../repositories");
const Repository = new AllRepository();
const contactsService = require('../services/contactsService');

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

exports.contactList = async (req,res,next) => {
    try {
        const list = await contactsService.getContacts();
        list.length < 1
        ? res.status(200).json({message: 'No se encontraron contactos.'})
        : res.status(200).json(list)
    } catch (error) {
        next(error);
    }
    
}

exports.deleteContact = async (req, res, next) => {
    try {  
        const id = req.params.id;
        const contactDeleted = await Repository.deleteById("Contacts", id);

        !contactDeleted
        ? res.status(200).json({ message: "No se pudo eliminar el contacto seleccionado." })
        : res.status(200).json({ message: "Contacto eliminado" });

    } catch (error) {
        next(error);
    }
};
