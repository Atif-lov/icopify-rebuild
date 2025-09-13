import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$4.99",
      description: "Perfect for small businesses",
      features: [
        "1 Guest Post per month",
        "Basic SEO optimization",
        "Email support",
        "Website quality check",
        "Content writing included"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19.99",
      description: "Best for growing businesses",
      features: [
        "5 Guest Posts per month",
        "Advanced SEO optimization",
        "Priority support",
        "Detailed analytics",
        "Content writing included",
        "Link tracking"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49.99",
      description: "For large-scale operations",
      features: [
        "15 Guest Posts per month",
        "Premium SEO optimization",
        "24/7 dedicated support",
        "Advanced analytics",
        "Content writing included",
        "Custom link strategies",
        "Account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-section bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your guest posting needs. All plans include high-quality content and premium website placements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'} hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-accent-green flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary-dark' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
            <span>✓ Quality guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;