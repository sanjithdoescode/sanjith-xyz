import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold font-mono text-muted-foreground">
            still mid.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            working on things.
          </p>
          
          <div className="pt-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-3 text-lg group"
            >
              <a 
                href="https://github.com/sanjithdoescode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                check github instead
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;