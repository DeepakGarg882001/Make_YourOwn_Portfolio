const  mongoose  = require("mongoose");
 
// Connecting to DATABASE MongoDB
const DB= process.env.DATABASE_URL;
 mongoose.connect(DB).then(()=>{
    console.log("DataBase Connected Successfully ");
   })
   .catch((error)=>{
    console.log(`DataBase is Unable to Connect due to this error : ${error}`);
   });

