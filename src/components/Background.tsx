"use client";

import Image from "next/image";

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-p3-blue-dark">
      {/* Base Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,229,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Abstract Image generated */}
      <Image 
        src="/bg.png" 
        alt="Abstract background" 
        fill
        className="object-cover opacity-30 mix-blend-screen"
        priority
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
    </div>
  );
}
