import { cn } from "@/lib/utils";

export function GradientOverlay({ className, direction = "to-t" }: { className?: string, direction?: "to-t" | "to-b" | "to-r" | "to-l" }) {
  return (
    <div className={cn(`absolute inset-0 bg-gradient-${direction} from-brand-black/90 via-transparent to-transparent z-10 pointer-events-none`, className)} />
  );
}
