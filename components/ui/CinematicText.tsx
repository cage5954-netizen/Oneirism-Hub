import React from 'react';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';

interface CinematicTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerAmount?: number;
}

const CinematicText: React.FC<CinematicTextProps> = ({ 
  text, 
  className, 
  delay = 0,
  staggerAmount = 0.03
}) => {
  // Split text into words to allow wrapping, then characters for animation
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerAmount, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: 'blur(8px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={clsx("inline-block", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, index) => (
            <motion.span
              variants={child}
              key={index}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export default CinematicText;