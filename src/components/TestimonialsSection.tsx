import { Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text:
        "The biggest shift wasn’t more content — it was structure. Now we have a clear path from local attention → enquiry → booking → sale.",
      author: "Gym Owner",
      verified: true,
    },
    {
      text:
        "DMs became qualified conversations, and we track exactly what converts. Growth is predictable.",
      author: "Clinic Founder",
      verified: true,
    },
  ];

  const ratingInfo = {
    title: "Built for physical businesses",
    description:
      "Most agencies add content. We install the infrastructure: positioning, capture pathways, and measurable conversion systems that turn local attention into revenue.",
  };

  // -----------------------------
  // Motion variants
  // -----------------------------
  const sectionIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };

  const headlineItem = {
    hidden: { opacity: 0, y: 10 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: i * 0.08 },
    }),
  };

  const subheadIn = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut", delay: 0.18 },
    },
  };

  const gridStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const starsPop = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut", delay: 0.12 },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-background"
      variants={sectionIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            <motion.span className="inline-block" variants={headlineItem} custom={0}>
              From Random Marketing to
            </motion.span>
            <motion.span className="inline-block text-primary ml-2" variants={headlineItem} custom={1}>
              Predictable Revenue
            </motion.span>
          </h2>

          <motion.p
            className="mt-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={subheadIn}
          >
            See what happens when local businesses install a predictable acquisition system.
          </motion.p>
        </div>

        {/* MOBILE: horizontal swipe / DESKTOP: 3-col grid */}
        <motion.div variants={gridStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="-mx-6 px-6">
              <div
                className="
                  flex gap-4 overflow-x-auto pb-4
                  snap-x snap-mandatory
                  touch-pan-x overscroll-x-contain
                  [scrollbar-width:none]
                  [-webkit-overflow-scrolling:touch]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                <div className="shrink-0 w-2" aria-hidden />

                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={cardIn}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="
                      flex-none shrink-0 w-[85%] sm:w-[70%]
                      snap-center
                      h-full rounded-2xl p-6 bg-background border border-border
                      shadow-sm hover:shadow-md transition-shadow
                    "
                  >
                    <motion.div className="flex items-center gap-1 mb-4" variants={starsPop}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </motion.div>

                    <p className="text-foreground leading-relaxed">{testimonial.text}</p>

                    <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{testimonial.author}</span>
                      {testimonial.verified && (
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <BadgeCheck className="w-4 h-4 text-primary" />
                          Verified
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Card 3: Why this works */}
                <motion.div
                  variants={cardIn}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="
                    flex-none shrink-0 w-[85%] sm:w-[70%]
                    snap-center
                    h-full rounded-2xl p-6 border border-primary/20 bg-primary/5
                    shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between
                  "
                >
                  <div>
                    <p className="text-sm font-semibold text-primary mb-3">Why this works</p>
                    <h3 className="text-foreground font-black text-xl mb-3">{ratingInfo.title}</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">{ratingInfo.description}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <motion.div className="flex" variants={starsPop}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </motion.div>
                    <span className="text-sm text-muted-foreground">Results-focused systems</span>
                  </div>
                </motion.div>

                <div className="shrink-0 w-2" aria-hidden />
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-3">Swipe →</p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardIn}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="h-full rounded-2xl p-6 bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.div className="flex items-center gap-1 mb-4" variants={starsPop}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </motion.div>

                <p className="text-foreground leading-relaxed">{testimonial.text}</p>

                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{testimonial.author}</span>
                  {testimonial.verified && (
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <BadgeCheck className="w-4 h-4 text-primary" />
                      Verified
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={cardIn}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="h-full rounded-2xl p-6 border border-primary/20 bg-primary/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-primary mb-3">Why this works</p>
                <h3 className="text-foreground font-black text-xl mb-3">{ratingInfo.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{ratingInfo.description}</p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <motion.div className="flex" variants={starsPop}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </motion.div>
                <span className="text-sm text-muted-foreground">Results-focused systems</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
