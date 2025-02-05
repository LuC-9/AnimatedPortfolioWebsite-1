import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Briefcase, Laptop } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Example Tech",
    period: "2022 - Present",
    description: "Led development of scalable web applications using React, Node.js, and TypeScript.",
    icon: Laptop,
  },
  {
    title: "Software Engineer",
    company: "Tech Solutions",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    icon: Code2,
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc",
    period: "2019 - 2020",
    description: "Worked on front-end development using React and contributed to UI/UX improvements.",
    icon: Briefcase,
  },
];

export default function WorkExperience() {
  return (
    <section className="py-20" data-scroll-section>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="grid gap-8 max-w-3xl mx-auto">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={experience.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-full bg-primary/10 text-primary"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {experience.company} • {experience.period}
                        </p>
                        <p className="mt-2 text-muted-foreground">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
