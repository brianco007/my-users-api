import bcrypt from 'bcryptjs'; // encrypter
import userModel from '../models/userModel.js';
import { tokenGenerator } from '../helpers/functions.js';
import { tokenValidator } from '../helpers/functions.js';

const loginController = {
  userLogin: async(req, res)=>{
    try {
      const { email,  password } = req.body;
      const userFound = await userModel.findOne({email})//finds the user in Mongo DB
      
      if(email){ // if there is an email in the DB
        const isTheSame = await bcrypt.compare(password, userFound.password);
        if (isTheSame) {
          const token = await tokenGenerator({
            id: userFound._id, // this is the payload
            gymName: userFound.gymName
          })
          res.json({status: 'success', token: token.token})
        } else {
          res.json({status: 'fail', message: 'Usuario o contraseña incorrectos.'});  
        }
      } else {
        res.json({status: 'fail', message: 'Usuario o contraseña incorrectos.'});
      }
      
    } catch (err) {
      res.json({status: 'fail', message: 'Usuario o contraseña incorrectos.', error: err})
    }
  },

  validateToken: async (req, res) => {
    try {
      const token = req.params.token;
      const decoded = await tokenValidator(token);
      if (decoded.id) {
        res.json({message: "Token is valid", tokenData: decoded});      
      } 
    } catch (error) {
      res.json({status: 'fail', message: 'Ocurrió un error', error,})
    }
  },

  getOwner: async(req, res) => {
    try {
      const owner = await userModel.findById(req.params.id);
      res.json(owner);
    } catch (error) {
      res.json({message: 'error'})
    }
  }
}

export default loginController;