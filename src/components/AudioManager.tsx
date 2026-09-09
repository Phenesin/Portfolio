"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
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

let hoverAudio: HTMLAudioElement | null = null;
let clickAudio: HTMLAudioElement | null = null;
let bgmAudio: HTMLAudioElement | null = null;
const PLACEHOLDER_MUSIC_PATH = ""; // e.g. "/sounds/p3_bgm.mp3"

if (typeof window !== "undefined") {
  hoverAudio = new Audio("/sounds/p3_hover.wav");
  hoverAudio.volume = 0.3;

  clickAudio = new Audio("/sounds/p3_click.wav");
  clickAudio.playbackRate = 1.0;
  clickAudio.volume = 0.5;

  if (PLACEHOLDER_MUSIC_PATH) {
    bgmAudio = new Audio(PLACEHOLDER_MUSIC_PATH);
    bgmAudio.loop = true;
    bgmAudio.volume = 0.4;
  }
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [sfxMuted, setSfxMuted] = useState(false);
  const [bgmMuted, setBgmMuted] = useState(true);

  useEffect(() => {
    if (bgmAudio) {
      if (bgmMuted) {
        bgmAudio.pause();
      } else {
        bgmAudio.play().catch(() => {});
      }
    }
  }, [bgmMuted]);

  const playHover = () => {
    if (!sfxMuted && hoverAudio) {
      const clone = hoverAudio.cloneNode() as HTMLAudioElement;
      clone.volume = hoverAudio.volume;
      clone.play().catch(() => {});
    }
  };

  const playClick = () => {
    if (!sfxMuted && clickAudio) {
      const clone = clickAudio.cloneNode() as HTMLAudioElement;
      clone.volume = clickAudio.volume;
      clone.playbackRate = clickAudio.playbackRate;
      clone.play().catch(() => {});
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
