import { compare } from "bcrypt";
import { userModel } from "../../schema/user-schema.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const data = req.body;
  const JWT_SECRET = process.env.JWT_SECRET;
  const { email, password } = data;
  const existingUser = await userModel.findOne({ email: email });

  if (existingUser) {
    const isValidPassword = await compare(password, existingUser.password);
    if (isValidPassword) {
      const accessToken = jwt.sign(
        {
          data: existingUser,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json(accessToken);
    } else {
      res.status(400).json({ message: "wrong password" });
    }
  } else {
    res.status(400).json({ message: "email doesnt exist, sign up first" });
  }
};
