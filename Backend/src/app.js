const express=require('express');
const authroutes=require('./AuthRoutes/auth_routes');

app.use(express.json());


const app=express();
app.use('/api/auth', authroutes);

module.exports=app;


