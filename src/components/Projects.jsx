import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { SiDotnet } from "react-icons/si"; // أيقونة .NET
import { HiDatabase, HiCode, HiServer } from "react-icons/hi";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce API",
      description:
        "A comprehensive RESTful API for an e-commerce platform with product management, user authentication, shopping cart, and order processing. Implements JWT authentication and role-based authorization.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "SQL Server",
        "Entity Framework",
        "JWT Auth",
      ],
      category: "api",
      github: "https://github.com/eslamay",
      icon: <HiServer className="text-3xl" />,
      gradient: "from-primary to-purple-600",
      featured: true,
    },
    {
      title: "Library Management System",
      description:
        "A full-featured library management system API supporting book cataloging, member management, borrowing workflows, and automated fine calculations with clean architecture.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "SQL Server",
        "Clean Architecture",
        "AutoMapper",
      ],
      category: "fullstack",
      github: "https://github.com/eslamay",
      icon: <HiDatabase className="text-3xl" />,
      gradient: "from-accent to-cyan-600",
      featured: true,
    },
    {
      title: "Task Management API",
      description:
        "A collaborative task management API with real-time notifications, project boards, task assignments, and progress tracking. Built with repository pattern and unit of work.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "SQL Server",
        "SignalR",
        "Repository Pattern",
      ],
      category: "api",
      github: "https://github.com/eslamay",
      icon: <HiCode className="text-3xl" />,
      gradient: "from-green-500 to-emerald-600",
      featured: false,
    },
    {
      title: "Blog Platform API",
      description:
        "A blogging platform backend with post management, commenting system, category/tag organization, and full-text search capabilities. Includes pagination and caching.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "Entity Framework",
        "Redis",
        "Swagger",
      ],
      category: "api",
      github: "https://github.com/eslamay",
      icon: <FiFolder className="text-3xl" />,
      gradient: "from-orange-500 to-red-600",
      featured: false,
    },
    {
      title: "Student Portal System",
      description:
        "A student management portal handling enrollment, grades, course scheduling, and academic reporting. Features role-based access for students, teachers, and administrators.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Identity", "LINQ"],
      category: "fullstack",
      github: "https://github.com/eslamay",
      icon: <SiDotnet className="text-3xl" />,
      gradient: "from-pink-500 to-rose-600",
      featured: false,
    },
    {
      title: "Inventory Tracker API",
      description:
        "A warehouse inventory management system API with stock tracking, supplier management, purchase orders, and low-stock alerts. Implements CQRS pattern.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "CQRS", "MediatR"],
      category: "api",
      github: "https://github.com/eslamay",
      icon: <HiDatabase className="text-3xl" />,
      gradient: "from-yellow-500 to-amber-600",
      featured: false,
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "api", label: "APIs" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-accent mb-4">
            // MY PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my backend projects demonstrating expertise in .NET
            development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === cat.key
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center text-white/80`}
                    >
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiGithub className="text-lg" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink className="text-lg" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.featured && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-xs font-mono text-accent flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        Featured Project
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/eslamay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-xl text-white font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
