import { Heart, User, GraduationCap, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export function About() {
  return (
    <section id="about" className="py-24 minimal-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Clean Section Header */}
          <div className="text-center mb-20 space-y-4 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light clean-font">
              <span className="bg-gradient-to-r from-minimal-primary to-minimal-secondary bg-clip-text text-transparent">
                About Wesley
              </span>
            </h2>
            <p className="text-lg text-minimal-text-light max-w-2xl mx-auto">
              A passionate developer creating meaningful digital experiences
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-minimal-primary to-minimal-secondary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left side - Personal story */}
            <div className="space-y-8 slide-up">
              {/* Main bio with elegant cards */}
              <div className="space-y-6">
                <div className="minimal-card p-8 hover-lift">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-minimal-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-minimal-primary" />
                    </div>
                    <h3 className="text-xl font-medium clean-font text-minimal-text">Personal Journey</h3>
                  </div>
                  
                  <div className="space-y-4 text-minimal-text-light clean-font leading-relaxed">
                    <p>
                      Hi, I'm <span className="text-minimal-primary font-medium">Wesley Belmonte</span>. 
                      I am a <span className="text-minimal-secondary font-medium">BSIT student</span> who 
                      lives and breathes creativity and technology. Currently in my third year, I'm sharpening 
                      my skills in cloud technologies, web development, and building real-world solutions 
                      through hands-on projects.
                    </p>

                    <p>
                      When I'm not coding, I focus on <span className="text-minimal-accent font-medium">graphic design</span>, 
                      creating bold and eye-catching visuals that bring ideas to life. From unique layouts to 
                      complete branding, I combine my design expertise with technical knowledge from PC building 
                      and creative software.
                    </p>
                  </div>
                </div>

                {/* Education card */}
                <div className="minimal-card p-8 hover-lift">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-minimal-secondary/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-minimal-secondary" />
                    </div>
                    <h3 className="text-xl font-medium clean-font text-minimal-text">Education</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-minimal-text">Bachelor of Science in Information Technology</h4>
                    <p className="text-minimal-text-light">3rd Year Student</p>
                  </div>
                </div>

                {/* Career goal card */}
                <div className="minimal-card p-8 hover-lift">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-minimal-accent/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-minimal-accent" />
                    </div>
                    <h3 className="text-xl font-medium clean-font text-minimal-text">Career Goal</h3>
                  </div>
                  
                  <p className="text-minimal-text-light">
                    <span className="text-minimal-accent font-medium">Cloud Engineer</span> - 
                    Building scalable, secure, and efficient cloud infrastructure solutions for the future.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Inspiration gallery */}
            <div className="space-y-8 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/10 to-red-500/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-medium clean-font text-minimal-text">My Inspiration</h3>
                </div>
              </div>

              {/* Clean image grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Main couple photo */}
                <div className="col-span-2 relative group">
                  <div className="minimal-card overflow-hidden hover-lift">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F15b7805aae6d4b36820d99157282e264?format=webp&width=800"
                      alt="Wesley with girlfriend and dog"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium clean-font">My Everything ❤️</p>
                    </div>
                  </div>
                </div>

                {/* Dog photos */}
                <div className="relative group">
                  <div className="minimal-card overflow-hidden hover-lift">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F4bdb3cc5a4e04d9eb50e7b04afa1183f?format=webp&width=800"
                      alt="Loquee - Wesley's dog"
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium clean-font">Loquee 🐕</p>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="minimal-card overflow-hidden hover-lift">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9fd4460e1a834f8db87a79c9f69f8604%2F539e726c4fc34dd3b6d91973876dd380?format=webp&width=800"
                      alt="Dog on leash"
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium clean-font">Adventure 🌟</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Life Philosophy cards */}
              <div className="space-y-4">
                <div className="minimal-card p-8 text-center hover-lift">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-minimal-text clean-font">Life Motto</h4>
                    <blockquote className="text-lg text-minimal-text-light italic leading-relaxed">
                      "Learning never stops, growing never ends."
                    </blockquote>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-minimal-primary to-minimal-secondary mx-auto rounded-full" />
                  </div>
                </div>

                <div className="minimal-card p-8 text-center hover-lift">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-minimal-text clean-font">Inspiration</h4>
                    <blockquote className="text-lg text-minimal-text-light italic leading-relaxed">
                      "The only thing worse than being blind is having sight but no vision."
                    </blockquote>
                    <cite className="text-sm text-minimal-text-light clean-font">
                      — Helen Keller
                    </cite>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-minimal-secondary to-minimal-accent mx-auto rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
