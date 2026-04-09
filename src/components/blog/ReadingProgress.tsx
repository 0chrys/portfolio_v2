"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((currentScrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-[72px] left-0 w-full h-1 z-50 pointer-events-none">
      <div 
        className="h-full bg-accent transition-all duration-200 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
