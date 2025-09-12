import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Gary G.",
      content: "Being a startup company, we were very pleased with the performance and ranking results delivered through iCopify platform. We were able to achieve quality backlinks & branded guest blogs on our website in a relatively short period of time. The team has been very responsive in addressing any type of query."
    },
    {
      name: "David R.", 
      content: "The work of an SEO manager is an ongoing process with lots of ups & downs. But, since I have been associated with iCopfiy, my SEO procedures have become very seamless. Getting sponsored articles along with the highest level of transparency and professionalism has been the biggest benefit."
    },
    {
      name: "Michaela W.",
      content: "Being a marketeer, I understand the importance of content marketing strategy and getting relevant content placed on the website. I have had a great experience working with iCopify as it helped me connect with professionals who could provide me cost-effective & top-notch content."
    }
  ];

  return (
    <section className="py-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Here's What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <h4 className="font-bold text-foreground">
                  {testimonial.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;