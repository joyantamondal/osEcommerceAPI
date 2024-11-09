
import ReviewModel from './../model/reviewsModel.js';
export const CreateReviewService = async (req)=>{

    try {
        let user_id = req.headers['user_id'];
        let {productID,des, rating} = req.body;
        let postJSON={
            userID:user_id,
            productID : productID,
            userID: user_id,
            des:des,
            rating:rating
        }

    let data = await ReviewModel.updateOne({userID:user_id, productID:productID},{$set:postJSON},{upsert:true})
    return {status:"success",message:"Review Create Success", data:data};
        
    } catch (error) {
        return {status:"fail", data:error.toString()}
    }
    
    }