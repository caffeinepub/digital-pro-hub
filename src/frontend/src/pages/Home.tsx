import { useNavigate } from '@tanstack/react-router';
import { useSeo } from '../hooks/useSeo';
import { DollarSign, Clock, MessageCircle, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  useSeo({
    title: 'Webzio – Digital Services Made Simple',
    description:
      'Webzio offers PPTs, websites, and digital help at student-friendly prices.',
  });

  const highlights = [
    {
      icon: DollarSign,
      title: 'Student-friendly pricing',
    },
    {
      icon: Clock,
      title: 'Fast delivery',
    },
    {
      icon: MessageCircle,
      title: 'Clear communication',
    },
    {
      icon: Globe,
      title: 'Online service only',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Affordable Digital Services for Students and Small Businesses
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Quality PPTs, websites, and digital help at budget-friendly prices.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/918855003190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Contact on WhatsApp
              </a>
              <button
                onClick={() => navigate({ to: '/services' })}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center transition-transform hover:scale-105"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground">{highlight.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Short Intro Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              Webzio is a student-run digital services platform offering simple, reliable, and
              affordable solutions for everyday digital needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
