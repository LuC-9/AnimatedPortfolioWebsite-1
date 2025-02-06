
import type { Express } from "express";
import { createServer, type Server } from "http";
import { default as contactHandler } from "../api/contact";

const API_PREFIX = '/api';

export function registerRoutes(app: Express): Server {
  app.post(`${API_PREFIX}/contact`, contactHandler);
  return createServer(app);
}
