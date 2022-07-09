const mongoose = require("mongoose");

const messageDoc = new mongoose.Schema({
    clientName:{
        type:String,
        required:true
    },
    clientEmail:{
        type:String,
        required:true
    },
    clientMessage:{
        type:String,
        required:true
    },
    clientPhone:{
        type:Number,
        required:true
    },
});

module.exports=messageDoc;
