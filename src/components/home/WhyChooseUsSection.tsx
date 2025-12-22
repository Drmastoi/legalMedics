import { Shield, Award, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "MEDCO Compliant",
    description: "All our courses meet the latest MEDCO regulatory standards and requirements.",
  },
  {
    icon: Award,
    title: "Industry Recognized",
    description: "Certificates valued by solicitors, insurers, and medical-legal professionals nationwide.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from experienced medical-legal practitioners with years of industry expertise.",
  },
  {
    icon: BookOpen,
    title: "Self-Paced Learning",
    description: "Study at your own pace with lifetime access to course materials and resources.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Legal Medics UK?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to providing the highest quality medical-legal training in the UK
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
