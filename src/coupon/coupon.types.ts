export interface Coupon {
    tenantId: number
     title: string
     code: string
     validUpto: Date
     discount: number
}

export interface verifyCouponRequest {
    code: string
    tenantId: number
}