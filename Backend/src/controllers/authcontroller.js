const userModel=require("../Models/auth.models");

/*
this an api for registering a new user to the app

can be accessed through /api/auth/register POST
*/

function userRegisterController(){
  const {email, name ,password}=req.body;


};

module.exports=userRegisterController;
