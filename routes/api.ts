
import { z } from "zod";
import { insertMessageSchema } from "@shared/schema";
import type { Express } from "express";

const API_PREFIX = '/api';

export const API_ROUTES = {
  CONTACT: `${API_PREFIX}/contact`,
} as const;

export function registerApiRoutes(app: Express) {
  app.post(API_ROUTES.CONTACT, async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const text = `New Contact Form Submission\n\nName: ${messageData.name}\nEmail: ${messageData.email}\nPhone: ${messageData.phone}\nMessage: ${messageData.message}`;

      const response = await fetch(
        "https://api.telegram.org/bot5558392279:AAHzj1ZwLFxusJrPddvQzChYKVpWxyFYTTQ/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "728907666",
            text: text,
            parse_mode: "HTML",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }

      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });
}
