// const { mercadopago } = require("../config/mercadopagoConfig");
const config = require("../config/config");

const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token: config.development.user_test_access_key,
});

const createDonation = async (req, res, next) => {
  const donation = {
    title: "Donación a Somos Más",
    unit_price: Number(req.body.amount),
    quantity: 1,
    currency_id: "ARS",
  };
  //Se crea la preferencia con este formato
  try {
    let preference = {
      items: [
        //aca iria la donación
        donation,
      ],
    };
    const response = await mercadopago.preferences.create(preference);
    console.log(response.body.init_point)
    res
      .status(201)
      .json({ status: "ok", donationLink: response.body.init_point });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createDonation,
};
