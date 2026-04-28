import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import RiskDisclaimer from './RiskDisclaimer';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar id="main-nav" />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <section id="safety-disclaimer" className="bg-dark px-4 py-6 border-t border-dark-border">
        <RiskDisclaimer />
      </section>
      <Footer id="main-footer" />
    </div>
  );
}
