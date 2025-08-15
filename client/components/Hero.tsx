import { useEffect, useState } from 'react';
import { ChevronDown, Code, Palette, Cloud } from 'lucide-react';
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
      }, 100);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden minimal-bg">
      {/* Minimalist background with scenic image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F2fc2302300a447a8a8f1682bc6cb179a?format=webp&width=800')`
          }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-minimal-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-minimal-secondary/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-minimal-accent/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12 fade-in">
          
          {/* Minimalist Profile Image with Animations */}
          <div className="flex justify-center">
            <div className="profile-container w-48 h-48 md:w-64 md:h-64">
              {/* Glow effect */}
              <div className="profile-glow" />
              
              {/* Gradient ring */}
              <div className="profile-ring" />
              
              {/* Main image container */}
              <div className="relative w-full h-full">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-minimal-border bg-minimal-surface">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2Fe2cf993ac0204451bd9a2c42f8e14e9a?format=webp&width=800"
                    alt="Wesley Belmonte"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating indicators */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-minimal-primary rounded-full opacity-80 animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-minimal-secondary rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          {/* Name with elegant typing effect */}
          <div className="space-y-6 slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light clean-font">
              <span className="bg-gradient-to-r from-minimal-primary to-minimal-secondary bg-clip-text text-transparent">
                {text}
              </span>
              {currentIndex < fullText.length && (
                <span className="animate-pulse text-minimal-primary">|</span>
              )}
            </h1>
            
            <div className="text-lg md:text-xl text-minimal-text-light mono-font">
              <span className="text-minimal-primary">&gt;</span> BSIT-3A Student & Aspiring Cloud Engineer
            </div>
          </div>

          {/* Clean bio section */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-minimal-text-light leading-relaxed clean-font">
              Passionate about <span className="text-minimal-primary font-medium">cloud technologies</span>, 
              <span className="text-minimal-secondary font-medium"> web development</span>, and 
              <span className="text-minimal-accent font-medium"> creative design</span>.
            </p>
          </div>

          {/* Skills preview */}
          <div className="flex items-center justify-center space-x-12 pt-8">
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-minimal-primary/10 flex items-center justify-center group-hover:bg-minimal-primary/20 transition-colors duration-300">
                <Code className="w-6 h-6 text-minimal-primary" />
              </div>
              <span className="text-sm text-minimal-text-light clean-font">Developer</span>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-minimal-secondary/10 flex items-center justify-center group-hover:bg-minimal-secondary/20 transition-colors duration-300">
                <Palette className="w-6 h-6 text-minimal-secondary" />
              </div>
              <span className="text-sm text-minimal-text-light clean-font">Designer</span>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-minimal-accent/10 flex items-center justify-center group-hover:bg-minimal-accent/20 transition-colors duration-300">
                <Cloud className="w-6 h-6 text-minimal-accent" />
              </div>
              <span className="text-sm text-minimal-text-light clean-font">Cloud</span>
            </div>
          </div>

          {/* Elegant scroll indicator */}
          <div className="flex flex-col items-center space-y-4 pt-16">
            <span className="text-sm text-minimal-text-light clean-font">
              Discover more
            </span>
            <button
              onClick={scrollToAbout}
              className={cn(
                "group p-3 rounded-full border border-minimal-border bg-minimal-surface",
                "hover:border-minimal-primary hover:bg-minimal-primary/5",
                "transition-all duration-300 hover-lift"
              )}
            >
              <ChevronDown className="w-5 h-5 text-minimal-primary group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            {/* Scroll dots */}
            <div className="flex flex-col space-y-2 mt-4">
              <div className="w-1 h-1 bg-minimal-primary rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-minimal-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-1 h-1 bg-minimal-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
