import mongoose from "mongoose";

const url = process.env.URL

mongoose.connect(url)
 .then((data)=>console.log('Connection with MongoDB is OK'))
 .catch((error)=> console.log('Connection with MongoDB failed.'))