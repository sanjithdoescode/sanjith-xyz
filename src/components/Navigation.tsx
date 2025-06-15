
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'read my mind', path: '/blog' },
    { name: 'media', path: '/media' },
    { name: 'hire me', path: '/contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-background/80 backdrop-blur-lg border border-border/50 rounded-2xl shadow-lg shadow-black/10">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-mono text-lg font-bold text-primary hover:text-accent transition-colors">
              sanjith.xyz
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-primary/10 ${
                      location.pathname === item.path
                        ? 'text-primary bg-primary/5 shadow-sm'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/30">
            <div className="px-4 py-4 space-y-1 bg-background/60 backdrop-blur-sm rounded-b-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 hover:bg-primary/10 ${
                    location.pathname === item.path
                      ? 'text-primary bg-primary/5 shadow-sm'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
