import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Ready to Scale?
            </h2>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
              If you're a company with proven product-market fit looking to scale commercially, 
              or an entrepreneur seeking strategic investment, we'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-secondary-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-secondary-foreground">Email</p>
                      <p className="text-secondary-foreground/80">contact@siever.no</p>
                    </div>
                  </div>
                  
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-secondary-foreground">Location</p>
                      <p className="text-secondary-foreground/80">Norway</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-secondary-foreground mb-3">
                  Investment Criteria
                </h4>
                <ul className="space-y-2 text-secondary-foreground/80">
                  <li>• Early to mid-stage companies</li>
                  <li>• Proven product-market fit</li>
                  <li>• Need for commercial scaling</li>
                  <li>• Strong growth potential</li>
                </ul>
              </div>
            </div>
            
            <Card className="shadow-elegant border-border/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name" 
                      className="border-border/30 focus:border-primary"
                    />
                    <Input 
                      placeholder="Last Name" 
                      className="border-border/30 focus:border-primary"
                    />
                  </div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="border-border/30 focus:border-primary"
                  />
                  <Input 
                    placeholder="Company Name" 
                    className="border-border/30 focus:border-primary"
                  />
                  <Textarea 
                    placeholder="Tell us about your company and scaling challenges..."
                    rows={6}
                    className="border-border/30 focus:border-primary resize-none"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;