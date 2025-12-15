import { Button } from "@/components/ui/button";

const ReferralSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="text-primary">Attraction Audit</span>
              <br />
              <span className="text-foreground">in 24 hours.</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              We’ll show you exactly what to fix to turn views into DMs and bookings — profile
              funnel, content plan, and conversion path.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Button variant="hero" size="lg" asChild>
                <a href="#" aria-label="Get a free audit">
                  Get a free audit
                </a>
              </Button>

              <a
                href="#"
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Or DM “ATTRACT” on Instagram
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Free • 24h turnaround • actionable fixes
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-7xl md:text-8xl font-black text-primary leading-none">+100</p>
              <p className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                AUDITS
              </p>

              <p className="text-muted-foreground mt-4">delivered… and counting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
