// components/AboutSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiCpu, FiSmartphone, FiBook } from "react-icons/fi";
import profileImg from "../../public/me.jpg";

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-12 items-center"
      >
        {/* Image Section with Creative Layout */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Main Image with Floating Elements */}
          <div className="relative h-[500px] w-full">
            {/* Background Shape */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl rotate-6"
            />

            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" }}
              className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl border-4 border-white/10"
            >
              {/* Replace with your actual image */}
              <div className="h-full w-full bg-gray-800 flex items-center justify-center text-white">
                <span className="text-xl">Your Image Here</span>
              </div>
              <Image
                src={profileImg}
                alt="Muhammad Ahmad Sadaqat"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Floating Tech Badges */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/10"
            >
              <span className="text-blue-400 font-medium">MERN Stack</span>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/10"
            >
              <span className="text-purple-400 font-medium">AI/ML Expert</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <strong className="text-white">Muhammad Ahmad Sadaqat</strong>
              , a passionate Full Stack Developer and AI enthusiast based in
              Lahore, Pakistan. With diverse experience in web and mobile
              development, I create impactful digital solutions.
            </p>

            {/* Education Highlight */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <FiBook className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <p className="text-gray-300">
                <strong>BSCS Student at Superior University</strong> (7th
                Semester, CGPA: 3.7/4.0)
                <br />
                Expected Graduation: 2024 | Specializing in Artificial
                Intelligence
              </p>
            </motion.div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Web Development */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-purple-500/10 rounded-full">
                    <FiCode className="text-purple-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Web Development
                  </h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• 1.5+ years MERN stack experience</li>
                  <li>• Laravel backend development</li>
                  <li>• AWS integration (S3, SES)</li>
                  <li>• Published academic papers</li>
                </ul>
              </motion.div>

              {/* Mobile Development */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <FiSmartphone className="text-green-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Mobile Apps</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• 4 months Android Studio (Java)</li>
                  <li>• Firebase Auth/Storage/RealtimeDB</li>
                  <li>• Weather APIs, Chatbots, Geolocation</li>
                  <li>• VetVision, YumYard, MindZap apps</li>
                </ul>
              </motion.div>
            </div>

            {/* AI/ML Highlight */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-pink-500/10 rounded-full">
                  <FiCpu className="text-pink-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  AI/ML Expertise
                </h3>
              </div>
              <p className="text-gray-300">
                Passionate about artificial intelligence with multiple projects:
              </p>
              <ul className="text-gray-300 space-y-2 mt-2">
                <li>
                  • CNN models (90%+ accuracy) for animal disease classification
                </li>
                <li>• Deployed models on Hugging Face Spaces</li>
                <li>• NLP for voice gender prediction</li>
                <li>• DCGAN for image generation</li>
                <li>• YOLO for object detection</li>
                <li>• Various chatbot implementations</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
