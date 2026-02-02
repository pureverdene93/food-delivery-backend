import { userModel } from "../../model/user-model.js";

export const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).populate({
      path: "orderedFoods",
      populate: {
        path: "foodOrderItem.food",
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to get user" });
  }
};
