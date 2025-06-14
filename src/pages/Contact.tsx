

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      platform: 'Email',
      handle: 'sanjithkarthik@icloud.com',
      url: 'mailto:sanjithkarthik@icloud.com',
      icon: Mail,
      description: 'drop me a line'
    },
    {
      platform: 'X (Twitter)',
      handle: '@sanjithkarthik',
      url: 'https://x.com/sanjithkarthik',
      icon: null,
      customIcon: '𝕏',
      description: 'random thoughts & updates'
    },
    {
      platform: 'LinkedIn',
      handle: 'linkedin/sanjithkarthik',
      url: 'https://linkedin.com/in/sanjithkarthik',
      icon: null,
      customImage: '/lovable-uploads/e8a8168c-a13e-49c3-ade6-fbff832f7170.png',
      description: 'professional stuff'
    },
    {
      platform: 'Instagram',
      handle: 'blahbluebleela',
      url: 'https://instagram.com/blahbluebleela',
      icon: Instagram,
      description: 'life in pixels'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-mono">
              hire me.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              got a project? need someone who codes at 3am? 
              let's build something that doesn't suck.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <Card key={contact.platform} className="bg-card border-border hover:border-primary/50 transition-all duration-200 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      {contact.customIcon ? (
                        <span className="text-primary text-xl font-bold">{contact.customIcon}</span>
                      ) : contact.customImage ? (
                        <img src={contact.customImage} alt={contact.platform} className="h-5 w-5" />
                      ) : (
                        <IconComponent className="h-5 w-5 text-primary" />
                      )}
                      {contact.platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background group-hover:border-primary group-hover:text-primary group-hover:hover:bg-primary group-hover:hover:text-primary-foreground transition-colors"
                    >
                      <a 
                        href={contact.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-mono"
                      >
                        {contact.handle}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Message */}
          <div className="text-center space-y-4">
            <Card className="bg-card border-border p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">
                  quick message
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  whether it's a full-stack app, a crazy idea, or just want to chat about code at ungodly hours - 
                  i'm always down to collaborate on something meaningful.
                </p>
                <p className="text-sm text-muted-foreground font-mono">
                  response time: usually within 24 hours (unless i'm debugging something)
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-mono">
            built by a sleep-deprived cs student. no spam, just real talk.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

