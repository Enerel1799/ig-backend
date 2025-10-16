import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import userRouter from "./router/user/user.route.js";
import postRouter from "./router/post/post.route.js";
import dotenv from "dotenv";
import commentRouter from "./router/comment/comment.route.js";

dotenv.config();

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
const connectToMongoDB = async () => {
  await mongoose.connect(process.env.mongoDB);
};
connectToMongoDB();

app.use("/posts", postRouter);
app.use("/", userRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
