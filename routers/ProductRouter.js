const express= require('express')
const { createBrandList, getBrandList, createCategory, getCategories, createProductSlider, getProductSlider, createProduct, getAllProducts, ListByBrand, ListByCategory, ListByRemark, ProductListBySimilar, CreateProductDetails, GetProductDetailsById, getAllDetails, GetProductListByKeyword, GetProductByReviewList } = require('../controllers/ProductsController')

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
ProductRouter.get('/productListBySimiar/:CategoryID',ProductListBySimilar)
ProductRouter.get('/listByRemark/:Remark',ListByRemark)

ProductRouter.post('/createProductDetails',CreateProductDetails)
ProductRouter.get("/getAllDetails",getAllDetails)
ProductRouter.get('/productDetailsById/:ProductId',GetProductDetailsById)

ProductRouter.get('/productListByKeyword/:keyword',GetProductListByKeyword)

ProductRouter.get('/productByReviewList/:ProductId',GetProductByReviewList)
module.exports= ProductRouter