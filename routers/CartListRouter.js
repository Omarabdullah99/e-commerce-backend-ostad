const express = require('express')
const { testCart, CreateCartList, getAllCartList, UpdateCartList, GetCartListByUserId, DeleteCartList } = require('../controllers/CartListController')
const AuthVerification = require('../middleware/AuthVerification')

const CartListRouter= express.Router()

CartListRouter.get('/testCart',AuthVerification, testCart)
CartListRouter.post('/createCart',AuthVerification,CreateCartList)
CartListRouter.get('/allCart',getAllCartList)
CartListRouter.patch('/updateCart/:cartId',AuthVerification, UpdateCartList)
CartListRouter.get('/getCartListByUserId', AuthVerification, GetCartListByUserId)
CartListRouter.delete('/deleteCart/:cartId',AuthVerification, DeleteCartList)



module.exports= CartListRouter