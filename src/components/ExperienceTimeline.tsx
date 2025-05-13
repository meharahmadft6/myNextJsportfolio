// components/ExperienceTimeline.tsx
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  FiArrowRight,
  FiDatabase,
  FiCode,
  FiServer,
  FiMail,
  FiImage,
} from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "FULL STACK DEVELOPER",
    company: "SOFTUNE SOLUTIONS",
    period: "Jun 2024 – Present",
    location: "Lahore, Pakistan",
    description: [
      "Crafting and implementing robust APIs with Node.js and Express.js",
      "Developing engaging UIs with React.js",
      "Managing and optimizing MongoDB databases",
      "Collaborating with team members and performing unit tests",
    ],
    technologies: [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "AWS",
      "TailwindCSS",
    ],
    icon: <FiCode className="text-2xl" />,
  },
  {
    id: 2,
    role: "BACKEND DEVELOPER",
    company: "SOFTUNE SOLUTIONS",
    period: "May 2023 – Oct 2024",
    location: "Lahore, Pakistan",
    description: [
      "Built complete backend architecture with models, routes, and controllers",
      "Implemented JWT authentication and custom middleware",
      "Developed email handling system using AWS SES",
      "Managed file storage with AWS S3 for images and videos",
      "Optimized database queries and API response times",
      "Mentored junior developers in backend best practices",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "AWS SES", "AWS S3", "JWT"],
    icon: <FiServer className="text-2xl" />,
  },
  {
    id: 3,
    role: "BACKEND INTERN",
    company: "SOFTUNE SOLUTIONS",
    period: "Feb 2023 – May 2023",
    location: "Lahore, Pakistan",
    description: [
      "Learned backend fundamentals and best practices",
      "Assisted in API development and testing",
      "Participated in code reviews and team meetings",
      "Built small modules for production applications",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Postman"],
    icon: <FiDatabase className="text-2xl" />,
  },
];

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden"
      id="experience"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
      >
        Professional Journey
      </motion.h2>

      <div className="relative">
        {/* Animated timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 origin-top"
        />

        {/* Glowing orb at top of timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="absolute left-1/2 top-0 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-400/50"
        />

        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
  isInView,
}: {
  exp: any;
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`mb-16 flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline dot */}
      <motion.div
        animate={
          isCardInView
            ? {
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(99, 102, 241, 0)",
                  "0 0 0 10px rgba(99, 102, 241, 0.3)",
                  "0 0 0 0 rgba(99, 102, 241, 0)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.5, delay: 0.5 }}
        className={`absolute left-1/2 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-1/2 z-10 ${
          index === 0 ? "top-0" : ""
        }`}
        style={{ top: `${index * 33 + 5}%` }}
      />

      <motion.div
        whileHover={{ y: -5 }}
        className={`relative w-full md:w-5/6 lg:w-2/3 p-6 rounded-xl backdrop-blur-lg border border-white/10 
          ${index % 2 === 0 ? "ml-4 md:ml-8" : "mr-4 md:mr-8"} 
          bg-gradient-to-b from-gray-900/80 to-gray-800/80 shadow-lg
          hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300`}
      >
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-400 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-purple-400 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-purple-400 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-400 rounded-br-lg" />

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isCardInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
        >
          {exp.icon}
        </motion.div>

        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
            <div className="flex items-center space-x-2">
              <h4 className="text-xl text-blue-400">{exp.company}</h4>
              <span className="text-gray-400">•</span>
              <p className="text-gray-300">{exp.location}</p>
            </div>
            <p className="text-sm text-purple-300 mt-1">{exp.period}</p>
          </div>

          <ul className="space-y-2">
            {exp.description.map((item: string, i: number) => (
              <motion.li
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={isCardInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start"
              >
                <FiArrowRight className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isCardInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {exp.technologies.map((tech: string, i: number) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
