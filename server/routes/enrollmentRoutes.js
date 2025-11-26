import express from "express";
import { saveEnrollment } from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/save-only", saveEnrollment);

export default router;
