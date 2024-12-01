import { motion } from 'framer-motion';
import { Link } from '@nextui-org/react';

export const Footer = () => {
    return (
        <motion.footer
            className="bg-background/70 backdrop-blur-md border-b w-full flex flex-col items-center justify-center py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            
            <motion.div
                className="text-sm flex items-center gap-1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                © {new Date().getFullYear()} 
                <Link
                    isExternal
                    className="text-current ml-1 text-primary"
                    href="https://www.linkedin.com/in/ilannestorangelesrodriguez/"
                    title="LinkedIn"
                >
                    Ilan Angeles.
                </Link>
                <span className="ml-1">Todos los derechos reservados.</span>
            </motion.div>
        </motion.footer>
    );
};
