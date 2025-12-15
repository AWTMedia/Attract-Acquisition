import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const MadeWithLoveSection = () => {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto text-center">
        <p className="text-primary font-semibold mb-4">Get Attractive™</p>

        <h2 className="text-4xl md:text-5xl font-black text-dark-foreground mb-4 flex items-center justify-center gap-3">
          Built to Convert
          <Heart className="w-7 h-7 fill-primary text-primary" />
        </h2>

        <p className="text-dark-foreground/75 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          Physical businesses don’t need more content — they need a system that turns attention into
          clients, every week.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#" aria-label="Book a call">
              Book a Call
            </a>
          </Button>

          <a
            href="#"
            className="text-dark-foreground/80 hover:text-dark-foreground transition-colors font-medium"
          >
            Or DM “ATTRACT” on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default MadeWithLoveSection;
