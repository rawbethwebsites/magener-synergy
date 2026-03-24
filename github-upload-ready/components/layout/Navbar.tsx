'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/packages" },
  { name: "Destinations", href: "/destinations" },
  { name: "Study Abroad", href: "/visa" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-[90] transition-all duration-500 border-b ${scrolled ? 'bg-brand-charcoal/90 backdrop-blur-md border-brand-border py-4 shadow-xl' : 'bg-transparent border-transparent py-6 md:py-8'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/MAGENER.png" alt="Magener Synergy Logo" className="h-8 md:h-10 w-auto object-contain" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative text-xs tracking-wider uppercase transition-colors drop-shadow-md ${isActive ? 'text-brand-gold font-medium' : 'text-brand-white/90 hover:text-brand-gold'}`}
                 >
                   {link.name}
                   {isActive && (
                     <motion.div 
                       layoutId="nav-indicator" 
                       className="absolute -bottom-2 left-0 right-0 h-px bg-brand-gold" 
                     />
                   )}
                 </Link>
              );
            })}
          </div>
          
          <div className="hidden lg:block">
             <Button variant="outline" asChild>
               <Link href="/contact">Book Now</Link>
             </Button>
          </div>

          <button 
            className="lg:hidden text-brand-white p-2"
            onClick={() => setMobileOpen(true)}
          >
             <Menu className="w-8 h-8" />
          </button>
        </div>
      </motion.nav>
      
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
