import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const About = () => {
  const obsessions = ['artificial intelligence', 'psychometrics & big-five', 'saas that doesn\'t suck', 'guitar riffs at 2am', 'kurt cobain\'s songwriting', 'biochemistry of everything'];
  const virtues = ['brutal honesty', 'relentless work ethic', 'creative chaos', 'existential questioning', 'coffee addiction', 'deadline-driven panic'];
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              who is this <span className="text-primary">insomniac</span>?
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card border-border">
                <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                  <img src="/lovable-uploads/a6f8b573-9e0b-4b4c-99ad-5014bffe00d5.png" alt="sanjith" className="w-full h-full object-cover" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg">sanjith</h3>
                  <p className="text-sm text-muted-foreground font-mono">cs undergrad '28</p>
                  <Badge variant="outline" className="text-xs">20,000mg caffeine
                </Badge>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="p-8 bg-card border-border h-full">
                <h2 className="text-2xl font-bold mb-6 text-primary">the unfiltered truth</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    i'm a 19-year-old cs undergrad who thinks sleep is optional and coffee is mandatory. 
                    currently surviving on a diet of energy drinks, imposter syndrome, and the relentless 
                    need to build something that proves i'm not just another college kid with delusions of grandeur.
                  </p>
                  <p>
                    obsessed with ai, psychology, and the intersection of technology and human behavior. 
                    i build saas products because i'm convinced i can solve problems better than the 
                    billion-dollar companies who somehow made everything complicated and boring.
                  </p>
                  <p>
                    when i'm not coding at 3am, you'll find me dissecting movie plots, analyzing song structures, 
                    or wondering why humans are so predictably unpredictable. i play guitar badly but with passion, 
                    and i write code the same way.
                  </p>
                  <p className="text-foreground font-medium">
                    goal: create something that matters before i graduate and get absorbed into corporate mediocrity.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Obsessions & Virtues */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold mb-6 text-accent">burning obsessions</h3>
              <div className="space-y-3">
                {obsessions.map((obsession, index) => <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{obsession}</span>
                  </div>)}
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold mb-6 text-primary">relentless virtues</h3>
              <div className="space-y-3">
                {virtues.map((virtue, index) => <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{virtue}</span>
                  </div>)}
              </div>
            </Card>
          </div>

          {/* Philosophy */}
          <Card className="mt-8 p-8 bg-card border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">existential manifesto</h3>
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-6">
              "if you're not slightly uncomfortable with what you're building, 
              you're probably not pushing hard enough. comfort is the enemy of progress, 
              and sleep is overrated when you're this close to something that might actually matter."
            </blockquote>
            <p className="text-right text-sm text-muted-foreground mt-4">— me, at 4:23am</p>
          </Card>
        </div>
      </div>
    </div>;
};
export default About;