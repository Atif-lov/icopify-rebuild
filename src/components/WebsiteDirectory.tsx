import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Users } from "lucide-react";

const WebsiteDirectory = () => {
  const websites = [
    {
      id: 1,
      url: "new...",
      description: "Unhide the URL",
      maxDoFollow: 3,
      turnaround: "3 Days",
      categories: ["General", "All Niches"],
      monthlyTraffic: "31,486,515",
      ahrefs: 82,
      moz: 78,
      language: "English",
      price: "$4.99"
    },
    {
      id: 2,
      url: "pat...",
      description: "Unhide the URL",
      maxDoFollow: 3,
      turnaround: "3 Days",
      categories: ["General", "All Niches"],
      monthlyTraffic: "128,792,970",
      ahrefs: 93,
      moz: 91,
      language: "English",
      price: "$4.99"
    },
    {
      id: 3,
      url: "med...",
      description: "Unhide the URL",
      maxDoFollow: 3,
      turnaround: "3 Days",
      categories: ["Real Estate"],
      monthlyTraffic: "86,947,163",
      ahrefs: 94,
      moz: 95,
      language: "English",
      price: "$4.99"
    },
    {
      id: 4,
      url: "bef...",
      description: "Unhide the URL",
      maxDoFollow: 3,
      turnaround: "3 Days",
      categories: ["Health", "News and Media"],
      monthlyTraffic: "2,318,954",
      ahrefs: 76,
      moz: 78,
      language: "English",
      price: "$4.99"
    },
    {
      id: 5,
      url: "fur...",
      description: "Unhide the URL",
      maxDoFollow: 3,
      turnaround: "3 Days",
      categories: ["General", "Miscellaneous", "All Niches"],
      monthlyTraffic: "18,320,441",
      ahrefs: 81,
      moz: 72,
      language: "English",
      price: "$4.99"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            62249 Websites & Blogs That Accept Guest Posts
          </h2>
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
                  <span className="font-medium text-blue-600">{website.url}</span>
                  <span className="text-sm text-blue-500">{website.description}</span>
                </div>
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