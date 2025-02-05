import { motion } from "framer-motion";
import { Code2, Database, Server, Braces } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Braces,
    skills: ["Java", "JavaScript", "Python", "Bash"]
  },
  {
    title: "Frameworks",
    icon: Code2,
    skills: ["Spring Boot", "Node", "Express", "React", "Angular"]
  },
  {
    title: "Servers & Platforms",
    icon: Server,
    skills: ["SoftwareAG", "Docker", "AWS", "GIT", "Apigee", "WSO2"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"]
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20" data-scroll-section>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12 gap-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="bg-primary/10 p-4 rounded-full"
          >
            <Code2 className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Skills & Technologies
          </motion.h2>
        </div>
        <div className="grid gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-center">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold text-lg">{skill[0]}</span>
                    </div>
                    <h4 className="text-lg font-medium text-center">{skill}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}