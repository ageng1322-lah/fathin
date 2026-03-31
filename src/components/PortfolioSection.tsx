import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Immersive Brand Experience",
    category: "Dark Room Exhibition",
    client: "Luxury Fashion Brand",
  },
  {
    image: portfolio2,
    title: "Digital Art Festival",
    category: "Wall Mapping",
    client: "Museum Nasional",
  },
  {
    image: portfolio3,
    title: "Interactive Light Room",
    category: "Interaktif Digital",
    client: "Tech Conference 2025",
  },
  {
    image: portfolio4,
    title: "Corporate Gala Night",
    category: "Custom Installation",
    client: "Fortune 500 Company",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="relative container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Karya yang <span className="gradient-text">Berbicara</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-mono text-primary mb-2 block">{project.category}</span>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.client}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
