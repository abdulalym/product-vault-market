
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { File, ShieldCheck, Zap, RefreshCcw, BarChart, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Secure File Storage",
      description: "Your digital products are securely stored and protected from unauthorized access.",
      icon: <ShieldCheck className="h-10 w-10 text-brand-purple" />,
    },
    {
      title: "Instant Delivery",
      description: "Customers get immediate access to their purchases through secure download links.",
      icon: <Zap className="h-10 w-10 text-brand-purple" />,
    },
    {
      title: "Multiple File Types",
      description: "Sell PDFs, eBooks, audio files, design templates, software, and more.",
      icon: <File className="h-10 w-10 text-brand-purple" />,
    },
    {
      title: "Detailed Analytics",
      description: "Track sales, views, downloads, and customer behavior with detailed insights.",
      icon: <BarChart className="h-10 w-10 text-brand-purple" />,
    },
    {
      title: "Global Payments",
      description: "Accept payments from around the world with our secure payment processing.",
      icon: <Globe className="h-10 w-10 text-brand-purple" />,
    },
    {
      title: "Regular Updates",
      description: "Keep your products up to date and automatically deliver updates to customers.",
      icon: <RefreshCcw className="h-10 w-10 text-brand-purple" />,
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to sell digital products</h2>
          <p className="text-muted-foreground text-lg">
            DigitalShelf provides all the tools and features to help you sell your digital creations seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="border-border">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-background border rounded-xl p-8 lg:p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-2">
                Coming Soon
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Developer API for custom integrations</h3>
              <p className="text-muted-foreground">
                Build custom integrations with our developer API. Connect your digital products to your website, app, or other services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-brand-purple" />
                  <span>Custom webhooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-brand-purple" />
                  <span>Real-time event notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-brand-purple" />
                  <span>Programmatic product creation</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
                <pre className="whitespace-pre"><code>{`// Example API call
const response = await fetch('https://api.digitalshelf.co/v1/products', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'My Awesome eBook',
    price: 1999,
    description: 'A comprehensive guide'
  })
});

const product = await response.json();`}</code></pre>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-purple/5 rounded-full -mr-20 -mb-20"></div>
          <div className="absolute right-20 bottom-20 w-32 h-32 bg-brand-purple/5 rounded-full"></div>
        </div>
      </div>
    </section>
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

export default FeaturesSection;
