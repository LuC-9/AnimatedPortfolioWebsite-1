
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundBlob() {
  const blobRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);
  
  return (
    <motion.div
      ref={blobRef}
      className="fixed inset-0 -z-10 h-full w-full overflow-hidden"
      style={{ scale, opacity }}
    >
      <div className="absolute -inset-[10px] bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
    </motion.div>
  );
}
