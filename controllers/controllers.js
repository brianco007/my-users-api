import userModel from "../models/userModel.js";

const userController = {
  createNewUser: async (req, res) => {
    try {
      const newUser = new userModel(req.body);
      const createdUser = await newUser.save();
      res.json({ message: "User created successfully" });
    } catch (error) {
      res.json({ message: "Error. Check all the required fields" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const allUsers = await userModel.find();
      res.json(allUsers);
    } catch (error) {
      res.json({
        message:
          "Error. Make sure your server is running and that the APIs url is typed correctly",
      });
    }
  },

  getOneUser: async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.json({ message: "Error. Make sure the user ID is correct" });
    }
  },

  updateUserInfo: async (req, res) => {
    try {
      const newInfo = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json({ message: "User's info has been updated." });
    } catch (error) {
      res.json({
        message:
          "Error. Make sure the user ID is correct and you include all the required fields.",
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userToBeDeleted = await userModel.findByIdAndDelete(req.params.id);
      res.json({ message: "User has been removed." });
    } catch (error) {
      res.json({ message: "Error. Make sure the user ID is correct" });
    }
  },
};

export default userController;
