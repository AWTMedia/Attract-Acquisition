import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto py-4">
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
            <Button variant="dark" size="sm">
              Get Attractive
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
    </nav>
  );
};

export default Navbar;
