import express from "express";
// import { requireAuth } from "../middlewares/require-auth";

// import { currentUser } from "../middlewares/current-user";
import { currentUser } from "@ticketsevfdbsrfdb/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  res.status(200).json({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
