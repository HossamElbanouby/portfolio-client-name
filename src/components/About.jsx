import React from "react";
import { motion } from "framer-motion";
import {
  HiCode,
  HiDatabase,
  HiServer,
  HiLightningBolt,
  HiCog,
  HiShieldCheck,
} from "react-icons/hi";

const About = () => {
  const highlights = [
    {
      icon: <HiServer className="text-2xl" />,
      title: "Backend Architecture",
      description:
        "Building scalable and maintainable server-side applications using .NET ecosystem.",
    },
    {
      icon: <HiCode className="text-2xl" />,
      title: "RESTful APIs",
      description:
        "Designing and implementing clean, well-documented APIs following best practices.",
    },
    {
      icon: <HiDatabase className="text-2xl" />,
      title: "Database Design",
      description:
        "Optimizing SQL Server databases with efficient queries and proper indexing.",
    },
    {
      icon: <HiShieldCheck className="text-2xl" />,
      title: "Clean Architecture",
      description:
        "Following SOLID principles and clean architecture patterns for robust code.",
    },
    {
      icon: <HiLightningBolt className="text-2xl" />,
      title: "Performance",
      description:
        "Optimizing application performance through caching, async patterns, and profiling.",
    },
    {
      icon: <HiCog className="text-2xl" />,
      title: "Problem Solving",
      description:
        "Analytical approach to breaking down complex problems into elegant solutions.",
    },
  ];

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Technologies" },
    { value: "100%", label: "Passion" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-accent mb-4">
            // ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A passionate backend developer dedicated to building high-quality
            software solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm{" "}
                <span className="text-white font-semibold">Eslam Ayman</span>, a
                dedicated Backend .NET Developer with a strong passion for
                building robust, scalable, and efficient server-side
                applications. I specialize in the{" "}
                <span className="text-accent font-semibold">
                  .NET ecosystem
                </span>{" "}
                and love turning complex business requirements into elegant
                technical solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans across designing and implementing{" "}
                <span className="text-white font-semibold">RESTful APIs</span>,
                working with{" "}
                <span className="text-white font-semibold">SQL Server</span>{" "}
                databases, and applying{" "}
                <span className="text-white font-semibold">
                  clean architecture
                </span>{" "}
                principles. I'm committed to writing maintainable code that
                follows industry best practices and SOLID principles.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I continuously invest in learning new technologies and
                methodologies to stay ahead in the ever-evolving tech landscape.
                My goal is to contribute to impactful projects and collaborate
                with talented teams to build software that makes a difference.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 glass rounded-xl"
                >
                  <div className="text-2xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-500 text-xs">
                  eslamayman.cs
                </span>
              </div>
              <div className="space-y-1 text-[13px] leading-relaxed">
                <p>
                  <span className="text-purple-400">public class</span>{" "}
                  <span className="text-accent">EslamAyman</span>
                </p>
                <p>{"{"}</p>
                <p className="pl-4">
                  <span className="text-purple-400">public string</span>{" "}
                  <span className="text-green-400">Name</span> {"=> "}
                  <span className="text-yellow-300">"Eslam Ayman"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">public string</span>{" "}
                  <span className="text-green-400">Role</span> {"=> "}
                  <span className="text-yellow-300">
                    "Backend .NET Developer"
                  </span>
                  ;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">public string</span>{" "}
                  <span className="text-green-400">Email</span> {"=> "}
                  <span className="text-yellow-300">
                    "eslamayman5700@gmail.com"
                  </span>
                  ;
                </p>
                <p></p>
                <p className="pl-4">
                  <span className="text-purple-400">public string[]</span>{" "}
                  <span className="text-green-400">Skills</span> {"=> new[]"}
                </p>
                <p className="pl-4">{"{"}</p>
                <p className="pl-8">
                  <span className="text-yellow-300">"C#"</span>,{" "}
                  <span className="text-yellow-300">"ASP.NET Core"</span>,
                </p>
                <p className="pl-8">
                  <span className="text-yellow-300">"SQL Server"</span>,{" "}
                  <span className="text-yellow-300">"REST APIs"</span>,
                </p>
                <p className="pl-8">
                  <span className="text-yellow-300">"Entity Framework"</span>,{" "}
                  <span className="text-yellow-300">"Git"</span>
                </p>
                <p className="pl-4">{"};"}</p>
                <p></p>
                <p className="pl-4">
                  <span className="text-purple-400">public bool</span>{" "}
                  <span className="text-green-400">IsAvailable</span> {"=> "}
                  <span className="text-blue-400">true</span>;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">public string</span>{" "}
                  <span className="text-green-400">Motto</span> {"=> "}
                </p>
                <p className="pl-8">
                  <span className="text-yellow-300">
                    "Clean code, solid architecture"
                  </span>
                  ;
                </p>
                <p>{"}"}</p>
              </div>
              <motion.div
                className="inline-block w-2 h-4 bg-accent ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 glass glass-hover rounded-2xl cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:text-accent transition-colors mb-4 group-hover:shadow-lg group-hover:shadow-primary/20">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
