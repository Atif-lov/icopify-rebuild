import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Buyer Registration and Account Setup",
      description: "Prospective buyers start their journey on the iCopify guest posting marketplace by registering an account. They can sign up using their email address or social media accounts like Facebook or Gmail. Once registered, they receive a confirmation email and are ready to begin accessing thousands of quality sites for guest posting.",
      mockup: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <Button className="w-full bg-primary text-white">Sign Up Now</Button>
        </div>
      )
    },
    {
      number: "2", 
      title: "Publisher Search and Task Assignment",
      description: "Buyers navigate through the platform's inventory to search for suitable publishers to collaborate with. They can utilize various filters to refine their search based on metrics like domain authority, domain rating, and organic traffic. After identifying preferred publishers, buyers can send direct tasks to initiate collaboration.",
      mockup: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex gap-2 mb-2">
            <input className="flex-1 p-2 border rounded" placeholder="Search publishers..." />
            <select className="p-2 border rounded">
              <option>Domain Authority</option>
            </select>
          </div>
        </div>
      )
    },
    {
      number: "3",
      title: "Task Creation and Submission", 
      description: "Buyers proceed to create tasks for the selected publishers, specifying their requirements and providing URLs for promotion. They have the option to choose between Content Placement, Content Creation & Placement, and Link Insertions. Tasks are submitted immediately for publisher review.",
      mockup: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="task-type" /> Content Placement
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="task-type" /> Content Creation & Placement
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="task-type" /> Link Insertions
            </label>
          </div>
        </div>
      )
    },
    {
      number: "4",
      title: "Task Progress Monitoring and Communication",
      description: "Buyers utilize the MY ORDERS section to track the progress of their tasks and communicate directly with publishers regarding any task-related queries. Buyers can explore features like Open Offer to receive suggestions from publishers who are open to collaboration.",
      mockup: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm">Task in Progress</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          How Our Platform Works
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.mockup}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;