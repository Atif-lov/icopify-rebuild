const TrustedBrands = () => {
  const brands = [
    { name: "Zendesk", logo: "zendesk" },
    { name: "HubStaff", logo: "hubstaff" },
    { name: "Slack", logo: "slack" },
    { name: "Intercom", logo: "intercom" },
    { name: "HubSpot", logo: "hubspot" },
    { name: "Docker", logo: "docker" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="text-gray-400 font-semibold text-lg tracking-wide">
                {brand.name.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;