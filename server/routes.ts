
import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerApiRoutes } from "../routes/api";
import path from "path";

export function registerRoutes(app: Express): Server {
  // API routes
  registerApiRoutes(app);
  
  // Serve static files
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // Handle client-side routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  return createServer(app);
}
