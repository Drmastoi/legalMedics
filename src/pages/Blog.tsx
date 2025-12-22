import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the MEDCO Accreditation Process in 2024",
    description: "A comprehensive guide to becoming a MEDCO-registered medical expert, including the latest requirements and application process.",
    category: "MEDCO",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "medco-accreditation-process-2024",
  },
  {
    id: 2,
    title: "Common Mistakes in RTA Medical Reports and How to Avoid Them",
    description: "Learn about the most frequent errors that lead to report rejections and how to ensure your reports meet the required standards.",
    category: "Report Writing",
    date: "2024-01-10",
    readTime: "6 min read",
    slug: "common-rta-report-mistakes",
  },
  {
    id: 3,
    title: "The Civil Liability Act 2018: What Medical Experts Need to Know",
    description: "An overview of how the Civil Liability Act affects whiplash claims and medical reporting requirements.",
    category: "Legislation",
    date: "2024-01-05",
    readTime: "7 min read",
    slug: "civil-liability-act-2018-guide",
  },
  {
    id: 4,
    title: "Prognosis Writing: Best Practices for RTA Injuries",
    description: "Guidance on writing accurate and defensible prognoses for soft tissue and whiplash injuries.",
    category: "Report Writing",
    date: "2023-12-20",
    readTime: "5 min read",
    slug: "prognosis-writing-best-practices",
  },
  {
    id: 5,
    title: "Expanding Your Medical-Legal Practice: Opportunities for Healthcare Professionals",
    description: "Explore the benefits of adding medical-legal work to your practice and how to get started.",
    category: "Career",
    date: "2023-12-15",
    readTime: "6 min read",
    slug: "expanding-medical-legal-practice",
  },
  {
    id: 6,
    title: "The Role of Psychological Assessment in RTA Cases",
    description: "Understanding when and how to assess psychological injuries in road traffic accident claims.",
    category: "Clinical",
    date: "2023-12-10",
    readTime: "7 min read",
    slug: "psychological-assessment-rta-cases",
  },
];

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Layout>
      {/* Hero */}
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

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
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

      {/* Newsletter CTA */}
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
