const mongoose=require("mongoose");


const userDoc= new mongoose.Schema({
    fname:{
          type:String,
          required:true
         },
    lname:{
           type:String,
           required:true 
          },
    email:{
           type:String,
           required:true
          },
    phone:{
          type:Number,
          required:true
          },
    work:{
          type:String,
          required:true
         },
    password:{
          type:String,
          required:true
    },
    token:{
          type:String
          }
                           
});
 

module.exports=userDoc;