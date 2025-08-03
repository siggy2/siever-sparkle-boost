import { Card, CardContent } from "@/components/ui/card";
import disruptiveLogo from "@/assets/disruptive-logo.svg";
import documasterLogo from "@/assets/documaster-logo.png";
import ardoqLogo from "@/assets/ardoq-logo.png";
import dignioLogo from "@/assets/dignio-logo.png";
import easeeLogo from "@/assets/easee-logo.png";

const PortfolioSection = () => {
  const portfolioCompanies = [
    {
      name: "Dignio",
      description: "Digital remote care solutions for healthcare",
      website: "https://dignio.com",
      logo: dignioLogo,
    },
    {
      name: "Disruptive Technologies",
      description: "Wireless sensors for IoT data collection",
      website: "https://www.disruptive-technologies.com",
      logo: disruptiveLogo,
    },
    {
      name: "Ardoq",
      description: "Enterprise architecture software platform",
      website: "https://www.ardoq.com",
      logo: ardoqLogo,
    },
    {
      name: "Documaster",
      description: "Document management and compliance solutions",
      website: "https://www.documaster.com",
      logo: documasterLogo,
    },
    {
      name: "Easee",
      description: "Smart electric vehicle charging solutions",
      website: "https://easee.com",
      logo: easeeLogo,
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experience and Investments
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We invest our time and capital in innovative companies that are transforming their industries 
              through technology and strategic growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioCompanies.map((company, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 border-border/20 hover:border-primary/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 h-16 flex items-center justify-center">
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="max-h-16 w-auto object-contain"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">
                          {company.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {company.name}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {company.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;