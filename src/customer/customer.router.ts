import express from "express";
import CustomerService from "./customer.service.js";
import CustomerController from "./customer.controller.js";
import authenticate from "../common/middlewares/authenticate.js";
import asyncWrapper from "../common/utils/asyncWrapper.js";
import addressValidate from "./address.validate.js";

const customerRouter = express.Router()

const customerService = new CustomerService()

const customerController = new CustomerController(customerService)

customerRouter.get('/', 
    authenticate, 
    asyncWrapper(customerController.getCustomer.bind(customerController))
)

customerRouter.patch('/address/:id', 
    authenticate, 
    addressValidate,
    asyncWrapper(customerController.addAddress.bind(customerController))
)


export default customerRouter