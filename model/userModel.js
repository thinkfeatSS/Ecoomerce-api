const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required: [true, "Please enter you name"]
    },
    email : {
        type: String,
        required: [true, "Please enter your email address"],
    },
    password : {
        type: String,
        minLength: [4,"Password must be at least 4 characters"],
        required: [true, "Please enter your password"],
        select : false
    },
    phoneNumber : {
        type: Number,
        required: [true, "Please enter a valid phone number"]
    },
    role: {
        type: String, // User , Seller , Admin
        default: "User"
    },
    createdAt : {
        type: Date,
        default: Date.now()
    },
    resetPasswordToken : String,
    resetPasswordTime: Date
});

userSchema.pre('save', async function(){
    if(!this.isModified){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User',userSchema)