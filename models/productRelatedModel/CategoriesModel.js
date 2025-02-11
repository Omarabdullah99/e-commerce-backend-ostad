const mongoose= require('mongoose')

const CategoriesSchema= mongoose.Schema({
    categoryName:{type:String, unique:true, requirred:true},
    categoryImg:{type:String,  requirred:true}
},
{timestamps:true}

)


const CategoriesModel= mongoose.model("categories", CategoriesSchema)

module.exports= CategoriesModel