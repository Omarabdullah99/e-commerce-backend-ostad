const mongoose= require('mongoose')

const ReviewSchema= mongoose.Schema({
   productID: { type: mongoose.Schema.Types.ObjectId, required: true },
   userID: { type: mongoose.Schema.Types.ObjectId, required: true },
   des: { type: String, required: true },
   rating: { type: String, required: true }
},
{timestamps:true}

)


const ReviewModel= mongoose.model("wishes", ReviewSchema)

module.exports= ReviewModel