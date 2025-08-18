import { ExternalLink, Globe, Building2, Gamepad2, Calendar, CheckCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Projects() {
  const projects = [
    {
      title: 'AllSync Solutions',
      description: 'A comprehensive business solutions platform providing integrated services for modern enterprises with clean design and intuitive user experience.',
      url: 'https://allsyncsolutions.netlify.app/',
      status: 'completed',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      icon: Building2,
      color: 'from-minimal-primary to-minimal-secondary',
      featured: true
    },
    {
      title: 'Letter Twister CES',
      description: 'An interactive word game application featuring engaging gameplay mechanics, modern UI design, and smooth animations.',
      url: 'https://lettertwisterces.netlify.app/',
      status: 'completed',
      tech: ['JavaScript', 'CSS3', 'Game Logic', 'UI/UX Design'],
      icon: Gamepad2,
      color: 'from-minimal-secondary to-minimal-accent',
      featured: true
    },
    {
      title: 'Jamex.co.jp',
      description: 'Large-scale enterprise website for the Japanese market. Currently under development with advanced features and enterprise-grade architecture.',
      url: 'https://jamex.co.jp/',
      status: 'ongoing',
      tech: ['React', 'TypeScript', 'Next.js', 'Enterprise Architecture'],
      icon: Globe,
      color: 'from-minimal-accent to-minimal-primary',
      featured: true
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <div
      className={cn(
        "minimal-card p-8 hover-lift group relative overflow-hidden quantum-border holographic-card",
        project.featured ? "lg:col-span-2" : ""
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Status indicator */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center", project.color)}>
            <project.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-medium clean-font text-minimal-text group-hover:text-minimal-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>
        
        <div className={cn(
          "flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium",
          project.status === 'completed' 
            ? "bg-green-50 text-green-600 border border-green-200" 
            : "bg-yellow-50 text-yellow-600 border border-yellow-200"
        )}>
          {project.status === 'completed' ? (
            <>
              <CheckCircle className="w-3 h-3" />
              <span>Completed</span>
            </>
          ) : (
            <>
              <Clock className="w-3 h-3" />
              <span>In Progress</span>
            </>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-minimal-text-light leading-relaxed mb-6 clean-font">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 text-xs font-medium mono-font bg-minimal-surface border border-minimal-border rounded-full text-minimal-text-light"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action button */}
      <div className="flex items-center justify-between">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="minimal-button group/btn flex items-center space-x-2"
        >
          <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
          <span>View Project</span>
        </a>
        
        <div className="flex items-center space-x-2 text-xs text-minimal-text-light mono-font">
          <Calendar className="w-3 h-3" />
          <span>2024</span>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-minimal-primary/5 to-minimal-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );

  return (
    <section id="projects" className="py-24 minimal-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light clean-font">
              <span className="bg-gradient-to-r from-minimal-primary to-minimal-secondary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-minimal-text-light max-w-2xl mx-auto">
              Real-world applications built with passion, precision, and modern technologies
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-minimal-primary to-minimal-secondary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 slide-up">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-6 slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="minimal-card p-8 text-center hover-lift">
              <div className="text-3xl font-light text-minimal-primary mb-2 mono-font">3+</div>
              <div className="text-sm text-minimal-text-light clean-font">Projects Delivered</div>
            </div>
            
            <div className="minimal-card p-8 text-center hover-lift">
              <div className="text-3xl font-light text-minimal-secondary mb-2 mono-font">∞</div>
              <div className="text-sm text-minimal-text-light clean-font">Lines of Code</div>
            </div>
            
            <div className="minimal-card p-8 text-center hover-lift">
              <div className="text-3xl font-light text-minimal-accent mb-2 mono-font">24/7</div>
              <div className="text-sm text-minimal-text-light clean-font">Learning Mode</div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="minimal-card p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <p className="text-minimal-text-light clean-font">
                  More projects coming soon...
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-minimal-text-light mono-font">
                  <span>git push origin</span>
                  <span className="text-minimal-primary">future_projects</span>
                  <span className="animate-pulse text-minimal-primary">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
