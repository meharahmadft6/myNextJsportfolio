// components/ChatBot.tsx
import { useState, useEffect, useRef } from "react";
import { ReactNode } from "react";
import {
  MessageSquare,
  X,
  Send,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Award,
  Coffee,
  BookOpen,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const predefinedQuestions: string[] = [
  "Who are you?",
  "What skills do you have?",
  "Tell me about your projects",
  "What's your education?",
  "How to contact you?",
  "What are your interests?",
  "Career goals?",
  "Work experience?",
];

const responses: Record<string, string> = {
  "Who are you?":
    "I'm Muhammad Ahmad Sadaqat, a Full Stack Developer and AI enthusiast from Lahore, Pakistan. I blend creative problem-solving with technical expertise to build solutions that make a difference. I'm passionate about emerging technologies and creating seamless user experiences.",
  "What skills do you have?":
    "My technical toolkit includes:\n\n• Frontend: React, Next.js, TypeScript, TailwindCSS\n• Backend: Node.js, Express, Laravel, MongoDB, PostgreSQL\n• Cloud: AWS (S3, SES, EC2), Firebase, Vercel\n• Mobile: React Native, Android Studio\n• AI/ML: TensorFlow, PyTorch, CNNs, YOLO, NLP, HuggingFace\n• Tools: Git, Docker, Figma, Postman",
  "Tell me about your projects":
    "Some of my notable projects include:\n\n• AdVendoo: Digital advertising platform with AI-based targeting\n• VetVision: Animal disease classifier using computer vision\n• YumYard: Food delivery app with real-time order tracking\n• MindZap: Interactive quiz platform with personalized learning paths\n• Conversational AI: Advanced chatbot systems with context awareness\n• Netflix Clone: Full-featured streaming platform with recommendation engine",
  "What's your education?":
    "I'm currently in my 7th semester pursuing a BS in Computer Science at Superior University, Lahore with a CGPA of 3.7. I've supplemented my formal education with specialized certifications in AI/ML, cloud computing, and full-stack development from platforms like Coursera and Udemy.",
  "How to contact you?":
    "I'd love to connect! Reach out through:\n\n• Email: meharahmad.ft6@gmail.com\n• Phone: +92 309 6614458\n• GitHub: github.com/meharahmadft6\n• LinkedIn: linkedin.com/in/meharahmadft6\n• Portfolio: ahmadsadaqat.dev",
  "What are your interests?":
    "Beyond coding, I'm passionate about emerging tech trends, particularly in AI ethics and sustainable tech. I enjoy participating in hackathons, contributing to open-source projects, and mentoring junior developers. In my free time, I explore photography, hiking, and reading science fiction.",
  "Career goals?":
    "I aim to become a technology leader who bridges innovation with practical solutions. Long-term, I aspire to lead engineering teams that create impactful products and contribute to Pakistan's tech ecosystem growth. I'm particularly interested in working at the intersection of AI and software development.",
  "Work experience?":
    "My professional journey includes:\n\n• Software Engineer at TechNova (2023-Present): Full-stack development for enterprise solutions\n• Web Developer Intern at InnoSoft (2022): Focused on frontend development with React\n• Freelance Developer (2021-Present): Completed 30+ projects for clients worldwide\n• Research Assistant at University AI Lab (2022): Worked on computer vision applications",
};

type ChatEntry = {
  question: string;
  answer: string | null;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]);
  const [typing, setTyping] = useState<boolean>(false);
  const [activeBubble, setActiveBubble] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-open on first render
  useEffect(() => {
    // Open after 800ms
    const openTimer = setTimeout(() => {
      setIsOpen(true);

      // Close after 10 seconds (or 20000 for 20s)
      const closeTimer = setTimeout(() => {
        setIsOpen(false);
      }, 10000); // Change to 20000 for 20s

      // Clear close timer if component unmounts early
      return () => clearTimeout(closeTimer);
    }, 800);

    // Clear open timer if component unmounts early
    return () => clearTimeout(openTimer);
  }, []);
  // Auto-scroll to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, typing]);

  const handleQuestionClick = (q: string) => {
    setTyping(true);
    setActiveBubble(q);
    setChatHistory((prev) => [...prev, { question: q, answer: null }]);

    setTimeout(() => {
      setChatHistory((prev) => {
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = {
          question: q,
          answer: responses[q],
        };
        return newHistory;
      });
      setTyping(false);
      setActiveBubble(null);
    }, 1200);
  };

  const getIconForQuestion = (question: string): ReactNode => {
    const iconMap: Record<string, ReactNode> = {
      "Who are you?": <User size={14} />,
      "What skills do you have?": <Code size={14} />,
      "Tell me about your projects": <Briefcase size={14} />,
      "What's your education?": <BookOpen size={14} />,
      "How to contact you?": <Mail size={14} />,
      "What are your interests?": <Heart size={14} />,
      "Career goals?": <Award size={14} />,
      "Work experience?": <Coffee size={14} />,
    };

    return iconMap[question] || <MessageSquare size={14} />;
  };
  return (
    <>
      {/* Floating Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          {isOpen ? (
            <X className="text-white" size={20} />
          ) : (
            <MessageSquare className="text-white" size={20} />
          )}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 bg-gray-900/95 border border-gray-700 text-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{ maxHeight: "80vh", height: "500px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Ahmad Sadaqat</h3>
                  <p className="text-xs text-gray-200">Full Stack Developer</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <a
                  href="https://github.com/meharahmadft6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/meharahmadft6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Chat Body */}
            <div
              ref={chatContainerRef}
              className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-900"
            >
              {chatHistory.length === 0 && (
                <div className="text-sm flex justify-start">
                  <div className="bg-gray-800 px-4 py-3 rounded-xl max-w-[85%]">
                    <span className="text-purple-300 font-medium">Ahmad:</span>{" "}
                    <p>
                      Hi there! 👋 I am Ahmad. Ask me anything about my
                      skills, projects, or background!
                    </p>
                  </div>
                </div>
              )}
              {chatHistory.map((entry, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-sm flex justify-end">
                    <div className="bg-blue-600/30 px-4 py-3 rounded-xl max-w-[80%]">
                      <span className="text-blue-200 font-medium">You:</span>{" "}
                      {entry.question}
                    </div>
                  </div>
                  {entry.answer && (
                    <div className="text-sm flex justify-start">
                      <div className="bg-gray-800 px-4 py-3 rounded-xl max-w-[85%] whitespace-pre-line">
                        <span className="text-purple-300 font-medium">
                          Ahmad:
                        </span>{" "}
                        {entry.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="text-sm flex justify-start">
                  <div className="bg-gray-800 px-4 py-3 rounded-xl">
                    <span className="text-purple-300 font-medium">Ahmad:</span>{" "}
                    <span className="inline-flex items-center">
                      <span
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce mr-1"
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce mr-1"
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex flex-wrap gap-2 mb-2 max-h-24 overflow-y-auto">
                {predefinedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuestionClick(q)}
                    disabled={typing}
                    className={`flex items-center gap-1 text-xs px-3 py-2 rounded-full border transition-all ${
                      activeBubble === q
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-gray-700/70 border-gray-600 text-gray-200 hover:bg-gray-700"
                    }`}
                  >
                    {getIconForQuestion(q)}
                    <span>{q}</span>
                  </button>
                ))}
              </div>

              {/* Disabled input */}
              <div className="relative">
                <input
                  type="text"
                  disabled
                  placeholder="Predefined questions only"
                  className="w-full bg-gray-700 border border-gray-600 rounded-full py-2 pl-4 pr-10 text-white placeholder-gray-400 cursor-not-allowed"
                />
                <button
                  type="button"
                  title="send"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400"
                  disabled
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
