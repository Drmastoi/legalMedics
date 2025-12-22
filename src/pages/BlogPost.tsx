import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  // Update document title and meta for SEO
  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = post.metaDescription;
        document.head.appendChild(meta);
      }

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", post.keywords.join(", "));
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = post.keywords.join(", ");
        document.head.appendChild(meta);
      }
    }

    return () => {
      document.title = "Legal Medics UK";
    };
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let inTable = false;
    let tableRows: string[] = [];
    let inList = false;
    let listItems: string[] = [];

    const processInlineMarkdown = (text: string) => {
      // Process bold
      text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      // Process links
      text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
      // Process inline code
      text = text.replace(/`(.+?)`/g, '<code class="bg-muted px-1 rounded text-sm">$1</code>');
      return text;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle tables
      if (trimmedLine.startsWith("|")) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        if (!trimmedLine.includes("---")) {
          tableRows.push(trimmedLine);
        }
        return;
      } else if (inTable) {
        // End of table
        const headerRow = tableRows[0]?.split("|").filter(Boolean).map((cell) => cell.trim());
        const dataRows = tableRows.slice(1);
        
        elements.push(
          <div key={`table-${index}`} className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-muted">
                  {headerRow?.map((cell, i) => (
                    <th key={i} className="border border-border px-4 py-2 text-left font-semibold">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "" : "bg-muted/50"}>
                    {row.split("|").filter(Boolean).map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-border px-4 py-2">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        inTable = false;
        tableRows = [];
      }

      // Handle list items
      if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ") || /^\d+\.\s/.test(trimmedLine)) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        const itemText = trimmedLine.replace(/^[-*]\s|^\d+\.\s/, "");
        listItems.push(itemText);
        return;
      } else if (inList && trimmedLine !== "") {
        // End of list
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-1 my-4 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
            ))}
          </ul>
        );
        inList = false;
        listItems = [];
      }

      // Handle headings
      if (trimmedLine.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      } else if (trimmedLine.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-8 mb-3 text-foreground">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      } else if (trimmedLine.startsWith("> ")) {
        elements.push(
          <blockquote key={index} className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
            {trimmedLine.replace("> ", "")}
          </blockquote>
        );
      } else if (trimmedLine.startsWith("❌") || trimmedLine.startsWith("✅")) {
        elements.push(
          <p key={index} className="my-2 text-muted-foreground" dangerouslySetInnerHTML={{ __html: processInlineMarkdown(trimmedLine) }} />
        );
      } else if (trimmedLine !== "" && !inTable && !inList) {
        elements.push(
          <p key={index} className="my-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: processInlineMarkdown(trimmedLine) }} />
        );
      }
    });

    // Handle any remaining list
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="final-list" className="list-disc list-inside space-y-1 my-4 text-muted-foreground">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <Layout>
      {/* Article Header */}
      <article>
        <header className="py-12 bg-accent">
          <div className="container max-w-4xl">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {post.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-12">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="block p-6 bg-card rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <Badge variant="secondary" className="mb-2">{relatedPost.category}</Badge>
                    <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your MEDCO Journey?</h2>
            <p className="mb-6 opacity-90">
              Our comprehensive training courses prepare you for success in medical-legal practice.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/courses">
                View Our Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
