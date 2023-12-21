const express = require('express');
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

const userRoutes = require("./routes/userRoutes");

// app.use("/api/v1",userRoutes);
// // Roting


module.exports = app