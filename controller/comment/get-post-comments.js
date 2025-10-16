import { commentModel } from "../../schema/comment-schema.js";

export const getPostComments = async (req, res) => {
  const postId = req.params.postId;
  const comments = await commentModel.find({
    post: postId,
  });

  res.status(200).json(comments);
};
