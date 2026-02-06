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

import newImg0 from "@assets/image0_1770338592824.jpeg";
import newImg1 from "@assets/image1_1770338592827.jpeg";
import newImg2 from "@assets/image2_1770338592828.jpeg";
import newImg3 from "@assets/image3_1770338592829.jpeg";
import newImg4 from "@assets/image4_1770338592830.jpeg";
import newImg6 from "@assets/image6_1770338592831.jpeg";
import newImg7 from "@assets/image7_1770338592832.jpeg";
import newImg8 from "@assets/image8_1770338592832.jpeg";
import newImg9 from "@assets/image9_1770338592833.jpeg";
import newImg12 from "@assets/image12_1770338592834.jpeg";
import newImg13 from "@assets/image13_1770338592836.jpeg";
import newImg14 from "@assets/image14_1770338592815.jpeg";
import newImg15 from "@assets/image15_1770338592816.jpeg";
import newImg16 from "@assets/image16_1770338592818.jpeg";
import newImg17 from "@assets/image17_1770338592819.jpeg";
import newImg18 from "@assets/image18_1770338592821.jpeg";
import newImg19 from "@assets/image19_1770338592821.jpeg";
import newImg20 from "@assets/image20_1770338592826.jpeg";
import newImg27 from "@assets/image27_1770338592822.jpeg";
import newImg33 from "@assets/image33_1770338592826.jpeg";

import addImg5 from "@assets/image5_1770338720277.jpeg";
import addImg10 from "@assets/image10_1770338720278.jpeg";
import addImg11 from "@assets/image11_1770338720279.jpeg";
import addImg21 from "@assets/image21_1770338720280.jpeg";
import addImg22 from "@assets/image22_1770338720281.jpeg";
import addImg23 from "@assets/image23_1770338720281.jpeg";
import addImg24 from "@assets/image24_1770338720282.jpeg";
import addImg25 from "@assets/image25_1770338720283.jpeg";
import addImg28 from "@assets/image28_1770338720284.jpeg";
import addImg29 from "@assets/image29_1770338720285.jpeg";

import addImg31 from "@assets/image31_1770338720275.jpeg";
import addImg32 from "@assets/image32_1770338720277.jpeg";
import addImg34 from "@assets/image34_1770338720284.jpeg";

const images = [
  newImg0,
  img4,
  addImg21,
  newImg8,
  img5,
  addImg5,
  newImg17,
  img22,
  addImg10,
  newImg4,
  img6,
  addImg24,
  newImg14,
  img23,
  addImg25,
  newImg12,
  img7,
  addImg11,
  newImg27,
  img24,
  addImg22,
  newImg18,
  img8,
  newImg20,
  img25,
  addImg29,
  newImg6,
  img9,
  addImg32,
  newImg9,
  img27,
  addImg28,
  newImg16,
  img29,
  addImg23,
  newImg1,
  img31,
  addImg31,
  newImg7,
  img3,
  addImg34,
  newImg15,
  newImg3,
  newImg19,
  newImg13,
  newImg33,
  newImg2,
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
              transition={{ duration: 0.4, delay: idx * 0.05 }}
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
            <span className="text-muted-foreground">&bull;</span>
            <a href="https://www.instagram.com/shinebeauty459/" target="_blank" className="font-semibold text-primary hover:underline">Instagram</a>
            <span className="text-muted-foreground">&bull;</span>
            <a href="https://www.tiktok.com/@shinebeautysalonandnail" target="_blank" className="font-semibold text-primary hover:underline">TikTok</a>
          </div>
        </div>
      </div>
    </div>
  );
}
