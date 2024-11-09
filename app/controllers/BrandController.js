import { BrandListService } from "../service/productServices.js";

export const BrandList = async (req, res) => {
  let result = await BrandListService();
  return res.json(result);
};
