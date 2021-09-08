const userService = require("../services/userService");
const brcypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const config = require(__dirname + '/../config/config').development;

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

    const validPassword = await brcypt.compare(reqPassword, userPassword)
    if (!user || !validPassword) {
      throw new Error ("Authentication error. The email or password provided are invalid")
    }
    const payload = {
      id:user.id,
      isAdmin:user.roleId === 1
    }
    const token = await generateToken(payload); //secreto en .env
  
    return {
      firstName: user.firstName,
      lastName :user.lastName,
      mail: user.email,
      image: user.image,
      token: token,
      roleId:user.roleId
    }
    
  } catch (err) {
    throw err;
  }
}

const generateToken = (payload) => {
  return jwt.sign(
    payload,
    config.secret ,
   { expiresIn: '1 day'}
  );
};

const validateToken = async token => {
   try {
     const { email } = jwt.verify(token, config.secret);
     
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
