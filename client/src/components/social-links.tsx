import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/LuC-9/",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aarsh-mishra09/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:aarshmail@gmail.com",
    label: "Email",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/LuC9/",
    label: "LeetCode",
  },
  {
    icon: Code2,
    href: "https://replit.com/@AarshMishra",
    label: "Replit",
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="flex gap-4 justify-center mb-8"
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
