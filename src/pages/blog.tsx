import { Card, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const users = [
  {
    name: "Astrid Ariana Verde López",
    role: "Fundadora & CEO",
    content: "TrinUp es una app donde toda persona merece o puede mejorar su estilo de vida. Ofreciendo ayuda profesional y guías adecuadas de cómo y dónde encontrar alimentos, para que el propio cliente pueda vivir de manera más sostenible.",
    linkedin: "https://linkedin.com/in/",
    email: "astrid@trinup.com"
  },
  {
    name: "Ilan Angeles Rodríguez",
    role: "CTO",
    content: "El nombre nace de la unión entre nutrición y superación, teniendo el objetivo de ayudar a mejorar a las personas cada día con alimentación, conocimiento y apoyo profesional.",
    linkedin: "https://www.linkedin.com/in/ilannestorangelesrodriguez/",
    email: "202014026@uns.edu.pe"
  },
  {
    name: "Katherine Lizeth López Areche",
    role: "CMO",
    content: "TrinUp ofrece una plataforma intuitiva y fácil de usar, donde los usuarios pueden encontrar recursos y herramientas para mejorar su bienestar y estilo de vida de manera sostenible.",
    linkedin: "https://linkedin.com/in/",
    email: "katherine@trinup.com"
  }
];

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-6 md:py-8 min-h-screen">
        <div className="inline-block max-w-lg text-center justify-center mb-8">
          <h1 className={title()}>Blog</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 text-center backdrop-blur-sm shadow-2xl max-w-sm mx-auto">
                <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                <h3 className="text-xl text-gray-700 mb-4">{user.role}</h3>
                <p className="text-gray-700 mb-4">{user.content}</p>
                <div className="flex justify-center gap-4">
                  <Link href={user.linkedin} target="_blank" className="text-blue-500 hover:text-blue-700">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href={`mailto:${user.email}`} className="text-blue-500 hover:text-blue-700">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
