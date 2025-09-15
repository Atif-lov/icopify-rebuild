import { useEffect, useState } from "react";

const StatsSection = () => {
  const [counters, setCounters] = useState([0, 0, 0]);
  const finalValues = [0, 0, 0];

  const stats = [
    {
      icon: "🌐",
      label: "Registered Websites",
      suffix: "+"
    },
    {
      icon: "👥",
      label: "Publishers & Writers", 
      suffix: "+"
    },
    {
      icon: "✅",
      label: "Tasks Completed",
      suffix: "+"
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = finalValues.map((target, index) => {
      let current = 0;
      const increment = target / steps;
      
      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[index]);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-primary">
                {counters[index].toLocaleString()}
                <span className="text-accent-green">{stat.suffix}</span>
              </div>
              <p className="text-lg text-gray-600 font-medium">
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