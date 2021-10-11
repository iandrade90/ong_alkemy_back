const config = require('./config');
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
    access_token : `${config.accessDevTokenMercadopago}`
});


module.exports = {
    mercadopago
};
  
 