const express= require('express')
const { createBrandList, getBrandList, createCategory, getCategories, createProductSlider, getProductSlider } = require('../controllers/ProductsController')

const ProductRouter= express.Router()

ProductRouter.post('/createBrand',createBrandList)
ProductRouter.get('/getBrands',getBrandList)

ProductRouter.post('/createCategory',createCategory)
ProductRouter.get('/getCategories',getCategories)

ProductRouter.post('/createProductSlider',createProductSlider)
ProductRouter.get('/getProductSlider',getProductSlider)
module.exports= ProductRouter