import { useEffect, useState } from 'react';
import { Code2, Terminal } from 'lucide-react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const loadingMessages = [
    'Initializing neural networks...',
    'Compiling creative algorithms...',
    'Loading Wesley.exe...',
    'Connecting to the matrix...',
    'Rendering awesomeness...',
    'Almost there...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messageIndex = Math.floor((progress / 100) * loadingMessages.length);
    setLoadingText(loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)]);
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md">
        {/* Animated logo */}
        <div className="relative mx-auto w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-minimal-primary/20" />
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-minimal-primary animate-spin"
            style={{ animationDuration: '1s' }}
          />
          <div className="absolute inset-2 rounded-full border-2 border-minimal-secondary/30" />
          <div 
            className="absolute inset-2 rounded-full border-2 border-transparent border-r-minimal-secondary animate-spin"
            style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
          />
          <div className="absolute inset-6 bg-minimal-primary/20 rounded-full flex items-center justify-center">
            <Code2 className="w-6 h-6 text-minimal-primary morphing-blob" />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium gradient-text-animated">
            Wezs Coding
          </h2>
          
          <div className="mono-font text-sm text-minimal-text-light">
            <div className="flex items-center justify-center space-x-2">
              <Terminal className="w-4 h-4 neural-dot" />
              <span>{loadingText}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="w-full bg-minimal-border rounded-full h-2 overflow-hidden quantum-border">
            <div 
              className="h-full bg-gradient-to-r from-minimal-primary to-minimal-secondary rounded-full transition-all duration-300 ease-out holographic-card"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="mono-font text-xs text-minimal-text-light">
            {Math.floor(progress)}%
          </div>
        </div>

        {/* Matrix effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="advanced-matrix-rain"
              style={{
                left: `${5 + i * 4.5}%`,
                height: `${20 + Math.random() * 30}px`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
