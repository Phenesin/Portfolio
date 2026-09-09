"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const useAudio = () => {
  const hoverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    hoverSound.current = new Audio("/sounds/p3_hover.wav");
    
    // Only set volume and ignore errors for hover
    if (hoverSound.current) {
      hoverSound.current.volume = 0.3;
    }

    clickSound.current = new Audio("/sounds/p3_click.wav");
    if (clickSound.current) {
      clickSound.current.playbackRate = 1.0;
      clickSound.current.volume = 0.5;
    }
  }, []);

  const playHover = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(() => {});
    }
  };

  const playClick = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }
  };

  return { playHover, playClick };
};

export function SoundToggle() {
  const [muted, setMuted] = useState(false);

  // In a real app, you might sync this to a global context or local storage.
  // We'll leave it as a visual toggle for now, but in reality it should mute the useAudio context.
  
  return (
    <button
      onClick={() => setMuted(!muted)}
      className="fixed bottom-6 right-6 z-50 p-3 bg-p3-blue border border-p3-cyan/30 text-p3-white hover:bg-p3-yellow hover:text-p3-black transition-colors clip-diagonal"
      aria-label={muted ? "Sound Off" : "Sound On"}
    >
      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </button>
  );
}
