import { ExternalLink, Github, Globe, Zap, Building2, Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Projects() {
  const projects = [
    {
      title: 'AllSync Solutions',
      description: 'A comprehensive business solutions platform providing integrated services for modern enterprises.',
      url: 'https://allsyncsolutions.netlify.app/',
      github: null,
      status: 'completed',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Building2,
      color: 'from-cyber-primary to-cyber-secondary',
      featured: true
    },
    {
      title: 'Letter Twister CES',
      description: 'An interactive word game application with engaging gameplay mechanics and modern UI design.',
      url: 'https://lettertwisterces.netlify.app/',
      github: null,
      status: 'completed',
      tech: ['JavaScript', 'CSS', 'Game Logic', 'UI/UX'],
      icon: Gamepad2,
      color: 'from-cyber-secondary to-cyber-accent',
      featured: true
    },
    {
      title: 'Jamex.co.jp',
      description: 'Large-scale enterprise website for Japanese market. Currently under development with advanced features.',
      url: 'https://jamex.co.jp/',
      github: null,
      status: 'ongoing',
      tech: ['React', 'TypeScript', 'Next.js', 'Enterprise Scale'],
      icon: Globe,
      color: 'from-cyber-accent to-cyber-primary',
      featured: true
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border border-cyber-primary/30 bg-background/20 backdrop-blur-sm",
        "hover:border-cyber-primary/60 transition-all duration-500 hover:scale-105",
        project.featured ? "lg:col-span-2" : ""
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Status indicator */}
      <div className="absolute top-4 right-4 z-10">
        <span className={cn(
          "px-2 py-1 text-xs font-bold terminal-font rounded-full",
          project.status === 'completed' 
            ? "bg-green-500/20 text-green-400 border border-green-500/30" 
            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 animate-pulse"
        )}>
          {project.status === 'completed' ? 'COMPLETED' : 'ONGOING'}
        </span>
      </div>

      {/* Project content */}
      <div className="p-6 space-y-4">
        {/* Header with icon */}
        <div className="flex items-center space-x-3">
          <div className={cn("p-2 rounded-lg bg-gradient-to-br", project.color)}>
            <project.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold terminal-font text-cyber-primary group-hover:glow-text transition-all duration-300">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-foreground/80 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs terminal-font bg-muted rounded border border-cyber-primary/20 text-cyber-primary/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-4 pt-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r rounded-lg",
              project.color,
              "text-white font-medium terminal-font transition-all duration-300",
              "hover:shadow-lg hover:shadow-cyber-primary/25 hover:scale-105"
            )}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-cyber-primary/30 rounded-lg hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all duration-300"
            >
              <Github className="w-4 h-4 text-cyber-primary" />
              <span className="text-cyber-primary terminal-font">Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/5 to-cyber-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Animated border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-primary to-transparent animate-scan-line" />
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold terminal-font glow-text">
              <span className="text-cyber-secondary">&gt;</span> projects<span className="text-cyber-primary">.showcase()</span>
            </h2>
            <p className="text-lg text-muted-foreground terminal-font max-w-2xl mx-auto">
              <span className="text-cyber-secondary">//</span> Real-world applications built with passion and precision
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-cyber-primary/30 rounded-lg bg-background/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyber-primary terminal-font mb-2">3+</div>
              <div className="text-sm text-muted-foreground terminal-font">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 border border-cyber-secondary/30 rounded-lg bg-background/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyber-secondary terminal-font mb-2">∞</div>
              <div className="text-sm text-muted-foreground terminal-font">Lines of Code</div>
            </div>
            
            <div className="text-center p-6 border border-cyber-accent/30 rounded-lg bg-background/20 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Zap className="w-6 h-6 text-cyber-accent" />
                <span className="text-3xl font-bold text-cyber-accent terminal-font">24/7</span>
              </div>
              <div className="text-sm text-muted-foreground terminal-font">Coding Mode</div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground terminal-font mb-4">
              <span className="text-cyber-secondary">//</span> More projects coming soon...
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-cyber-primary terminal-font">&gt; git push origin</span>
              <span className="text-cyber-secondary terminal-font">future_projects</span>
              <span className="animate-pulse text-cyber-primary">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
