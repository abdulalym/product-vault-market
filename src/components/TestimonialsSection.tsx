
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      content: "DigitalShelf made it incredibly easy to sell my UI kits. Within the first month, I generated more revenue than I ever did on other platforms.",
      avatar: "SJ"
    },
    {
      name: "David Chen",
      role: "eBook Author",
      content: "As a self-published author, I needed a simple way to sell my books. DigitalShelf handles everything from payment to delivery so I can focus on writing.",
      avatar: "DC"
    },
    {
      name: "Emily Rodriguez",
      role: "Music Producer",
      content: "The analytics on DigitalShelf are amazing. I can see who's buying my beats and which tracks are performing best. Game changer for independent artists.",
      avatar: "ER"
    },
    {
      name: "Michael Taylor",
      role: "Photography Instructor",
      content: "I've sold over 500 Lightroom presets on DigitalShelf. The platform is reliable, and the 0% commission on the Pro plan means more profit for me.",
      avatar: "MT"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by creators worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our community of creators has to say about selling their digital products with DigitalShelf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-brand-purple text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <QuoteIcon className="h-8 w-8 text-brand-purple/20" />
                </div>
                <p className="text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="mt-4 flex items-center">
                  <StarRating />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="inline-flex gap-2 mb-4">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="bg-brand-purple/90 w-2 h-2 rounded-full" />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            <div className="font-bold text-xl">TechCrunch</div>
            <div className="font-bold text-xl">Forbes</div>
            <div className="font-bold text-xl">Inc.</div>
            <div className="font-bold text-xl">ProductHunt</div>
            <div className="font-bold text-xl">Dribbble</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper components
const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
};

const StarRating = () => {
  return (
    <div className="flex">
      {Array(5).fill(0).map((_, i) => (
        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
};

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default TestimonialsSection;
