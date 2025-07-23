"use client";
import { motion } from "framer-motion";

export const FCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="transition-all ease-in-out duration-300"
    >
      {children}
    </motion.div>
  );
};
