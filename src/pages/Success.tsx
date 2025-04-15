
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Success = () => {
  // In a real app, you would verify the payment with Stripe here
  useEffect(() => {
    // Example: Check payment status or verify the purchase
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12 flex items-center justify-center">
        <Card className="w-full max-w-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Thank you for your purchase!</h1>
          <p className="text-muted-foreground mb-8">
            Your payment was successful and your digital product is ready for download.
          </p>
          
          <div className="bg-muted rounded-lg p-4 mb-6">
            <h2 className="font-medium mb-2">Download your product</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Your download link is available below. This link will expire in 24 hours.
            </p>
            <Button className="w-full">
              Download Now
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              A copy of this download link has also been sent to your email.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button variant="ghost" className="w-full" asChild>
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Success;
