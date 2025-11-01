import express from "express";
import { signup } from "../../controller/user/sign-up.js";
import { login } from "../../controller/user/login.js";
import { followUser } from "../../controller/user/follow-user.js";
import { authMiddleware } from "../../middleware/auth-middleware.js";
import { getUserInfo } from "../../controller/user/get-user-info.js";
const userRouter = express.Router();

userRouter.post("/sign-up", signup);
userRouter.post("/login", login);
userRouter.post("/follow/:followedUserId", authMiddleware, followUser);
userRouter.get("/user-info/:userId", authMiddleware, getUserInfo)

export default userRouter;
