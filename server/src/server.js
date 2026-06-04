import app from "./app.js";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

config();
connectDB(); 

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
});

//handle unhandled promise rejections
process.on("unhandledRejection", async(err) => {
  console.log("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1); 
  });
});

// handle uncaught exceptions
process.on("uncaughtException", async(err) => {
  console.log("Uncaught Exception Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1); 
  });
});

// gracefull shutdown
process.on("SIGTERM", async() => {
  console.log("SIGTERM recevied, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(1); 
  });
});