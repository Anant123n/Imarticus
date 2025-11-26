import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes
import summarizeRoutes from "./routes/summarizeRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 👉 Connect Database
connectDB();

// 👉 Use Routes
app.use("/", summarizeRoutes);
app.use("/api/enrollments", enrollmentRoutes);

// 👉 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
