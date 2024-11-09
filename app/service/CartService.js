import CartModel from "../model/cartsModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const CreateCartService = async (req) => {
  try {
    let user_id = req.headers["user_id"];
    let { productID, color, qty, size } = req.body;
    let postJSON = {
      productID: productID,
      userID: user_id,
      color: color,
      qty: qty,
      size: size,
    };

    await CartModel.create(postJSON);
    return { status: "success", message: "Cart Create Success" };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

export const ReadCartListService = async (req) => {
  try {
    let user_id = new ObjectId(req.headers["user_id"]);
    let matchStage = { $match: { userID: user_id } };
    let JoinStageProduct = {
      $lookup: {
        from: "products",
        localField: "productsID",
        foreignField: "_id",
        as: "product",
      },
    };

    let data = await CartModel.aggregate([matchStage, JoinStageProduct]);
    return { status: "success", message: "Cart Read Success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

export const RemoveCartService = async (req) => {
  try {
    let user_id = req.headers["user_id"];
    let { id } = req.body;
    let postJSON = {
      _id: id,
      userID: user_id,
    };

    let data = await CartModel.deleteOne(postJSON);
    return { status: "success", message: "Wish Remove Success", data:data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

export const UpdateCartService = async (req) => {
    try {
      let user_id = req.headers["user_id"];
      let { color, qty, size , id} = req.body;
      let postJSON = {
        _id:id,
        color: color,
        qty: qty,
        size: size,
      };
  
      let data = await CartModel.updateOne({userID:user_id, _id:id},{$set:postJSON});
      return { status: "success", message: "Cart Update Success", data:data };
    } catch (error) {
      return { status: "fail", data: error.toString() };
    }
  };