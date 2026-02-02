import { useEffect } from "react";
import { motion } from "framer-motion";
import { BookingButton } from "@/components/BookingButton";
import { CheckCircle2, Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import shammiImg from "@assets/image2_1770075682235.jpeg";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-background pb-24">
      {/* Header */}
      <div className="bg-secondary/30 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">About Shine</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the passion and people behind your favorite beauty salon in High Point.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Owner Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="font-display text-3xl font-bold mb-6 text-primary">A Note from Shammi</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Welcome to Shine Beauty Salon & Spa! I'm Shammi Sharma, and beauty has been my passion for as long as I can remember.
              </p>
              <p className="mb-4">
                Creating Shine was about more than just opening a salon; it was about creating a sanctuary where every client feels valued, heard, and beautiful. We believe that self-care is not a luxury, but a necessity.
              </p>
              <p>
                My team and I are dedicated to continuous learning, ensuring we bring you the best techniques and trends in the industry. We can't wait to welcome you to our family!
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Experienced Staff", "Clean & Safe", "Premium Products", "Customer Focused"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="font-display text-2xl font-bold mb-6">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/groups/906064359948904/posts/1957466918141971/" target="_blank" className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary hover:border-primary/50 hover:scale-110 transition-all shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/shinebeauty459/" target="_blank" className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary hover:border-primary/50 hover:scale-110 transition-all shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@shinebeautysalonandnail" target="_blank" className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary hover:border-primary/50 hover:scale-110 transition-all shadow-sm">
                  <SiTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl max-w-md mx-auto">
              <img 
                src={shammiImg} 
                alt="Shammi Sharma - Owner of Shine Beauty Salon & Spa" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary rounded-full -z-10 blur-3xl opacity-20"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-border text-center">
          <h2 className="font-display text-3xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-secondary/50 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">✨</div>
              <h3 className="font-bold text-xl mb-3">Excellence</h3>
              <p className="text-muted-foreground">We never compromise on quality. From our products to our service, expect the best.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-secondary/50 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">🌿</div>
              <h3 className="font-bold text-xl mb-3">Hygiene</h3>
              <p className="text-muted-foreground">Your safety is our priority. We adhere to the strictest sanitation standards.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-secondary/50 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">💖</div>
              <h3 className="font-bold text-xl mb-3">Community</h3>
              <p className="text-muted-foreground">We are proud to serve High Point and build lasting relationships with our clients.</p>
            </div>
          </div>
          <div className="mt-12">
            <BookingButton />
          </div>
        </div>
      </div>
    </div>
  );
}
