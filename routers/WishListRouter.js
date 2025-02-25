const express= require('express')
const { WishTest, CreateAndUpdateWishList, DeleteWishList, GetAllWishList } = require('../controllers/WishListController')
const AuthVerification = require('../middleware/AuthVerification')

const WishListRouter= express.Router()

WishListRouter.get('/testWish',AuthVerification, WishTest)
WishListRouter.get('/allWish', GetAllWishList)
WishListRouter.post('/crateWishList',AuthVerification,CreateAndUpdateWishList)
WishListRouter.delete('/deleteWishList',AuthVerification,DeleteWishList)

module.exports= WishListRouter