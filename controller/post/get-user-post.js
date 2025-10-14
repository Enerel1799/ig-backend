import { postModel } from "../../schema/post-schema.js";

export const getUserPost = async (req, res) => {
  const params = req.params;
  const { userId } = params;

  const posts = await postModel
    .find({
      userId,
    })
    .populate("users");

  res.status(200).json(posts);
};
