// components/ContactSection.tsx
"use client"; // Important for Next.js client components with animations
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  Linkedin,
  Send,
  ArrowRight,
  Copy,
  CheckCircle,
} from "lucide-react";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"info" | "message">("info");
  const [copied, setCopied] = useState<string | null>(null);
  const [hoverCard, setHoverCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={22} />,
      text: "meharahmad.ft6@gmail.com",
      key: "email",
    },
    {
      icon: <Phone className="text-blue-400" size={22} />,
      text: "+92 309 6614458",
      key: "phone",
    },
    {
      icon: <MapPin className="text-blue-400" size={22} />,
      text: "54 E Murtaza Street, Ittehad Colony, Lahore",
      key: "address",
    },
  ];

  // Social links data
  const socialLinks = [
    {
      icon: <Github className="text-purple-500" size={22} />,
      text: "github.com/meharahmadft6",
      url: "https://github.com/meharahmadft6",
      key: "github",
      color: "hover:bg-purple-500",
    },
    {
      icon: <Instagram className="text-pink-400" size={22} />,
      text: "@ahmad.ft6",
      url: "https://www.instagram.com/_ahmad.ft6?igsh=M3RoYTJ1bmNtYmk0",
      key: "instagram",
      color: "hover:bg-pink-500",
    },
    {
      icon: <Linkedin className="text-blue-600" size={22} />,
      text: "Muhammad Ahmad Sadaqat",
      url: "https://www.linkedin.com/in/muhammad-ahmad-sadaqat-5a893730b/",
      key: "linkedin",
      color: "hover:bg-blue-600",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/20"
      >
        {/* Tab selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-black/30 backdrop-blur-md p-1 rounded-full flex shadow-lg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab("info")}
              className={`${
                activeTab === "info"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                  : "bg-transparent text-gray-300 hover:text-white"
              } rounded-full px-6 py-2 transition-all duration-200 font-medium`}
            >
              Contact Info
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab("message")}
              className={`${
                activeTab === "message"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                  : "bg-transparent text-gray-300 hover:text-white"
              } rounded-full px-6 py-2 transition-all duration-200 font-medium`}
            >
              Send Message
            </motion.button>
          </div>
        </div>

        {/* Contact Info Tab */}
        {activeTab === "info" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold text-white flex items-center"
              >
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Contact Info
                </span>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full ml-4"></div>
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 leading-relaxed"
              >
                Feel free to reach out anytime via email or phone. I'm always
                open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </motion.p>

              <motion.ul
                variants={containerVariants}
                className="space-y-5 text-lg text-gray-200"
              >
                {contactInfo.map((item) => (
                  <motion.li
                    key={item.key}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/20 group-hover:bg-blue-500/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="flex-1">{item.text}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(item.text, item.key)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copied === item.key ? (
                        <CheckCircle size={18} className="text-green-400" />
                      ) : (
                        <Copy
                          size={18}
                          className="text-gray-400 hover:text-white"
                        />
                      )}
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold text-white flex items-center"
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Connect
                </span>
                <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full ml-4"></div>
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 leading-relaxed"
              >
                Let's connect and build something amazing together. Follow me on
                social platforms for updates on my latest projects and tech
                insights.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 gap-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.key}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    onHoverStart={() => setHoverCard(social.key)}
                    onHoverEnd={() => setHoverCard(null)}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${social.color} hover:border-transparent group`}
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                      {social.icon}
                    </div>
                    <span className="flex-1">{social.text}</span>
                    <motion.div
                      animate={{ x: hoverCard === social.key ? 5 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <ArrowRight
                        size={18}
                        className="text-gray-400 group-hover:text-white"
                      />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Message Tab */}
        {activeTab === "message" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl mx-auto"
          >
            <motion.form variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-300"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Muhammad Ahmad Sadaqat"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-300"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="meharahmad.ft6@gmail.com"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-300"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-300"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        )}
      </motion.div>

      {/* Custom animated decoration */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 -mb-1 text-transparent"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isVisible ? { opacity: 0.2, pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0,0 C100,50 200,0 300,20 C400,40 500,10 600,30 C700,50 800,20 900,40 C1000,60 1100,30 1200,40 L1200,100 L0,100 Z"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Additional CSS for animations */}
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
