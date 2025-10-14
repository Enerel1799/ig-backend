import { postModel } from "../../schema/post-schema.js";

export const createPost = async (req, res) => {
  const data = req.body;

  const { userId, caption, images } = data;

  const createdPost = await postModel.create({
    caption,
    images,
    userId: userId,
  });
  res.status(200).json(createdPost);
};
