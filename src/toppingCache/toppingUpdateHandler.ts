import type { ToppingMessage } from "./topping-cache.types.js";
import toppingCacheModel from "./topping-cacheModel.js";

export const handleToppingUpdate = async (value: string) => {
  // todo: wrap this parsing in try catch
  const topping: ToppingMessage = JSON.parse(value);

  return await toppingCacheModel.updateOne(
    {
      toppingId: topping.data.id,
    },
    {
      $set: {
        price: topping.data.price,
        tenantId: topping.data.tenantId,
    },
    },
    { upsert: true },
  );
};