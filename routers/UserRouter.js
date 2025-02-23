const express= require('express')
const {  CreateUser, GetAllUsers, CreateProfileUser, GetAllProfileUser, CreateReview, GetAllReviews, UserOTP, LoginOtpVerify } = require('../controllers/UsersController')

const UserRouter= express.Router()


UserRouter.post('/createUser',CreateUser)
UserRouter.get("/getAllUsers",GetAllUsers)

UserRouter.post('/createProfileUser',CreateProfileUser)
UserRouter.get('/getAllProfileUser',GetAllProfileUser)

UserRouter.post('/createReview',CreateReview)
UserRouter.get('/getAllReviews',GetAllReviews)

//otp related api
UserRouter.get('/userOTP/:email',UserOTP)
UserRouter.get('/loginOtpVerify/:email/:otp',LoginOtpVerify)
module.exports= UserRouter