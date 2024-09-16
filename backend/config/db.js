import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://albinsony:323770@cluster0.bybla.mongodb.net/food-del", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to DB:", error);
    process.exit(1); // Exit process if connection fails
  }
};
