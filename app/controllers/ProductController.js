import {
  DetailsService,
  ListByBrandService,
  ListByCategoryService,
  ListByKeywordService,
  ListByRemarkService,
  ReviewListService,
  SliderListService,
} from "../service/productServices.js";

export const ProductListByCategory = async (req, res) => {
  let result = await ListByCategoryService(req);
  return res.json(result);
};

export const ProductListByRemark = async (req, res) => {
  let result = await ListByRemarkService(req);
  return res.json(result);
};

export const ProductListByBrand = async (req, res) => {
  let result = await ListByBrandService(req);
  return res.json(result);
};

export const ProductListBySlider = async (req, res) => {
  let result = await SliderListService();
  return res.json(result);
};

export const ProductDetailsByID = async (req, res) => {
  let result = await DetailsService(req);
  return res.json(result);
};

export const ProductListByKeyword = async (req, res) => {
  let result = await ListByKeywordService(req);
  return res.json(result);
};

export const ProductReviewListByID = async (req, res) => {
  let result = await ReviewListService(req);
  return res.json(result);
};


