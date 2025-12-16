// src/components/PageLayout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = { children: React.ReactNode };

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {/* push content below fixed navbar */}
      <main className="pt-24 md:pt-28">
        {/* Center on mobile globally (opt-out per section with `text-left`) */}
        <div className="mobile-center">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
