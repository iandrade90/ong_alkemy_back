const express = require("express");
const authService = require("../services/authService");
const userService = require("../services/userService");


const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };

  try {
    const userCreated = await authService.register(newUser);
    res.status(200).json(userCreated);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const {
      firstName,
      lastName,
      mail,
      image,
      token } = await authService.login(email, password)
    
    res.status(200).header({Authorization: token}).json({
      firstName,
      lastName,
      mail,
      image
    })
  } catch (err) {
    next(err);
  }
}

const getMyData = async (req, res) => {
  const token = req.header("Authorization");

  const email = await authService.validateToken(token)
  
  const userData = email && await userService.findByEmail(email) 
  
  userData ? res.json(userData) : res.status(498).json("Invalid or Expired Token")
}

module.exports = { register, login, getMyData};
