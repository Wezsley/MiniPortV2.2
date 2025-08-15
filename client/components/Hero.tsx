import { useEffect, useState } from 'react';
import { ChevronDown, Cloud, Code, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'WESLEY BELMONTE';
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with low opacity hacker interface */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F94f0ce6f08004f31b1c4b29c8c86468e?format=webp&width=800')`
          }}
        />
        {/* Matrix grid overlay */}
        <div className="absolute inset-0 matrix-bg opacity-90" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyber-primary rounded-full animate-matrix-rain opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-primary to-cyber-secondary p-1 animate-spin">
              <div className="w-full h-full rounded-full bg-background p-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2Fe2cf993ac0204451bd9a2c42f8e14e9a?format=webp&width=800"
                  alt="Wesley Belmonte"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Floating particles around image */}
            <div className="absolute -inset-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyber-primary rounded-full animate-float opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Name with typing effect */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold terminal-font">
              <span className="glow-text text-cyber-primary">{text}</span>
              <span className="animate-pulse text-cyber-primary">|</span>
            </h1>
            
            <div className="text-lg md:text-xl text-muted-foreground terminal-font">
              <span className="text-cyber-secondary">&gt;</span> BSIT-3A_student.exe
            </div>
          </div>

          {/* Animated description */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="text-cyber-secondary">//</span> Aspiring developer with a passion for clean code.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="text-cyber-secondary">//</span> Learning, building, and growing one project at a time.
            </p>
          </div>

          {/* Target career with icon */}
          <div className="flex items-center justify-center space-x-4 p-4 border border-cyber-primary/30 rounded-lg bg-background/10 backdrop-blur-sm max-w-md mx-auto glow-border">
            <span className="text-cyber-secondary terminal-font">&gt; target_career:</span>
            <div className="flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-cyber-primary" />
              <span className="text-cyber-primary font-bold terminal-font">CLOUD ENGINEER</span>
            </div>
          </div>

          {/* Skills preview icons */}
          <div className="flex items-center justify-center space-x-8 pt-8">
            <div className="flex items-center space-x-2 text-cyber-primary">
              <Code className="w-6 h-6 animate-bounce" />
              <span className="text-sm terminal-font">DEVELOPER</span>
            </div>
            <div className="flex items-center space-x-2 text-cyber-secondary">
              <Palette className="w-6 h-6 animate-bounce" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm terminal-font">DESIGNER</span>
            </div>
            <div className="flex items-center space-x-2 text-cyber-accent">
              <Cloud className="w-6 h-6 animate-bounce" style={{ animationDelay: '1s' }} />
              <span className="text-sm terminal-font">CLOUD</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center space-y-2 pt-12">
            <span className="text-sm text-muted-foreground terminal-font animate-pulse">
              scroll_down()
            </span>
            <button
              onClick={scrollToAbout}
              className="p-2 rounded-full border border-cyber-primary/30 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all duration-300 animate-bounce"
            >
              <ChevronDown className="w-5 h-5 text-cyber-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-primary to-transparent animate-scan-line opacity-50" />
      </div>
    </section>
  );
}
