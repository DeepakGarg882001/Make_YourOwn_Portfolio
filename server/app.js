// IMPORTING Libraries
const express= require("express");
const dotENV=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");
const cookieParser= require("cookie-parser");

const app= express();


// Importing ENV file
dotENV.config({ path: './config.env'});

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());



// IMPORTING MODULES
require("./DataBase/dbConnection");
app.use(express.json());
app.use(require("./Router/routes"));


// Running the Application at Port
const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running at port number ${PORT} :`);
});


