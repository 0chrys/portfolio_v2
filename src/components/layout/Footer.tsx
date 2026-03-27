import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-foreground mb-6 inline-block group"
            >
              CK<span className="text-accent group-hover:text-accent-hover transition-colors">Labs</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-8 font-medium">
              Expertise hybride en <span className="text-foreground">cybersécurité</span> et développement <span className="text-foreground">Fullstack</span>.
              Conception de systèmes résilients par nature.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', href: 'https://github.com', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mono-tag text-[8px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Projets', 'Blog', 'À propos'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Blog' ? '/blog' : `/#${item.toLowerCase().replace('à ', '').replace('propos', 'about')}`} 
                    className="text-sm font-bold text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-border group-hover:bg-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mono-tag text-[8px] mb-8">System Access</h4>
            <ul className="space-y-5">
              <li>
                <p className="text-[10px] uppercase tracking-widest text-muted font-black mb-1">Direct-Mail</p>
                <a href="mailto:lukasbrillouet@gmail.com" className="text-sm font-bold text-foreground hover:text-accent transition-colors">
chryskonan@icloud.com                 </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-widest text-muted font-black mb-1">Location</p>
                <p className="text-sm font-bold text-foreground">
                  COTE D'IVOIRE // REMOTE_ENABLED
                </p>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-500 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 rounded-lg inline-block">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  System Online
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="mono-tag text-[8px] opacity-50">V2.4.0_STABLE</span>
            <p className="text-[11px] font-bold text-muted uppercase tracking-wider">
              &copy; {currentYear} CKLabs. Designed with <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-4">Security</span> in mind.
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted hover:text-foreground transition-all">
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
