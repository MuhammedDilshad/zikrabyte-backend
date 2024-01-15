import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MONGODB connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
