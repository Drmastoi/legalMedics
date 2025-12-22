import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Preload LCP image for performance */}
      <img 
        src={heroBg} 
        alt="" 
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Bright Glass Card */}
          <div className="backdrop-blur-xl bg-card/60 border border-card/40 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              MEDCO Accredited Training
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Become a Certified
              <span className="text-primary block">Medical Legal Expert</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Professional training for medical professionals looking to write MEDCO-compliant 
              RTA reports. Learn from industry experts with our self-paced online courses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/courses">
                  View Our Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                Self-Paced Learning
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                Industry Experts
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                Certificate Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
