
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock product data
const mockProduct = {
  id: 'prod-1',
  title: 'Ultimate UI Kit',
  slug: 'ultimate-ui-kit',
  price: 49.99,
  description: 'A comprehensive UI kit with 300+ components for modern web applications. Perfect for designers and developers looking to speed up their workflow.',
  image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000',
  features: [
    '300+ UI components',
    'Figma and Sketch files',
    'Responsive layouts',
    '1 year of updates',
    'Premium support'
  ],
  fileFormat: 'ZIP, Figma',
  fileSize: '156 MB'
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  // In a real app, fetch product by slug
  const product = mockProduct;
  
  const handleBuyNow = () => {
    toast({
      title: "Checkout initiated",
      description: "To implement actual checkout, connect Supabase and Stripe.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground">{product.description}</p>
              
              <h3 className="text-lg font-medium mt-6">What's included:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <Card className="sticky top-6">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-brand-purple text-white hover:bg-brand-purple-dark">Digital Product</Badge>
                    <div className="text-sm text-muted-foreground">
                      Format: {product.fileFormat}
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold">{product.title}</h1>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${product.price}</span>
                    <span className="text-muted-foreground ml-2">One-time purchase</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <span className="block">• File size: {product.fileSize}</span>
                    <span className="block">• Instant digital delivery</span>
                    <span className="block">• Secure download link</span>
                  </div>
                  
                  <Button 
                    onClick={handleBuyNow}
                    size="lg"
                    className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white"
                  >
                    Buy Now
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Secure payment processing by Stripe. Your information is protected by 256-bit SSL encryption.
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-sm">
                    <h4 className="font-medium">100% Satisfaction Guarantee</h4>
                    <p className="text-muted-foreground mt-1">
                      If you're not satisfied with your purchase, contact us within 30 days for a full refund.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper icon component
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default ProductPage;
