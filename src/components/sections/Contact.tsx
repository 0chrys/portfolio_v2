"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const heading = containerRef.current.querySelector(".heading-wrapper");
      const form = containerRef.current.querySelector(".contact-form");
      const info = containerRef.current.querySelector(".contact-info");

      if (heading) fadeInUp(heading, { trigger: heading });
      if (form) fadeInUp(form, { trigger: form, delay: 0.2 });
      if (info) fadeInUp(info, { trigger: info, delay: 0.4 });
    },
    { scope: sectionRef }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website");
    
    // Si le champ honeypot est rempli, on ignore silencieusement (bot détecté)
    if (honeypot) {
      console.log("Bot detected");
      setFormStatus("success");
      return;
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.");
      setFormStatus("idle");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
        <div className="heading-wrapper opacity-0 flex justify-center text-center">
          <SectionHeading
            label="Contact"
            title="Prêt à démarrer ?"
            description="Je suis toujours ouvert aux nouvelles opportunités. Que ce soit pour une question ou juste pour dire bonjour, n'hésitez pas !"
            className="mx-auto" // center override
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 mt-12 cyber-card overflow-hidden glass-card">
          
          {/* Status Bar (Mobile & Desktop) */}
          <div className="lg:col-span-5 border-b border-border/50 px-6 py-3 flex items-center justify-between bg-accent/5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-status-error opacity-50" />
                <div className="w-2 h-2 rounded-full bg-status-warning opacity-50" />
                <div className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-accent">Secure Connection established</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-muted">AES-256 Enabled</span>
              <svg className="w-3 h-3 text-status-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Contact Info (Left Sidebar) */}
          <div className="contact-info opacity-0 lg:col-span-2 p-10 bg-surface/50 border-r border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-[0.03]" />
            
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-10 pb-4 border-b border-border transition-all">Direct Access</h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group/item">
                <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 text-accent flex items-center justify-center shrink-0 group-hover/item:border-accent/40 group-hover/item:bg-accent/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mono-tag text-[8px] mb-2 opacity-60">Source::Mail</h4>
                  <a href="mailto:chryskonan@icloud.com" className="text-lg font-bold text-foreground hover:text-accent transition-colors block">
chryskonan@icloud.com                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group/item">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover/item:border-emerald-400/40 group-hover/item:bg-emerald-500/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="mono-tag text-[8px] mb-2 opacity-60">Source::WhatsApp</h4>
                  <a href="https://wa.me/2250173175924" className="text-lg font-bold text-foreground hover:text-status-success transition-colors block italic" target="_blank" rel="noopener noreferrer">
                    Lancer un chat
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group/item pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 text-accent flex items-center justify-center shrink-0 group-hover/item:border-accent/40 group-hover/item:bg-accent/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mono-tag text-[8px] mb-2 opacity-60">Source::Phone</h4>
                  <a href="tel:+2250173175924" className="text-lg font-bold text-foreground hover:text-accent transition-colors block">
                    +225 01 73 17 59 24
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form opacity-0 lg:col-span-3 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Bottrap / Honeypot */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="Proposition de mission..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <div className="pt-2">
                <Button 
                  variant="primary" 
                  className="w-full h-14"
                  id="submit-btn"
                >
                  {formStatus === "idle" && "Envoyer le message"}
                  {formStatus === "submitting" && (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  )}
                  {formStatus === "success" && "Message envoyé ! ✓"}
                </Button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
