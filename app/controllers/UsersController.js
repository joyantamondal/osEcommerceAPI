import { CreateReviewService } from "../service/ProductReviewService.js";
import { CreateUserProfileService, LoginService, ReadUserProfileService, UpdateUserProfileService, VerifyLoginService } from "../service/UserService.js";


//Login User
export const Login = async (req, res) => {
  let result = await LoginService(req)
  return res.json(result)
};

//Login Verify
export const VerifyLogin = async (req, res) => {
  let result = await VerifyLoginService(req)
  return res.json(result)
};

//Creatre User Profile 
export const CreateUserProfile = async (req, res) => {
  let result = await CreateUserProfileService(req)
  return res.json(result)
};

//Update User Profile 
export const UpdateUserProfile = async (req, res) => {
  let result = await UpdateUserProfileService(req)
  return res.json(result)
};

//Read User Profile 
export const ReadUserProfile = async (req, res) => {
  let result = await ReadUserProfileService(req)
  return res.json(result)
};

//Creatre User Review 
export const CreateUserReview = async (req, res) => {
  let result = await CreateReviewService(req)
  return res.json(result)
};

//Update User Review 
export const UpdateUserReview = async (req, res) => {
  let result = await CreateReviewService(req)
  return res.json(result)
};


