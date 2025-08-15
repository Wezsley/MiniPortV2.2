import { Code, Database, Layers, Palette, Monitor, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TechStack() {
  const programmingLanguages = [
    { name: 'C#', level: 85, color: 'from-purple-500 to-purple-600' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Python', level: 80, color: 'from-blue-500 to-blue-600' },
    { name: 'Java', level: 75, color: 'from-red-500 to-red-600' },
    { name: 'PHP (Laravel)', level: 85, color: 'from-red-600 to-orange-500' },
    { name: 'CSS', level: 90, color: 'from-blue-400 to-blue-500' },
    { name: 'MySQL', level: 80, color: 'from-orange-500 to-orange-600' },
  ];

  const creativeTools = [
    { name: 'Photoshop', level: 95, color: 'from-blue-600 to-blue-700' },
    { name: 'Illustrator', level: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'Premiere Pro', level: 85, color: 'from-purple-600 to-purple-700' },
    { name: 'Canva', level: 90, color: 'from-cyan-500 to-cyan-600' },
    { name: 'CorelDraw', level: 80, color: 'from-green-500 to-green-600' },
  ];

  const SkillCard = ({ 
    title, 
    skills, 
    icon: Icon, 
    iconColor 
  }: { 
    title: string; 
    skills: typeof programmingLanguages; 
    icon: any; 
    iconColor: string;
  }) => (
    <div className="p-6 border border-cyber-primary/30 rounded-lg bg-background/20 backdrop-blur-sm glow-border group hover:border-cyber-primary/60 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className={cn("p-2 rounded-lg", iconColor)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold terminal-font text-cyber-primary">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium terminal-font text-foreground/90">
                {skill.name}
              </span>
              <span className="text-xs terminal-font text-cyber-primary">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div 
                className={cn(
                  "h-full bg-gradient-to-r rounded-full transition-all duration-1000 ease-out",
                  skill.color,
                  "animate-pulse"
                )}
                style={{ 
                  width: `${skill.level}%`,
                  animationDelay: `${index * 0.2}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 matrix-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold terminal-font glow-text">
              <span className="text-cyber-secondary">&gt;</span> tech_stack<span className="text-cyber-primary">.info</span>
            </h2>
            <p className="text-lg text-muted-foreground terminal-font max-w-2xl mx-auto">
              <span className="text-cyber-secondary">//</span> My arsenal of technologies, languages, and creative tools
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <SkillCard
              title="Programming & Development"
              skills={programmingLanguages}
              icon={Code}
              iconColor="bg-gradient-to-br from-cyber-primary to-cyber-secondary"
            />
            
            <SkillCard
              title="Creative Suite"
              skills={creativeTools}
              icon={Palette}
              iconColor="bg-gradient-to-br from-cyber-accent to-cyber-secondary"
            />
          </div>

          {/* Additional Skills Categories */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Cloud & Infrastructure */}
            <div className="p-6 border border-cyber-primary/30 rounded-lg bg-background/20 backdrop-blur-sm text-center group hover:border-cyber-primary/60 transition-all duration-300 hover:scale-105">
              <div className="inline-flex p-3 bg-gradient-to-br from-cyber-primary to-cyber-secondary rounded-lg mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold terminal-font text-cyber-primary mb-2">Cloud & Infrastructure</h3>
              <p className="text-sm text-muted-foreground terminal-font">
                Learning AWS, Azure, Docker, and modern DevOps practices
              </p>
            </div>

            {/* Web Development */}
            <div className="p-6 border border-cyber-secondary/30 rounded-lg bg-background/20 backdrop-blur-sm text-center group hover:border-cyber-secondary/60 transition-all duration-300 hover:scale-105">
              <div className="inline-flex p-3 bg-gradient-to-br from-cyber-secondary to-cyber-accent rounded-lg mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold terminal-font text-cyber-secondary mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground terminal-font">
                Full-stack development with modern frameworks and libraries
              </p>
            </div>

            {/* Database & Backend */}
            <div className="p-6 border border-cyber-accent/30 rounded-lg bg-background/20 backdrop-blur-sm text-center group hover:border-cyber-accent/60 transition-all duration-300 hover:scale-105">
              <div className="inline-flex p-3 bg-gradient-to-br from-cyber-accent to-cyber-primary rounded-lg mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold terminal-font text-cyber-accent mb-2">Database & Backend</h3>
              <p className="text-sm text-muted-foreground terminal-font">
                Database design, API development, and server management
              </p>
            </div>
          </div>

          {/* Status bar */}
          <div className="mt-12 p-4 border border-cyber-primary/30 rounded-lg bg-background/20 backdrop-blur-sm">
            <div className="flex items-center justify-between text-sm terminal-font">
              <div className="flex items-center space-x-4">
                <span className="text-cyber-secondary">&gt; status:</span>
                <span className="text-cyber-primary">actively_learning</span>
                <span className="animate-pulse text-cyber-primary">●</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-cyber-secondary">mode:</span>
                <span className="text-cyber-accent">continuous_improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
