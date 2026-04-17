import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

const app = express();


app.use(cors({ origin: true, credentials: true }));
// middleware
app.use(express.json());
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat/token", chatRoutes);
app.use("/api/sessions/active", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.get("/api/test", (req, res) => {
  res.send("TEST WORKING");
});

// make our app ready for deployment
app.get("/", (req, res) => {
  res.send("Backend is running");
})

const startServer = async () => {
  try {
    await connectDB();
    const PORT = ENV.PORT || 3000;
    app.listen(PORT, () => console.log("Server is running on port:", PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();