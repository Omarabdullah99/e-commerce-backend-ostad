const express= require('express')
const {  CreateUser, GetAllUsers, CreateProfileUser, GetAllProfileUser } = require('../controllers/UsersController')

const UserRouter= express.Router()


UserRouter.post('/createUser',CreateUser)
UserRouter.get("/getAllUsers",GetAllUsers)

UserRouter.post('/createProfileUser',CreateProfileUser)
UserRouter.get('/getAllProfileUser',GetAllProfileUser)
module.exports= UserRouter