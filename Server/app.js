import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";

import enquiryRoutes from "./routes/enquiryRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

const app = express();

app.disable("x-powered-by");
app.use(helmet());

const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((url) => url.trim().replace(/\/$/, ""));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "15kb" }));

app.get("/api/health", (req, res) => {
  const connected = mongoose.connection.readyState === 1;

  return res.status(connected ? 200 : 503).json({
    success: connected,
    message: connected
      ? "Genius backend is running"
      : "Database unavailable",
  });
});

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/services", serviceRoutes);

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

export default app;
