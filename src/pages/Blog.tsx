
import { useState } from 'react';
import InfoCard from '@/components/InfoCard';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { poems, Poem } from '@/data/poems';

const Blog = () => {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const allTags = Array.from(new Set(poems.flatMap(poem => poem.tags)));
  const filteredPoems = filter === 'all' ? poems : poems.filter(poem => poem.tags.includes(filter));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-4">
              read my <span className="text-primary">mind</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">raw thoughts, unfiltered emotions.</p>
          </div>
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button variant={filter === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setFilter('all')} className="text-xs">
              all
            </Button>
            {allTags.map(tag => (
              <Button key={tag} variant={filter === tag ? 'default' : 'outline'} size="sm" onClick={() => setFilter(tag)} className="text-xs">
                #{tag}
              </Button>
            ))}
          </div>
          {/* Poems Grid */}
          <div className="grid gap-6">
            {filteredPoems.map(poem => (
              <InfoCard
                key={poem.id}
                title={
                  <span className="text-xl font-bold font-mono text-primary">{poem.title}</span>
                }
                subtitle={
                  <span className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />{poem.date}
                  </span>
                }
                description={
                  <span className="text-muted-foreground font-mono text-sm leading-relaxed">
                    {poem.preview}
                  </span>
                }
                className="cursor-pointer"
                onClick={() => setSelectedPoem(poem)}
                footer={
                  <div className="flex flex-wrap gap-1 mt-2">
                    {poem.tags.map(tag => (
                      <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                    <Button variant="ghost" size="sm" className="mt-3 text-primary hover:text-primary/80">
                      read full →
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
      {/* Poem Modal */}
      {selectedPoem && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold font-mono text-primary mb-2">{selectedPoem.title}</h2>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {selectedPoem.date}
                </div>
                <div className="flex flex-wrap gap-1">
                  {selectedPoem.tags.map(tag => <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                    #{tag}
                  </span>)}
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedPoem(null)} className="text-muted-foreground hover:text-foreground">
                ✕
              </Button>
            </div>
            <div className="prose prose-invert max-w-none">
              <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-foreground bg-transparent border-none p-0">
                {selectedPoem.content}
              </pre>
            </div>
          </div>
        </div>
      </div>}
      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-mono">
            words from the void. unedited, unfiltered, unapologetic.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Blog;
// NOTE: Blog.tsx is long; consider refactoring into smaller files!
