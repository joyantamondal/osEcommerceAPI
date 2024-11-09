import mongoose from 'mongoose';
import BrandModel from '../model/brandsModel.js';
import CategoryModel from '../model/categoriesModel.js';
import SlidersModel from '../model/reviewsModel.js';
import ProductModel from './../model/productsModel.js';
import ReviewModel from '../model/reviewsModel.js';


const ObjectId=mongoose.Types.ObjectId;



export const BrandListService=async()=>{
try {
    let data = await BrandModel.find()
    return {status:"success", data:data}

} catch (e) {
    return {status:"fail", data:error.toString()}
    
}


}


export const CategoryListService=async()=>{

try {
    let data = await CategoryModel.find()
    return {status:"success", data:data}

} catch (e) {
    return {status:"fail", data:e.toString()}
    
}

}


export const SliderListService=async(req,res)=>{
    try {
        let data = await SlidersModel.find()
        console.log(data)
        return {status:"success", data:data}
    
    } catch (e) {
        return {status:"fail", data:e.toString()}
        
    }
}

export const ListByBrandService=async(req)=>{
try {

    let BrandID=new ObjectId(req.params.BrandID);

    let MatchStage={$match:{brandID:BrandID}}

    let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};


    let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};

    let UnwindBrandStage={$unwind:"$brand"}
    let UnwindCategoryStage={$unwind:"$category"}

    let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}


    // Query
    let data= await  ProductModel.aggregate([
        MatchStage,
        JoinWithBrandStage,
        JoinWithCategoryStage,
        UnwindBrandStage,
        UnwindCategoryStage,
        ProjectionStage

    ])
    return {status:"success",data:data}

}catch (e) {
    return {status:"fail",data:e}.toString()
}
}


export const ListByCategoryService=async(req)=>{
    try {

        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }

}

export const ListByRemarkService=async(req)=>{
    try {

        let Remark=req.params.Remark;
        let MatchStage={$match:{remark:Remark}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString() }

    

}
export const DetailsService=async(req)=>{
    try {
        let ProductID=new ObjectId(req.params.ProductID);
        let MatchStage={$match:{_id:ProductID}}
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString() }  

}
export const ListByKeywordService=async(req)=>{
try {
    let keyword= req.params.keyword;
let regex = {"$regex":keyword, "$options":"i"}
let SearchParams=[{title:regex},{shortDes:regex}]
let SearchQuery ={$or:SearchParams}
let MatchStage= {$match:SearchQuery}
let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
let UnwindBrandStage={$unwind:"$brand"}
let UnwindCategoryStage={$unwind:"$category"}
let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
let data= await  ProductModel.aggregate([
    MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
    UnwindBrandStage,UnwindCategoryStage, ProjectionStage
])
return {status:"success",data:data}
    
} catch (e) {
    return {status:"fail",data:e}.toString() 
}  

}



export const ReviewListService=async(req)=>{

    try {

        let ProductID=new ObjectId(req.params.ProductID);
        let MatchStage={$match:{productID:ProductID}}

        let JoinWithProfileStage= {$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
        let UnwindProfileStage={$unwind:"$profile"}
        let ProjectionStage= {$project: {'des': 1, 'rating': 1, 'profile.cus_name': 1}}

        let data= await  ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ])

        return {status:"success",data:data}
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
    
    }
    
    