const express = require('express');
const bodyParser = require('body-parser');
const ErrorHandler = require('./utils/errorHandler');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "config/.env",
    });
  }

app.get("/", (req, res) =>{
    res.send("Hello from api")
});
app.get("*", (req, res) =>{
    res.send("not found")
});

const userRoutes = require("./routes/userRoutes");

// app.use("/api/v1",userRoutes);
// // Roting

app.use(ErrorHandler);
module.exports = app