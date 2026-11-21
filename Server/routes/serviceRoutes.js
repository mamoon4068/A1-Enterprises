
import express from "express";

const router = express.Router();

// GET ALL SERVICES
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Services API working successfully",
    services: [],
  });
});

// GET SINGLE SERVICE
router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    serviceId: req.params.id,
  });
});

export default router;
