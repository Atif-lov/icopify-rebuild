import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/components/auth/AuthContext";
import AuthModal from "@/components/auth/AuthModal";

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { user, signOut } = useAuth();

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleSignUpClick = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-background border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-accent-green">i</span>
            <span className="text-foreground">copify</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Link Building
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Digital PR & SEO
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Fix & Design Site
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Content Writing
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-foreground">Welcome, {user.email}</span>
              <Button variant="ghost" className="text-foreground hover:text-primary" onClick={handleSignOut}>
                LOGOUT
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" className="text-foreground hover:text-primary" onClick={handleLoginClick}>
                LOGIN
              </Button>
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6" onClick={handleSignUpClick}>
                SIGN UP
              </Button>
            </>
          )}
        </div>
        
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
          defaultMode={authMode}
        />
      </div>
    </nav>
  );
};

export default Navbar;