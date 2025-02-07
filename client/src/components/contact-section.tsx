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

  const onSubmit = async (e: React.FormEvent) => => {
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
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
