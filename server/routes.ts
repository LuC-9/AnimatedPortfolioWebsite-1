import type { Express } from "express";
import { createServer, type Server } from "http";
import { registerContactRoutes } from "../api/contact";

const API_PREFIX = '/api';

export function registerRoutes(app: Express): Server {
  app.post(`${API_PREFIX}/contact`, async (req, res) => {
    //Existing contact route logic here.  This remains unchanged based on the provided information.
    //Example:
    //const { name, email, message } = req.body;
    // ... (rest of your contact handling logic) ...
  });
  registerContactRoutes(app);
  return createServer(app);
}