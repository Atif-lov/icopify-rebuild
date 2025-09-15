import { Button } from "@/components/ui/button";
import { useState } from "react";
import AuthModal from "@/components/auth/AuthModal";

const HeroSection = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <section 
      id="hero"
      className="relative min-h-[600px] flex items-center"
      style={{
        background: 'linear-gradient(135deg, #007BFF 0%, #ffffff 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-12 leading-tight animate-fade-in">
          Increasing The Visibility Of Your Website
        </h1>
        
        <Button 
          size="lg" 
          className="bg-primary text-white hover:bg-primary/90 font-medium px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => setIsAuthModalOpen(true)}
        >
          Get Started
        </Button>
        
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