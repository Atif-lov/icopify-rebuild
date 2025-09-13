import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStartup Inc.",
      role: "Marketing Director",
      content: "iCopify helped us secure guest posts on 15+ high-authority websites within just 6 weeks. Our organic traffic increased by 180% and we ranked on the first page for 12 target keywords. The ROI has been incredible!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez", 
      company: "GrowthCorp",
      role: "SEO Manager",
      content: "I've tried many guest posting services before, but iCopify stands out. The quality of websites, fast turnaround times, and transparent pricing make them my go-to choice. Our domain authority jumped from 28 to 45 in 4 months.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Local Business Solutions",
      role: "CEO",
      content: "As a small business owner, I was skeptical about investing in guest posting. But iCopify's affordable plans starting at $4.99 made it accessible. We've seen a 250% increase in qualified leads since starting our campaign.",
      rating: 5,
      avatar: "EJ"
    },
    {
      name: "David Kim",
      company: "E-commerce Pro",
      role: "Digital Marketing Specialist",
      content: "The platform is incredibly user-friendly and the customer support is outstanding. They helped us target niche-specific websites in our industry. Our conversion rate from organic traffic improved by 65%.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Health & Wellness Co.",
      role: "Content Manager",
      content: "iCopify not only provided high-quality backlinks but also helped improve our brand visibility. We've been featured on major health websites and our brand mentions increased by 300%. Highly recommended!",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "Financial Advisors LLC",
      role: "Founder",
      content: "Working with iCopify has been a game-changer for our financial advisory firm. They secured placements on reputable finance websites that brought us 50+ new high-value clients. The quality speaks for itself.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <section className="py-section bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real businesses who trust iCopify
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-0">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Review Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;