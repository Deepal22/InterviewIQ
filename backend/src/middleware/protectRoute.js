import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId; // ✅ FIXED

      if (!clerkId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      let user = await User.findOne({ clerkId });

      if (!user) {
        const clerkUser = await clerkClient.users.getUser(clerkId);

        user = await User.create({
          clerkId,
          email: clerkUser.emailAddresses[0]?.emailAddress || "no-email",
          name:
            clerkUser.firstName ||
            clerkUser.username ||
            "Anonymous", // ✅ FIXED (no crash)
        });

        console.log("✅ User created:", user);
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("❌ Error in protectRoute:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];