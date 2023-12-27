require("dotenv").config();
const express = require("express")
const app = express();
const mongoose = require("mongoose");
require("./db/conn")
require("./Models/userSchema")


const port = 8003;

app.listen(port,()=>{
    console.log(`server is start port number ${port}`);
})