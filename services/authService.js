const userService = require("../services/userService");
const brcypt = require ('bcrypt')
const jwt = require("jsonwebtoken");

const register = async user => {
  try {
    return await userService.save(user);
  } catch (err) {
    throw err;
  }
};

const login = async (reqEmail, reqPassword) => {

  try {
    const user = await userService.findByEmail(reqEmail)
    const userPassword = user ? user.password : "";
    
    // manera valida de comparar
    // const validPassword = await brcypt.compare(password, userPassword)
    //solo test 
    const validPassword = reqPassword == userPassword ? true : false
    if (!user || !validPassword) {
      throw new Error ("Authentication error. The email or password provided are invalid")
    }
    const token = await generateToken(user.firstName, user.lastName, user.email, userPassword); //secreto en .env
  
    return {
      firstName: user.firstName,
      lastName :user.lastName,
      mail: user.email,
      image: user.image,
      token: token
    }
    
  } catch (err) {
    throw err;
  }
}

const generateToken = (name, lastname, email, password) => {
  return jwt.sign({name, lastname, email, password}, "secret", { expiresIn: '1 day'});
};

const validateToken = async token => {
   try {
     const { email } = jwt.verify(token, 'secret');
     
     return email

   } catch (err) {
    return null;
  }
}


module.exports = {
  register,
  login,
  validateToken
};
