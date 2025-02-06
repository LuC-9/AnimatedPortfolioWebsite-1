import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertMessageSchema } from "@shared/schema";
const TELEGRAM_TOKEN = "5558392279:AAHzj1ZwLFxusJrPddvQzChYKVpWxyFYTTQ";
const TELEGRAM_CHAT_ID = "728907666";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      
      const text = `New Contact Form Submission\n\nName: ${messageData.name}\nEmail: ${messageData.email}\nPhone: ${messageData.phone}\nMessage: ${messageData.message}`;
      
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "HTML",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }

      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });

  return createServer(app);
}
