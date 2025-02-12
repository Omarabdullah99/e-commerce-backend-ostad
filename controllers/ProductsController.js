const BrandModel = require("../models/productRelatedModel/BrandModel")

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

module.exports={createBrandList,getBrandList}