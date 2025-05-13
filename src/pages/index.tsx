// pages/index.tsx
import { motion } from "framer-motion";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import ChatBot from "@/components/ChatBot";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Ahmad | MERN & Next.js Developer</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Ahmad Sadaqat"
        />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <ContactSection />
        <ChatBot /> // floating or bottom
      </motion.main>
    </>
  );
}
