import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import GlitchText from '@/components/GlitchText';
import AsciiBackground from '@/components/AsciiBackground';
import Navigation from '@/components/Navigation';
import { ArrowRight } from 'lucide-react';
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AsciiBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono leading-tight">
              i'm <GlitchText text="sanjith" className="text-primary" />.
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">i like to work.</h2>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-medium text-muted-foreground leading-tight">
              i build things that prove i exist.
            </h3>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">19-year-old cs undergrad.
full stack dev. founder of unfounded companies.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/projects">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-3 text-lg group">
                see projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 py-3 text-lg">
                read my mind (blog)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary font-mono">03:47</div>
                <div className="text-sm text-muted-foreground">avg bedtime (am)</div>
              </div>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary font-mono">12+</div>
                <div className="text-sm text-muted-foreground">side projects alive</div>
              </div>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary font-mono">∞</div>
                <div className="text-sm text-muted-foreground">existential crises solved</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-background/70">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-primary font-mono">thy shalt do thy work before thy work does you</p>
        </div>
      </footer>
    </div>;
};
export default Index;
