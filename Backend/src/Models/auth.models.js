const mongoose=require('mongoose');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const bcrypt=require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Email address is required'],
    match: [emailRegex, 'Please fill a valid email address'],
    unique: [true, "email already exist"]
  },

  name:{
    type: String,
    required: [true, "Name is required for creating an account"]
  },

  password:{
    type:String,
    required:[true, "password is required for creating an account"],
    minlenght: [6, "password should contain more than 6 characters"],
    select: false
  },
},
{
  timestamps:true,
});

userSchema.pre("save", async function(next){      //these are some middlewares 
  if(!this.isModified("password")){
    return next();
  }

  const hash = await bcrypt.hash(this.password, 10);
  this.password=hash;

  next();
})

userSchema.methods.comparepassword= async function(password){     //this will compare if the password is false or true
  return await bcrypt.password(password, this.password);
} 

const userModel=mongoose.model("user", userSchema);

module.exports=userModel;
