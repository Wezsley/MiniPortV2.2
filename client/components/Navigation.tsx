import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-minimal-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Minimalist Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-minimal-primary to-minimal-secondary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-medium clean-font">
              <span className="text-minimal-text">Wezs</span>
              <span className="text-minimal-primary"> Coding</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium clean-font transition-all duration-300",
                  "text-minimal-text-light hover:text-minimal-primary",
                  "rounded-lg hover:bg-minimal-surface-hover",
                  "group",
                )}
              >
                <span className="relative z-10">{item.name}</span>

                {/* Subtle underline effect */}
                <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-minimal-primary rounded-full transition-all duration-300 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2" />
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Minimalist Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2.5 rounded-lg border border-minimal-border bg-minimal-surface",
                "hover:border-minimal-primary hover:bg-minimal-surface-hover",
                "transition-all duration-500 group relative overflow-hidden",
              )}
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-500 ease-in-out",
                    isDark
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-180 scale-0",
                  )}
                >
                  <Sun className="w-5 h-5 text-minimal-primary group-hover:rotate-90 transition-transform duration-300" />
                </div>

                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-500 ease-in-out",
                    !isDark
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-180 scale-0",
                  )}
                >
                  <Moon className="w-5 h-5 text-minimal-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Ripple effect on click */}
              <div className="absolute inset-0 bg-minimal-primary/20 rounded-lg scale-0 group-active:scale-100 transition-transform duration-200" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "md:hidden p-2.5 rounded-lg border border-minimal-border bg-minimal-surface",
                "hover:border-minimal-primary hover:bg-minimal-surface-hover",
                "transition-all duration-300",
              )}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-minimal-primary" />
                ) : (
                  <Menu className="w-5 h-5 text-minimal-primary" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="space-y-1 minimal-card p-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3 text-sm font-medium clean-font",
                    "text-minimal-text-light hover:text-minimal-primary",
                    "hover:bg-minimal-surface-hover rounded-lg",
                    "transition-all duration-300",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
