const {constants} = require("../constants");
const errorHandler = (err, req, res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Failed",message:err.message,stackTracker:err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title:"Not Found",message:err.message,stackTracker:err.stack});
            break;    
        
        case constants.FOREBIDDEN:
            res.json({title:"Forebidden",message:err.message,stackTracker:err.stack});
            break; 
        case constants.UNAUTHORIZED:
            res.json({title:"Unauthorized",message:err.message,stackTracker:err.stack});
            break;
        case constants.SERVER_ERROR:
            res.json({title:"ServerError",message:err.message,stackTracker:err.stack});
            break;           
        default:
            console.log("No Error all Good");
            break;
    }
    
    
};

module.exports = errorHandler;