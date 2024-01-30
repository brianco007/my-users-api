import express from "express";
import "dotenv/config";
import "./congif.js";
import mainRouter from "../routers/mainRouter.js";

const app = express();
const PORT = process.env.PORT;


app.get("/", (req, res) => {
  res.send("Hi from the root.");
});

app.use(express.json());
app.use("/users/", mainRouter);

app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}`);
});
