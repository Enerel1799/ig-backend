import express from "express";
import { getUserPost } from "../../controller/post/get-user-post.js";
import { createPost } from "../../controller/post/create-post.js";
import { getPosts } from "../../controller/post/get-posts.js";
import { authMiddleware } from "../../middleware/auth-middleware.js";
import { toglleLike } from "../../controller/post/toggle-like.js";
const postRouter = express.Router();

postRouter.get("/:userId", authMiddleware, getUserPost);
postRouter.post("/create", authMiddleware, createPost);
postRouter.get("/", authMiddleware, getPosts);
postRouter.post("/like/:postId", authMiddleware, toglleLike);

export default postRouter;
