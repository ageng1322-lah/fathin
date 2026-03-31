import { motion } from "framer-motion";
import { Eye, Sparkles, Target } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Immersive Experience",
    description: "Menciptakan pengalaman visual yang menyelimuti audiens dalam dunia digital yang memukau dan tak terlupakan.",
  },
  {
    icon: Sparkles,
    title: "Teknologi Terdepan",
    description: "Menggunakan proyektor resolusi tinggi, sensor interaktif, dan software custom untuk hasil maksimal.",
  },
  {
    icon: Target,
    title: "Dampak Maksimal",
    description: "Meningkatkan engagement hingga 300% dan menciptakan momen viral yang memperkuat brand Anda.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="relative container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Tentang Kami</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Kami Mengubah <span className="gradient-text">Cahaya Menjadi Cerita</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Wall Mapping dan Dark Room Exhibition adalah seni mengubah permukaan dan ruang kosong
            menjadi kanvas digital yang hidup — menciptakan pengalaman imersif yang menyentuh emosi audiens.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass rounded-xl p-8 hover:neon-border transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:neon-box transition-all duration-500">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
