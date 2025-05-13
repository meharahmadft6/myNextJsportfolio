// components/HeroSection.tsx
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Suspense, useState, useEffect } from "react";

// Dynamically import Three.js components to avoid SSR issues
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  {
    ssr: false,
  }
);

const Stars = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Stars),
  { ssr: false }
);

const OrbitControls = dynamic(
  () => import("@react-three/drei").then((mod) => mod.OrbitControls),
  { ssr: false }
);

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background - Only render on client side */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
              />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                enablePan={false}
              />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-1 bg-gradient-to-b from-black/80 via-black/30 to-black/80"
      />

      {/* Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Muhammad Ahmad Sadaqat
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          MERN Stack | Next.js | Mobile Apps | AI/ML
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 rounded-lg text-white font-medium relative overflow-hidden"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="relative z-10"
            >
              View My Work
            </motion.span>
            {/* Button shine effect */}
            <motion.span
              className="absolute inset-0 bg-white opacity-0"
              animate={{
                opacity: [0, 0.3, 0],
                left: ["-100%", "100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      ></motion.div>
    </section>
  );
}
