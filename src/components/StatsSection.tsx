const StatsSection = () => {
  const stats = [
    {
      number: "62,249",
      label: "Registered Websites",
      suffix: "+"
    },
    {
      number: "35,811",
      label: "Publishers & Writers", 
      suffix: "+"
    },
    {
      number: "385,549",
      label: "Tasks Completed",
      suffix: "+"
    }
  ];

  return (
    <section className="bg-stats-bg py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.number}
                <span className="text-accent-green text-6xl">{stat.suffix}</span>
              </div>
              <p className="text-lg text-gray-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;