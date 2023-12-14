const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.BD_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log("Database connected")).catch(console.log("Error in connection"));
}

module.exports = connectDatabase
