import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, BookOpen, Award, ArrowLeft, CreditCard, Lock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const courses = {
  "medco-accreditation": {
    id: "medco-accreditation",
    title: "MEDCO Accreditation Training",
    price: 495,
    duration: "8-10 hours",
    modules: 12,
  },
  "rta-report-writing": {
    id: "rta-report-writing",
    title: "RTA Report Writing Course",
    price: 395,
    duration: "6-8 hours",
    modules: 10,
  },
};

const BookCourse = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const course = courseId ? courses[courseId as keyof typeof courses] : null;
  
  if (!course) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The course you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // This will be replaced with actual Stripe integration
    toast({
      title: "Payment Integration Required",
      description: "Stripe payment integration will be set up to process payments securely.",
    });
    
    setIsProcessing(false);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Complete Your Booking</h1>
              <p className="text-muted-foreground mb-8">
                Fill in your details below to enroll in the course.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Professional Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="profession">Profession *</Label>
                      <Input id="profession" name="profession" placeholder="e.g., GP, Physiotherapist" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registration">Professional Registration Number</Label>
                      <Input id="registration" name="registration" placeholder="e.g., GMC number" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Details
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Lock className="h-3 w-3" />
                      Secured by Stripe
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-6 bg-muted rounded-lg text-center">
                      <p className="text-muted-foreground">
                        Stripe payment form will appear here
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay £${course.price} and Enroll`}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  By completing this purchase, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">{course.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.modules} modules
                      </span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Lifetime access to course
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Certificate of completion
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Downloadable resources
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      14-day money-back guarantee
                    </li>
                  </ul>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Course Price</span>
                      <span>£{course.price}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>VAT (0%)</span>
                      <span>£0.00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>£{course.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">MEDCO Accredited Training</p>
                      <p className="text-sm text-muted-foreground">
                        Our courses meet all MEDCO regulatory standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookCourse;
