import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/db.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
const PORT = Number(process.env.PORT) || 5000;


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "A1 Enterprises Backend is running successfully",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message:
      err.type === "entity.too.large"
        ? "Request body is too large"
        : "Internal server error",
  });
});

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
