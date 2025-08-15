import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Terminal, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isDark, setIsDark] = useState(true);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Theme locked to dark mode for hacker aesthetic
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-cyber-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Terminal className="w-8 h-8 text-cyber-primary animate-glow-pulse" />
              <div className="absolute inset-0 animate-ping">
                <Terminal className="w-8 h-8 text-cyber-primary opacity-20" />
              </div>
            </div>
            <span className="text-xl font-bold terminal-font glow-text">
              Wesley<span className="text-cyber-secondary">.</span>dev
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 group",
                  "hover:text-cyber-primary terminal-font overflow-hidden",
                  "border border-transparent hover:border-cyber-primary/30",
                  "before:absolute before:inset-0 before:bg-cyber-primary/10",
                  "before:translate-x-[-100%] before:transition-transform before:duration-300",
                  "hover:before:translate-x-0"
                )}
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <span>&gt;</span>
                  <span>{item.name}</span>
                </span>
                {/* Glitch effect on hover */}
                <div className="absolute inset-0 bg-cyber-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* System Status */}
            <div
              className={cn(
                "relative p-3 border border-cyber-primary/40 bg-cyber-dark/20 backdrop-blur-sm",
                "cyber-glass"
              )}
            >
              <div className="relative z-10 flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse" />
                <span className="text-xs terminal-font text-cyber-primary hidden sm:block">ONLINE</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "md:hidden relative p-3 rounded border border-cyber-primary/40 bg-cyber-dark/20 backdrop-blur-sm",
                "hover:border-cyber-primary hover:bg-cyber-primary/10",
                "transition-all duration-300 group overflow-hidden",
                "before:absolute before:inset-0 before:bg-cyber-primary/10",
                "before:scale-0 before:transition-transform before:duration-300",
                "hover:before:scale-100"
              )}
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="w-4 h-4 text-cyber-primary" />
                ) : (
                  <Menu className="w-4 h-4 text-cyber-primary" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm border border-cyber-primary/20 rounded-lg mt-2 matrix-bg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block w-full text-left px-3 py-2 text-sm font-medium",
                    "hover:text-cyber-primary hover:bg-cyber-primary/10",
                    "transition-all duration-300 rounded-md terminal-font"
                  )}
                >
                  <span className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4" />
                    <span>{item.name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
