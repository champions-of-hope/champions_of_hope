"use client";

import { motion } from "framer-motion";

const directions = {
  up: { y: 34, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.55,
  once = true,
}) {
  const MotionTag = motion[as] || motion.div;
  const offset = directions[direction] || directions.up;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset, scale: 0.985 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.18, margin: "0px 0px -80px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
