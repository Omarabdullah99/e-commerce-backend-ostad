const express= require('express')
const { createBrandList, getBrandList, createCategory, getCategories, createProductSlider, getProductSlider, createProduct, getAllProducts, ListByBrand, ListByCategory, ListByRemark } = require('../controllers/ProductsController')

const ProductRouter= express.Router()

ProductRouter.post('/createBrand',createBrandList)
ProductRouter.get('/getBrands',getBrandList)

ProductRouter.post('/createCategory',createCategory)
ProductRouter.get('/getCategories',getCategories)

ProductRouter.post('/createProduct',createProduct)
ProductRouter.get('/getAllProducts',getAllProducts)


ProductRouter.post('/createProductSlider',createProductSlider)
ProductRouter.get('/getProductSlider',getProductSlider)

ProductRouter.get('/listByBrand/:BrandID',ListByBrand)
ProductRouter.get('/listByCategory/:CategoryID',ListByCategory)
ProductRouter.get('/listByRemark/:Remark',ListByRemark)
module.exports= ProductRouter