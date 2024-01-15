import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDb } from "./config/config.js";

//Routes
import userRoute from "./Router/MainRoutes.js";
import UploadImage from "./Router/UploadImage.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
dotenv.config();
connectDb();

const port = process.env.PORT;
app.listen(port, () => {
  console.log("connected");
});

// Use the route
app.use("/", userRoute);
app.use("/upload", UploadImage);
