"use client";

import { motion, type Variants } from "framer-motion";
import { forwardRef, type ReactNode } from "react";

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const StaggerGroup = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>(function StaggerGroup({ children, className }, ref) {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={groupVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
