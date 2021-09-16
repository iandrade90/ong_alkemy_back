var express = require('express');
const { ContactSendgrid } = require('../services/sendgrid');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', async function (req, res, next) {
  const { to, subject, text } = req.body;

  try {
    await ContactSendgrid({ to, subject, text });

    res.status(201).json({ 'message': 'Nuevo contacto' });
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ "message": "Email no enviado" })
  }
});

module.exports = router;
