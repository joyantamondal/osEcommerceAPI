import { CategoryListService } from "../service/productServices.js";

export const CategoryList = async (req, res) => {
  let result = await CategoryListService();
  return res.json(result);
};