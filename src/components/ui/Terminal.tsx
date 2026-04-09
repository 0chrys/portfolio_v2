"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Terminal() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="w-full max-w-lg min-h-[440px] bg-[#020203] dark:bg-black/80 backdrop-blur-2xl rounded-2xl border border-border/50 overflow-hidden shadow-[0_0_50px_-12px_var(--color-accent-dim)] font-mono text-[13px] group flex flex-col transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_60px_-12px_var(--color-accent-dim)]">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-5 py-4 bg-surface/5 dark:bg-white/5 border-b border-border/50 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.3)]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.3)]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.3)]" />
        </div>
        <div className="text-muted text-[10px] ml-4 uppercase tracking-[0.3em] font-bold opacity-40">zsh — session</div>
      </div>

      {/* Terminal Body */}
      <div className="p-8 space-y-6 text-slate-300 flex-grow leading-relaxed">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-bold">➜</span>{" "}
          <span className="text-blue-400 font-medium">~</span>{" "}
          <TypeAnimation
            sequence={[
              "whoami",
              1500,
              () => setShowContent(true),
            ]}
            cursor={true}
            speed={40}
            className="text-white font-semibold"
          />
        </div>

        {showContent && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-1000 ease-out">
            <div className="space-y-2 border-l-2 border-accent/20 pl-5 py-1">
              <p className="flex items-center gap-4">
                <span className="text-slate-500 w-12 text-[10px] uppercase font-bold tracking-widest">User</span>
                <span className="text-white font-medium">chrys_K</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="text-slate-500 w-12 text-[10px] uppercase font-bold tracking-widest">Mail</span>
                <span className="text-white font-medium">chryskonan@icloud.com</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="text-slate-500 w-12 text-[10px] uppercase font-bold tracking-widest">Role</span>
                <span className="text-accent font-semibold">Analyste SOC | Pentester | GRC</span>
              </p>
            </div>

            <div className="flex items-center gap-3 opacity-80">
              <span className="text-emerald-400 font-bold">➜</span>{" "}
              <span className="text-blue-400 font-medium">~</span>{" "}
              <span className="text-white/90 border-b border-accent/30 pb-0.5">cat stack.yml</span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-slate-400 text-[12px] pl-2">
              <p className="flex items-center gap-2 tracking-wide"><span className="text-accent/50">●</span> SOC Monitoring</p>
              <p className="flex items-center gap-2 tracking-wide"><span className="text-accent/50">●</span> Pentesting </p>
              <p className="flex items-center gap-2 tracking-wide"><span className="text-accent/50">●</span> GRC & Compliance</p>
              <p className="flex items-center gap-2 tracking-wide"><span className="text-accent/50">●</span> Secure Dev </p>
              <p className="flex items-center gap-2 tracking-wide"><span className="text-accent/50">●</span> Scripting (Python)</p>
              <p className="flex items-center gap-2 tracking-wide"><span className="text-accent/50">●</span> Network Security</p>
            </div>

            <div className="pt-6 border-t border-white/5 italic text-slate-500 text-[12px] leading-relaxed relative">
              <span className="absolute -top-3 left-4 bg-[#0a0a0a] px-2 text-[10px] uppercase tracking-tighter text-accent/40 font-bold">Inspiration</span>
              "L'innovation sans sécurité est une vulnérabilité. Je construis des solutions robustes et audacieuses."
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
