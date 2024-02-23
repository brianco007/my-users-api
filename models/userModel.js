import { Schema, model } from "mongoose";

const userModel = new Schema({
  email: {type: String, required: true},
  gymName: {type: String, required: true},
  password: {type: String, required: true}, 
},
{versionKey:false , timestamps: true}
);

export default model('GymUsers', userModel);
