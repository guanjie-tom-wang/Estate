import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(30000, () => {
  console.log("Server is running on port 30000!!!!");
});
