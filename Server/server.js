import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/db.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
const PORT = Number(process.env.PORT) || 5000;


const startServer = async () => {
  try {
    // Connect MongoDB before opening HTTP server
    await connectDB();

    app.listen(PORT, () => {
      console.log("==============================");
      console.log("Genius Enterprises Backend");
      console.log(`Server: http://localhost:${PORT}`);
      console.log(`Health: http://localhost:${PORT}/api/health`);
      console.log("==============================");
    });
  } catch (error) {
    console.error("Backend startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
