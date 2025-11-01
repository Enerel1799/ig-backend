import express from "express";
import { createPost } from "../../controller/post/create-post.js";
import { getPosts } from "../../controller/post/get-posts.js";
import { authMiddleware } from "../../middleware/auth-middleware.js";
import { toglleLike } from "../../controller/post/toggle-like.js";
import { getUserPost } from "../../controller/post/get--user-post.js";
const postRouter = express.Router();

postRouter.post("/create", authMiddleware, createPost);
postRouter.get("/", authMiddleware, getPosts);
postRouter.post("/like/:postId", authMiddleware, toglleLike);
postRouter.get("/user-posts/:userId", authMiddleware, getUserPost)

export default postRouter;
