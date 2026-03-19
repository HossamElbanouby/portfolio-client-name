import React from "react";
import { motion } from "framer-motion";
import {
  SiDotnet,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { HiDatabase, HiCode, HiServer, HiCloud } from "react-icons/hi";
import { TbBrandCSharp, TbSql, TbBrandVisualStudio } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      icon: <HiCode className="text-xl" />,
      skills: [
        {
          name: "C#",
          icon: <TbBrandCSharp />,
          level: 90,
          color: "from-purple-500 to-purple-700",
        },
        {
          name: ".NET / ASP.NET Core",
          icon: <SiDotnet />,
          level: 88,
          color: "from-primary to-purple-600",
        },
        {
          name: "Entity Framework",
          icon: <HiDatabase />,
          level: 85,
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "REST APIs",
          icon: <HiCloud />,
          level: 90,
          color: "from-accent to-cyan-600",
        },
      ],
    },
    {
      title: "Database & Tools",
      icon: <HiDatabase className="text-xl" />,
      skills: [
        {
          name: "SQL Server",
          icon: <TbSql />,
          level: 85,
          color: "from-red-500 to-red-700",
        },
        {
          name: "Git",
          icon: <SiGit />,
          level: 82,
          color: "from-orange-500 to-orange-700",
        },
        {
          name: "GitHub",
          icon: <SiGithub />,
          level: 85,
          color: "from-gray-500 to-gray-700",
        },
        {
          name: "Visual Studio",
          icon: <TbBrandVisualStudio />,
          level: 88,
          color: "from-violet-500 to-violet-700",
        },
      ],
    },
  ];

  const additionalSkills = [
    { name: "LINQ", icon: <HiCode /> },
    { name: "Swagger", icon: <SiSwagger /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "SOLID Principles", icon: <HiServer /> },
    { name: "Design Patterns", icon: <HiCode /> },
    { name: "Unit Testing", icon: <HiCode /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Clean Architecture", icon: <HiServer /> },
    { name: "Dependency Injection", icon: <HiCode /> },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-accent mb-4">
            {"// MY SKILLS"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The technologies and tools I work with to build powerful backend
            solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-accent">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-gray-400">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-mono font-bold text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: catIndex * 0.2 + index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-center text-white mb-8">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 glass glass-hover rounded-xl cursor-default"
              >
                <span className="text-primary">{skill.icon}</span>
                <span className="text-sm font-medium text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
