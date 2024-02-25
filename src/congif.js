import mongoose from "mongoose";

const url = process.env.MONGO_URI

mongoose.connect(url)
 .then((data)=>console.log('Connection with MongoDB is OK'))
 .catch((error)=> console.log('Connection with MongoDB failed.'))