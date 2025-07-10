
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const obsessions = ['artificial intelligence', 'psychometrics & big-five', 'saas that doesn\'t suck', 'guitar riffs at 2am', 'kurt cobain\'s songwriting', 'biochemistry of everything'];
  const virtues = ['brutal honesty', 'relentless work ethic', 'creative chaos', 'existential questioning', 'coffee addiction', 'deadline-driven panic'];

  return (
    <div className="min-h-screen bg-background text-foreground">
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
                <h2 className="text-2xl font-bold mb-6 text-primary">porfile</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    hi.
                  </p>
                  <p>
                    i have been studying and messing around with full stack for awhile. <em>cough cough cursor cough cough</em>.
                  </p>
                  <p>
                    been into computers for as long as i can remember. trying to convert my obsession with it into something useful.
                  </p>
                  <p>
                    been working with .tsx, .js, .py, .java.
                  </p>
                  <p>
                    ai and psychology. intersection of technology and human behavior is ONE of my fever dreams.
                  </p>
                  <p>
                    love to brainstorm ideas and (ideally) turn them real.
                  </p>
                  <p>
                    apart from that, i really like rock and metal. sometimes i'd imagine myself as a part-time singing guitarist. i also write here and there.
                  </p>
                  <p>
                    mentally ill, but trying to be better! +1% everyday.
                  </p>
                  <p>
                    i don't have much for you today. with time and my commitment, it will change. pinky promise!
                  </p>
                  <p className="text-foreground font-medium">
                    <strong>tldr - create something that matters. current obstacle - skill issue</strong>
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Obsessions & Virtues */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground">burning obsessions</h3>
              <div className="space-y-3">
                {obsessions.map((obsession, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{obsession}</span>
                  </div>
                ))}
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
    </div>
  );
};

export default About;
