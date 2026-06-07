const express=require('express');
const cookieparser=require('cookie-parser');
const authroutes=require('./AuthRoutes/auth_routes');

app.use(express.json());
app.use(cookieparser());



const app=express();
app.use('/api/auth', authroutes);

module.exports=app;


