const BrandModel = require("../models/productRelatedModel/BrandModel")
const CategoriesModel = require("../models/productRelatedModel/CategoriesModel")
const ProductSliderModel = require("../models/productRelatedModel/ProductSlider")

//------------------brands related function start----------------
const createBrandList= async(req,res)=>{
    let data= req.body
    console.log('branddata',data)
    try {
        let result= await BrandModel.create(data)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

const getBrandList= async(req,res)=>{
    try {
     const result= await   BrandModel.find()
     res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

//------------------brands related function end----------------



//------------------category related function start----------------
const createCategory= async(req,res)=>{
    let data= req.body
    console.log('branddata',data)
    try {
        let result= await CategoriesModel.create(data)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

const getCategories= async(req,res)=>{
    try {
     const result= await   CategoriesModel.find()
     res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
//------------------category related function start----------------




//------------------ProductSlider related function start----------------
const createProductSlider= async(req,res)=>{
    let data= req.body
    console.log('branddata',data)
    try {
        let result= await ProductSliderModel.create(data)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

const getProductSlider= async(req,res)=>{
    try {
     const result= await   ProductSliderModel.find()
     res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

//------------------ProductSlider related function end----------------
module.exports={createBrandList,getBrandList,createCategory,getCategories, createProductSlider,getProductSlider}