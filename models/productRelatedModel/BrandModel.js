const mongoose= require('mongoose')

const BrandSchema= mongoose.Schema({
    brandName:{type:String, unique:true, requirred:true},
    brandImg:{type:String,  requirred:true}
},
{timestamps:true}

)


const BrandModel= mongoose.model("brands", BrandSchema)


module.exports= BrandModel