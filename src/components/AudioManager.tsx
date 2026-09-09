"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const SingleNoteIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="18" r="3" />
    <path d="M12 18V2l7 2" />
  </svg>
);

export const SlashedNoteIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="18" r="3" />
    <path d="M12 18V2l7 2" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

interface AudioContextType {
  playHover: () => void;
  playClick: () => void;
  sfxMuted: boolean;
  toggleSfx: () => void;
  bgmMuted: boolean;
  toggleBgm: () => void;
}

const AudioContext = createContext<AudioContextType>({
  playHover: () => {},
  playClick: () => {},
  sfxMuted: false,
  toggleSfx: () => {},
  bgmMuted: false,
  toggleBgm: () => {},
});

export const useAudio = () => useContext(AudioContext);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [sfxMuted, setSfxMuted] = useState(false);
  const [bgmMuted, setBgmMuted] = useState(true); // Start muted or true by default for BGM
  
  const hoverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);
  const bgmSound = useRef<HTMLAudioElement | null>(null);

  const PLACEHOLDER_MUSIC_PATH = ""; // e.g. "/sounds/p3_bgm.mp3"

  useEffect(() => {
    // SFX
    hoverSound.current = new Audio("/sounds/p3_hover.wav");
    if (hoverSound.current) {
      hoverSound.current.volume = 0.3;
    }

    clickSound.current = new Audio("/sounds/p3_click.wav");
    if (clickSound.current) {
      clickSound.current.playbackRate = 1.0;
      clickSound.current.volume = 0.5;
    }

    // BGM Placeholder
    if (PLACEHOLDER_MUSIC_PATH) {
      bgmSound.current = new Audio(PLACEHOLDER_MUSIC_PATH);
      bgmSound.current.loop = true;
      bgmSound.current.volume = 0.4;
    }
  }, []);

  useEffect(() => {
    if (bgmSound.current) {
      if (bgmMuted) {
        bgmSound.current.pause();
      } else {
        bgmSound.current.play().catch(() => {});
      }
    }
  }, [bgmMuted]);

  const playHover = () => {
    if (!sfxMuted && hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(() => {});
    }
  };

  const playClick = () => {
    if (!sfxMuted && clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }
  };

  const toggleSfx = () => setSfxMuted(!sfxMuted);
  const toggleBgm = () => setBgmMuted(!bgmMuted);

  return (
    <AudioContext.Provider value={{ playHover, playClick, sfxMuted, toggleSfx, bgmMuted, toggleBgm }}>
      {children}
    </AudioContext.Provider>
  );
}

// UI Controls component for desktop
export function SoundToggle() {
  const { sfxMuted, toggleSfx, bgmMuted, toggleBgm } = useAudio();

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 gap-2">
      <button
        onClick={toggleBgm}
        className="p-3 bg-p3-blue border border-p3-cyan/30 text-p3-white hover:bg-p3-yellow hover:text-p3-black transition-colors clip-diagonal items-center justify-center shadow-lg"
        aria-label={bgmMuted ? "BGM Off" : "BGM On"}
      >
        {bgmMuted ? <SlashedNoteIcon className="opacity-50" size={20} /> : <SingleNoteIcon size={20} />}
      </button>
      <button
        onClick={toggleSfx}
        className="p-3 bg-p3-blue border border-p3-cyan/30 text-p3-white hover:bg-p3-yellow hover:text-p3-black transition-colors clip-diagonal items-center justify-center shadow-lg"
        aria-label={sfxMuted ? "Sound Off" : "Sound On"}
      >
        {sfxMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
