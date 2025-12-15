import phoneMockup2 from "@/assets/phone-mockup-2.png";
import { ArrowDown } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto">
        {/* Unified “curved box” w/ depth + subtle inner border */}
        <div className="relative bg-primary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          {/* Inner glow for depth (Naked-ish) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-56 -right-56 h-[640px] w-[640px] rounded-full bg-black/20 blur-3xl" />
          </div>

          {/* Feature A */}
          <div className="relative px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 3-stage stack: heading + connector line + better hierarchy */}
              <div className="max-w-md mx-auto w-full">
                <div className="mb-4">
                  <p className="text-white/70 text-sm font-medium">3-stage flow</p>
                  <p className="text-white text-lg font-bold">The engine</p>
                </div>

                <div className="relative pl-6">
                  {/* Connector line */}
                  <div className="absolute left-[11px] top-3 bottom-3 w-px bg-white/15" />

                  {/* Stage 1 */}
                  <div className="relative">
                    <div className="glass-purple rounded-2xl p-6 border border-white/10">
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">
                        Stage 1
                      </p>
                      <p className="text-3xl font-black text-white">Attract</p>
                      <p className="text-white/75 text-sm mt-2">
                        Profile + content structure
                      </p>
                    </div>
                    <div className="absolute left-[-2px] top-[68px] -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-white/35" />
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="relative mt-6">
                    <div className="glass-purple rounded-2xl p-6 border border-white/10">
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">
                        Stage 2
                      </p>
                      <p className="text-3xl font-black text-white">Nurture</p>
                      <p className="text-white/75 text-sm mt-2">
                        Stories + DM touchpoints
                      </p>
                    </div>
                    <div className="absolute left-[-2px] top-[68px] -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-white/35" />
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="relative mt-6">
                    <div className="glass-purple rounded-2xl p-6 border border-white/10">
                      <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">
                        Stage 3
                      </p>
                      <p className="text-3xl font-black text-white">Convert</p>
                      <p className="text-white/75 text-sm mt-2">
                        DM → booking → sale
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro-CTA */}
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-white/85 hover:text-white font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    See the engine in action <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              {/* Copy (improved contrast + sizing) */}
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Build a system
                  <br />
                  <span className="text-white/70">not just content</span>
                  <br />
                  that gets clients
                </h2>

                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                  Most agencies add volume. We build the infrastructure behind your content: profile
                  funnel, weekly content structure, and a DM → booking flow — so Instagram becomes
                  predictable.
                </p>
              </div>
            </div>
          </div>

          {/* Divider (soft fade instead of harsh line) */}
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* Feature B (still purple) */}
          <div className="relative px-6 md:px-12 py-14 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 text-white">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Know what’s working
                  <br />
                  <span className="text-white/70">in real time</span>
                  <br />
                  and scale it
                </h2>

                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                  We add tracking and a simple pipeline so you can see what turns into DMs, bookings,
                  and clients — then double down on what’s proven.
                </p>
              </div>

              {/* Framed dashboard image */}
              <div className="relative order-1 md:order-2">
                <div className="glass-purple rounded-3xl p-3 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.25)] md:rotate-[-1deg]">
                  <img
                    src={phoneMockup2}
                    alt="Tracking and conversion mockup"
                    className="w-full max-w-md mx-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom depth */}
          <div className="relative h-10 bg-gradient-to-b from-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
