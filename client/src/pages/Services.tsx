import { useEffect } from "react";
import { motion } from "framer-motion";
import { BookingButton } from "@/components/BookingButton";
import servicesData from "@/resources/services.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Service type order as requested: Facials (Full Facials), Waxing, Threading, Massage, Hands Henna
  const order = ["Full Facials", "Waxing", "Threading", "Massage", "Hands Heena ( Mehndi) Tattoo"];

  const categories = servicesData.spa_services;

  // Sort categories based on requested order
  const sortedCategories = [...categories].sort((a, b) => {
    const indexA = order.indexOf(a.service_type);
    const indexB = order.indexOf(b.service_type);
    return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
  });

  return (
    <div className="w-full bg-background pb-24">
      {/* Header */}
      <div className="bg-secondary/30 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Service Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium beauty treatments designed to help you look and feel your best.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <Accordion type="single" collapsible className="w-full space-y-4 border-none">
          {sortedCategories.map((group, idx) => (
            <AccordionItem 
              key={group.service_type} 
              value={`item-${idx}`}
              className="border border-border rounded-2xl overflow-hidden bg-white px-6 shadow-sm data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary text-left">
                  {group.service_type}
                </h2>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="grid grid-cols-1 gap-6 pt-4">
                  {group.services
                    .filter(service => service.service_name) // Filter out null services
                    .map((service, sIdx) => (
                    <div 
                      key={`${group.service_type}-${sIdx}`} 
                      className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-grow pr-4">
                        <div className="flex items-baseline justify-between mb-2">
                          <h3 className="text-xl font-bold font-display text-foreground uppercase tracking-tight">{service.service_name}</h3>
                          <span className="text-lg font-semibold text-primary sm:hidden">
                            {typeof service.price === 'number' ? `$${service.price.toFixed(2)}` : service.price}
                          </span>
                        </div>
                        {service.description && (
                          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{service.description}</p>
                        )}
                      </div>
                      <div className="hidden sm:block text-right min-w-[120px]">
                        <span className="block text-xl font-bold text-primary">
                          {typeof service.price === 'number' ? `$${service.price.toFixed(2)}` : service.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-24 text-center">
        <div className="bg-primary/5 rounded-3xl p-12">
          <h3 className="font-display text-2xl font-bold mb-4">Ready for your appointment?</h3>
          <p className="text-muted-foreground mb-8">
            Check our booking platform for the most up-to-date list of services, specials, and packages.
          </p>
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
