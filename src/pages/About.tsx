import { Layout } from "@/components/layout/Layout";
import { Award, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in medical-legal education.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Quality training accessible to medical professionals across the UK.",
  },
  {
    icon: Target,
    title: "Practicality",
    description: "Real-world skills you can apply immediately in your practice.",
  },
  {
    icon: Heart,
    title: "Support",
    description: "Ongoing guidance and resources even after course completion.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Legal Medics UK</h1>
            <p className="text-lg text-muted-foreground">
              We're dedicated to empowering medical professionals with the knowledge 
              and skills needed to excel in the medical-legal field.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                Legal Medics UK was founded with a clear mission: to provide comprehensive, 
                accessible training for medical professionals entering the medical-legal field.
              </p>
              <p className="text-muted-foreground mb-4">
                We understand that writing MEDCO-compliant RTA reports requires specific 
                knowledge that goes beyond clinical expertise. Our courses bridge this gap, 
                providing you with the legal understanding, report-writing skills, and 
                professional standards needed to succeed.
              </p>
              <p className="text-muted-foreground">
                Whether you're a GP, physiotherapist, or other medical professional, 
                our self-paced courses allow you to learn at your convenience while 
                maintaining the highest educational standards.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">500+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Trained Professionals</h3>
                    <p className="text-sm text-muted-foreground">Medical experts trained and certified</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-secondary">10+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Years Experience</h3>
                    <p className="text-sm text-muted-foreground">In medical-legal training</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">100%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">MEDCO Compliant</h3>
                    <p className="text-sm text-muted-foreground">Meeting all regulatory standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
