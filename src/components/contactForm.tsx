"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Textarea, Button, Card } from "@nextui-org/react";
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2"
      >
        <Card className="p-6 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nombre"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Email"
              placeholder="tu@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              label="Mensaje"
              placeholder="¿En qué podemos ayudarte?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button
              type="submit"
              color="primary"
              endContent={<Send size={16} />}
              className="w-full"
            >
              Enviar Mensaje
            </Button>
          </form>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <img
          src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Equipo TrinUp listo para ayudarte"
          className="rounded-lg shadow-lg object-cover w-full h-full max-h-[600px]"
        />
      </motion.div>
    </div>
  );
}
