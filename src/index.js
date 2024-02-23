import express from "express";
import "dotenv/config";
import "./congif.js";
import cors from 'cors'
import mainRouter from "../routers/mainRouter.js";
import loginRouter from "../routers/loginRouter.js";

const app = express();
const PORT = process.env.PORT;


app.get("/", (req, res) => {
  res.send("Hi from the root.");
});

//Middlewares
app.use(cors())
app.use(express.json());
//Routes
app.use("/signup/", mainRouter);
app.use("/login/", loginRouter)


app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}`);
});
