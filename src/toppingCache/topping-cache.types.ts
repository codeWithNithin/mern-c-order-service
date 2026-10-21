import type mongoose from "mongoose";

export interface ToppingPriceCache {
  _id: mongoose.Types.ObjectId;
  toppingId: string;
  price: number;
  tenantId: string;
}

export enum ToppingEvents {
  TOPPING_CREATE = "TOPPING_CREATE",
  TOPPING_UPDATE = "TOPPING_UPDATE",
  TOPPING_DELETE = "TOPPING_DELETE",
}
export interface ToppingMessage {
  event_type: ToppingEvents;
  data: {
    id: string;
    price: number;
    tenantId: string;
  };
}
