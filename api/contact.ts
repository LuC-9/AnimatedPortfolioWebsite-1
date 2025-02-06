import { VercelRequest, VercelResponse } from "@vercel/node";
import { insertMessageSchema } from "@shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      // Validate request data with Zod schema (insertMessageSchema)
      const messageData = insertMessageSchema.parse(req.body);

      const text = `New Contact Form Submission\n\nName: ${messageData.name}\nEmail: ${messageData.email}\nPhone: ${messageData.phone}\nMessage: ${messageData.message}`;

      // Send message to Telegram
      const response = await fetch(
        "https://api.telegram.org/bot5558392279:AAHzj1ZwLFxusJrPddvQzChYKVpWxyFYTTQ/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "728907666", // Replace with your chat ID
            text: text,
            parse_mode: "HTML",
          }),
        },
      );

      // Check if the Telegram API responded successfully
      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }

      // Return success response
      res.status(200).json({ success: true });
    } catch (error) {
      // Handle errors and return a 400 status code
      res.status(400).json({ error: (error as Error).message });
    }
  } else {
    // Handle unsupported request methods (e.g., GET)
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
