const app = require('./app');
const connectDatabase = require('./config/db');
const dotenv = require('dotenv').config({path: "./config/.env"});


process.on('uncaughtException',(e)=>{
    console.log("Shuting up server due to error: " + e.message);
});

if(!process.env.NODE_ENV === 'PRODUCTION') {
}
// Connecting Database
connectDatabase();
// Servr
const server = app.listen(process.env.PORT,() => {console.log("server is listening on port at http://localhost:"+process.env.PORT)})
// Handling exceptions
process.on("unhandledRejection",(e)=>{
    console.log("Shuting up server due to error: " + e.message);
    server.close(()=>{
        process.exit(1);
    });
});