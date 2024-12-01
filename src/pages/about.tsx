"use client"

import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Linkedin, Mail } from 'lucide-react';
import DefaultLayout from "@/layouts/default";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
  linkedin: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Astrid Ariana Verde López",
    role: "Fundadora & CEO",
    bio: "Apasionada por la nutrición y el bienestar, Astrid lidera TrinUp con visión innovadora.",
    linkedin: "https://linkedin.com/in/",
    email: "astrid@trinup.com"
  },
  {
    name: "Ilan Angeles Rodríguez",
    role: "CTO",
    bio: "Experto en tecnología, Ilan desarrolla soluciones para hacer la nutrición accesible a todos.",
    linkedin: "https://www.linkedin.com/in/ilannestorangelesrodriguez/",
    email: "202014026@uns.edu.pe"
  },
  {
    name: "Katherine Lizeth López Areche",
    role: "CMO",
    bio: "Con años de experiencia, Katherine diseña planes nutricionales personalizados y efectivos.",
    linkedin: "https://linkedin.com/in/",
    email: "Katherine@trinup.com"
  },
  {
    name: "David Sánchez",
    role: "Director de Marketing",
    bio: "David crea estrategias innovadoras para llevar el mensaje de TrinUp a más personas.",
    linkedin: "https://linkedin.com/in/david-sanchez",
    email: "david@trinup.com"
  },
  {
    name: "Ing. Penélope Betsabé María Lévano Díaz",
    role: "Asesora Científica",
    bio: "Reconocida investigadora en nutrición, la Ing. Penélope aporta rigor científico a TrinUp.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    email: "elena@trinup.com"
  }
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="max-w-xs">
        <CardBody className="overflow-visible p-0">
            <div className="relative w-full h-[150px] flex items-center justify-center ">
            <Avatar
              name={member.image ? undefined : getInitials(member.name)}
              src={member.image}
              className="w-32 h-32 text-2xl text-primary"
            />
            </div>
        </CardBody>
        <CardFooter className="flex-col items-start p-4">
          <h4 className="font-bold text-large text-trinup-green">{member.name}</h4>
          <p className="text-small text-default-500">{member.role}</p>
          <p className="text-small mt-2">{member.bio}</p>
          <div className="flex mt-2 gap-2">
            <Button isIconOnly size="sm" variant="light" as="a" href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-default-500 text-primary" />
            </Button>
            <Button isIconOnly size="sm" variant="light" as="a" href={`mailto:${member.email}`}>
              <Mail className="text-default-500 text-primary" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <DefaultLayout>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 px-4"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-trinup-dark "
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Conoce al Equipo TrinUp
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-600 max-w-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Somos un equipo apasionado dedicado a transformar vidas a través de la nutrición y el bienestar. Juntos, combinamos experiencia, innovación y compromiso para hacer de TrinUp tu mejor aliado en el camino hacia una vida más saludable.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-7xl">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </DefaultLayout>
  );
}

