import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadCloudinary } from "../../utils/Cloudinary.js";
import { APIresponse } from "../../utils/APIresponse.js";
const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend

  //validation - not empty
  //check if user already exists:username,email
  //check for images,check for avatar
  //upload them to cloudinary,avatar
  //create user object - create entry ib db
  //remove password and refresh token field from response
  //check for user creation
  //return response.

  const { fullName, email, username, password } = req.body;
  console.log("email:", email);
  //  if(fullName === ""){
  //     throw new ApiError("Full Name is required");
  //  }
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existtedUser = User.findOne({
    $or: [{ email }, { username }],
  });
  if (!existtedUser) {
    throw new ApiError(409, "user with email and username already exists");
  }
  const avatarLocalpath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatar) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatar = await uploadCloudinary(avatarLocalpath);
  const coverImage = await uploadCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(400, "Avatar is required");
  }
  const user = await User.create({
    fullName,
    email,
    username: username.toLowerCase(),
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken "
  );
  if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  return response
    .status(200)
    .json(new APIresponse(200, createdUser, "User registered successfully"));
});

export { registerUser };
