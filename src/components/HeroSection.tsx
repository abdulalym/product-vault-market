
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6">
            Create. Upload. Sell. <span className="text-brand-purple">Monetize</span> your digital creations.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            DigitalShelf is the easiest way to sell your ebooks, templates, music, 
            and design assets online. Get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple-dark text-lg">
              <Link to="/register">Start selling today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/product/ultimate-ui-kit">See example product</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
              alt="DigitalShelf Dashboard Preview" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-purple rounded-lg shadow-xl p-4 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <p className="font-medium text-white">New sale!</p>
            </div>
            <p className="text-sm text-white/90">Someone just purchased your "Ultimate UI Kit" for $49.99</p>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[500px] blur-3xl opacity-10 bg-brand-purple rounded-full"></div>
    </section>
  );
};

export default HeroSection;
