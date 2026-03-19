import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { SiDotnet } from "react-icons/si";
import { HiCode, HiDatabase, HiServer } from "react-icons/hi";

const Hero = () => {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const floatingIcons = [
    {
      icon: <SiDotnet />,
      x: "10%",
      y: "20%",
      delay: 0,
      size: "text-3xl",
      color: "text-primary/30",
    },
    {
      icon: <HiCode />,
      x: "85%",
      y: "15%",
      delay: 0.5,
      size: "text-2xl",
      color: "text-accent/30",
    },
    {
      icon: <HiDatabase />,
      x: "75%",
      y: "70%",
      delay: 1,
      size: "text-2xl",
      color: "text-primary/20",
    },
    {
      icon: <HiServer />,
      x: "15%",
      y: "75%",
      delay: 1.5,
      size: "text-3xl",
      color: "text-accent/20",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.size} ${item.color} hidden lg:block`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300 font-medium">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-4"
            >
              Hi, I'm <span className="text-gradient">Eslam</span>
              <br />
              <span className="text-gradient">Ayman</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-accent"></div>
              <h2 className="text-xl sm:text-2xl font-mono font-semibold text-accent">
                Backend .NET Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              I craft robust, scalable backend systems with{" "}
              <span className="text-white font-semibold">.NET</span> and{" "}
              <span className="text-white font-semibold">C#</span>. Passionate
              about building clean APIs, optimizing databases, and delivering
              high-performance solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={() => handleScroll("#projects")}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => handleScroll("#contact")}
                className="px-8 py-4 glass glass-hover text-white font-semibold rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                {
                  icon: <FiGithub />,
                  href: "https://github.com/eslamay",
                  label: "GitHub",
                },
                {
                  icon: <FiLinkedin />,
                  href: "https://linkedin.com/in/eslamayman2004",
                  label: "LinkedIn",
                },
                {
                  icon: <FiMail />,
                  href: "mailto:eslamayman5700@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass glass-hover flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden relative"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-accent rounded-full p-1">
                  <div className="w-full h-full rounded-full bg-dark flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <SiDotnet className="text-7xl sm:text-8xl text-primary" />
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">EA</p>
                        <p className="text-xs font-mono text-accent tracking-widest">
                          &lt;BACKEND/&gt;
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm font-mono font-bold text-accent">
                  C#
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-sm font-mono font-bold text-primary">
                  .NET
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 px-4 py-2 glass rounded-xl hidden lg:block"
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <span className="text-sm font-mono font-bold text-green-400">
                  API
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => handleScroll("#about")}
          >
            <span className="text-xs font-mono text-gray-500 tracking-widest">
              SCROLL
            </span>
            <FiArrowDown className="text-gray-500 text-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
