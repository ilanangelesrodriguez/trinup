import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const BackgroundShape = ({ className, initialPosition }: { className?: string; initialPosition: { x: string; y: string } }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 ${className}`}
    initial={initialPosition}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      x: [initialPosition.x, `calc(${initialPosition.x} + 10%)`, initialPosition.x],
      y: [initialPosition.y, `calc(${initialPosition.y} + 10%)`, initialPosition.y],
    }}
    transition={{
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

const FloatingParticle = ({ size, color, initialPosition }: { size: number; color: string; initialPosition: { x: number; y: number } }) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{
      width: size,
      height: size,
    }}
    initial={initialPosition}
    animate={{
      x: [initialPosition.x, initialPosition.x + Math.random() * 100 - 50],
      y: [initialPosition.y, initialPosition.y + Math.random() * 100 - 50],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Dynamic background */}
      <motion.div 
        className="fixed inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(to right top, #004d7a, #00bf72)",
            "linear-gradient(to right top, #008793, #00bf72, #004d7a)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Animated background shapes */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <BackgroundShape className="w-96 h-96 bg-blue-300 dark:bg-blue-400" initialPosition={{ x: "10%", y: "5%" }} />
        <BackgroundShape className="w-96 h-96 bg-green-300 dark:bg-green-400" initialPosition={{ x: "70%", y: "20%" }} />
        <BackgroundShape className="w-96 h-96 bg-blue-300 dark:bg-blue-400" initialPosition={{ x: "20%", y: "70%" }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle 
            key={i}
            size={Math.random() * 10 + 5}
            color={`bg-${['blue', 'green'][Math.floor(Math.random() * 2)]}-400 opacity-50`}
            initialPosition={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-6 flex-grow pt-14 pb-8">
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}
