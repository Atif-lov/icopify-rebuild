import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Gary G.",
      quote: "Being a startup company, we were very pleased with the performance and ranking results delivered through iCopify platform. We were able to achieve quality backlinks & branded guest blogs on our website in a relatively short period of time. The team has been very responsive in addressing any type of query.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David R.",
      quote: "The work of an SEO manager is an ongoing process with lots of ups & downs. But, since I have been associated with iCopify, my SEO procedures have become very seamless. Getting sponsored articles along with the highest level of transparency and professionalism has been the biggest benefit.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michaela W.",
      quote: "Being a marketer, I understand the importance of content marketing strategy and getting relevant content placed on the website. I have had a great experience working with iCopify as it helped me achieve my marketing goals effectively.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Client Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-shadow transform hover:scale-105 duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;