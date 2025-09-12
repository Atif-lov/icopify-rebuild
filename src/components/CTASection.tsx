import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-section bg-primary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Start Growing your Business Today
        </h2>
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-gray-100 font-bold px-12 py-4 text-lg"
        >
          GET STARTED
        </Button>
      </div>
    </section>
  );
};

export default CTASection;