import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";
import SocialLinks from "./social-links";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative" data-scroll-section>
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20"
        >
          <img 
            src="/profile.jpg" 
            alt="Aarsh Mishra" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          Aarsh Mishra
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Full Stack Developer & UI/UX Designer
        </motion.p>

        <SocialLinks />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center mb-12"
        >
          <Button asChild className="gap-2">
            <a href="/Aarsh_Mishra.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="outline" size="lg" className="animate-bounce">
            <ArrowDown className="mr-2" />
            Scroll to Explore
          </Button>
        </motion.div>
      </div>
    </section>
  );
}