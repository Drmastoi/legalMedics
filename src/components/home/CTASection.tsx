import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Medical-Legal Career?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join hundreds of medical professionals who have enhanced their careers 
            with our MEDCO-accredited training courses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/courses">
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:03333395773">
                <Phone className="mr-2 h-4 w-4" />
                Call Us: 0333 339 5773
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
