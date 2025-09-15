const Footer = () => {
  const categories = [
    "Agriculture", "Animals and Pets", "Art", "Automobiles", "Business", "Books", "Beauty",
    "Career and Employment", "Computers", "Construction and Repairs", "Culture", "E-commerce", "Web-development",
    "Education", "Entertainment", "Environment", "Equipment", "Fashion", "Finance", "Food", "For Kids",
    "For Men", "For Women", "Gadgets", "Games", "General", "Hardware development", "Health",
    "Home and Family", "Humor", "Internet", "Law", "Leisure and Hobbies", "Lifestyle", "Literature",
    "Manufacturing", "Marketing", "Miscellaneous", "Mobile", "Movies", "Music", "Nature", "News and Media",
    "Personal Blogs", "Photography", "Places", "Politics", "Programming", "Public Service", "Real Estate",
    "Science", "Shopping", "Society", "Software development", "Sports", "Startups", "Technology",
    "Travelling", "Transport"
  ];

  const usefulLinks = [
    "Link Building", "Content Writing", "FAQs", "Privacy Policy", "Terms And Conditions", "Privacy Settings"
  ];

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-foreground mb-6">All Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {categories.map((category, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors py-1 block"
                >
                  {category}
                </a>
              ))}
              <a href="#" className="text-primary hover:text-primary-dark transition-colors py-1 block font-medium">
                Buy Backlinks
              </a>
              <a href="#" className="text-primary hover:text-primary-dark transition-colors py-1 block font-medium">
                Guest Posting
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Useful Links</h3>
              <div className="space-y-2">
                {usefulLinks.map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Address: Office 304</p>
                <p>58 Breckfield Road South</p>
                <p>Liverpool, L6 5DR, England</p>
                <p className="pt-2">+44 (0)151 203 9866</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 mt-12 text-center">
          <p className="text-muted-foreground">
            © 2025 ICOPIFY. All Rights Reserved. UK Company: 12507502
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;