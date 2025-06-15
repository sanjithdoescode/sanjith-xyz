import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import InfoCard from '@/components/InfoCard';
import { projects, Project } from '@/data/projects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              things i've <span className="text-primary">built</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              a collection of digital experiments, existential side projects, and attempts to solve problems 
              that probably don't need solving (but definitely needed building)
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <InfoCard
                key={project.id}
                title={(
                  <span className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </span>
                )}
                subtitle={(
                  <span className="text-sm text-accent mb-1 font-medium">{project.tagline}</span>
                )}
                description={project.description}
                className="p-6"
                footer={
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                }
              >
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant={project.status === 'live' ? 'default' : project.status === 'beta' ? 'secondary' : 'outline'}
                    className={`text-xs ${
                      project.status === 'live' ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                      project.status === 'beta' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' :
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                    }`}
                  >
                    {project.status}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full group-hover:border-primary/50 transition-colors">
                      deep dive
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.details}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">tech stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">screenshots</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.screenshots.map((screenshot, index) => (
                            <div key={index} className="aspect-video bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">
                              {screenshot}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            view code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button variant="outline" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              live demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </InfoCard>
            ))}
          </div>

          {/* Side Experiments */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              side <span className="text-accent">experiments</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                <h3 className="font-semibold mb-2">film analysis bot</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ai that dissects movie narratives and finds patterns in storytelling structures
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">python</Badge>
                  <Badge variant="outline" className="text-xs">nlp</Badge>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                <h3 className="font-semibold mb-2">sleep deprivation tracker</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  correlates coding productivity with hours of sleep (spoiler: it's complicated)
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">react</Badge>
                  <Badge variant="outline" className="text-xs">data viz</Badge>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                <h3 className="font-semibold mb-2">startup idea generator</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  generates terrible startup ideas so good you question if they're actually terrible
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">gpt-4</Badge>
                  <Badge variant="outline" className="text-xs">comedy</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
