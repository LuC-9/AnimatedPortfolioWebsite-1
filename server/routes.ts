import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerApiRoutes } from "../routes/api";

export function registerRoutes(app: Express): Server {
  registerApiRoutes(app);
  return createServer(app);
}