import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CoursesSection } from "@/components/home/CoursesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUsSection />
      <CoursesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
