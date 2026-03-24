'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  bgImage?: string;
}

export function PageHeader({ title, subtitle, breadcrumb, bgImage }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-charcoal border-b border-brand-border">
      {/* Background Layer */}
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 opacity-20 object-cover w-full h-full mix-blend-screen" 
            style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent" />
        </>
      )}
      
      <div className="container mx-auto px-6 relative z-10 block pt-[4vh]">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="max-w-3xl"
        >
          {breadcrumb && (
            <div className="flex items-center gap-2 text-sm text-brand-gold uppercase tracking-widest mb-6 font-medium">
               {breadcrumb.map((crumb, i) => (
                 <span key={i} className="flex flex-row items-center gap-2">
                   {i > 0 && <span className="text-brand-silver/50">/</span>}
                   {crumb.href ? (
                     <Link href={crumb.href} className="hover:text-brand-white transition-colors">{crumb.label}</Link>
                   ) : (
                     <span className="text-brand-white">{crumb.label}</span>
                   )}
                 </span>
               ))}
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-brand-white leading-tight mb-4 drop-shadow-lg">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-brand-silver font-light leading-relaxed max-w-2xl text-balance">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
