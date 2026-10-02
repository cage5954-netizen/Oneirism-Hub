import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGE_SMALL } from "../constants";
export function SceneImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const portrait = src.includes("observer-");
  return (
    <img
      src={src}
      srcSet={
        !portrait && IMAGE_SMALL[src]
          ? `${IMAGE_SMALL[src]} 800w, ${src} 1920w`
          : undefined
      }
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? undefined : { y: [14, 0], opacity: [0.78, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function Scene({
  src,
  alt,
  children,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  return (
    <section ref={ref} className={`scene ${className}`}>
      <motion.div className="scene-image" style={{ y: reduced ? 0 : y }}>
        <SceneImage src={src} alt={alt} priority={priority} />
      </motion.div>
      <div className="scene-shade" aria-hidden="true" />
      <div className="scene-content">{children}</div>
    </section>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function TextLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function PageHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="page-heading wrap">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      {children && <p className="page-intro">{children}</p>}
    </header>
  );
}
