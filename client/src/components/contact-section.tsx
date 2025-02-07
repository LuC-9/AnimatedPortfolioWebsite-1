import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { API_ROUTES } from "../../../routes/api"; // Import API routes


export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // const mutation = useMutation({
  //   mutationFn: async (data: InsertMessage) => {
  //     const response = await apiRequest("POST", API_ROUTES.CONTACT, data);
  //     return response.json();
  //   },
  //   onSuccess: () => {
  //     toast({
  //       title: "Message sent!",
  //       description: "Thank you for reaching out. I'll get back to you soon.",
  //     });
  //     form.reset();
  //     setIsSubmitting(false);
  //   },
  //   onError: () => {
  //     toast({
  //       title: "Error",
  //       description: "Failed to send message. Please try again.",
  //       variant: "destructive",
  //     });
  //     setIsSubmitting(false);
  //   },
  // });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace BOT_TOKEN and CHAT_ID with your actual Telegram bot token and chat ID
      const BOT_TOKEN = "5558392279:AAHzj1ZwLFxusJrPddvQzChYKVpWxyFYTTQ";
      const CHAT_ID = "728907666";

      const text = `
New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
      `;

      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
      });

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20" data-scroll-section>
      <div className="container mx-auto px-4 max-w-xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-1 block w-full px-3 py-2 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send size={16} />
            </>
          )}
        </button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
