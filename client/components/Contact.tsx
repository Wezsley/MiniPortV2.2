import { Mail, Github, Instagram, Facebook, MapPin, Send, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Contact() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/wesley.belmonte.10',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      username: '@wesley.belmonte.10'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Wezsley',
      icon: Github,
      color: 'from-gray-700 to-gray-800',
      username: '@Wezsley'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yelsew129/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      username: '@yelsew129'
    },
    {
      name: 'Email',
      url: 'mailto:2ez4wezs@gmail.com',
      icon: Mail,
      color: 'from-cyber-primary to-cyber-secondary',
      username: '2ez4wezs@gmail.com'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 matrix-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-primary/30 rounded-full animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold terminal-font glow-text">
              <span className="text-cyber-secondary">&gt;</span> connect<span className="text-cyber-primary">.init()</span>
            </h2>
            <p className="text-lg text-muted-foreground terminal-font max-w-2xl mx-auto">
              <span className="text-cyber-secondary">//</span> Let's build something amazing together
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full" />
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left side - Contact details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold terminal-font text-cyber-primary mb-4">
                  <span className="text-cyber-secondary">&gt;</span> get_in_touch()
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  I'm always interested in new opportunities, collaborations, and conversations about technology, design, and innovation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 border border-cyber-primary/30 rounded-lg bg-background/20 backdrop-blur-sm">
                    <Mail className="w-5 h-5 text-cyber-primary" />
                    <div>
                      <span className="text-sm text-cyber-secondary terminal-font">primary_email:</span>
                      <br />
                      <a 
                        href="mailto:2ez4wezs@gmail.com"
                        className="text-cyber-primary hover:glow-text transition-all duration-300 terminal-font"
                      >
                        2ez4wezs@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border border-cyber-secondary/30 rounded-lg bg-background/20 backdrop-blur-sm">
                    <MapPin className="w-5 h-5 text-cyber-secondary" />
                    <div>
                      <span className="text-sm text-cyber-secondary terminal-font">location:</span>
                      <br />
                      <span className="text-cyber-secondary terminal-font">Philippines</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border border-cyber-accent/30 rounded-lg bg-background/20 backdrop-blur-sm">
                    <Terminal className="w-5 h-5 text-cyber-accent" />
                    <div>
                      <span className="text-sm text-cyber-secondary terminal-font">status:</span>
                      <br />
                      <span className="text-cyber-accent terminal-font">Available for opportunities</span>
                      <span className="animate-pulse text-cyber-accent ml-2">●</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Quote/Motto */}
            <div className="space-y-8">
              <div className="p-8 border border-cyber-primary/30 rounded-lg bg-background/20 backdrop-blur-sm glow-border text-center">
                <div className="mb-4">
                  <Terminal className="w-12 h-12 text-cyber-primary mx-auto animate-glow-pulse" />
                </div>
                <blockquote className="text-xl italic text-cyber-primary mb-4 leading-relaxed">
                  "Code is poetry written in logic, <br />
                  design is art painted with purpose."
                </blockquote>
                <cite className="text-sm text-cyber-secondary terminal-font">
                  - Wesley Belmonte
                </cite>
              </div>

              <div className="p-6 border border-cyber-accent/30 rounded-lg bg-background/20 backdrop-blur-sm text-center">
                <h4 className="text-lg font-bold terminal-font text-cyber-accent mb-2">
                  Current Focus
                </h4>
                <p className="text-sm text-muted-foreground terminal-font">
                  🎯 Cloud Engineering<br />
                  💻 Full-Stack Development<br />
                  🎨 Creative Design Solutions<br />
                  📚 Continuous Learning
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold terminal-font text-cyber-primary mb-4">
                <span className="text-cyber-secondary">&gt;</span> social_networks[]
              </h3>
              <p className="text-muted-foreground terminal-font">
                <span className="text-cyber-secondary">//</span> Follow my journey across platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  className={cn(
                    "group p-6 border border-cyber-primary/30 rounded-lg bg-background/20 backdrop-blur-sm",
                    "hover:border-cyber-primary/60 transition-all duration-300 hover:scale-105",
                    "relative overflow-hidden"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background gradient on hover */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                    social.color
                  )} />
                  
                  <div className="relative z-10 text-center space-y-3">
                    <div className={cn(
                      "inline-flex p-3 rounded-lg bg-gradient-to-br mx-auto",
                      social.color,
                      "group-hover:scale-110 transition-transform duration-300"
                    )}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h4 className="font-bold terminal-font text-cyber-primary group-hover:glow-text transition-all duration-300">
                        {social.name}
                      </h4>
                      <p className="text-xs text-muted-foreground terminal-font">
                        {social.username}
                      </p>
                    </div>
                  </div>

                  {/* Scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-cyber-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Terminal className="w-5 h-5 text-cyber-primary animate-pulse" />
                <span className="terminal-font text-cyber-primary">wesley@portfolio:~$</span>
                <span className="terminal-font text-cyber-secondary">echo "Thanks for visiting!"</span>
              </div>
              
              <p className="text-sm text-muted-foreground terminal-font">
                Built with ❤️ using React, TypeScript, and TailwindCSS
              </p>
              
              <p className="text-xs text-muted-foreground terminal-font">
                © 2024 Wesley Belmonte. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
