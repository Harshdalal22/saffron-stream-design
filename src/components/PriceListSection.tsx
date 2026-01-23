import { motion } from "framer-motion";
import heroLaddu from "@/assets/hero-laddu.jpg";
import kesarPeda from "@/assets/kesar-peda.jpg";
import kajuKatli from "@/assets/kaju-katli.jpg";
import besanLaddu from "@/assets/besan-laddu.jpg";
import motichoorLaddu from "@/assets/motichoor-laddu.jpg";

const priceData = [
  { item: "लड्डू", itemEn: "Laddu", chirawa: 18000, salasar: 19500, delhi: 19500, image: heroLaddu },
  { item: "बादाम लड्डू", itemEn: "Badam Laddu", chirawa: 20000, salasar: 21500, delhi: 21500, image: besanLaddu },
  { item: "बादाम पिस्ता लड्डू", itemEn: "Badam Pista Laddu", chirawa: 21500, salasar: 23000, delhi: 23000, image: motichoorLaddu },
  { item: "पेड़ा", itemEn: "Peda", chirawa: 22500, salasar: 24000, delhi: 24500, image: kesarPeda },
  { item: "केसर पेड़ा", itemEn: "Kesar Peda", chirawa: 27500, salasar: 29000, delhi: 29000, image: kesarPeda },
  { item: "दिलखुशाल", itemEn: "Dilkhushal", chirawa: 22500, salasar: 24000, delhi: 24000, image: kajuKatli },
  { item: "चूरमा", itemEn: "Churma", chirawa: 19500, salasar: 21000, delhi: 21000, image: heroLaddu },
  { item: "मोती पाक", itemEn: "Moti Pak", chirawa: 22500, salasar: 24000, delhi: 24000, image: kajuKatli },
  { item: "काजू बर्फी", itemEn: "Kaju Barfi", chirawa: 37500, salasar: 37500, delhi: 37500, image: kajuKatli },
  { item: "मूंग चक्की", itemEn: "Moong Chakki", chirawa: 22500, salasar: 24000, delhi: 24000, image: besanLaddu },
  { item: "गोंद पाक", itemEn: "Gond Pak", chirawa: 22500, salasar: 24000, delhi: 24000, image: motichoorLaddu },
];

export function PriceListSection() {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <section id="prices" className="py-16 bg-cream">
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
            स्वामिणी की रेट (50 Kg)
          </h2>
          <p className="text-foreground/70 font-body">Wholesale Price List</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto overflow-x-auto rounded-xl shadow-luxury"
        >
          <table className="w-full min-w-[700px] border-collapse">
            {/* Header */}
            <thead>
              <tr className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white">
                <th
                  className="py-4 px-3 text-left font-bold text-base md:text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  मिठाई
                </th>
                <th
                  className="py-4 px-3 text-center font-bold text-base md:text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  चिड़ावा
                </th>
                <th
                  className="py-4 px-3 text-center font-bold text-base md:text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  सालासर धाम / खाटू धाम
                </th>
                <th
                  className="py-4 px-3 text-center font-bold text-base md:text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  दिल्ली
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {priceData.map((row, index) => (
                <motion.tr
                  key={row.itemEn}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${
                    index % 2 === 0 ? "bg-amber-50" : "bg-green-50"
                  } border-b border-orange-200 hover:bg-orange-100 transition-colors`}
                >
                  <td className="py-3 px-3">
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
                  <td className="py-3 px-3 text-center font-bold text-orange-700 text-sm md:text-base">
                    {formatPrice(row.chirawa)}
                  </td>
                  <td className="py-3 px-3 text-center font-bold text-orange-700 text-sm md:text-base">
                    {formatPrice(row.salasar)}
                  </td>
                  <td className="py-3 px-3 text-center font-bold text-orange-700 text-sm md:text-base">
                    {formatPrice(row.delhi)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-6"
        >
          * Prices are subject to change. Please contact us for current rates.
        </motion.p>
      </div>
    </section>
  );
}
