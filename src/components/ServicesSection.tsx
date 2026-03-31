import { motion } from "framer-motion";
import { Projector, Moon, Wrench, Touchpad } from "lucide-react";

const services = [
  {
    icon: Projector,
    title: "Wall Mapping",
    description: "Proyeksi visual dinamis pada gedung, panggung, dan berbagai permukaan untuk menciptakan tontonan spektakuler.",
    features: ["Projection Mapping 2D & 3D", "Resolusi hingga 8K", "Indoor & Outdoor"],
  },
  {
    icon: Moon,
    title: "Dark Room Exhibition",
    description: "Pameran ruang gelap yang menghadirkan pengalaman sensorik mendalam dengan cahaya, suara, dan visual imersif.",
    features: ["Multi-sensory experience", "Custom room design", "Audio-visual sync"],
  },
  {
    icon: Wrench,
    title: "Custom Installation",
    description: "Instalasi seni digital custom yang dirancang khusus sesuai kebutuhan brand dan konsep acara Anda.",
    features: ["Konsep original", "Hardware & software", "Setup & support"],
  },
  {
    icon: Touchpad,
    title: "Interaktif Digital",
    description: "Pengalaman digital interaktif dengan sensor gerak, sentuh, dan teknologi real-time yang melibatkan audiens secara langsung.",
    features: ["Motion tracking", "Touch-responsive", "Real-time generative"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Layanan</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Solusi Visual <span className="gradient-text">Tanpa Batas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass rounded-xl p-8 group hover:neon-border transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:neon-box transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
