const mongoose = require('mongoose');

const emptySchema = new mongoose.Schema({

});

console.log(emptySchema.isModified)

module.exports = mongoose.model("Empty",emptySchema)