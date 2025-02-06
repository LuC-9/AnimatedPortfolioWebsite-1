
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Securities Exchange Platform",
    description: "As a WebMethods Developer, I focused on enhancing integration and data exchange capabilities. Implemented robust solutions for secure financial transactions and real-time data processing.",
    link: "https://adx.ae",
  },
  {
    title: "Phonebook",
    description: "Created a phonebook with Django REST framework, featuring user registration, login, contact management (add, list, search), spam marking, email notifications, and PDF downloads.",
    link: "https://github.com/LuC-9/truecaller-clone",
  },
  {
    title: "Arduino CLI Docker",
    description: "A CLI tool to compile Arduino codes on the cloud without need of an Arduino board. Enables remote development and testing of Arduino projects with cloud-based compilation.",
    link: "https://github.com/LuC-9/Arduino-cli-docker",
  },
  {
    title: "City Management System",
    description: "A complaint management and resolution dashboard for a smart city utilising REST, Spring, JWT, MySQL and Angular. Developed during internship under Infosys.",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-accent/5" data-scroll-section>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full hover:shadow-xl hover:scale-105 hover:bg-primary/5 transition-all duration-300 transform-gpu min-h-[250px] justify-between">
                <CardHeader>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <Button variant="outline" asChild className="w-fit">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
