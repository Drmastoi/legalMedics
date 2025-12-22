import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Award, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "medco-accreditation",
    title: "MEDCO Accreditation Training",
    description: "Complete training to become a MEDCO-registered medical expert. This comprehensive course covers everything you need to know about becoming an accredited medical expert for RTA cases.",
    price: 495,
    duration: "8-10 hours",
    modules: 12,
    badge: "Most Popular",
    overview: "This course provides a complete pathway to MEDCO registration, covering the regulatory framework, clinical assessment techniques, and professional standards required for RTA medical examinations.",
    curriculum: [
      "Introduction to MEDCO and the regulatory framework",
      "Understanding the Civil Liability Act 2018",
      "The role of the medical expert in RTA claims",
      "Clinical assessment techniques for soft tissue injuries",
      "Whiplash injury assessment and grading",
      "Psychological assessment in RTA cases",
      "Report writing standards and templates",
      "Legal requirements and expert witness duties",
      "Common pitfalls and how to avoid them",
      "MedCo portal navigation and registration",
      "Case studies and practical exercises",
      "Final assessment and certification",
    ],
    outcomes: [
      "MEDCO registration eligibility",
      "Ability to write compliant medical reports",
      "Understanding of legal requirements",
      "Professional development certificate",
    ],
  },
  {
    id: "rta-report-writing",
    title: "RTA Report Writing Course",
    description: "Master the art of writing comprehensive, legally compliant RTA medical reports that meet solicitor and court requirements.",
    price: 395,
    duration: "6-8 hours",
    modules: 10,
    badge: null,
    overview: "Focused specifically on report writing, this course teaches you how to structure and write medical-legal reports that are clear, comprehensive, and meet the exacting standards of the legal profession.",
    curriculum: [
      "Report structure and formatting",
      "History taking for legal purposes",
      "Clinical examination documentation",
      "Diagnosis and prognosis writing",
      "Causation and attribution",
      "Evidence-based prognosis timelines",
      "Pre-existing conditions and apportionment",
      "Recommendations and treatment suggestions",
      "Common errors and rejection reasons",
      "Practical writing exercises and feedback",
    ],
    outcomes: [
      "Write clear, structured reports",
      "Avoid common rejection reasons",
      "Improved report turnaround times",
      "Certificate of completion",
    ],
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-lg text-muted-foreground">
              Professional, self-paced training for medical professionals. 
              All courses include lifetime access and a certificate of completion.
            </p>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {courses.map((course) => (
              <Card key={course.id} id={course.id} className="overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  {/* Course Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {course.badge && (
                          <Badge className="mb-2 bg-secondary text-secondary-foreground">
                            {course.badge}
                          </Badge>
                        )}
                        <CardTitle className="text-2xl">{course.title}</CardTitle>
                      </div>
                    </div>
                    
                    <CardDescription className="text-base mb-6">
                      {course.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.modules} modules
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        Certificate included
                      </div>
                    </div>
                    
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                        <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="mt-4">
                        <p className="text-muted-foreground">{course.overview}</p>
                      </TabsContent>
                      <TabsContent value="curriculum" className="mt-4">
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {course.curriculum.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="outcomes" className="mt-4">
                        <ul className="space-y-2">
                          {course.outcomes.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <Award className="h-4 w-4 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  {/* Pricing Card */}
                  <div className="bg-muted/50 p-8 flex flex-col justify-center">
                    <div className="text-center lg:text-left">
                      <p className="text-sm text-muted-foreground mb-2">Course Price</p>
                      <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-6">
                        <span className="text-4xl font-bold">£{course.price}</span>
                        <span className="text-muted-foreground">one-time</span>
                      </div>
                      
                      <ul className="space-y-2 mb-6 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Lifetime access
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Certificate included
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Self-paced learning
                        </li>
                      </ul>
                      
                      <Button className="w-full" size="lg" asChild>
                        <Link to={`/book/${course.id}`}>
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Check our FAQ or get in touch with our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/faq">View FAQ</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
