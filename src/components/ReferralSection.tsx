import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Button } from "@/components/ui/button";

const ReferralSection = () => {
  const numberRef = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(numberRef, { once: true, amount: 0.35 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, 100, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView]);

  return (
    <motion.section
      className="bg-background py-14 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start md:items-center">
          {/* LEFT */}
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h2 className="text-[clamp(44px,9vw,56px)] md:text-5xl font-black mb-5 md:mb-6 leading-[0.95] md:leading-tight">
              <motion.span
                className="text-primary block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                Attraction Audit
              </motion.span>

              <motion.span
                className="text-foreground block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
              >
                in 24 hours.
              </motion.span>
            </h2>

            <motion.p
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7 md:mb-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
            >
              We’ll show you exactly what to fix to turn views into DMs and bookings — profile
              funnel, content plan, and conversion path.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 sm:gap-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href="#" aria-label="Get a free audit">
                    Get a free audit
                  </a>
                </Button>
              </motion.div>

              <a
                href="#"
                className="text-foreground/80 hover:text-foreground transition-colors font-medium text-center sm:text-left"
              >
                Or DM “ATTRACT” on Instagram
              </a>
            </motion.div>

            <motion.p
              className="text-xs text-muted-foreground mt-4 text-center md:text-left"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.26 }}
            >
              Free • 24h turnaround • actionable fixes
            </motion.p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0">
            <div className="text-center rounded-3xl bg-secondary/35 border border-border/60 px-8 py-10 md:px-10 md:py-12 w-full max-w-md">
              <motion.p
                ref={numberRef}
                className="text-7xl md:text-8xl font-black text-primary leading-none"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                +{count}
              </motion.p>

              <motion.p
                className="text-4xl md:text-5xl font-black tracking-tight text-foreground mt-2"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
              >
                AUDITS
              </motion.p>

              <motion.p
                className="text-muted-foreground mt-4"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.26 }}
              >
                delivered… and counting
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReferralSection;
