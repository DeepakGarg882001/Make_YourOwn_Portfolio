
const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

require("../DataBase/dbConnection");
module.exports=router;




// Initialising all the Routes of Application
router.get('/', (request,response)=>{
    response.send("Hello This message is from Server ");
});

router.get('/about',authenticate, (request,response)=>{
   // response.send("Welcome to About Page and This message is from Server ");
   console.log("about page");
   response.send(request.rootUser);
});

router.get('/contact', (request,response)=>{
   response.send("Welcome to Contact Page and This message is from Server ");
});


require("./signup");
require("./login"); 
require("./message");