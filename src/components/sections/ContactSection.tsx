"use client";

import { useState } from "react";
import { AnimatedText } from "@/components/AnimatedText";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/components/AudioManager";
import { Profile } from "@/types";
import { FileText, ChevronDown } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Contact({ profile }: { profile: Profile }) {
  const { playHover, playClick } = useAudio();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="h-full flex flex-col pt-12 pb-24 justify-center items-center text-center">
      <AnimatedText 
        text="CONTACT"
        className="text-2xl md:text-3xl font-mono text-p3-cyan mb-4 tracking-[0.3em] uppercase"
      />
      
      <AnimatedText 
        text={profile.preferredName}
        className="text-fluid-contact font-black text-p3-white mb-8 leading-none break-words max-w-full px-4"
        delay={0.2}
      />
      
      <h2 className="text-xl md:text-3xl font-bold text-p3-yellow uppercase mb-8 max-w-2xl bg-p3-blue-dark/50 p-4 border border-p3-yellow/30 clip-slanted">
        LET&apos;S BUILD SOMETHING.
      </h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-p3-cyan font-mono tracking-widest mb-12 uppercase"
      >
        reach out at: <a href={`mailto:${profile.contact.email}`} className="text-p3-yellow hover:underline lowercase">{profile.contact.email}</a>
      </motion.p>
      
      <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center w-full max-w-4xl relative">
        {/* Resumes Dropdown */}
        <div className="relative" onMouseLeave={() => setResumeOpen(false)}>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onHoverStart={() => { playHover(); setResumeOpen(true); }}
            onClick={() => { playClick(); setResumeOpen(!resumeOpen); }}
            className="flex items-center gap-3 px-8 py-4 h-16 bg-p3-blue border-2 border-p3-cyan text-p3-white font-black text-xl tracking-widest uppercase hover:bg-p3-yellow hover:text-p3-black hover:border-p3-black transition-all duration-300 clip-diagonal"
          >
            <FileText size={24} />
            RESUME
            <ChevronDown size={20} className={`transition-transform ${resumeOpen ? "rotate-180" : ""}`} />
          </motion.button>

          <AnimatePresence>
            {resumeOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-full flex flex-col gap-2 z-20"
              >
                <a
                  href="/resume-backend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="w-full px-4 py-3 bg-p3-black border border-p3-cyan text-p3-cyan font-bold tracking-wider hover:bg-p3-cyan hover:text-p3-black transition-colors clip-slanted text-center shadow-lg"
                >
                  BACKEND
                </a>
                <a
                  href="/resume-ml.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="w-full px-4 py-3 bg-p3-black border border-p3-cyan text-p3-cyan font-bold tracking-wider hover:bg-p3-cyan hover:text-p3-black transition-colors clip-slanted text-center shadow-lg"
                >
                  ML / DL
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social Icons (Logo Only) */}
        {[
          { label: "GITHUB", url: `https://github.com/${profile.contact.github}`, icon: <GithubIcon size={28} /> },
          { label: "LINKEDIN", url: `https://linkedin.com/in/${profile.contact.linkedin}`, icon: <LinkedinIcon size={28} /> },
          ...(profile.contact.twitter ? [{ label: "X", url: `https://x.com/Siddhartha49140`, icon: <TwitterIcon size={26} /> }] : [])
        ].map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            onHoverStart={playHover}
            onClick={playClick}
            className="flex items-center justify-center text-p3-cyan hover:text-p3-yellow transition-colors duration-300"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
