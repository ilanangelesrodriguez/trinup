import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import DefaultLayout from "@/layouts/default";
import { Apple, Leaf, Heart } from 'lucide-react';

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <DefaultLayout>
      <section className="relative min-h-screen overflow-hidden">
        {/* Fondo degradado adaptativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-trinup-light to-white dark:from-trinup-dark dark:to-gray-900 transition-colors duration-500" />
        
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-12 py-4 lg:py-10">
          {/* Columna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 lg:pr-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-trinup-dark dark:text-white"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              Mejora tu vida con <span className="text-trinup-green">TrinUp</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-trinup-dark dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Descubre una vida más saludable y sostenible con ayuda profesional y guías personalizadas.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                color="success"
                variant="shadow"
                className="bg-trinup-green text-white font-semibold hover:bg-trinup-green/80 transition-colors"
              >
                Comienza Ahora
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-trinup-green text-trinup-green font-semibold dark:text-trinup-yellow dark:border-trinup-yellow hover:bg-trinup-green/10 transition-colors"
              >
                Saber Más
              </Button>
            </motion.div>
          </motion.div>

          {/* Columna de imagen */}
          <motion.div
            className="lg:w-1/2 mt-2 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, x: isVisible ? 0 : 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-md">
              <motion.div
                className="absolute inset-0 bg-trinup-green rounded-full filter blur-3xl opacity-30 dark:opacity-40"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              />
              <Image
                src="/main.png"
                alt="TrinUp Lifestyle"
                className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Sección de características */}
        <motion.div 
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { icon: Apple, title: "Nutrición Personalizada", description: "Planes adaptados a tus necesidades" },
            { icon: Leaf, title: "Vida Sostenible", description: "Aprende a vivir en armonía con el planeta" },
            { icon: Heart, title: "Apoyo Profesional", description: "Expertos dedicados a tu bienestar" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-12 h-12 text-trinup-green mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-trinup-dark dark:text-white">{item.title}</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
