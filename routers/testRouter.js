const express= require('express')
const { testRouteFunction } = require('../controllers/testController')

const testRouter= express.Router()

testRouter.get('/get', testRouteFunction)

module.exports={testRouter}