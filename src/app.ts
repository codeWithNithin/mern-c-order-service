import express from 'express'
import { globalErrorHandler } from './common/middlewares/globalErrHandler.js'
import cookieParser from 'cookie-parser'
import customerRouter from './customer/customer.router.js'
import router from './coupon/coupon.router.js'

const app = express()

app.use(cookieParser())
app.use(express.json())

app.use('/customers', customerRouter)
app.use("/coupons", router);

app.use(globalErrorHandler)

export default app
