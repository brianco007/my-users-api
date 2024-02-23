import bcrypt from 'bcryptjs'; // encrypter
import userModel from "../models/userModel.js";

const userController = {
  createNewUser: async (req, res) => {
    try {
      const { email, gymName, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      //Building a new object
      const newUser = new userModel({
        email,
        gymName, // if the name and the value are the same
        password: hashedPassword
      });
      const createdUser = await newUser.save();
      res.json({ status: "success", message: "User created successfully" });
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
