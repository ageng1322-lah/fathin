import { motion } from "framer-motion";
import { Cpu, Palette, Users, Headphones, Shield, Zap } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Teknologi Mutakhir", desc: "Proyektor 4K-8K, sensor real-time, dan software proprietary." },
  { icon: Palette, title: "Tim Kreatif Berpengalaman", desc: "Desainer, animator, dan engineer dengan 8+ tahun pengalaman." },
  { icon: Users, title: "50+ Klien Puas", desc: "Dipercaya brand besar, museum, dan event organizer ternama." },
  { icon: Headphones, title: "Full Support", desc: "Konsultasi, setup, operasional, hingga dokumentasi project." },
  { icon: Shield, title: "Garansi Kualitas", desc: "Testing menyeluruh dan backup system untuk zero-downtime." },
  { icon: Zap, title: "Eksekusi Cepat", desc: "Dari konsep ke realita dalam waktu yang efisien tanpa kompromi." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Keunggulan</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Mengapa <span className="gradient-text">Memilih Kami?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-xl hover:bg-card/60 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
