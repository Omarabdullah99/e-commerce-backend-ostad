const mongoose= require('mongoose')

const UserSchema= mongoose.Schema({
    email:{type:String, unique:true, requirred:true,lowercase:true},
    otp:{type:String,  requirred:true}
},
{timestamps:true}

)


const UserModel= mongoose.model("users", UserSchema)

module.exports= UserModel