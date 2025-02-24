const express= require('express')
const {  CreateUser, GetAllUsers, CreateProfileUser, GetAllProfileUser, CreateReview, GetAllReviews, UserOTP, LoginOtpVerify, LogOut, CreateAndUpdateProfile, GetProfileByUserId } = require('../controllers/UsersController')
const AuthVerification = require('../middleware/AuthVerification')

const UserRouter= express.Router()


UserRouter.post('/createUser',CreateUser)
UserRouter.get("/getAllUsers",GetAllUsers)

//profile realte
UserRouter.post('/createProfileUser',CreateProfileUser)
UserRouter.get('/getAllProfileUser',GetAllProfileUser)
UserRouter.post('/createAndUpdateProfile',AuthVerification, CreateAndUpdateProfile)
UserRouter.get('/profileByUserId',AuthVerification, GetProfileByUserId)

UserRouter.post('/createReview',CreateReview)
UserRouter.get('/getAllReviews',GetAllReviews)

//otp related api
UserRouter.get('/userOTP/:email',UserOTP)
UserRouter.get('/loginOtpVerify/:email/:otp',LoginOtpVerify)
UserRouter.get('/logout',AuthVerification, LogOut )
module.exports= UserRouter