import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log("Already connected to DB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "gamerecdb",
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    isConnected = true;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}