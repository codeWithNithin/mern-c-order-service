import productCacheModel from "./product-cache.model.js";
import type { ProductMessage } from "./product-cache.types.js";

export const handleProductUpdate = async (value: string) => {
  // todo: wrap this parsing in try catch
  const product: ProductMessage = JSON.parse(value);

  return await productCacheModel.updateOne(
    {
      productId: product.data.id,
    },
    {
      $set: {
        priceConfiguration: product.data.priceConfiguration,
      },
    },
    { upsert: true },
  );
};