const express= require('express')
const {  CreateUser, GetAllUsers, CreateProfileUser, GetAllProfileUser, CreateReview, GetAllReviews } = require('../controllers/UsersController')

const UserRouter= express.Router()


UserRouter.post('/createUser',CreateUser)
UserRouter.get("/getAllUsers",GetAllUsers)

UserRouter.post('/createProfileUser',CreateProfileUser)
UserRouter.get('/getAllProfileUser',GetAllProfileUser)

UserRouter.post('/createReview',CreateReview)
UserRouter.get('/getAllReviews',GetAllReviews)
module.exports= UserRouter