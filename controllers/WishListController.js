const WishListModel = require("../models/userRelatedModel/WishListModel");

const WishTest = (req, res) => {
  res.send("hello wishlist send");
};

const CreateAndUpdateWishList = async (req, res) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    // Check if profile exists
    let existingWishList = await WishListModel.findOne({ userID: user_id });

    if (existingWishList) {
      // Update the existing profile
      let updatedWishList = await WishListModel.findOneAndUpdate(
        { userID: user_id },
        { $set: reqBody },
        { new: true } // Returns updated document
      );
      res.status(200).json({
        status: "success",
        message: "wishList updated successfully",
        data: updatedWishList,
      });
    } else {
      // Create a new profile
      let newWishList = new WishListModel(reqBody);
      await newWishList.save();
      res.status(201).json({
        status: "success",
        message: "WishList created successfully",
        data: newWishList,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const GetAllWishList=async(req,res)=>{
    try {
        let data = await WishListModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}
const DeleteWishList = async (req, res) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    await WishListModel.deleteOne(reqBody);
    res
      .status(200)
      .json({ status: "success", message: "WishList Delete successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { WishTest, CreateAndUpdateWishList,GetAllWishList,DeleteWishList };
