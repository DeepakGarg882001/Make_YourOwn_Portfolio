// const express = require("express");
const mongoose = require("mongoose");
const messageDoc = require("./messageDoc");

const AdminMessage= mongoose.model("MEESAGEFORADMIN", messageDoc);

module.exports=AdminMessage;