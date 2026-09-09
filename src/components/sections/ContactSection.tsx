"use client";

import { profile } from "@/data/profile";
import { AnimatedText } from "@/components/AnimatedText";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="h-full flex flex-col pt-12 pb-24 justify-center items-center text-center">
      <AnimatedText 
        text="CONTACT"
        className="text-2xl md:text-3xl font-mono text-p3-cyan mb-4 tracking-[0.3em] uppercase"
      />
      
      <AnimatedText 
        text={profile.preferredName}
        className="text-8xl md:text-[9rem] font-black text-p3-white mb-8 leading-none"
        delay={0.2}
      />
      
      <h2 className="text-3xl font-bold text-p3-yellow uppercase mb-16 max-w-2xl bg-p3-blue-dark/50 p-4 border border-p3-yellow/30 clip-slanted">
        LET'S BUILD SOMETHING.
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-3xl">
        {[
          { label: "EMAIL", url: `mailto:${profile.contact.email}` },
          { label: "GITHUB", url: `https://github.com/${profile.contact.github}` },
          { label: "LINKEDIN", url: `https://linkedin.com/in/${profile.contact.linkedin}` },
          { label: "RESUME", url: "/resume.pdf" }
        ].map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target={link.label !== "EMAIL" ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="w-full md:w-auto px-8 py-4 bg-p3-blue border-2 border-p3-cyan text-p3-white font-black text-xl tracking-widest uppercase hover:bg-p3-yellow hover:text-p3-black hover:border-p3-black transition-all duration-300 clip-diagonal text-center"
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
