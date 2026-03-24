import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

// Note: To render MDX dynamically we would typically use next-mdx-remote
// Since we have a simpler setup, we'll output the raw markdown here
// Or ideally compile it if using a full MDX integration.
// For this portfolio, since the content is basic MD, we can just use dangerouslySetInnerHTML
// translated with a simple markdown parser, or since we installed @next/mdx, 
// if user uses .mdx pages natively, Next.js handles them via routing.
// However, since we read them via fs (Dynamic routing approach), we need markdown-to-jsx or similar.
// To keep within the scope of requested dependencies without adding more, 
// We will implement a basic React-based renderer for the raw test content.

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

  return (
    <article className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent mb-12 transition-colors group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Retour aux articles
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-border pb-10">
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

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-md bg-surface border border-border text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose-custom">
          {/* Note: since we're using raw MDX strings and no markdown parser dependency was specified in the original list other than mdx modules,
              we use a simple approach for the demo. In a real real Next app, it would either use next-mdx-remote or pure ReactMarkdown.
              We'll use a hack to render the raw string if needed, or better, we can assume the user will install react-markdown or use mdx natively.
              Wait! We did NOT install react-markdown. So `import ReactMarkdown` will fail!
              
              Let's fix this right now inside this component by using native MDX if possible, OR if that's complex without next-mdx-remote,
              let's write an install command for `react-markdown` or just build simple HTML. */
          }
          
          <div dangerouslySetInnerHTML={{ __html: convertMdToHtml(post.content) }} />
        </div>
      </div>
    </article>
  );
}

// Simple markdown to HTML converter for the demo since we didn't install a parser
function convertMdToHtml(md: string): string {
  let html = md;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");
  
  // Bold
  html = html.replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>");
  
  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2' target='_blank'>$1</a>");
  
  // Code blocks
  html = html.replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>");
  
  // Inline code
  html = html.replace(/`([^`]+)`/gim, "<code>$1</code>");
  
  // Lists
  html = html.replace(/^\*(.*$)/gim, "<ul><li>$1</li></ul>");
  html = html.replace(/<\/ul>\n<ul>/gim, ""); // Merge consecutive lists
  
  // Paragraphs
  html = html.split("\n\n").map(p => {
    if (p.trim().startsWith("<") || p.trim().length === 0) return p;
    return `<p>${p}</p>`;
  }).join("\n");
  
  return html;
}
