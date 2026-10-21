import mongoose from "mongoose";
import type { ToppingPriceCache } from "./topping-cache.types.js";

const toppingCacheSchama = new mongoose.Schema<ToppingPriceCache>(
  {
    toppingId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tenantId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

toppingCacheSchama.index({ toppingId: 1 }, { unique: true });

export default mongoose.model(
  "ToppingPricingCache",
  toppingCacheSchama,
  "toppingCache",
);