import { useSeo } from '../hooks/useSeo';
import { FileText, Globe, Wrench } from 'lucide-react';

export default function Services() {
  useSeo({
    title: 'Services - Digital Pro Hub',
    description:
      'PPT making, website services, and digital assistance. Quality digital services at budget-friendly prices with clear pricing and fast delivery.',
  });

  const services = [
    {
      icon: FileText,
      title: 'PPT Making',
      items: ['School presentations', 'College presentations', 'Basic business presentations'],
    },
    {
      icon: Globe,
      title: 'Website Services',
      items: ['Basic website creation', 'Website edits and fixes', 'Simple landing pages'],
    },
    {
      icon: Wrench,
      title: 'Digital Assistance',
      items: ['Word documents and formatting', 'Online forms help', 'Simple digital designs'],
    },
  ];

  const steps = [
    { number: '1', text: 'Share your requirement' },
    { number: '2', text: 'Get price confirmation' },
    { number: '3', text: 'Work delivered on time' },
  ];

  return (
    <div className="flex flex-col">
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our Services
            </h1>

            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="mb-4 text-xl font-semibold text-card-foreground">{service.title}</h2>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-muted-foreground">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base text-foreground md:text-lg">
              Prices depend on the complexity of the work and will always be confirmed before starting the
              project.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </div>
                  </div>
                  <p className="text-base font-medium text-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
