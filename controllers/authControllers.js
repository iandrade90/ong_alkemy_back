const authService = require('../services/authService')
const bcrypt = require('bcrypt')


const login = (req, res, next) => {
  const {email, password} = req.body
  const reqPassword = password
  authService.findUserByEmail(email)
  .then(response => {
     const {email, password} = response
      bcrypt.compare(reqPassword, password)
     .then(response => {
         response ? res.status(200).json({email, password}) : 
         res.status(401).json({ok:false})
     })
  })
  .catch(error => next(error))
}


module.exports = {login}