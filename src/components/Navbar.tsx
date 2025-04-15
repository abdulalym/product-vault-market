
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mock auth state - in a real app, you'd use a context or Redux for this
  const isLoggedIn = false;
  
  return (
    <header className="border-b py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-purple rounded-md w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold">DS</span>
          </div>
          <span className="text-xl font-bold">DigitalShelf</span>
        </Link>
        
        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        ) : (
          <nav className="flex items-center gap-8">
            <ul className="flex items-center gap-6">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product/ultimate-ui-kit" className="text-muted-foreground hover:text-foreground">
                  Products
                </Link>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
              </li>
            </ul>
            
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <Button asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button className="bg-brand-purple hover:bg-brand-purple-dark" asChild>
                    <Link to="/register">Sign up</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16">
          <div className="container py-8 flex flex-col gap-6">
            <Link 
              to="/" 
              className="py-3 text-lg border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/product/ultimate-ui-kit" 
              className="py-3 text-lg border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <a 
              href="#pricing" 
              className="py-3 text-lg border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            
            <div className="flex flex-col gap-3 mt-6">
              {isLoggedIn ? (
                <Button asChild onClick={() => setIsMenuOpen(false)}>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button variant="outline" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button className="bg-brand-purple hover:bg-brand-purple-dark" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link to="/register">Sign up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
