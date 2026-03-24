import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GradientOverlay } from "./GradientOverlay";

interface DestinationCardProps {
  name: string;
  country: string;
  tag: string;
  img: string;
  slug: string;
}

export function DestinationCard({ name, country, tag, img, slug }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${slug}`}>
      <motion.div
        whileHover="hover"
        className="relative w-[320px] h-[450px] flex-shrink-0 rounded-2xl overflow-hidden bg-brand-surface cursor-pointer border border-brand-border"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full relative bg-brand-charcoal"
          >
            <Image src={img} alt={name} fill className="object-cover" />
          </motion.div>
        </div>

        <GradientOverlay direction="to-t" />

        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="px-3 py-1 bg-brand-black/50 backdrop-blur-md rounded-full text-xs text-brand-silver border border-brand-border uppercase tracking-widest">
              {tag}
            </span>
          </div>

          <div>
            <p className="text-brand-gold text-sm tracking-wider uppercase mb-1">{country}</p>
            <h3 className="text-3xl font-display text-brand-white mb-2">{name}</h3>

            <motion.div
              variants={{
                hover: { opacity: 1, height: "auto", marginTop: 16 },
                initial: { opacity: 0, height: 0, marginTop: 0 },
              }}
              initial="initial"
              className="overflow-hidden"
            >
              <span className="text-brand-gold text-sm uppercase tracking-widest font-medium">
                Explore &rarr;
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
