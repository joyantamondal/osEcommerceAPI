import express from "express";

const router = express.Router();
import *as UsersController from "../app/controllers/UsersController.js"
import *as BrandController from "../app/controllers/BrandController.js"
import *as CartListController from "../app/controllers/CartListController.js"
import *as CategoryController from "../app/controllers/CategoryController.js"
import *as InvoiceController from "../app/controllers/InvoiceController.js"
import *as ProductController from "../app/controllers/ProductController.js"
import *as WishListController from "../app/controllers/WishListController.js"
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";



//Users Route
router.post("/Login", UsersController.Login) 
router.post("/VerifyLogin", UsersController.VerifyLogin) 
router.post("/CreateUserProfile",AuthMiddleware, UsersController.CreateUserProfile) 
router.post("/UpdateUserProfile",AuthMiddleware, UsersController.UpdateUserProfile) 
router.get("/ReadUserProfile",AuthMiddleware, UsersController.ReadUserProfile) 

//Brands Route
router.get("/BrandList", BrandController.BrandList) 

//Categories Route
router.get("/CategoryList", CategoryController.CategoryList) 

//Cart Route
router.post("/CreateCart", AuthMiddleware, CartListController.CreateCart) 
router.get("/ReadCartList", AuthMiddleware, CartListController. ReadCartList) 
router.post("/UpdateCart", AuthMiddleware, CartListController.UpdateCart) 
router.post("/RemoveCart", AuthMiddleware, CartListController.RemoveCart) 

//Review Product
router.post("/CreateUserReview", AuthMiddleware, UsersController.CreateUserReview) 
router.post("/UpdateUserReview", AuthMiddleware, UsersController.UpdateUserReview) 
// //Wish Route
router.post("/CreateWish", AuthMiddleware, WishListController.CreateWish) 
router.get("/ReadWishList", AuthMiddleware, WishListController.ReadWishList) 
router.post("/RemoveWish", AuthMiddleware, WishListController.RemoveWish) 

// Products Route 
router.get("/ProductListBySlider", ProductController.ProductListBySlider) 
router.get("/ProductListByCategory/:CategoryID", ProductController.ProductListByCategory) 
router.get("/ProductListByRemark/:Remark", ProductController.ProductListByRemark) 
router.get("/ProductListByBrand/:BrandID", ProductController.ProductListByBrand) 
router.get("/ProductDetailsByID/:ProductID", ProductController.ProductDetailsByID) 
router.get("/ProductListByKeyword/:keyword", ProductController.ProductListByKeyword) 
router.get("/ProductReviewListByID/:ProductID", ProductController.ProductReviewListByID) 


// //Invoice Route
// router.post("/CreateInvoice", AuthMiddleware, InvoiceController.CreateInvoice) 
// router.get("/ReadInvoiceList", AuthMiddleware, InvoiceController.ReadInvoiceList) 
// router.get("/ReadInvoiceDetails", AuthMiddleware, InvoiceController.ReadInvoiceDetails) 






export default router;