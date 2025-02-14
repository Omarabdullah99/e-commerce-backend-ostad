const express= require('express')
const {  CreateUser, GetAllUsers } = require('../controllers/UsersController')

const UserRouter= express.Router()


UserRouter.post('/createUser',CreateUser)
UserRouter.get("/getAllUsers",GetAllUsers)
module.exports= UserRouter