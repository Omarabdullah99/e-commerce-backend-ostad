const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { testRouter } = require("./routers/testRouter");
const ProductRouter = require("./routers/ProductRouter");
const UserRouter = require("./routers/UserRouter");
const cookieParser = require("cookie-parser");
const WishListRouter = require("./routers/WishListRouter");




const app = express();

//middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())
app.use(cookieParser()); // ✅ Enable cookie-parser

//router setup
app.use("/hello", (req, res) => {
  res.send("hello e-commerce-project");
});

app.use('/test', testRouter)
app.use('/api/v1/product', ProductRouter)
app.use('/api/v1/user', UserRouter)
app.use('/api/v1/wish', WishListRouter)


app.get('/',(req,res)=>{
  res.send('hello')
})



//mongodb atlas setup
const MONGODB_URL =
  "mongodb+srv://khalidabdullah1147:OXKfhhBZlwNnB0T0@e-commerce-ostad-practi.bpkhm.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-ostad-practice";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGODB_URL);
  console.log("database connected");
}

app.listen(4000,()=>{
    console.log('port is runing 400')
})
