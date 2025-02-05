import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-accent/5" data-scroll-section>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground">
                  I am a passionate Full Stack Developer with expertise in modern web technologies.
                  My journey in tech began with a curiosity for creating impactful digital experiences,
                  and has evolved into a professional career building robust applications.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
                <p className="text-muted-foreground">
                  I specialize in building full-stack web applications using modern technologies
                  like React, Node.js, and TypeScript. I'm passionate about creating clean,
                  efficient, and user-friendly solutions that solve real-world problems.
                </p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
