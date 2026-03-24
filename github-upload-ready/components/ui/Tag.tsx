import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export function Tag({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn("px-4 py-2 rounded-full bg-brand-surface/80 border border-brand-border text-brand-white text-sm backdrop-blur-md whitespace-nowrap", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
