import { checkSchema } from "express-validator";

export default checkSchema({
    text: {
        trim: true,
        notEmpty: {
            errorMessage: 'userId is required'
        }
    },
    isDefault: {
        optional: true,
        isBoolean: {
            errorMessage: "isDefault must be a boolean",
        },
    },
})