import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Users } from "lucide-react";

const WebsiteDirectory = () => {
  // You can edit this array to add your own websites that accept guest posts
  const websites = [
    {
      id: 1,
      name: "TechCrunch",
      url: "https://techcrunch.com",
      description: "Leading technology news and startup coverage",
      maxDoFollow: 2,
      turnaround: "7 Days",
      categories: ["Technology", "Startups", "AI"],
      monthlyTraffic: "31,486,515",
      ahrefs: 92,
      moz: 88,
      language: "English",
      price: "$299"
    },
    {
      id: 2,
      name: "Medium",
      url: "https://medium.com",
      description: "Open platform for writers and readers",
      maxDoFollow: 1,
      turnaround: "3 Days",
      categories: ["General", "Technology", "Business"],
      monthlyTraffic: "128,792,970",
      ahrefs: 93,
      moz: 91,
      language: "English",
      price: "$149"
    },
    {
      id: 3,
      name: "Forbes",
      url: "https://forbes.com",
      description: "Business and financial news publication",
      maxDoFollow: 2,
      turnaround: "10 Days",
      categories: ["Business", "Finance", "Entrepreneurship"],
      monthlyTraffic: "86,947,163",
      ahrefs: 94,
      moz: 95,
      language: "English",
      price: "$599"
    },
    {
      id: 4,
      name: "Entrepreneur",
      url: "https://entrepreneur.com",
      description: "Business and startup advice platform",
      maxDoFollow: 2,
      turnaround: "5 Days",
      categories: ["Business", "Startups", "Marketing"],
      monthlyTraffic: "12,318,954",
      ahrefs: 86,
      moz: 82,
      language: "English",
      price: "$399"
    },
    {
      id: 5,
      name: "Mashable",
      url: "https://mashable.com",
      description: "Digital culture and technology news",
      maxDoFollow: 1,
      turnaround: "4 Days",
      categories: ["Technology", "Digital Culture", "Social Media"],
      monthlyTraffic: "18,320,441",
      ahrefs: 81,
      moz: 72,
      language: "English",
      price: "$249"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Premium Websites That Accept Guest Posts
          </h2>
          <p className="text-lg text-muted-foreground">
            Click on any website to visit them directly
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-7 gap-4 bg-blue-50 p-4 text-sm font-semibold text-gray-700 border-b">
            <div>Websites</div>
            <div>Categories</div>
            <div>Monthly Traffic</div>
            <div>Ahrefs DR</div>
            <div>Moz DA</div>
            <div>Language</div>
            <div>Action</div>
          </div>

          {/* Website Listings */}
          {websites.map((website) => (
            <div key={website.id} className="grid grid-cols-7 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
              {/* Website Info */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <ExternalLink size={16} className="text-blue-600" />
                  <a 
                    href={website.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    {website.name}
                  </a>
                </div>
                <p className="text-sm text-gray-600">{website.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>Max {website.maxDoFollow} DoFollow links</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>Turnaround Time: {website.turnaround}</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-1">
                {website.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Monthly Traffic */}
              <div className="flex items-center">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
                  <span className="font-medium">{website.monthlyTraffic}</span>
                </div>
              </div>

              {/* Ahrefs DR */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded text-xs flex items-center justify-center font-bold">
                    A
                  </div>
                  <span className="font-medium">DR {website.ahrefs}</span>
                </div>
              </div>

              {/* Moz DA */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded text-xs flex items-center justify-center font-bold">
                    M
                  </div>
                  <span className="font-medium">DA {website.moz}</span>
                </div>
              </div>

              {/* Language */}
              <div className="flex items-center space-x-2">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDA1MkZGIi8+CjxyZWN0IHg9IjgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyNCIgZmlsbD0iI0ZGRkZGRiIvPgo8cmVjdCB4PSIxNiIgd2lkdGg9IjgiIGhlaWdodD0iMjQiIGZpbGw9IiNGRjAwMDAiLz4KPC9zdmc+"
                  alt="English"
                  className="w-6 h-4"
                />
                <span className="text-sm">{website.language}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-1">
                  Buy Post {website.price}
                </Button>
                <Button variant="outline" className="w-full text-red-500 border-red-500 hover:bg-red-50 text-sm py-1">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteDirectory;