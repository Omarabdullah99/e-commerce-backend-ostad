const CartstModel = require("../models/userRelatedModel/CartsModel");
const mongoose = require("mongoose");

const testCart = (req, res) => {
  res.send("hello test cart");
};

const CreateCartList = async (req, res) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    let result = await CartstModel.create(reqBody);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAllCartList = async (req, res) => {
  try {
    let data = await CartstModel.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const UpdateCartList = async (req, res) => {
  try {
    let cartId = req.params.cartId;
    let user_id = req.headers.user_id;
    let reqBody = req.body;

    let result = await CartstModel.findOneAndUpdate(
      { _id: cartId, userID: user_id },
      { $set: reqBody },
      { new: true }
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const DeleteCartList = async (req, res) => {
  try {
    let cartId = req.params.cartId;
    let user_id = req.headers.user_id;
    let result = await CartstModel.findOneAndDelete({
      _id: cartId,
      userID: user_id,
    });

    if (!result) {
      return res
        .status(404)
        .json({ status: "error", message: "Cart item not found" });
    }

    return res
      .status(200)
      .json({
        status: "success",
        message: "Cart item deleted successfully",
        data: result,
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const GetCartListByUserId = async (req, res) => {
  try {
    const UserId = req.headers.user_id;

    // Check if userId is a valid ObjectId
    if (!mongoose.isValidObjectId(UserId)) {
      return res.status(400).json({ error: "Invalid UserId format" });
    }

    let MatchStage = {
      $match: { userID: new mongoose.Types.ObjectId(UserId) },
    };

    let JoinWithUserStage = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };

    let JoinWithProductStage = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    };

    let unwindUserStage = {
      $unwind: {
        path: "$profile",
        preserveNullAndEmptyArrays: true,
      },
    };

    let unwindProductStage = {
      $unwind: {
        path: "$product",
        preserveNullAndEmptyArrays: true,
      },
    };
    let data = await CartstModel.aggregate([
      MatchStage,
      JoinWithUserStage,
      unwindUserStage,
      JoinWithProductStage,
      unwindProductStage,
    ]);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  testCart,
  CreateCartList,
  getAllCartList,
  UpdateCartList,
  GetCartListByUserId,
  DeleteCartList
};
