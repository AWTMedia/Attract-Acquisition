import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const MadeWithLoveSection = () => {
  return (
    <section className="relative overflow-hidden aa-bg py-16 md:py-24">
      {/* Hero-style depth layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[90px]" />
        <div className="absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-white/8 blur-[110px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-black/25" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto relative text-center">
        <p className="text-white/70 font-semibold mb-4">Get Attractive™</p>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center justify-center gap-3">
          Built to Convert
          <Heart className="w-7 h-7 fill-white/80 text-white/80" />
        </h2>

        <p className="text-white/85 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          Physical businesses don’t need more content — they need a system that turns attention into
          clients, every week.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#" aria-label="Book a call">
              Book a Call
            </a>
          </Button>

          <a href="#" className="text-white/85 hover:text-white transition-colors font-medium">
            Or DM “ATTRACT” on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default MadeWithLoveSection;
