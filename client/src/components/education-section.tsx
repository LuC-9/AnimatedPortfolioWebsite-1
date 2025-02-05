import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-20 bg-accent/5" data-scroll-section>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12 gap-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="bg-primary/10 p-4 rounded-full"
          >
            <GraduationCap className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Education
          </motion.h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-full bg-primary/10 text-primary"
                  >
                    <GraduationCap className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Bachelor of Technology
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Computer Science and Engineering
                    </p>
                    <p className="text-muted-foreground mt-1">
                      PSIT College of Engineering
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      July 2018 - July 2022
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}