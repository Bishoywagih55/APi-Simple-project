// الشروط 

const {body} = require("express-validator");

const validationSchema = ()  => {
    return [ 
    body('title')
        .noteEmpty()
        .withMessage("title is require")
        .isLength({min :2})
        .withMessage("title at least  is 2 digit "),
    body('price')
        .noteEmpty()
        .withMessage("price is require") 
]
}

module.exports={
    validationSchema
}

