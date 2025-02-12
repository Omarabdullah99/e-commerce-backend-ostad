const express= require('express')
const { createBrandList, getBrandList } = require('../controllers/ProductsController')

const ProductRouter= express.Router()

ProductRouter.post('/createBrand',createBrandList)
ProductRouter.get('/getBrands',getBrandList)

module.exports= ProductRouter