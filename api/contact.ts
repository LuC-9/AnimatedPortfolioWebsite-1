
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertMessageSchema } from "../shared/schema";

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   // Enable CORS
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
//   res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

//   if (req.method === 'OPTIONS') {
//     return res.status(200).json({});
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }
// }

export async function POST(req: VercelRequest, res: VercelResponse){
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

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ error: (error as Error).message });
  }
}
