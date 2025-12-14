import phoneMockup1 from "@/assets/phone-mockup-1.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";

const FeatureSection = () => {
  return (
    <>
      {/* Option B — System > content */}
      <section className="bg-dark py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={phoneMockup1}
                alt="Instagram system mockup"
                className="w-full max-w-md mx-auto animate-float"
              />
            </div>

            <div className="text-dark-foreground">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Build a system<br />
                <span className="text-primary">not just content</span><br />
                that gets clients
              </h2>

              <p className="text-dark-foreground/70 text-lg">
                Most agencies add volume. We build the infrastructure behind your content:
                <span className="text-dark-foreground"> profile funnel</span>,{" "}
                <span className="text-dark-foreground">weekly content structure</span>, and a{" "}
                <span className="text-dark-foreground">DM → booking flow</span> — so Instagram becomes predictable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Option C — Trackable results */}
      <section className="bg-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-foreground order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Know what’s working<br />
                <span className="text-primary">in real time</span><br />
                and scale it
              </h2>

              <p className="text-muted-foreground text-lg">
                We add tracking and a simple pipeline so you can see what turns into{" "}
                <span className="text-foreground">DMs</span>,{" "}
                <span className="text-foreground">bookings</span>, and{" "}
                <span className="text-foreground">clients</span> — then double down on what’s proven.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <img
                src={phoneMockup2}
                alt="Performance tracking mockup"
                className="w-full max-w-md mx-auto animate-float"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
