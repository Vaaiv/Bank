const userModel=require("../Models/auth.models");

const jwt = require('jsonwebtoken');

/*
this an api for registering a new user to the app

can be accessed through /api/auth/register POST
*/

function userRegisterController(){
  const {email, name ,password}=req.body;

  const exist = await User.findOne({ 
    email 
  });

  if(exist){
    return res.status(400).json({ 
      message: "Email already registered"
    });
  }
  const newUser = await User.create({ 
    email, name, password

  });

  const token = jwt.sign(
    {id: newUser._id }, 
    process.env.JWT_SECRET,   //it requires these parameters for just creating the token through jsonwebtoken package function sign and it gives the user a token to its  id 
    { expiresIn: '7d'}
  );

  res.cookies('token', token); //this will save the token to the cookie storage


  res.status(201).json({ 
    message: "User registered successfully",
    user: newUser,
    token:token

  });






};

module.exports=userRegisterController;
