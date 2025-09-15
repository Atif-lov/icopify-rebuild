const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Buyer Registration and Account Setup",
      description: "Prospective buyers start their journey on the iCopify guest posting marketplace by registering an account. They can sign up using their email address or social media accounts like Facebook or Gmail. Once registered, they receive a confirmation email and are ready to begin accessing thousands of quality sites for guest posting."
    },
    {
      number: "2", 
      title: "Publisher Search and Task Assignment",
      description: "Buyers navigate through the platform's inventory to search for suitable publishers to collaborate with. They can utilize various filters to refine their search based on metrics like domain authority, domain rating, and organic traffic. After identifying preferred publishers, buyers can send direct tasks to initiate collaboration."
    },
    {
      number: "3",
      title: "Task Creation and Submission", 
      description: "Buyers proceed to create tasks for the selected publishers, specifying their requirements and providing URLs for promotion. They have the option to choose between Content Placement, Content Creation & Placement, and Link Insertions. Tasks are submitted immediately for publisher review."
    },
    {
      number: "4",
      title: "Task Progress Monitoring and Communication",
      description: "Buyers utilize the MY ORDERS section to track the progress of their tasks and communicate directly with publishers regarding any task-related queries. Buyers can explore features like Open Offer to receive suggestions from publishers who are open to collaboration."
    }
  ];

  return (
    <section className="py-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          How Our Platform Works
        </h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;