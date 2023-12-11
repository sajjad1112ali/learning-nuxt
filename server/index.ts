import mongoose from "mongoose";
const config = useRuntimeConfig();
export default async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    // await mongoose.connect('mongodb://127.0.0.1:27017/testingDD');
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
};