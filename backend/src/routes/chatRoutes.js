import express from "express";
import { getStreamToken } from "../controllers/chatController.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/token", protectRoute, async (req, res) => {
  try {
    // dummy test first
    res.json({ token: "test-token" });
  } catch (error) {
    res.status(500).json({ message: "Error generating token" });
  }
});

export default router;