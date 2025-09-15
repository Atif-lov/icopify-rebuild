import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { useState } from "react";
import AuthModal from "@/components/auth/AuthModal";

const HeroSection = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative bg-hero-gradient min-h-[600px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Premium Guest Posting{" "}
          <span className="text-accent-green">Services</span>
        </h1>
        
        <h2 className="text-2xl lg:text-3xl text-white mb-4 font-medium">
          Get Backlinks From High-Quality Websites
        </h2>
        
        <p className="text-xl lg:text-2xl text-white mb-8">
          From Only <span className="text-accent-green font-bold">$4.99</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 text-lg"
            onClick={() => setIsAuthModalOpen(true)}
          >
            👤 Sign Up Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-3 text-lg"
            onClick={scrollToPricing}
          >
            📊 View Pricing
          </Button>
        </div>
        
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
          defaultMode="signup"
        />
      </div>
    </section>
  );
};

export default HeroSection;