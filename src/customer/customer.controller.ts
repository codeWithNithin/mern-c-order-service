import type { Request } from "express-jwt";
import type CustomerService from "./customer.service.js";
import type { Response } from "express";
import { validationResult } from 'express-validator'
import type { Address } from "./customer.types.js";

class CustomerController {

    constructor(private customerService: CustomerService) {}

  async  getCustomer(req: Request, res: Response) {
    
        const result = validationResult(req)

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() })
        }

        console.log(req.auth)

    const {
            firstName,
            lastName,
            email,
            sub: userId,
        } = req.auth! 

        const customer = await this.customerService.findByUserId(userId)

        if (customer) {
           return res.json(customer)
        }

        const newCustomer = await this.customerService.create({
            userId,
            firstName,
            lastName,
            email,
            addresses: [],
        })

        res.status(201).json(newCustomer)
    }

    addAddress = async (req: Request, res: Response) => {
        const id = req.params.id
        const { sub: userId } = req.auth!
        const { text, isDefault } = req.body as Address

        const updatedData = await this.customerService.findbyIdAndUpdate(
            id as string,
            userId,
            { text, isDefault },
        )

        res.status(200).json(updatedData)
    }

}

export default CustomerController