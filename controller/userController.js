const cathAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../model/userModel');
const ErrorHandler = require('../utils/errorHandler');
exports.register = cathAsyncErrors(async(req,res,next) => {
    const {email} = req.body;
    console.log(email);
    const userMail = await User.findOne({email})
    if(userMail){
        return next(new ErrorHandler("User Already Exists", 400))
    }
    const user = await User.create(req.body)
    res.status(201).json({success: true, user})
});