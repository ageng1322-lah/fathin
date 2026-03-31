import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    subtitle: "Event Kecil",
    price: "Rp 25.000.000",
    period: "per project",
    popular: false,
    features: [
      "Wall mapping 1 sisi (max 5m)",
      "Konten animasi 2D standar",
      "Durasi hingga 3 menit",
      "1x revisi konten",
      "Setup & operasional 1 hari",
      "Dokumentasi foto",
    ],
  },
  {
    name: "Professional",
    subtitle: "Event Menengah",
    price: "Rp 75.000.000",
    period: "per project",
    popular: true,
    features: [
      "Wall mapping multi-sisi (max 15m)",
      "Konten animasi 2D & 3D",
      "Durasi hingga 10 menit",
      "3x revisi konten",
      "Setup & operasional 3 hari",
      "Dark room setup included",
      "Audio synchronization",
      "Dokumentasi foto & video",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Custom Besar",
    price: "Rp 200.000.000+",
    period: "custom quote",
    popular: false,
    features: [
      "Unlimited mapping area",
      "Full 3D & interactive content",
      "Durasi custom",
      "Revisi unlimited",
      "Tim dedicated on-site",
      "Immersive dark exhibition",
      "Interactive sensors & tracking",
      "Full documentation & report",
      "Maintenance support 30 hari",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="relative container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Harga</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Paket <span className="gradient-text">Investasi</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Pilih paket yang sesuai dengan skala event Anda. Semua paket termasuk konsultasi awal gratis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-xl p-8 relative flex flex-col ${
                plan.popular
                  ? "glass neon-border"
                  : "glass"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> PALING POPULER
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-primary neon-text">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-2">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://fathinstoree.myscalev.com/p/fathinstoree"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 block ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.4)]"
                    : "border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
