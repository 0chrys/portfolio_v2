import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Blog & Ressources",
  description:
    "Articles sur le développement web, la cybersécurité et les bonnes pratiques (Security by Design).",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-24 min-h-screen relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading
          label="Blog"
          title="Articles & Ressources"
          description="Partage de connaissances sur le développement frontend, l'architecture Next.js, et les fondamentaux de la sécurité web."
        />

        {posts.length === 0 ? (
          <div className="text-center py-20 border border-border/50 rounded-2xl bg-surface/30 glass">
            <p className="text-muted text-lg">Aucun article publié pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block relative p-8 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 text-sm text-muted mb-4">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-muted leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent/80 border border-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
