import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";
import { SiDotnet } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/eslamay", label: "GitHub" },
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
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <SiDotnet className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-white">Islam Ayman</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Backend .NET Developer – built robust and scalable projects with
              clean architecture.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:pl-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              {[
                ".NET / ASP.NET Core",
                "C#",
                "SQL Server",
                "Entity Framework",
                "REST APIs",
              ].map((tech) => (
                <li key={tech}>
                  <span className="text-gray-400 text-sm">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:eslamayman5700@gmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors break-all"
                >
                  eslamayman5700@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/eslamayman2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Islam Ayman. Built with{" "}
            <FiHeart className="text-red-500 inline" /> using React & Tailwind.
            <span className="ml-2 text-xs text-gray-400">
              Developed by Hossam Elbanouby
            </span>
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-gray-400 hover:text-white transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            title="Back to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
