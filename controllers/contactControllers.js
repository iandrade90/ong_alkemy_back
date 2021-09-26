const contactsService = require('../services/contactsService');

const contactList = async (req,res,next) => {
    const list = await contactsService.findAll();
    list.length < 1
    ? res.status(200).json({message: 'No se encontraron contactos.'})
    : res.status(200).json(list)
}

module.exports = {
    contactList
}