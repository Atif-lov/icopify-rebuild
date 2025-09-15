import { Card, CardContent } from "@/components/ui/card";

const WhyChooseSection = () => {
  const features = [
    {
      icon: "🌐",
      title: "Extensive Network Access",
      description: "iCopify's guest posting marketplace provides access to a vast network of blogs and websites across numerous industries. This diverse selection allows users to target specific audiences effectively, maximizing the reach and impact of their content."
    },
    {
      icon: "✅",
      title: "Quality Assurance Standards", 
      description: "iCopify maintains stringent editorial standards to ensure the guest post's quality. Through vetting processes and adherence to industry best practices, users can trust that their content will be published on reputable platforms, enhancing their brand credibility and authority."
    },
    {
      icon: "🤝",
      title: "Seamless Collaboration Tools",
      description: "The platform offers intuitive collaboration tools that facilitates smooth communication between Advertisers(Buyers) and publishers. From negotiating terms to submitting content and tracking progress, Icopify streamlines the guest posting process, fostering efficient and productive partnerships."
    },
    {
      icon: "💰",
      title: "Cost-Effective Solutions",
      description: "iCopify offers competitive pricing options, making guest posting accessible to businesses of all sizes. Whether operating on a limited budget or seeking to maximize ROI, users can find cost-effective solutions that align with their financial goals while still reaping the benefits of guest posting."
    }
  ];

  return (
    <section id="why-choose" className="py-section bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-card transition-shadow transform hover:scale-105 duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;