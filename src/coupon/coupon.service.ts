import couponModel from "./coupon.model.js"
import type { Coupon, verifyCouponRequest } from "./coupon.types.js"

class CouponService {
    create = async (couponRequest: Coupon) => {
        return await couponModel.create(couponRequest)
    }
    find = async () => {
        return await couponModel.find()
    }

    findById = async (id: string) => {
        return await couponModel.findById(id)
    }

    findByIdAndCode = async (data: verifyCouponRequest) => {
        return await couponModel.findOne(data)
    }
}

export default CouponService