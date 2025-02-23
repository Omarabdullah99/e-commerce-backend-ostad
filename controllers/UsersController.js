const ProfileModel = require("../models/userRelatedModel/ProfileModel");
const ReviewModel = require("../models/userRelatedModel/ReviewModel");
const UserModel = require("../models/userRelatedModel/UsersModel");
const EmailSend = require("../utility/EmailHelper");
const { EncodeToken } = require("../utility/TokenHelper");

//------------------users related function start----------------
const CreateUser = async (req, res) => {
  try {
    let data = req.body;
    const result = await UserModel.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const GetAllUsers = async (req, res) => {
  try {
    const result = await UserModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const CreateProfileUser = async (req, res) => {
  try {
    let data = req.body;
    const result = await ProfileModel.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const GetAllProfileUser = async (req, res) => {
  try {
    const result = await ProfileModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const CreateReview = async (req, res) => {
  try {
    let data = req.body;
    const result = await ReviewModel.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const GetAllReviews = async (req, res) => {
  try {
    const result = await ReviewModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

//otp related controller
const UserOTP = async (req, res) => {
  try {
    let email = req.params.email;
    let code = Math.floor(100000 + Math.random() * 900000);
    let EmailText = `your verify code is =${code}`;
    let EmailSubject = "Email verification";
    await EmailSend(email, EmailText, EmailSubject);
    let result = await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );
    res.status(200).json({
      status: "success",
      message: "6 digit OTP has been send",
      result: result,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const LoginOtpVerify = async (req, res) => {
  try {
    let email = req.params.email;
    let otp = req.params.otp;

    // User Count
    let total = await UserModel.find({
      email: email,
      otp: otp,
    }).countDocuments();
    if (total === 1) {
      // User ID Read
      let user = await UserModel.findOne({ email: email, otp: otp }).select(
        "_id"
      );

      // User Token Create
      let token = EncodeToken(email, user._id.toString());

      // OTP Code Update To 0
      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

      // Cookies Option
      let cookieOption = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: false,
      };

      // Set Cookies With Response
      res.cookie("token", token, cookieOption);

      return res
        .status(200)
        .json({ status: "success", message: "Valid OTP", token: token });
    } else {
      return res.status(400).json({ status: "fail", message: "Invalid OTP" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ status: "fail", message: "Something went wrong", error: error });
  }
};

const LogOut = async (req, res) => {
  try {
    // Cookies Option
    let cookieOption = {
      expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
      httpOnly: false,
    };
    // Set Cookies With Response
    res.cookie("token", "", cookieOption);
    res.status(200).json({status:"success", message:"logout successfullly"})
  } catch (error) {
    res.status(400).json(error);
  }
};

//------------------users related function end----------------

module.exports = {
  CreateUser,
  GetAllUsers,
  CreateProfileUser,
  GetAllProfileUser,
  CreateReview,
  GetAllReviews,
  UserOTP,
  LoginOtpVerify,
  LogOut
};
