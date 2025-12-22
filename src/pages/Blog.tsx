import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog & Resources | Legal Medics UK - MEDCO Training Insights";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert insights on MEDCO accreditation, RTA report writing, and medical-legal practice. Stay updated with the latest guidance for medical professionals in the UK.");
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Layout>
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-lg text-muted-foreground">
              Expert insights, industry updates, and practical guidance for medical-legal professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest industry news and MEDCO updates delivered to your inbox.
          </p>
          <Button asChild>
            <Link to="/contact">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
