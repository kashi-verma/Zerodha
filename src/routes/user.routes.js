import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { registerUser } from "../controllers/user.controller";

const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "cover_image",
      maxCount: 1,
    },
  ]),
  registerUser
);

export default router;
