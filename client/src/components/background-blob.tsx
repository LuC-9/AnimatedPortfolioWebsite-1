
import { motion } from "framer-motion";

export default function BackgroundBlob() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/20 blur-3xl"
        />
      </div>
    </div>
  );
}
