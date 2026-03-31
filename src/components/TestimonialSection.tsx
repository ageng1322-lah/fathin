import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Event Director, PT Megah Kreasi",
    text: "Hasil wall mapping mereka benar-benar di luar ekspektasi. Tamu undangan kami sampai terpukau dan terus membicarakannya berhari-hari setelah event. ROI dari engagement yang dihasilkan sangat luar biasa.",
  },
  {
    name: "Sarah Wijaya",
    role: "Kurator, Museum Seni Modern",
    text: "Dark room exhibition yang mereka ciptakan mengubah cara pengunjung berinteraksi dengan karya seni. Pengunjung museum meningkat 200% sejak instalasi dipasang. Kolaborasi terbaik yang pernah kami lakukan.",
  },
  {
    name: "Budi Hartono",
    role: "CMO, Brand Otomotif Premium",
    text: "Kami butuh sesuatu yang 'WOW' untuk launch produk baru dan tim ini memberikan lebih dari yang kami minta. Eksekusi cepat, profesional, dan hasilnya cinematic. Pasti akan kerja sama lagi.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Testimoni</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Kata <span className="gradient-text">Mereka</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass rounded-xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{t.text}</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
