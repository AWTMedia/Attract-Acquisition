import { Facebook, Linkedin, Twitter, Instagram, Video } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Resources: ["Help Centre", "Contact Us"],
    Company: ["About Us", "Careers", "Press"],
    Legal: ["Terms of Use", "Privacy Policy", "POPIA", "Complaints"],
  };

  const socials = [
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "X", href: "#", icon: Twitter },
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "TikTok", href: "#", icon: Video },
  ];

  return (
    <footer className="bg-dark text-dark-foreground py-12 md:py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-black mb-2">Attract Acquisition</h3>
            <p className="text-sm text-dark-foreground/70 max-w-xs">
              Building Attraction Engines for Physical Businesses.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-dark-foreground/70">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-dark-foreground/60 hover:text-dark-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-foreground/20 pt-8 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-dark-foreground/70 hover:text-dark-foreground transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-dark-foreground/40 text-xs">
          <p>© 2025 Attract Acquisition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
