import { Heart, User, GraduationCap, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export function About() {
  return (
    <section id="about" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold terminal-font glow-text">
              <span className="text-cyber-secondary">&gt;</span> about_wesley<span className="text-cyber-primary">()</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Personal info */}
            <div className="space-y-8">
              {/* Main bio */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-cyber-primary" />
                  <span className="text-cyber-secondary terminal-font">&gt; personal_info:</span>
                </div>
                
                <p className="text-lg leading-relaxed text-foreground/90">
                  Hi, I'm <span className="text-cyber-primary font-bold">Wesley Belmonte</span>. 
                  I am a <span className="text-cyber-secondary font-semibold">BSIT student</span> who 
                  lives and breathes creativity and technology. Now in my third year, I am sharpening 
                  my skills in cloud technologies, web development, and building real-world solutions 
                  through hands-on projects.
                </p>

                <p className="text-lg leading-relaxed text-foreground/90">
                  When I'm not coding, I focus on <span className="text-cyber-accent font-semibold">graphic design</span>, 
                  creating bold and eye-catching visuals that bring ideas to life. From unique layouts to 
                  complete branding, I combine my design expertise with technical knowledge from PC building 
                  and creative software.
                </p>

                <p className="text-lg leading-relaxed text-foreground/90">
                  I am fueled by curiosity, a passion for learning, and the people who inspire me most, 
                  <span className="text-cyber-primary font-semibold"> my girlfriend and our dogs</span>.
                </p>
              </div>

              {/* Career goal */}
              <div className="p-6 border border-cyber-primary/30 rounded-lg bg-background/20 backdrop-blur-sm glow-border">
                <div className="flex items-center space-x-2 mb-3">
                  <Target className="w-5 h-5 text-cyber-primary" />
                  <span className="text-cyber-secondary terminal-font">&gt; career_goal:</span>
                </div>
                <p className="text-lg">
                  <span className="text-cyber-primary font-bold">Cloud Engineer</span> - 
                  Building scalable, secure, and efficient cloud infrastructure solutions.
                </p>
              </div>

              {/* Education */}
              <div className="p-6 border border-cyber-secondary/30 rounded-lg bg-background/20 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-cyber-secondary" />
                  <span className="text-cyber-secondary terminal-font">&gt; education:</span>
                </div>
                <p className="text-lg">
                  <span className="text-cyber-secondary font-bold">Bachelor of Science in Information Technology</span>
                  <br />
                  <span className="text-sm text-muted-foreground terminal-font">3rd Year Student</span>
                </p>
              </div>
            </div>

            {/* Right side - Inspiration images */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Heart className="w-5 h-5 text-cyber-accent animate-pulse" />
                  <span className="text-cyber-secondary terminal-font">&gt; my_inspiration:</span>
                </div>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Girlfriend and puppy photo */}
                <div className="col-span-2 relative group">
                  <div className="relative overflow-hidden rounded-lg border border-cyber-primary/30 glow-border">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F15b7805aae6d4b36820d99157282e264?format=webp&width=800"
                      alt="Wesley with girlfriend and dog"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-cyber-primary font-semibold terminal-font">My Everything ❤️</p>
                    </div>
                  </div>
                </div>

                {/* Dog photos */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg border border-cyber-secondary/30">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F4bdb3cc5a4e04d9eb50e7b04afa1183f?format=webp&width=800"
                      alt="Loquee - Wesley's dog"
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-cyber-secondary text-sm font-semibold terminal-font">Loquee 🐕</p>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg border border-cyber-accent/30">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F539e726c4fc34dd3b6d91973876dd380?format=webp&width=800"
                      alt="Dog on leash"
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-cyber-accent text-sm font-semibold terminal-font">Adventure 🌟</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Motto */}
              <div className="p-6 border border-cyber-accent/30 rounded-lg bg-background/20 backdrop-blur-sm text-center">
                <div className="mb-3">
                  <span className="text-cyber-accent terminal-font">&gt; life_motto:</span>
                </div>
                <blockquote className="text-lg italic text-cyber-accent">
                  "Fueled by curiosity, driven by passion, <br />
                  inspired by love."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
