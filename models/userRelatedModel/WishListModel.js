const mongoose= require('mongoose')

const WishListSchema= mongoose.Schema({
   productID: { type: mongoose.Schema.Types.ObjectId, required: true },
   userID: { type: mongoose.Schema.Types.ObjectId, required: true },
},
{timestamps:true}

)


const WishListModel= mongoose.model("wishes", WishListSchema)

module.exports= WishListModel