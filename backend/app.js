import express from "express";
import dotenv from "dotenv";
import patientRoutes from "./routes/patientRoutes.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import { connectDataBase } from "./config/dbConnect.js";
import errorMiddleware from "./middleware/error.js";

import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: "backend/config/config.env" });

// handle uncaughtException
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to uncaught exception");
  console.log(err);
  process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/config/config.env" });
}

const app = express();

// Connect to DB
connectDataBase();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "*", 
}));

// Add CORS headers globally (custom)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes
app.use("/api/v1", patientRoutes);
app.use("/api/v1", authRoutes);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
}

// error middleware
app.use(errorMiddleware);

// Start server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT} and in ${process.env.NODE_ENV}`
  );
});

//handling unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
