import { Button, Card, Link } from "@nextui-org/react";
import { HomeIcon } from "lucide-react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className="p-12 text-center backdrop-blur-sm animate-fade-in-up shadow-2xl max-w-md mx-auto"
            style={{ padding: "2.5em" }}
          >
            <motion.h1
              className={title({ color: "blue" })}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              404
            </motion.h1>
            <motion.h2
              className="text-xl mb-8 text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Lo sentimos, no se pudo encontrar la página que buscas.
            </motion.h2>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Button
                as={Link}
                className="m-auto px-8 py-6 font-bold text-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out rounded-full"
                href="/"
                size="lg"
                style={{ margin: "0 auto", padding: "1rem", paddingBottom: "1.5rem" }}
                >
                <HomeIcon className="w-6 h-6 mr-2 animate-pulse" />
                Volver al inicio
                </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
