import { Code, Database, Layers, Palette, Monitor, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TechStack() {
  const programmingLanguages = [
    { name: 'C#', level: 85, color: 'bg-purple-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'Python', level: 80, color: 'bg-blue-500' },
    { name: 'Java', level: 75, color: 'bg-red-500' },
    { name: 'PHP (Laravel)', level: 85, color: 'bg-indigo-500' },
    { name: 'CSS', level: 90, color: 'bg-blue-400' },
    { name: 'MySQL', level: 80, color: 'bg-orange-500' },
  ];

  const creativeTools = [
    { name: 'Photoshop', level: 95, color: 'bg-blue-600' },
    { name: 'Illustrator', level: 90, color: 'bg-orange-500' },
    { name: 'Premiere Pro', level: 85, color: 'bg-purple-600' },
    { name: 'Canva', level: 90, color: 'bg-cyan-500' },
    { name: 'CorelDraw', level: 80, color: 'bg-green-500' },
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
    <div className="minimal-card p-8 hover-lift">
      <div className="flex items-center space-x-4 mb-8">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", iconColor)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-medium clean-font text-minimal-text">{title}</h3>
      </div>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium clean-font text-minimal-text">
                {skill.name}
              </span>
              <span className="text-xs mono-font text-minimal-text-light bg-minimal-surface px-2 py-1 rounded">
                {skill.level}%
              </span>
            </div>
            <div className="relative">
              <div className="w-full bg-minimal-border rounded-full h-2 overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-1000 ease-out",
                    skill.color
                  )}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-minimal-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light clean-font">
              <span className="bg-gradient-to-r from-minimal-primary to-minimal-secondary bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-lg text-minimal-text-light max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-minimal-primary to-minimal-secondary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 slide-up">
            <SkillCard
              title="Programming & Development"
              skills={programmingLanguages}
              icon={Code}
              iconColor="bg-gradient-to-br from-minimal-primary to-minimal-secondary"
            />
            
            <SkillCard
              title="Creative Suite"
              skills={creativeTools}
              icon={Palette}
              iconColor="bg-gradient-to-br from-minimal-accent to-minimal-secondary"
            />
          </div>

          {/* Additional Skills Categories */}
          <div className="grid md:grid-cols-3 gap-6 slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Cloud & Infrastructure */}
            <div className="minimal-card p-8 text-center hover-lift group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-minimal-primary to-minimal-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium clean-font text-minimal-text mb-3">Cloud & Infrastructure</h3>
              <p className="text-sm text-minimal-text-light clean-font leading-relaxed">
                Learning AWS, Azure, Docker, and modern DevOps practices for scalable solutions
              </p>
            </div>

            {/* Web Development */}
            <div className="minimal-card p-8 text-center hover-lift group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-minimal-secondary to-minimal-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium clean-font text-minimal-text mb-3">Web Development</h3>
              <p className="text-sm text-minimal-text-light clean-font leading-relaxed">
                Full-stack development with modern frameworks and cutting-edge technologies
              </p>
            </div>

            {/* Database & Backend */}
            <div className="minimal-card p-8 text-center hover-lift group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-minimal-accent to-minimal-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium clean-font text-minimal-text mb-3">Database & Backend</h3>
              <p className="text-sm text-minimal-text-light clean-font leading-relaxed">
                Database design, API development, and robust server architecture
              </p>
            </div>
          </div>

          {/* Status indicator */}
          <div className="mt-16 text-center slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="minimal-card p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-minimal-primary rounded-full animate-pulse" />
                <span className="text-minimal-text-light mono-font">Currently learning and growing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
