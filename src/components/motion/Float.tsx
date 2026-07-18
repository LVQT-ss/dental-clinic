"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Float({
  children,
  className,
  distance = 12,
  duration = 4,
  delay = 0,
}: {
  children?: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
