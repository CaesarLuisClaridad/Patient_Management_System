import ErrorHandler from "../utils/errorHandler.js";
import User from "../model/user.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import sendToken from "../utils/sendToken.js";

// Register the user
export const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, password } = req.body;

  const user = await User.create({ name, password });

  const token = user.getJwtToken();

  sendToken(user, 201, res);
});

export const loginUser = catchAsyncError(async (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return next(new ErrorHandler("Please enter name and password", 401));
  }

  // Find the user and include password in result
  const user = await User.findOne({ name }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Username or Password", 401));
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Username or Password", 401));
  }

  const token = user.getJwtToken();

  sendToken(user, 200, res);
});

//logout the user => api/v1/logout
export const logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    message: "User logged out",
  });
});

export const getCurrentUser = catchAsyncError(async (req, res, next) => {
  const user= await User.findById(req?.user?._id)

  res.status(200).json({
    user,
  })
})
