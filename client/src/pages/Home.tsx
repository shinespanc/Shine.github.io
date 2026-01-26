import { motion } from "framer-motion";
import { BookingButton } from "@/components/BookingButton";
import { ArrowRight, Star, Sparkles, Heart } from "lucide-react";
import { Link } from "wouter";
import waxingImg from "@/assets/waxing.png";
import browsLashesImg from "@/assets/brows_lashes.png";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: Bright, clean beauty salon interior */}
          <img
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2072&auto=format&fit=crop"
            alt="Shine Beauty Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-primary/20 text-primary font-medium text-sm mb-6 shadow-sm">
              ✨ Welcome to Shine Beauty Salon & Spa
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
              Reveal Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Inner Glow</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
              Your go-to beauty destination in High Point, NC for glowing skin, flawless nails, perfect brows, and total pampering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingButton className="h-14 px-8 text-lg" />
              <Link href="/services" className="h-14 px-8 inline-flex items-center justify-center gap-2 rounded-full font-semibold bg-white/80 hover:bg-white text-foreground border border-white/50 backdrop-blur shadow-sm hover:shadow-md transition-all">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Expert Styling",
                desc: "Our talented team stays up-to-date with the latest trends and techniques."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Premium Care",
                desc: "We use only high-quality products to ensure your skin and hair stay healthy."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Relaxing Vibe",
                desc: "Escape the daily rush in our calm, inviting, and beautifully designed space."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-secondary/50 transition-colors text-center"
              >
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                {/* Unsplash image: Professional makeup artist or salon owner vibe */}
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Beauty Treatment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-20"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Meet Shammi & The Team</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Led by owner Shammi Sharma, Shine Beauty Salon & Spa is built on warmth, creativity, and dedication. With years of experience in the beauty industry, we pride ourselves on helping you look and feel your absolute best.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're visiting for a quick touch-up or a full spa day, our mission is to provide personalized care that highlights your natural beauty.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                Read Our Story <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            From rejuvenating facials to stunning nail art, we offer a comprehensive menu of beauty services tailored to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Nail Care", 
                img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                name: "Facials", 
                img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                name: "Waxing", 
                img: waxingImg 
              },
              { 
                name: "Brows & Lashes", 
                img: browsLashesImg 
              }
            ].map((service, idx) => (
              <Link key={idx} href="/services">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                >
                  <img 
                    src={service.img} 
                    alt={service.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-secondary transition-colors">{service.name}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/services" className="inline-flex px-8 py-3 rounded-full bg-white border border-border font-semibold shadow-sm hover:bg-muted transition-colors">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Shine?</h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Book your appointment today and let us pamper you with our premium services.
          </p>
          <BookingButton className="bg-white text-primary hover:bg-secondary hover:text-foreground shadow-xl" />
        </div>
      </section>
    </div>
  );
}
