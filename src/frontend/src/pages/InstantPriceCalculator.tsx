import { useState } from 'react';
import { useSeo } from '../hooks/useSeo';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, MessageCircle } from 'lucide-react';
import { getEstimatedPrice, serviceTypes, workLevels } from '../lib/instantPriceCalculatorPricing';

export default function InstantPriceCalculator() {
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [workLevel, setWorkLevel] = useState<string | null>(null);

  useSeo({
    title: 'Instant Price Calculator - Webzio',
    description:
      'Get instant price estimates for our digital services. Calculate costs for PPT making, website help, and document work based on your requirements.',
  });

  const estimatedPrice = getEstimatedPrice(
    serviceType as any,
    workLevel as any
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Instant Price Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              Select your service type and work level to get an instant price estimate
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="space-y-6">
                {/* Service Type Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="service-type" className="text-base font-medium">
                    Service Type
                  </Label>
                  <Select value={serviceType || ''} onValueChange={setServiceType}>
                    <SelectTrigger id="service-type" className="w-full">
                      <SelectValue placeholder="Select a service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Work Level Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="work-level" className="text-base font-medium">
                    Work Level
                  </Label>
                  <Select value={workLevel || ''} onValueChange={setWorkLevel}>
                    <SelectTrigger id="work-level" className="w-full">
                      <SelectValue placeholder="Select a work level" />
                    </SelectTrigger>
                    <SelectContent>
                      {workLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Display */}
                <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
                  <div className="text-center">
                    <p className="mb-2 text-sm font-medium text-muted-foreground">
                      Estimated Price
                    </p>
                    {estimatedPrice !== null ? (
                      <>
                        <p className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                          ₹{estimatedPrice.toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Final price may vary based on requirements
                        </p>
                      </>
                    ) : (
                      <p className="py-4 text-lg text-muted-foreground">
                        Please select both service type and work level
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Button */}
                <div className="mt-6 flex justify-center">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a
                      href="https://wa.me/918855003190"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Contact / WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
