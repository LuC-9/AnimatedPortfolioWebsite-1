
import { motion } from "framer-motion";

export default function BackgroundBlob() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/30 via-secondary/40 to-transparent backdrop-blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)',
            boxShadow: '0 0 100px 60px rgba(255,255,255,0.1)',
          }}
        />
      </div>
    </div>
  );
}
