import { Router } from "express";
import authenticate from "../common/middlewares/authenticate.js";
import { canAccess } from "../common/middlewares/canAccess.js";
import { Roles } from "../common/constants/index.js";
import customerValidate from "../customer/customer.validate.js";
import asyncWrapper from "../common/utils/asyncWrapper.js";
import CouponService from "./coupon.service.js";
import CouponController from "./coupon.controller.js";

const router = Router()

const couponService = new CouponService()

const couponController = new CouponController(couponService)

router.post('/',
    authenticate,
    canAccess([Roles.MANAGER, Roles.ADMIN]),
    customerValidate,
    asyncWrapper(couponController.createCoupon.bind(couponController))
)

router.get(
    '/',
    authenticate,
    canAccess([Roles.ADMIN, Roles.MANAGER]),
    couponController.getCoupons.bind(couponController),
)

router.get(
    '/:id',
    authenticate,
    canAccess([Roles.ADMIN, Roles.MANAGER]),
   asyncWrapper(couponController.getCoupon.bind(couponController)),
)

router.post("/verify", authenticate, asyncWrapper(couponController.verifyCoupon.bind(couponController)));


export default router