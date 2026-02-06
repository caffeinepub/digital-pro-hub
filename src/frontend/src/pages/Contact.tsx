import { useSeo } from '../hooks/useSeo';
import { Phone, MessageCircle, Globe } from 'lucide-react';

export default function Contact() {
  useSeo({
    title: 'Contact - Webzio',
    description:
      'Get in touch with Webzio. Call or WhatsApp 8855003190 for quick response. Online service with digital meetings.',
  });

  const terms = [
    'Prices vary based on project requirements and complexity',
    'No responsibility for third-party platforms or tools',
    'No refunds after work is delivered',
    'Client must clearly explain requirements before work begins',
  ];

  return (
    <div className="flex flex-col">
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Contact Us
            </h1>

            <div className="space-y-8">
              {/* Phone Number */}
              <div className="rounded-lg border border-border bg-card p-6 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h2 className="mb-2 text-2xl font-semibold text-card-foreground">8855003190</h2>
                <p className="text-sm text-muted-foreground">Call or WhatsApp for quick response</p>
              </div>

              {/* WhatsApp Button */}
              <div className="flex justify-center">
                <a
                  href="https://wa.me/918855003190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <MessageCircle className="h-5 w-5" />
                  Contact on WhatsApp
                </a>
              </div>

              {/* Online Service Note */}
              <div className="rounded-lg bg-muted/50 p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-foreground">
                  This is an online service. Meetings are conducted digitally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground">
              Terms & Conditions
            </h2>
            <ul className="space-y-4">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start text-base text-foreground">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
