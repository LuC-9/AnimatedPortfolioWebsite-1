import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerContactRoutes } from "./api/contact";

export function registerRoutes(app: Express): Server {
  registerContactRoutes(app);
  return createServer(app);
}
