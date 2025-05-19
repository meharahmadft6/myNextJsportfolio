// components/ProjectsShowcase.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define TypeScript types for better code organization
interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  color: string;
  profileImage: string; // ✅ New field
}

// Enhanced project data with color themes
const projects: Project[] = [
  {
    id: 1,
    title: "AdVendoo",
    description: "A digital advertising platform for vehicles and restaurants.",
    features: ["Campaign Management", "Company & User Profiles", "Admin Panel"],
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    color: "from-blue-500 to-cyan-400",
    profileImage:
      "https://staging-app.advendoo.com/static/media/Log%20in%20Image.fd86386b53ef3f6a77b9.png",
  },
  {
    id: 2,
    title: "VetVision",
    description: "Animal health detection app using CNN + Android Studio",
    features: ["Firebase Auth", "Live Location", "Disease Classification API"],
    tags: ["Android", "Firebase", "HuggingFace", "CNN"],
    color: "from-emerald-500 to-green-400",
    profileImage:
      "https://res.cloudinary.com/daghgdhtk/image/upload/v1747135936/ic_launcher_qmsnbk.png",
  },
  {
    id: 3,
    title: "YumYard",
    description: "A complete food delivery system (like FoodPanda)",
    features: ["Live Orders", "Restaurant Panel", "Payment Integration"],
    tags: ["Android", "Node.js", "Firebase", "Java"],
    color: "from-orange-500 to-amber-400",
    profileImage:
      "https://res.cloudinary.com/daghgdhtk/image/upload/v1747135937/ic_launcher_round_rlhan7.png",
  },
  {
    id: 4,
    title: "MindZap",
    description: "Quiz app with leaderboard and real-time score sync",
    features: ["Realtime DB", "Timer", "Multiplayer Ready"],
    tags: ["Firebase", "Java", "Mobile"],
    color: "from-purple-500 to-violet-400",
    profileImage:
      "https://res.cloudinary.com/daghgdhtk/image/upload/v1747135783/quiz_eutr6z.png",
  },
  {
    id: 5,
    title: "Animal Disease Detector",
    description: "Trained CNN model to detect Mastitis & Lumpy Skin Disease",
    features: [
      "90%+ Accuracy",
      "App.py hosted on Hugging Face",
      "API in Mobile",
    ],
    tags: ["Python", "CNN", "HuggingFace", "Mobile Integration"],
    color: "from-red-500 to-rose-400",
    profileImage:
      "https://res.cloudinary.com/daghgdhtk/image/upload/v1747136087/Screenshot_2025-05-13_163433_od7vac.png",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description: "Fullstack SaaS clone with Auth, Stripe, and Admin panel",
    features: ["JWT Auth", "Stripe Billing", "Dynamic Content"],
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    color: "from-pink-500 to-rose-400",
    profileImage:
      "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_1028x578.v1582751026.png",
  },
];

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref] = useInView({ threshold: 0.1, triggerOnce: true });
  // Extract unique tags for filter
  const allTags = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.tags))),
  ];

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Project Showcase
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Explore my portfolio of web, mobile, and AI projects built with modern
          technologies
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg ${
              activeFilter === tag
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state message */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-gray-400 text-lg">
            No projects match the selected filter.
          </p>
        </motion.div>
      )}

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  setSelectedProject,
}: {
  project: Project;
  setSelectedProject: (project: Project) => void;
}) {
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedProject(project)}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl cursor-pointer border border-gray-700 group"
    >
      {/* Card header with gradient based on project color */}
      <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>

      <div className="p-6">
        <motion.h3
          className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:text-white transition-colors duration-300`}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-200">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <span className="text-xs bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center mt-0.5">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-gray-300 hover:text-white flex items-center gap-1"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`h-3 bg-gradient-to-r ${project.color} rounded-t-2xl`}
        ></div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2
              className={`text-3xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
            >
              {project.title}
            </h2>
            <button
              type="button"
              title="send"
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <p className="text-gray-300 text-lg mb-6">{project.description}</p>

          {/* Mock project image - replace with real images */}
          <div className="rounded-xl overflow-hidden bg-gray-800 h-64 mb-8 relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}
            ></div>
            <div className="flex items-center justify-center h-full">
              <img
                src={project.profileImage}
                alt={`${project.title} preview`}
                className="hover:scale-105 transition-transform duration-500 object-fit max-w-full max-h-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span
                      className={`text-white bg-gradient-to-r ${project.color} rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0`}
                    >
                      ✓
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`px-4 py-2 bg-gray-800 rounded-full text-white border border-gray-700`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-700">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
            >
              View Code
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
