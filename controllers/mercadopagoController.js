const { mercadopago } = require('../config/mercadopagoConfig')



const createDonation = async (req, res, next) => {
 
    console.log(req.body.amount)
     const donation ={
        unit_price:Number(req.body.amount),
        quantity:1,
        currency_id: 'ARS',
    } 
    //Se crea la preferencia con este formato
    try { 
        let preference = {
            items: [
              //aca iria la donación
              {
                title: 'Mi producto',
                unit_price: 100,
                quantity: 1,
              }
            ]
          };
          // se crea la preferencia y devuelve el init_point donde inicia el pago con el popup de mercadopago
          mercadopago.preferences.create(preference)
          //no se por que razón da collector_id invalid
         res.status(201).json({})
      
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createDonation
};
