import { hash } from "bcrypt";
import { userModel } from "../../schema/user-schema.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const data = req.body;
  const email = data.email;
  const password = data.password;
  const JWT_SECRET = process.env.JWT_SECRET;
  const existingUser = await userModel.findOne({ email: email });
  const saltRound = 10;
  const hashedPassword = await hash(password, saltRound);
  if (existingUser) {
    res.status(400).json({ message: "email already exists" });
  } else {
    const createdUser = await userModel.create({
      email: email,
      username: data.username,
      password: hashedPassword,
    });

    const accessToken = jwt.sign({ data: createdUser }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json(accessToken);
  }
};
