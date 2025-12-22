import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, BookOpen, ArrowRight } from "lucide-react";

const courses = [
  {
    id: "medco-accreditation",
    title: "MEDCO Accreditation Training",
    description: "Complete training to become a MEDCO-registered medical expert. Learn the regulatory requirements and best practices for RTA medical assessments.",
    price: 495,
    duration: "8-10 hours",
    modules: 12,
    badge: "Most Popular",
    features: [
      "MEDCO registration guidance",
      "Legal framework training",
      "Assessment techniques",
      "Report writing standards",
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
    features: [
      "Report structure & format",
      "Evidence presentation",
      "Prognosis guidelines",
      "Common pitfalls to avoid",
    ],
  },
];

export function CoursesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, self-paced training designed for busy medical professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course) => (
            <Card key={course.id} className="relative flex flex-col">
              {course.badge && (
                <Badge className="absolute -top-3 left-6 bg-secondary text-secondary-foreground">
                  {course.badge}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-base">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold">£{course.price}</span>
                  <span className="text-muted-foreground">per person</span>
                </div>
                
                <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {course.modules} modules
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to={`/courses#${course.id}`}>
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/courses">View All Course Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
