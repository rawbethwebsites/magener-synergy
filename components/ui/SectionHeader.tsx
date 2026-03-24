import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-3xl mx-auto mb-16", className)}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-brand-gold tracking-[0.25em] text-xs uppercase mb-4"
      >
        {label}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-display text-brand-white mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-silver text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
