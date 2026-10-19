import customerModel from "./customer.model.js";
import type { Address, Customer } from "./customer.types.js";

class CustomerService {
    async create(customerData: Customer) {
    return await customerModel.create(customerData)
    }

    async getById(id: string) {
        return await customerModel.findById(id)
    }

    async findByUserId(userId: string) {
       return await customerModel.findOne({ userId });
    }

    async findbyIdAndUpdate(
        id: string,
        userId: string,
        addressData: Partial<Address>,
    ) {
        return await customerModel.findOneAndUpdate(
            { _id: id, userId },
            { $push: { addresses: addressData } },
            {
                new: true,
            },
        )
    }

}

export default CustomerService