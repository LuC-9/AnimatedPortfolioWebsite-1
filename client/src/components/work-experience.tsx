import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const experiences = [
  {
    title: "Engineer",
    company: "Nagarro",
    period: "Current",
    description: [
      "Developed and optimized 250+ APIs for seamless system integration",
      "Delivered scalable backend solutions to enhance performance and reliability",
      "Collaborated with teams to ensure efficient data flow across platforms"
    ],
  },
  {
    title: "Associate Engineer",
    company: "Nagarro",
    period: "Previous",
    description: [
      "Developed expertise in Java and Spring Boot for backend development",
      "Managed codebases using Git and version control systems",
      "Worked with backend technologies, including Node.js, to build and integrate applications"
    ],
  },
  {
    title: "Systems Engineer Intern",
    company: "Infosys",
    period: "2022",
    description: [
      "Developed a system for managing complaints across city departments with role-based access",
      "Implemented solution for Police, Healthcare, Education, and Transport departments",
      "Tech stack: Java, Spring Boot, Maven, Angular 10, REST APIs, MySQL, Git"
    ],
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
          {experiences.map((experience, index) => (
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
                      <Building2 className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {experience.company} • {experience.period}
                      </p>
                      <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                        {experience.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}