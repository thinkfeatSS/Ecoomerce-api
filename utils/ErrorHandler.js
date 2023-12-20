class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = ErrorHandler

// new ErrorHandler("User Does Not Exist,404)