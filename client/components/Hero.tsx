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
      {/* Enhanced background with scenic image and animations */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ opacity: 0.22 }}
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F2fc2302300a447a8a8f1682bc6cb179a?format=webp&width=800')`
          }}
        />
        {/* Subtle animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />

        {/* Advanced floating elements with unique animations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Morphing geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-minimal-primary/20 morphing-blob" />
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-minimal-secondary/15 liquid-effect" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-minimal-accent/25 morphing-blob" style={{ animationDelay: '2s' }} />

          {/* Neural network dots */}
          <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-minimal-primary/30 rounded-full neural-dot" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-minimal-secondary/20 rounded-full neural-dot" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-minimal-accent/25 rounded-full neural-dot" style={{ animationDelay: '2.5s' }} />

          {/* Advanced matrix rain */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="advanced-matrix-rain"
              style={{
                left: `${10 + i * 12}%`,
                height: `${30 + Math.random() * 40}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}

          {/* Holographic moving gradients */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-minimal-primary/8 to-transparent rounded-full liquid-effect" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-minimal-secondary/5 to-transparent rounded-full morphing-blob" style={{ animationDelay: '4s' }} />

          {/* Code stream effects */}
          <div className="absolute top-1/3 left-0 w-24 h-0.5 code-stream-effect" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 right-0 w-32 h-0.5 code-stream-effect" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-20 h-0.5 code-stream-effect" style={{ animationDelay: '3s' }} />
        </div>

        {/* Subtle overlay animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-minimal-primary/2 to-transparent animate-pulse" style={{ animationDelay: '5s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12 fade-in">
          
          {/* Minimalist Profile Image with Animations */}
          <div className="flex justify-center mt-20">
            <div className="profile-container w-48 h-48 md:w-64 md:h-64">
              {/* Glow effect */}
              <div className="profile-glow" />

              {/* Gradient ring */}
              <div className="profile-ring" />

              {/* Main image container with advanced effects */}
              <div className="relative w-full h-full">
                <div className="w-full h-full rounded-full overflow-hidden quantum-border bg-minimal-surface relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2Fe2cf993ac0204451bd9a2c42f8e14e9a?format=webp&width=800"
                    alt="Wesley Belmonte"
                    className="w-full h-full object-cover"
                  />

                  {/* Advanced inner animation overlay */}
                  <div className="absolute inset-0 rounded-full">
                    {/* Quantum breathing effect */}
                    <div className="absolute inset-3 rounded-full border border-minimal-primary/40 neural-dot" />
                    <div className="absolute inset-5 rounded-full border border-minimal-secondary/30 neural-dot" style={{ animationDelay: '0.7s' }} />
                    <div className="absolute inset-7 rounded-full border border-minimal-accent/20 neural-dot" style={{ animationDelay: '1.4s' }} />

                    {/* Liquid floating particles */}
                    <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-minimal-primary/70 rounded-full liquid-effect" />
                    <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-minimal-secondary/50 morphing-blob" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-minimal-accent/60 neural-dot" style={{ animationDelay: '2s' }} />

                    {/* Advanced scanning effects */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-minimal-primary/50 to-transparent code-stream-effect" />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-minimal-secondary/40 to-transparent code-stream-effect" style={{ animationDelay: '1.5s' }} />
                    </div>

                    {/* Holographic overlay */}
                    <div className="absolute inset-0 rounded-full holographic-card opacity-20" />
                  </div>
                </div>

                {/* Advanced floating indicators */}
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-minimal-primary rounded-full neural-dot" />
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-minimal-secondary rounded-full liquid-effect" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-0 left-0 w-2 h-2 bg-minimal-accent rounded-full morphing-blob" style={{ animationDelay: '1s' }} />
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
