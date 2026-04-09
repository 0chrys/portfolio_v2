import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
// We will use a standard highlight.js theme for the code blocks
import "highlight.js/styles/github-dark.css"; 

export default function MDXRemoteWrapper({ content }: { content: string }) {
  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <div className="prose prose-invert max-w-none 
      prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase
      prose-h2:text-2xl prose-h2:border-b prose-h2:border-border prose-h2:pb-4 prose-h2:mt-12
      prose-p:text-muted prose-p:leading-relaxed prose-p:text-lg
      prose-strong:text-foreground prose-strong:font-bold
      prose-code:bg-surface prose-code:p-1 prose-code:rounded prose-code:text-accent prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-surface/50 prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:p-6
      prose-li:text-muted prose-li:marker:text-accent
      prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
      <MDXRemote source={content} options={options} />
    </div>
  );
}
