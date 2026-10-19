import { checkSchema } from "express-validator";

export default checkSchema({
    userId: {
        notEmpty: {
            errorMessage: 'userId is required'
        }
    },
    firstName: {
        trim: true,
        notEmpty: {
            errorMessage: 'firstName  is required'
        }
    },
    lastName: {
        trim: true,
        notEmpty: {
            errorMessage: 'lastName  is required'
        }
    },
     email: {
        trim: true,
        notEmpty: {
            errorMessage: 'email  is required'
        },
        isEmail: {
            errorMessage: 'email must be valid'
        }
    }
})