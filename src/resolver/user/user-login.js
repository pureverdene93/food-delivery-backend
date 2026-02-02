import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(404).json("EMAIL IS MISSING");
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) return res.status(404).json("USER NOT FOUND");
    const result = await bcrypt.compare(email.password, user.password);
    if (result === false) return res.status(500).json("AUTH FAILED");
    if (result === true) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        `key-test`,
      );
      return res.send({
        messege: `User ${user.email} logged in.`,
        token: token,
      });
    }
  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json("INTERNAL SERVER ERROR");
  }
};
