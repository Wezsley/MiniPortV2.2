import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  id: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame: number;
    let pointId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => {
        const newPoint: TrailPoint = {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          id: pointId++
        };
        
        return [newPoint, ...prev.slice(0, 15)];
      });
    };

    const fadeTrail = () => {
      setTrail(prev => 
        prev
          .map(point => ({ ...point, opacity: point.opacity * 0.95 }))
          .filter(point => point.opacity > 0.01)
      );
      animationFrame = requestAnimationFrame(fadeTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(fadeTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-minimal-primary/60 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: point.opacity,
            transform: `scale(${1 - index * 0.05})`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className="absolute w-4 h-4 border-2 border-minimal-primary rounded-full pointer-events-none mix-blend-difference"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
}
