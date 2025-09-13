import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TrustedBrands from "@/components/TrustedBrands";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import WebsiteDirectory from "@/components/WebsiteDirectory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TrustedBrands />
      <AboutSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <WebsiteDirectory />
      <Footer />
    </div>
  );
};

export default Index;
