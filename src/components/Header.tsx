import { Button } from "@/components/ui/button";
import sieverLogo from "@/assets/siever-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={sieverLogo} 
              alt="Siever Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Approach
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="default" className="shadow-elegant">
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;