const contactsService = require('../services/contactsService');

const contactList = async (req,res,next) => {
    try {
        const list = await contactsService.findAll();
        list.length < 1
        ? res.status(200).json({message: 'No se encontraron contactos.'})
        : res.status(200).json(list)
    } catch (error) {
        next(error);
    }
    
}

module.exports = {
    contactList
}