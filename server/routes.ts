import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { registerApiRoutes } from "../routes/api";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function registerRoutes(app: Express): Server {
  // API routes
  console.log("Registering routes in server/routes.ts"); // Added line for debugging
  registerApiRoutes(app);

  // Serve static files
  app.use(express.static(path.resolve(__dirname, "../dist")));

  // Handle client-side routing
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
  });

  // Add POST route for /api/contact
  app.post("/api/contact", (req, res) => {
    // Handle the contact form data here
    res.send("Contact form submitted");
  });
  return createServer(app);
}
