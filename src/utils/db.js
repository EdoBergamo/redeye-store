import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    
    console.log("[MONGO_DB] Connected Successfully!")
  } catch (error) {
    console.error("[MONGO_DB] Connection Failed!")
  }
}

export default connect