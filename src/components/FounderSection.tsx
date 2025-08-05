import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Globe } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the Founder
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bringing decades of experience in identifying and scaling exceptional companies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="group hover:shadow-card transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Sigvart Voss Eriksen
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      Founder & Managing Partner
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Sigvart brings extensive experience in leading digital transformations 
                      and scaling technology companies across international markets. Most recently, 
                      he served as Head of Telenor Nordics, driving growth and operational excellence.
                    </p>
                    <p>
                      Prior to his regional leadership role, Sigvart was CEO of Tapad in the United States, 
                      where he successfully scaled the cross-device marketing technology company. 
                      He also led Omny, an industrial cybersecurity company owned by Aker and Telenor.
                    </p>
                    <p>
                      Throughout his career at Telenor, Sigvart has specialized in customer-facing 
                      transformations and has a proven track record of identifying and nurturing 
                      high-growth technology ventures.
                    </p>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <a 
                      href="https://www.linkedin.com/in/sigvartv/" 
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors duration-300 group"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a 
                      href="mailto:sigvart@siever.com" 
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors duration-300 group"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                    <a 
                      href="https://siever.com" 
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors duration-300 group"
                      aria-label="Website"
                    >
                      <Globe className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-hero rounded-3xl shadow-elegant overflow-hidden">
                  <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-primary">SVE</span>
                      </div>
                      <p className="text-primary-foreground/80">Founder Photo</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-card rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                "Building the next generation of Nordic champions"
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                My mission is to identify exceptional companies that have proven their value proposition 
                and help them achieve their full commercial potential. Every investment we make is a 
                partnership built on trust, expertise, and shared vision for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;