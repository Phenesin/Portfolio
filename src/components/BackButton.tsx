"use client";

import { useRouter } from "next/navigation";
import { useAudio } from "@/components/AudioManager";

export function BackButton() {
  const router = useRouter();
  const { playClick } = useAudio();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    playClick();
    router.back();
  };

  return (
    <button 
      onClick={handleBack} 
      className="text-p3-yellow hover:text-p3-cyan font-mono text-sm tracking-widest uppercase cursor-pointer"
    >
      &lt; BACK TO PROJECTS
    </button>
  );
}
