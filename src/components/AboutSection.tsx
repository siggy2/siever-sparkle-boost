import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Award } from "lucide-react";

const AboutSection = () => {
  const principles = [
    {
      icon: Target,
      title: "Proven Product-Market Fit",
      description: "We invest in companies that have already validated their solution and demonstrated clear market demand."
    },
    {
      icon: Zap,
      title: "Commercial Scaling Focus",
      description: "Our expertise lies in helping companies transition from proven concept to scalable commercial success."
    },
    {
      icon: Award,
      title: "Strategic Value Addition",
      description: "Beyond capital, we bring operational expertise, strategic guidance, and network access to accelerate growth."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Separating Signal from Noise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Siever, we understand that having a great product is just the beginning. 
              The real challenge lies in building the commercial engine that turns innovation into sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {principles.map((principle, index) => (
              <Card 
                key={principle.title} 
                className="group hover:shadow-card transition-all duration-300 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <principle.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-card rounded-3xl p-12 shadow-elegant">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Investment Philosophy
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe in the power of proven concepts. While others chase the latest trends, 
                we focus on companies that have already demonstrated product-market fit but need 
                strategic guidance to unlock their commercial potential. This approach allows us 
                to provide maximum value while minimizing risk.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">What We Look For</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Demonstrated product-market fit</li>
                    <li>• Clear market opportunity</li>
                    <li>• Strong founding team</li>
                    <li>• Scalability potential</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">What We Bring</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Commercial scaling expertise</li>
                    <li>• Strategic operational guidance</li>
                    <li>• Network and partnership access</li>
                    <li>• Long-term value creation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;