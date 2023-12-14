const dotenv = require('dotenv').config({path: "./config/.env"});
const app = require('./app');



const server = app.listen(process.env.PORT,() => {console.log("server is listening on port at http://localhost:"+process.env.PORT)})