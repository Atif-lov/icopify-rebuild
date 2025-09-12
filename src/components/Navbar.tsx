import { Button } from "@/components/ui/button";

const Navbar = () => {
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
          <Button variant="ghost" className="text-foreground hover:text-primary">
            LOGIN
          </Button>
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6">
            SIGN UP
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;