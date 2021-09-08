const express = require("express");
const authService = require("../services/authService");
const userService = require("../services/userService");


const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = { firstName, lastName, email, password };

  try {
    const userCreated = await authService.register(newUser);
    res.status(201).json(userCreated);
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
      token,
      roleId } = await authService.login(email, password)
    
    return res.status(200).json({
      firstName,
      lastName,
      mail,
      isAdmin:roleId === 1,
      image,
      token
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

module.exports = { register, login , getMyData };
