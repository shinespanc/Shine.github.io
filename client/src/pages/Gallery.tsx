import { useEffect } from "react";
import { motion } from "framer-motion";

import img4 from "@assets/image4_1770076506403.jpeg";
import img5 from "@assets/image5_1770076506403.jpeg";
import img6 from "@assets/image6_1770076506404.jpeg";
import img7 from "@assets/image7_1770076506404.jpeg";
import img8 from "@assets/image8_1770076506404.jpeg";
import img9 from "@assets/image9_1770076506405.jpeg";
import img22 from "@assets/image22_1770076506405.jpeg";
import img23 from "@assets/image23_1770076506406.jpeg";
import img24 from "@assets/image24_1770076506406.jpeg";
import img25 from "@assets/image25_1770076506407.jpeg";
import img27 from "@assets/image27_1770076506407.jpeg";
import img29 from "@assets/image29_1770076506407.jpeg";
import img31 from "@assets/image31_1770076506407.jpeg";
import img3 from "@assets/image3_1770076506408.jpeg";

const images = [
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img22,
  img23,
  img24,
  img25,
  img27,
  img29,
  img31,
  img3
];

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-background pb-24">
       {/* Header */}
       <div className="bg-secondary/30 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our world of beauty, relaxation, and style.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
            >
              <img
                src={src}
                alt={`Shine Beauty Salon - Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Follow us on social media for more daily updates!</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://www.facebook.com/groups/906064359948904/posts/1957466918141971/" target="_blank" className="font-semibold text-primary hover:underline">Facebook</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.instagram.com/shinebeauty459/" target="_blank" className="font-semibold text-primary hover:underline">Instagram</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.tiktok.com/@shinebeautysalonandnail" target="_blank" className="font-semibold text-primary hover:underline">TikTok</a>
          </div>
        </div>
      </div>
    </div>
  );
}
