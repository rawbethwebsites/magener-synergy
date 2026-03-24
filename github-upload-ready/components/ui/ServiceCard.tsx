import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  image: string;
  slug: string;
}

export function ServiceCard({ icon: Icon, title, desc, image, slug }: ServiceCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={`/services/${slug}`}>
      <motion.div
        whileHover="hover"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative group rounded-2xl overflow-hidden border border-brand-border bg-brand-surface cursor-pointer h-[400px]"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            variants={{
              hover: { scale: 1.05, filter: "brightness(0.75)" },
              initial: { scale: 1, filter: "brightness(0.3)" },
            }}
            initial="initial"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1723]/90 via-[#0f1723]/60 to-transparent z-10" />

        <motion.div
          variants={{ hover: { y: -4 }, initial: { y: 0 } }}
          transition={{ duration: 0.3 }}
          style={{ transform: "translateZ(50px)" }}
          className="relative z-20 flex flex-col justify-end h-full p-6 text-brand-white"
        >
          <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold mb-4 backdrop-blur-md">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-display mb-3 group-hover:text-brand-gold transition-colors">
            {title}
          </h3>
          <p className="text-brand-silver leading-relaxed">{desc}</p>
          <span className="mt-4 text-brand-gold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more &rarr;
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
}
