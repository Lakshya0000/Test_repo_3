import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/dhurandhar";

export async function connectDB(): Promise<void> {
  await mongoose.connect(MONGO_URI);
  console.log(`MongoDB connected: ${MONGO_URI}`);
}
