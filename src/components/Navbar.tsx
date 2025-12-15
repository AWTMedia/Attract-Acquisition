import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // “leave the top” threshold (tweak if you want it to wait longer)
      setMinimized(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* FULL NAVBAR */}
      <div
        className={[
          "container mx-auto py-4",
          "transition-all duration-300 ease-out",
          minimized
            ? "opacity-0 -translate-y-3 scale-[0.98] pointer-events-none"
            : "opacity-100 translate-y-0 scale-100 pointer-events-auto",
        ].join(" ")}
      >
        <div className="glass-purple-strong rounded-2xl px-5 md:px-6 py-3 flex items-center justify-between border border-white/10">
          <a href="/" className="text-xl md:text-2xl font-bold text-white">
            Attract Acquisition
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-white/80 font-medium hover:text-white transition-colors"
            >
              Service
            </a>
            <a
              href="#"
              className="text-white/80 font-medium hover:text-white transition-colors"
            >
              About us
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="dark" size="sm" asChild>
              <a href="#get-attractive">Get Attractive</a>
            </Button>

            <a
              href="#"
              className="hidden md:block text-white/80 font-medium hover:text-white transition-colors"
            >
              Log in
            </a>
          </div>
        </div>
      </div>

      {/* MINIMIZED PILL (TOP-RIGHT) */}
      <div
        className={[
          "fixed top-4 right-4 z-50",
          "transition-all duration-300 ease-out",
          minimized
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none",
        ].join(" ")}
      >
        <div className="glass-purple-strong border border-white/10 rounded-2xl px-3 py-3 shadow-[0_18px_50px_rgba(11,15,25,0.45)]">
          <Button variant="dark" size="sm" asChild>
            <a href="#get-attractive" aria-label="Get Attractive">
              Get Attractive
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
