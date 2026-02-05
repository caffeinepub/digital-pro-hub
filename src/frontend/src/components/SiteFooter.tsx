import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/instant-price-calculator', label: 'Instant Price Calculator' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© 2026. Built with</span>
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span>using</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary transition-colors hover:underline"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
