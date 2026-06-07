const express=require('express');
const authcontrollers=require('../controllers/authcontroller')

const Router=express.Router();

Router.post('/register', authcontrollers.userRegisterController);

module.exports=Router;

