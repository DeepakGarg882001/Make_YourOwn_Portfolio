const mongoose= require("mongoose");
const userDoc =require("./userDoc");

const User= mongoose.model('USER',userDoc);
module.exports= User;