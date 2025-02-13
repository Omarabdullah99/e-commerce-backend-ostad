const BrandModel = require("../models/productRelatedModel/BrandModel");
const CategoriesModel = require("../models/productRelatedModel/CategoriesModel");
const ProductModel = require("../models/productRelatedModel/ProductModel");
const ProductSliderModel = require("../models/productRelatedModel/ProductSlider");
const mongoose = require("mongoose");

//------------------brands related function start----------------
const createBrandList = async (req, res) => {
  let data = req.body;
  //console.log('branddata',data)
  try {
    let result = await BrandModel.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getBrandList = async (req, res) => {
  try {
    const result = await BrandModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

//------------------brands related function end----------------

//------------------category related function start----------------
const createCategory = async (req, res) => {
  let data = req.body;
  //console.log('branddata',data)
  try {
    let result = await CategoriesModel.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCategories = async (req, res) => {
  try {
    const result = await CategoriesModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
//------------------category related function start----------------

//------------------Product related function start----------------
const createProduct = async (req, res) => {
  let data = req.body;
  //console.log('branddata',data)
  try {
    let result = await ProductModel.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const data = await ProductModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createProductSlider = async (req, res) => {
  let data = req.body;
  //console.log('branddata',data)
  try {
    let result = await ProductSliderModel.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProductSlider = async (req, res) => {
  try {
    const result = await ProductSliderModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const ListByBrand = async (req, res) => {
  try {
    let BrandID = req.params.BrandID;

    // Check if BrandID is a valid ObjectId
    if (!mongoose.isValidObjectId(BrandID)) {
      return res.status(400).json({ error: "Invalid BrandID format" });
    }

    let matchStage = {
      $match: { brandID: new mongoose.Types.ObjectId(BrandID) },
    };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let unwindBrandStage = {
      $unwind: {
        path: "$brand",
        preserveNullAndEmptyArrays: true,
      },
    };
    let unwindCategoryStage = {
      $unwind: {
        path: "$category",
        preserveNullAndEmptyArrays: true,
      },
    };

    let ProjectionStage = { $project: { "brand._id": 0, "category._id": 0 } };

    let data = await ProductModel.aggregate([
      matchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      ProjectionStage,
    ]);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const ListByCategory = async (req, res) => {
  try {
    let CategoryID = req.params.CategoryID;
    // Check if BrandID is a valid ObjectId
    if (!mongoose.isValidObjectId(CategoryID)) {
      return res.status(400).json({ error: "Invalid BrandID format" });
    }
    let matchStage = {
      $match: { categoryID: new mongoose.Types.ObjectId(CategoryID) },
    };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let unwindBrandStage = {
      $unwind: {
        path: "$brand",
        preserveNullAndEmptyArrays: true,
      },
    };
    let unwindCategoryStage = {
      $unwind: {
        path: "$category",
        preserveNullAndEmptyArrays: true,
      },
    };

    let ProjectionStage = { $project: { "brand._id": 0, "category._id": 0 } };

    let data = await ProductModel.aggregate([
      matchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      ProjectionStage,
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const ListByRemark= async(req,res)=>{
  try {
    const Remark= req.params.Remark

    let MatchStage={$match:{remark:Remark}}
    let JoinWithBrandStage={
      $lookup:{
        from:"brands",
        localField:"brandID",
        foreignField:"_id",
        as:"brand"
      }
    }
    let JoinWithCategoryStage={
      $lookup:{
        from:"categories",
        localField:"categoryID",
        foreignField:"_id",
        as:"category"
      }
    }

    let unwindBrandStage = {
      $unwind: {
        path: "$brand",
        preserveNullAndEmptyArrays: true,
      },
    };
    let unwindCategoryStage = {
      $unwind: {
        path: "$category",
        preserveNullAndEmptyArrays: true,
      },
    };

    let ProjectionStage={$project: { "brand._id": 0, "category._id": 0 }}
    let data = await ProductModel.aggregate([
      MatchStage, JoinWithBrandStage, JoinWithCategoryStage,
      unwindBrandStage,unwindCategoryStage,
      ProjectionStage
      
    ])

    res.status(200).json(data)
    
  } catch (error) {
    res.status(400).json(error);
    
  }
}
//------------------Product related function end----------------
module.exports = {
  createBrandList,
  getBrandList,
  createCategory,
  getCategories,
  createProductSlider,
  getProductSlider,
  createProduct,
  getAllProducts,
  ListByBrand,
  ListByCategory,
  ListByRemark
};
