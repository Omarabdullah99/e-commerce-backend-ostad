const mongoose= require('mongoose')

const CartSchema= mongoose.Schema({
   productID: { type: mongoose.Schema.Types.ObjectId, required: true },
   userID: { type: mongoose.Schema.Types.ObjectId, required: true },
   color: { type: String, required: true },
   price: { type: String, required: true },
   qty: { type: String, required: true },
   size: { type: String, required: true },
},
{timestamps:true}

)


const CartstModel= mongoose.model("wishes", CartSchema)

module.exports= CartstModel