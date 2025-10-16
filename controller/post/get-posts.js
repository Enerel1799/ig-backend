import { postModel } from "../../schema/post-schema.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader.split(" ")[1];
  const user = jwt.verify(accessToken, process.env.JWT_SECRET);
  const posts = await postModel.find().populate("userId");

  res.status(200).json(posts);
};
