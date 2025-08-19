import { Mail, Github, Instagram, Facebook, MapPin, Code2, Send, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InquiryForm } from './InquiryForm';

export function Contact() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/wesley.belmonte.10',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      username: '@wesley.belmonte.10',
      description: 'Connect on Facebook'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Wezsley',
      icon: Github,
      color: 'from-gray-700 to-gray-800',
      username: '@Wezsley',
      description: 'Check out my code'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yelsew129/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      username: '@yelsew129',
      description: 'Follow my journey'
    },
    {
      name: 'Email',
      url: 'mailto:2ez4wezs@gmail.com',
      icon: Mail,
      color: 'from-minimal-primary to-minimal-secondary',
      username: '2ez4wezs@gmail.com',
      description: 'Send me a message'
    }
  ];

  const handleSocialClick = (url: string) => {
    if (url.startsWith('mailto:')) {
      // For email links, try multiple methods to handle different browsers
      try {
        // Method 1: Try creating a temporary link element (works better in Brave)
        const link = document.createElement('a');
        link.href = url;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        // Fallback: Direct window.location
        window.location.href = url;
      }
    } else {
      // For other social links, open in new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="py-24 bg-minimal-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light clean-font">
              <span className="bg-gradient-to-r from-minimal-primary to-minimal-secondary bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-lg text-minimal-text-light max-w-2xl mx-auto">
              Ready to collaborate on your next project or just want to say hello?
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-minimal-primary to-minimal-secondary mx-auto rounded-full" />
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left side - Contact details */}
            <div className="space-y-8 slide-up">
              <div>
                <h3 className="text-2xl font-medium clean-font text-minimal-text mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-minimal-text-light leading-relaxed mb-8 clean-font">
                  I'm always interested in new opportunities, collaborations, and conversations about technology, design, and innovation.
                </p>
                
                <div className="space-y-4">
                  <div className="minimal-card p-6 hover-lift">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-minimal-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-minimal-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-minimal-text clean-font">Email</h4>
                        <a
                          href="mailto:2ez4wezs@gmail.com"
                          className="text-minimal-primary hover:text-minimal-secondary transition-colors duration-300 mono-font"
                        >
                          2ez4wezs@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="minimal-card p-6 hover-lift">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-minimal-secondary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-minimal-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-minimal-text clean-font">Location</h4>
                        <span className="text-minimal-text-light mono-font">Philippines</span>
                      </div>
                    </div>
                  </div>

                  <div className="minimal-card p-6 hover-lift">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-minimal-accent/10 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-minimal-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-minimal-text clean-font">Status</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-minimal-accent mono-font">Available for opportunities</span>
                          <div className="w-2 h-2 bg-minimal-accent rounded-full animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Quote/Values */}
            <div className="space-y-8 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="minimal-card p-8 text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-minimal-primary to-minimal-secondary flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <blockquote className="text-xl text-minimal-text mb-4 leading-relaxed clean-font">
                  "Learning never stops, growing never ends."
                </blockquote>
                <cite className="text-sm text-minimal-text-light mono-font">
                  — Wesley Belmonte
                </cite>
              </div>

              <div className="minimal-card p-8 hover-lift">
                <h4 className="text-lg font-medium text-minimal-text mb-4 clean-font flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span>Current Focus</span>
                </h4>
                <div className="space-y-3 text-sm text-minimal-text-light clean-font">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-minimal-primary rounded-full" />
                    <span>Cloud Engineering Excellence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-minimal-secondary rounded-full" />
                    <span>Full-Stack Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-minimal-accent rounded-full" />
                    <span>Creative Design Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-minimal-primary rounded-full" />
                    <span>Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="slide-up" style={{ animationDelay: '0.4s' }}>
            <InquiryForm />
          </div>

          {/* Social Links */}
          <div className="space-y-8 slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <h3 className="text-2xl font-medium clean-font text-minimal-text mb-4">
                Connect Across Platforms
              </h3>
              <p className="text-minimal-text-light clean-font">
                Follow my journey and let's build something amazing together
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  className="minimal-card p-6 text-center hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={cn(
                    "w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br flex items-center justify-center",
                    "group-hover:scale-110 transition-transform duration-300",
                    social.color
                  )}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="font-medium text-minimal-text group-hover:text-minimal-primary transition-colors duration-300 clean-font">
                    {social.name}
                  </h4>
                  <p className="text-xs text-minimal-text-light mono-font mt-1">
                    {social.username}
                  </p>
                  <p className="text-xs text-minimal-text-light clean-font mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-minimal-border slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Code2 className="w-5 h-5 text-minimal-primary" />
                <span className="mono-font text-minimal-primary">wesley@portfolio:~$</span>
                <span className="mono-font text-minimal-text-light">echo "Thanks for visiting!"</span>
              </div>
              
              <p className="text-sm text-minimal-text-light clean-font">
                Built using React, TypeScript, and TailwindCSS
              </p>
              
              <p className="text-xs text-minimal-text-light mono-font">
                © 2024 Wesley Belmonte. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
