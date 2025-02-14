const ProfileModel = require("../models/userRelatedModel/ProfileModel")
const UserModel = require("../models/userRelatedModel/UsersModel")


//------------------users related function start----------------
const CreateUser= async(req,res)=>{
    try {
        let data= req.body
        const result= await UserModel.create(data)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const GetAllUsers= async(req,res)=>{
    try {
        const result= await UserModel.find()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

const CreateProfileUser= async(req,res)=>{
    try {
        let data= req.body;
        const result= await ProfileModel.create(data)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

const GetAllProfileUser= async(req,res)=>{
    try {
        const result= await ProfileModel.find()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400).json(error)
    }
}


//------------------users related function end----------------


module.exports={CreateUser,GetAllUsers,CreateProfileUser,GetAllProfileUser}