import { Building2, MessageSquare, Users, Headphones, ShoppingCart, Box } from "lucide-react";

const TrustedBrands = () => {
  const brands = [
    { name: "Zendesk", icon: Headphones },
    { name: "HubStaff", icon: Users },
    { name: "Slack", icon: MessageSquare },
    { name: "Intercom", icon: MessageSquare },
    { name: "HubSpot", icon: ShoppingCart },
    { name: "Docker", icon: Box }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <div key={index} className="flex flex-col justify-center items-center space-y-2">
                <IconComponent size={32} className="text-gray-400" />
                <div className="text-gray-400 font-semibold text-sm tracking-wide">
                  {brand.name.toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;