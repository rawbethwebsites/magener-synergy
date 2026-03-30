'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/packages" },
  { name: "Destinations", href: "/destinations" },
  { name: "Study Abroad", href: "/visa" },
  { name: "Contact", href: "/contact" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="fixed inset-0 z-[100] bg-brand-black flex flex-col"
        >
          <div className="flex justify-between items-center p-6 border-b border-brand-charcoal">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <img src="/MAGENER.png" alt="Magener Synergy Logo" className="h-8 w-auto object-contain" />
            </Link>
            <button onClick={onClose} className="p-2 text-brand-silver hover:text-brand-white transition-colors">
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={onClose}
                      className={`text-4xl font-display transition-colors block ${isActive ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <Button variant="gold" size="lg" className="w-full h-14" asChild>
                <Link href="/contact" onClick={onClose}>Book Now &rarr;</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex gap-8 text-brand-silver justify-center"
            >
               <a href="https://www.instagram.com/magenertravels?utm_source=qr" className="hover:text-brand-gold transition-colors"><Instagram className="w-6 h-6" /></a>
               <a href="#" className="hover:text-brand-gold transition-colors"><Linkedin className="w-6 h-6" /></a>
               <a href="#" className="hover:text-brand-gold transition-colors"><Phone className="w-6 h-6" /></a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
