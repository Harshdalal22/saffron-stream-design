import { motion } from "framer-motion";
import heroLaddu from "@/assets/hero-laddu.jpg";
import kesarPeda from "@/assets/kesar-peda.jpg";
import kajuKatli from "@/assets/kaju-katli.jpg";
import besanLaddu from "@/assets/besan-laddu.jpg";
import motichoorLaddu from "@/assets/motichoor-laddu.jpg";
import gondLaddu from "@/assets/gond-laddu.jpg";
import kalakand from "@/assets/kalakand.jpg";
import balushahi from "@/assets/balushahi.jpg";
import badamBarfi from "@/assets/badam-barfi.jpg";
import kachori from "@/assets/kachori.jpg";
import gajarPak from "@/assets/gajar-pak.jpg";
import namkeen from "@/assets/namkeen.jpg";
import churma from "@/assets/churma.jpg";

const retailPriceData = [
  { item: "लड्डू", itemEn: "Laddu", price: 190, image: heroLaddu },
  { item: "बादाम लड्डू", itemEn: "Badam Laddu", price: 220, image: besanLaddu },
  { item: "बादाम पिस्ता लड्डू", itemEn: "Badam Pista Laddu", price: 230, image: motichoorLaddu },
  { item: "पेड़ा", itemEn: "Peda", price: 240, image: kesarPeda },
  { item: "केसर पेड़ा", itemEn: "Kesar Peda", price: 290, image: kesarPeda },
  { item: "चेतन पेड़ा", itemEn: "Chetan Peda", price: 700, image: kesarPeda },
  { item: "दिलखुशाल", itemEn: "Dilkhushal", price: 230, image: kajuKatli },
  { item: "कलाकन्द", itemEn: "Kalakand", price: 240, image: kalakand },
  { item: "गोंद पाक", itemEn: "Gond Pak", price: 240, image: gondLaddu },
  { item: "गोंद लड्डू", itemEn: "Gond Laddu", price: 240, image: gondLaddu },
  { item: "खोपरा पाक", itemEn: "Khopra Pak", price: 210, image: kajuKatli },
  { item: "मोती पाक", itemEn: "Moti Pak", price: 240, image: kajuKatli },
  { item: "मूंगदाल चक्की", itemEn: "Moongdal Chakki", price: 240, image: besanLaddu },
  { item: "काजू बर्फी", itemEn: "Kaju Barfi", price: 380, image: kajuKatli },
  { item: "बालूशाही", itemEn: "Balushahi", price: 210, image: balushahi },
  { item: "बादाम बर्फी", itemEn: "Badam Barfi", price: 600, image: badamBarfi },
  { item: "कचौरी", itemEn: "Kachori", price: 180, image: kachori },
  { item: "मठल्लू/पेठा", itemEn: "Mathallu/Petha", price: 140, image: kalakand },
  { item: "नमकीन/गट्टा/सुहाल", itemEn: "Namkeen/Gatta/Suhal", price: 150, image: namkeen },
  { item: "चूरमा", itemEn: "Churma", price: 240, image: churma },
  { item: "चूरमा लड्डू", itemEn: "Churma Laddu", price: 230, image: churma },
  { item: "गाजर पाक", itemEn: "Gajar Pak", price: 300, image: gajarPak },
  { item: "पचधारी लड्डू", itemEn: "Pachdhari Laddu", price: 240, image: heroLaddu },
  { item: "बेसन लड्डू", itemEn: "Besan Laddu", price: 240, image: besanLaddu },
  { item: "मोती चूर लड्डू", itemEn: "Moti Chur Laddu", price: 240, image: motichoorLaddu },
];

export function RetailPriceSection() {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <section id="retail-prices" className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-2"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            सियाराम स्वीट्स चिड़ावा वाले
          </h2>
          <p 
            className="text-xl md:text-2xl text-green-700 font-bold"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            चिड़ावा रेट (Per Kg)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto overflow-x-auto rounded-xl shadow-luxury"
        >
          <table className="w-full border-collapse">
            {/* Header */}
            <thead>
              <tr className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white">
                <th
                  className="py-4 px-4 text-left font-bold text-base md:text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  मिठाई / नमकीन
                </th>
                <th
                  className="py-4 px-4 text-center font-bold text-base md:text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  चिड़ावा रेट
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {retailPriceData.map((row, index) => (
                <motion.tr
                  key={row.itemEn}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className={`${
                    index % 2 === 0 ? "bg-amber-50" : "bg-green-50"
                  } border-b border-orange-200 hover:bg-orange-100 transition-colors`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={row.image}
                        alt={row.itemEn}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover shadow-md border-2 border-orange-200"
                      />
                      <div>
                        <span
                          className="font-semibold text-foreground text-base md:text-lg block"
                          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                        >
                          {row.item}
                        </span>
                        <span className="text-muted-foreground text-xs md:text-sm">
                          {row.itemEn}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-orange-700 text-lg md:text-xl">
                    {formatPrice(row.price)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 space-y-2"
        >
          <p 
            className="text-red-600 font-bold text-sm md:text-base"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            GST नमकीन 12% | GST मिठाई 05%
          </p>
          <p className="text-muted-foreground text-sm">
            * Prices are subject to change. Please contact us for current rates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
