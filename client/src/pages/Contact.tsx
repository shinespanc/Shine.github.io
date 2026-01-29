import { BookingButton } from "@/components/BookingButton";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-background pb-24">
      {/* Header */}
      <div className="bg-secondary/30 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Book an appointment or stop by for a visit.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-2">For appointments and inquiries</p>
                  <a href="tel:336-309-1065" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                    (336) 309-1065
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground mb-2">Visit our salon in High Point</p>
                  <p className="text-lg font-medium text-foreground">
                    Shine Beauty Salon & Spa<br />
                    2402 Hickswood Rd #108<br />
                    High Point, NC 27265
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <div className="grid grid-cols-[100px_1fr] gap-2 text-muted-foreground">
                    <span>Tue - Sat:</span>
                    <span className="font-medium text-foreground">10:00 AM - 7:00 PM</span>
                    <span>Sun:</span>
                    <span className="font-medium text-foreground">12:00 PM - 5:00 PM</span>
                    <span>Mon:</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-display text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/groups/906064359948904/posts/1957466918141971/" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-border hover:border-primary/50 hover:text-primary transition-all shadow-sm">
                  <Facebook className="w-5 h-5" /> Facebook
                </a>
                <a href="https://www.instagram.com/shinebeauty459/" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-border hover:border-primary/50 hover:text-primary transition-all shadow-sm">
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Map / Image */}
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-border relative bg-muted">
            {/* Using a static map image for aesthetics, would normally embed Google Maps iframe */}
            <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2069&auto=format&fit=crop" 
              alt="Map Location Placeholder" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=Shine+Beauty+Salon+and+Spa+High+Point+NC" 
                 target="_blank"
                 className="bg-white/90 backdrop-blur px-6 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
               >
                 <MapPin className="text-primary" /> Open in Google Maps
               </a>
            </div>
          </div>

        </div>

        <div className="mt-24 text-center bg-primary/5 rounded-3xl p-12">
          <h2 className="font-display text-3xl font-bold mb-4">Ready for your appointment?</h2>
          <p className="text-muted-foreground mb-8">Book online instantly through Vagaro.</p>
          <BookingButton size="lg" className="px-12 h-14 text-lg" />
        </div>
      </div>
    </div>
  );
}
