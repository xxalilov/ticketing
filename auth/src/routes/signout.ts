import express from "express";

// import { requireAuth } from "../middlewares/require-auth";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  req.session = null;

  res.status(200).json({});
});

export { router as signoutRouter };
