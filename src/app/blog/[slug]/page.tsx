import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import ReadingProgress from "@/components/blog/ReadingProgress";
import MDXRemoteWrapper from "@/components/blog/MDXRemoteWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Chrys Konan"
    },
    "keywords": post.tags.join(", "),
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="pt-32 pb-24 min-h-screen relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted mb-12">
            <Link href="/" className="hover:text-accent transition-colors">ROOT</Link>
            <span className="opacity-20">/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">INTELLIGENCE_BASE</Link>
            <span className="opacity-20">/</span>
            <span className="text-accent">{post.slug.toUpperCase()}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <header className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded bg-accent/10 border border-accent/20 text-[9px] font-black uppercase text-accent tracking-widest">
                    Intelligence Report
                  </span>
                  <span className="h-px w-12 bg-accent/20" />
                  <time className="text-[10px] font-mono text-muted/60 uppercase tracking-widest">
                    Released: {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}
                  </time>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-8 leading-[0.9] uppercase">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted/80 leading-relaxed font-medium italic border-l-2 border-accent/30 pl-6 mb-12">
                  {post.description}
                </p>
              </header>

              <div className="relative">
                <MDXRemoteWrapper content={post.content} />
              </div>
            </div>

            {/* Sidebar Metadata */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] sticky top-32">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-8 pb-4 border-b border-white/[0.05]">RECAP_TECHNIQUE</h3>
                
                <div className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-muted/40 font-black">Status</span>
                    <span className="text-[11px] font-mono font-bold text-emerald-500 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       DECLASSIFIED
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-muted/40 font-black">Est_Reading_Time</span>
                    <span className="text-[11px] font-mono font-bold text-foreground">{post.readingTime.toUpperCase()}</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-muted/40 font-black">Classification</span>
                    <span className="text-[11px] font-mono font-bold text-accent">PUBLIC_RELEASE</span>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-[9px] font-bold bg-white/[0.03] border border-white/[0.05] rounded text-muted/60 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/[0.05]">
                   <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-muted mb-6">FORWARD_INTEL</h4>
                   <div className="flex gap-4">
                      {/* Social Share links placeholder */}
                      <button className="text-muted hover:text-accent transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </button>
                      <button className="text-muted hover:text-accent transition-colors">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </button>
                   </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
