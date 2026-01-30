import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import servicesData from "@/resources/services.json";

export default function Services() {
  // Service type order as requested
  const order = ["Facial", "Waxing", "Threading", "Massage", "Hands Henna"];

  // Group services by service_type from JSON source
  const categories = servicesData.reduce((acc, service) => {
    const type = service.service_type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(service);
    return acc;
  }, {} as Record<string, typeof servicesData>);

  // Sort categories based on requested order
  const sortedCategories = Object.entries(categories).sort(([a], [b]) => {
    const indexA = order.indexOf(a);
    const indexB = order.indexOf(b);
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {sortedCategories.map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-3xl font-bold text-primary">{category}</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {items.map((service) => (
                <div 
                  key={service.id} 
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-grow pr-4">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold font-display text-foreground uppercase tracking-tight">{service.name}</h3>
                      <span className="text-lg font-semibold text-primary sm:hidden">{service.price}</span>
                    </div>
                    {service.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{service.description}</p>
                    )}
                  </div>
                  <div className="hidden sm:block text-right min-w-[100px]">
                    <span className="block text-xl font-bold text-primary">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
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
