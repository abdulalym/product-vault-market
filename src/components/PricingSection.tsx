
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Free",
      description: "For individuals just getting started",
      price: {
        monthly: "$0",
        annually: "$0",
      },
      features: [
        "Up to 2 digital products",
        "Basic analytics",
        "5% transaction fee",
        "1 GB storage",
        "Email support"
      ],
      limitationsCount: 3,
      cta: {
        text: "Get Started",
        link: "/register"
      }
    },
    {
      name: "Pro",
      description: "Perfect for growing creators",
      price: {
        monthly: "$19",
        annually: "$15",
      },
      popular: true,
      features: [
        "Unlimited digital products",
        "Advanced analytics",
        "0% transaction fee",
        "10 GB storage",
        "Priority support",
        "Custom domain",
        "Custom checkout branding",
        "Email marketing integration"
      ],
      limitationsCount: 0,
      cta: {
        text: "Go Pro",
        link: "/register"
      }
    },
    {
      name: "Business",
      description: "For teams and businesses",
      price: {
        monthly: "$49",
        annually: "$39",
      },
      features: [
        "Unlimited digital products",
        "Complete analytics suite",
        "0% transaction fee",
        "100 GB storage",
        "Dedicated support",
        "Custom domain",
        "Custom checkout branding",
        "Email marketing integration",
        "API access",
        "Team members",
        "Custom reports"
      ],
      limitationsCount: 0,
      cta: {
        text: "Contact Sales",
        link: "#"
      }
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your needs. No hidden fees or surprises.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-muted rounded-full p-1 flex">
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  isAnnual ? "bg-white shadow-sm" : ""
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual <span className="text-green-600 font-medium">(Save 20%)</span>
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${
                  !isAnnual ? "bg-white shadow-sm" : ""
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`flex flex-col relative ${
                plan.popular 
                  ? "border-brand-purple shadow-lg shadow-brand-purple/10 scale-[1.02] md:scale-105" 
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-0 right-0 flex justify-center">
                  <span className="bg-brand-purple text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {isAnnual ? plan.price.annually : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    /mo{isAnnual && ", billed annually"}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-0.5 mt-1">
                        <Check className="h-3.5 w-3.5 text-green-600" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitationsCount > 0 && (
                    <li className="flex items-start gap-2 pt-2">
                      <span className="text-muted-foreground text-sm">
                        <span className="text-brand-purple font-semibold">+ {plan.limitationsCount} limitations</span>
                      </span>
                    </li>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-brand-purple hover:bg-brand-purple-dark" 
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link to={plan.cta.link}>{plan.cta.text}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-muted rounded-lg p-8">
          <h3 className="text-xl font-bold mb-2">Need something custom?</h3>
          <p className="text-muted-foreground mb-4">
            Contact us for custom enterprise solutions tailored to your specific needs.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
