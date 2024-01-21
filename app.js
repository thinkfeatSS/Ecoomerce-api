const express = require('express');
const bodyParser = require('body-parser');
const ErrorHandler = require('./utils/errorHandler');
const cors = require('cors');
const app = express();
app.use(express.json({limit: '50mb'}))
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

// const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");

// app.use("/api/v1",userRoutes);
// app.post("/api/v1/createProject",(req, res) =>{
//   res.send("Hello from api")
// });
app.use("/api/v1/project",projectRoutes);
// // Roting
app.get("*", (req, res) =>{
    res.send("not found")
});

// app.use(new ErrorHandler);
module.exports = app