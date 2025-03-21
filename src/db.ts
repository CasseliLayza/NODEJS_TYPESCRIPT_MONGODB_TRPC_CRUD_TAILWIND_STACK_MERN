import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://localhost:27018/trpcdb");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error connecting to database", error);
    }
  }
};
