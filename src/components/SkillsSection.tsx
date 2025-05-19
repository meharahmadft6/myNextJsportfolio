// components/SkillsSection.tsx
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiCpu,
  FiZap,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

// Define types for the component
type SkillCategory = "web" | "mobile" | "ai" | "tech";

interface SkillData {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: string[];
  techs?: string[];
}

interface SkillsData {
  web: SkillData;
  mobile: SkillData;
  ai: SkillData;
  tech: SkillData;
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("web");
  const [hoveredSkill, setHoveredSkill] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }));
  }, [controls]);

  const skillsData: SkillsData = {
    web: {
      icon: <FiCode className="text-purple-400 text-3xl" />,
      title: "Web Development",
      color: "purple",
      skills: [
        "MERN Stack (MongoDB, Express.js, React, Node.js)",
        "Laravel Backend Development (TechHive)",
        "TailwindCSS, Bootstrap for responsive UIs",
        "AWS Integration: S3, SES, EC2",
        "Secure APIs using JWT and middleware",
      ],
      techs: [],
    },
    mobile: {
      icon: <FiSmartphone className="text-green-400 text-3xl" />,
      title: "Mobile Development",
      color: "green",
      skills: [
        "4+ months with Android Studio (Java)",
        "Firebase: Auth, Firestore, Realtime DB",
        "App backend built in Node.js + Express",
        "Geolocation, Weather APIs, Chatbots",
        "Built apps: VetVision, YumYard, MindZap",
      ],
      techs: [],
    },
    ai: {
      icon: <FiCpu className="text-pink-400 text-3xl" />,
      title: "AI / Machine Learning",
      color: "pink",
      skills: [
        "CNN for animal disease classification (90%+ accuracy)",
        "Hugging Face deployments using app.py",
        "NLP: Audio classification (voice gender)",
        "YOLO, R-CNN for object detection",
        "DCGAN for image generation",
        "Built chatbot models with NLP + APIs",
      ],
      techs: [],
    },
    tech: {
      icon: <FiZap className="text-yellow-300 text-3xl" />,
      title: "Technologies & Tools",
      color: "yellow",
      skills: [],
      techs: [
        "Node.js",
        "Express",
        "React",
        "MongoDB",
        "Laravel",
        "MySQL",
        "TailwindCSS",
        "Bootstrap",
        "Firebase",
        "JWT",
        "AWS S3",
        "DeepFace",
        "Transformers",
        "Hugging Face",
        "Python",
        "Android Studio",
        "REST APIs",
      ],
    },
  };

  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white opacity-20"
            animate={{
              x: [
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
              ],
              y: [
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
              ],
              scale: [0.5, Math.random() + 0.5, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>
    );
  };

  interface ProgressBarProps {
    skill: string;
    index: number;
    activeTab?: SkillCategory;
  }

  const ProgressBar = ({
    skill,
    index,
    activeTab = "web",
  }: ProgressBarProps) => {
    const progress = Math.random() * 30 + 70;

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="mb-3"
      >
        <div className="flex justify-between text-gray-300 mb-1">
          <span>{skill}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
            className={`h-full rounded-full bg-gradient-to-r ${
              activeTab === "web"
                ? "from-purple-600 to-purple-400"
                : activeTab === "mobile"
                ? "from-green-600 to-green-400"
                : activeTab === "ai"
                ? "from-pink-600 to-pink-400"
                : "from-yellow-600 to-yellow-300"
            }`}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-blue-700/20 blur-3xl -z-10" />

      <div className="relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-4 rounded-full"
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            My Skills & Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-400 mt-4 text-center max-w-2xl"
          >
            Passionate about creating innovative solutions with cutting-edge
            technologies
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-blue-500 mt-4 rounded-full"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(skillsData) as SkillCategory[]).map((key) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === key
                  ? skillsData[key].color === "purple"
                    ? "bg-purple-500/20 text-purple-300 border-purple-500/50"
                    : skillsData[key].color === "green"
                    ? "bg-green-500/20 text-green-300 border-green-500/50"
                    : skillsData[key].color === "pink"
                    ? "bg-pink-500/20 text-pink-300 border-pink-500/50"
                    : "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
                  : "bg-white/5 text-gray-300 border-transparent hover:bg-white/10"
              } border`}
            >
              {skillsData[key].title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              {skillsData[activeTab].icon}
              <h3 className="text-2xl font-bold text-white">
                {skillsData[activeTab].title}
              </h3>
            </div>

            {activeTab !== "tech" ? (
              <div className="space-y-4">
                {skillsData[activeTab].skills.map((skill, i) => (
                  <ProgressBar
                    key={i}
                    skill={skill}
                    index={i}
                    activeTab={activeTab}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3 text-gray-200 text-sm">
                {skillsData.tech.techs?.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredSkill(tech)}
                    onHoverEnd={() => setHoveredSkill("")}
                    className={`px-4 py-2 bg-white/10 rounded-full border transition-all duration-300 ${
                      hoveredSkill === tech
                        ? "border-yellow-400/50 shadow-lg shadow-yellow-500/20"
                        : "border-white/20"
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full h-1 ${
                activeTab === "web"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500"
                  : activeTab === "mobile"
                  ? "bg-gradient-to-r from-green-600 to-teal-500"
                  : activeTab === "ai"
                  ? "bg-gradient-to-r from-pink-600 to-red-500"
                  : "bg-gradient-to-r from-yellow-600 to-amber-500"
              }`}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiStar
                  className={`${
                    activeTab === "web"
                      ? "text-purple-400"
                      : activeTab === "mobile"
                      ? "text-green-400"
                      : activeTab === "ai"
                      ? "text-pink-400"
                      : "text-yellow-400"
                  }`}
                />
                Featured {activeTab === "tech" ? "Experience" : "Projects"}
              </h3>

              <div className="space-y-4 flex-1">
                {activeTab === "web" && (
                  <>
                    <ProjectCard
                      title="E-commerce Platform"
                      desc="Full-stack MERN application with JWT authentication, payment processing, and admin dashboard."
                      tech="React, Node.js, MongoDB, Express"
                      color="purple"
                    />
                    <ProjectCard
                      title="TechHive CMS"
                      desc="Custom content management system built with Laravel backend and React frontend."
                      tech="Laravel, MySQL, React, TailwindCSS"
                      color="purple"
                    />
                  </>
                )}

                {activeTab === "mobile" && (
                  <>
                    <ProjectCard
                      title="VetVision"
                      desc="Android app for pet disease diagnosis using camera and ML integration."
                      tech="Android Studio, Java, Firebase, TensorFlow"
                      color="green"
                    />
                    <ProjectCard
                      title="YumYard"
                      desc="Food delivery app with real-time order tracking and payment integration."
                      tech="React Native, Firebase, Maps API"
                      color="green"
                    />
                  </>
                )}

                {activeTab === "ai" && (
                  <>
                    <ProjectCard
                      title="Disease Detection CNN"
                      desc="Convolutional neural network for animal disease classification with 92% accuracy."
                      tech="TensorFlow, Python, CNN Architecture"
                      color="pink"
                    />
                    <ProjectCard
                      title="Voice Gender Classifier"
                      desc="NLP model to detect gender from voice samples using audio processing."
                      tech="PyTorch, NLP, Audio Processing"
                      color="pink"
                    />
                  </>
                )}

                {activeTab === "tech" && (
                  <>
                    <ProjectCard
                      title="Full Stack Development"
                      desc="3+ years building scalable web applications and APIs using modern tech stacks."
                      tech="MERN, Laravel, AWS"
                      color="yellow"
                    />
                    <ProjectCard
                      title="Machine Learning Research"
                      desc="Implemented various ML models for classification and computer vision tasks."
                      tech="TensorFlow, PyTorch, Computer Vision"
                      color="yellow"
                    />
                  </>
                )}
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                className="mt-6 flex items-center gap-2 text-sm font-medium self-end text-gray-300 hover:text-white"
              >
                View all {activeTab === "tech" ? "experience" : "projects"}
                <FiArrowRight />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 backdrop-blur-sm p-6 rounded-xl bg-white/5 border border-white/10 max-w-3xl mx-auto"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-medium text-gray-300">
              Experience Level
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Based on years and project complexity
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
              <span>Expert</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string;
  color: string;
}

function ProjectCard({ title, desc, tech, color }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`p-4 rounded-lg bg-white/5 border border-${color}-500/20 hover:border-${color}-500/40 transition-all duration-300`}
    >
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-300 mt-1">{desc}</p>
      <div className="mt-2 text-xs text-gray-400">
        <span className={`text-${color}-400`}>Tech:</span> {tech}
      </div>
    </motion.div>
  );
}
