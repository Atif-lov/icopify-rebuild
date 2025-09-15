import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/components/auth/AuthContext";
import AuthModal from "@/components/auth/AuthModal";

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { user, signOut } = useAuth();

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLogout = async () => {
    await signOut();
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">iCopify</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-primary transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('why-choose')} className="text-gray-700 hover:text-primary transition-colors">Why Choose Us</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary transition-colors">Testimonials</button>
            
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Welcome, {user.email}</span>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={() => handleAuthClick('login')} 
                  variant="ghost"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => handleAuthClick('signup')}
                >
                  Register
                </Button>
              </div>
            )}
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        defaultMode={authMode}
      />
    </nav>
  );
};

export default Navbar;