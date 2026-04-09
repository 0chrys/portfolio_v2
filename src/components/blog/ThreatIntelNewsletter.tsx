"use client";

import { useState } from "react";

export default function ThreatIntelNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="p-12 md:p-16 rounded-[40px] bg-surface border border-border relative overflow-hidden group">
          {/* Animated Background Pulse */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full -z-10 group-hover:bg-accent/10 transition-colors duration-700" />
          
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-6">
              Restez à l'écoute <br/>
              <span className="text-accent">du flux cyber</span>
            </h2>

            <p className="text-muted text-lg mb-10 leading-relaxed">
              Analyses techniques, audits de sécurité et veilles stratégiques déclassifiées directement dans votre terminal email.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md relative group/form">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent transition-all pl-14 text-foreground outline-none shadow-inner"
                />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-muted/50 group-focus-within/form:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-accent text-white font-bold uppercase text-[10px] tracking-widest hover:bg-accent-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
                >
                  {status === "loading" ? "SYNCHRONISATION..." : status === "success" ? "DONE" : "SUBSCRIBE"}
                </button>
              </div>
              
              {status === "success" && (
                <p className="mt-4 text-emerald-500 font-mono text-xs uppercase tracking-widest">
                  Accès accordé. Flux activé.
                </p>
              )}
            </form>

            <div className="mt-8 flex items-center gap-6 opacity-30">
               <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Privacy Shield Active</span>
               <span className="w-1 h-1 rounded-full bg-muted" />
               <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Zero Spam Policy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
