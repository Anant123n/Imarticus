import express from "express";
import { summarizePdf } from "../controllers/summarizeController.js";

const router = express.Router();

router.post("/summarize", summarizePdf);

export default router;
