import { Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 tracking-tighter flex items-center gap-2">
              <img src="/logo.png" alt="Wall Mapping Logo" className="w-6 h-6 rounded" />
              <span><span className="text-primary">WALL</span>MAPPING</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Studio kreatif spesialis Wall Mapping & Immersive Dark Exhibition.
              Mengubah ruang biasa menjadi pengalaman visual yang luar biasa.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Jakarta Selatan, Indonesia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +62 855-4518-2377
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                hello@luminavisual.id
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              {[Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 Wall Mapping. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
