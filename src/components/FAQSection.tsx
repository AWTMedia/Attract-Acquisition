import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = useMemo(
  () => [
    {
      question: "How is this different from social media management?",
      description:
        "We don’t just post content. We build the system behind your Instagram so your profile becomes a predictable lead-generating channel — from content hooks to DM → booking flow.",
    },
    {
      question: "How many leads can I expect in the first 14 days?",
      description:
        "During the 14-Day Lead Proof Sprint, we aim to generate up to 10 highly qualified local enquiries, letting you see the system in action before committing to the full pipeline.",
    },
    {
      question: "Do you guarantee results?",
      description:
        "We guarantee the system is installed correctly (profile funnel, content plan, DM → booking flow). Outcomes depend on your offer, pricing, and engagement, but the system makes results repeatable and predictable.",
    },
    {
      question: "Do I have to pay a management fee upfront?",
      description:
        "For the 14-Day Lead Proof Sprint, you only cover ad spend — our management fee is waived for this trial. This lets you test the system with minimal risk.",
    },
    {
      question: "How soon will I see results?",
      description:
        "You’ll start seeing DMs and bookings within the 14-day sprint. After the sprint, we analyze and refine the system to ensure consistent, repeatable leads every month.",
    },
    {
      question: "Is this only for Instagram?",
      description:
        "Instagram is our primary focus. We optimize the profile, content, and DM flow for predictable lead generation.",
    },
    {
      question: "Who is this for?",
      description:
        "Physical businesses with a clear offer (gyms, clinics, salons, trades, studios) who want consistent, high-quality enquiries and bookings from Instagram.",
    },
          {
        question: "What if we have low followers?",
        description:
          "That’s fine. The system works best when focused: profile funnel + strong hooks + a DM booking flow. You don’t need huge numbers to get bookings.",
      },
    {
      question: "What makes this different from hiring a marketing agency?",
      description:
        "Unlike traditional agencies that post content or run ads, we build a complete **engine** for predictable client acquisition — content strategy, DM workflows, booking funnels, and performance tracking — so your results are systematic, not random.",
    },
    {
      question: "How do you measure success?",
      description:
        "We track every step: profile visits, engagement, DMs started, bookings, and revenue. This lets us double down on what works and optimize continuously.",
    },
    {
      question: "Can I test this without a long-term contract?",
      description:
        "Yes! The 14-Day Lead Proof Sprint is designed as a short, low-risk test. You only commit to the full system if you see results and want predictable monthly leads.",
    },
    {
      question: "Do you provide proof or case studies?",
      description:
        "Absolutely — we’ve delivered over +100 audits and sprint campaigns, helping businesses like yours turn views into booked clients consistently.",
    },
  ],
  []
);

  const previewFaqs = faqs.slice(0, 4);
  const expandedFaqs = faqs.slice(0, 10);

  const previewContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  const previewCard = (index: number) => ({
    hidden: { opacity: 0, y: 18, x: index % 2 === 0 ? -10 : 10, scale: 0.99 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  });

  const listStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
  };

  const rowIn = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.2, ease: "easeOut" } },
  };

  const onToggleExpanded = () => {
    setExpanded((v) => {
      const next = !v;
      if (!next) setOpenIndex(null);
      return next;
    });
  };

  // Mobile preview row animation (tighter)
  const mobileRow = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
  };

  const openFromPreview = (idx: number) => {
    setExpanded(true);
    setOpenIndex(idx);
  };

  return (
    <section className="bg-secondary py-14 md:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-center mb-2 text-foreground">FAQ</h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto">Quick answers before you book.</p>
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          {!expanded ? (
            <motion.div key="preview" className="mt-10 md:mt-12" variants={previewContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }}>
              {/* ✅ MOBILE: collapsed (question-only) */}
              <motion.div className="grid gap-3 md:hidden" variants={previewContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }}>
                {previewFaqs.map((faq, idx) => (
                  <motion.button
                    key={faq.question}
                    type="button"
                    variants={mobileRow}
                    onClick={() => openFromPreview(idx)}
                    className="w-full bg-background rounded-2xl border border-border/60 px-4 py-4 text-left flex items-center justify-between gap-3"
                    aria-label={`Open FAQ: ${faq.question}`}
                  >
                    <span className="font-bold text-foreground leading-snug text-[16px]">
                      {faq.question}
                    </span>
                    <span className="shrink-0">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </span>
                  </motion.button>
                ))}

                {/* small hint */}
                <p className="text-center text-foreground/60 text-xs mt-1">
                  Tap a question to expand
                </p>
              </motion.div>

              {/* ✅ DESKTOP/TABLET: keep your 4-card preview grid with descriptions */}
              <motion.div
                className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={previewContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.28 }}
              >
                {previewFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    variants={previewCard(index)}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group border border-border/60"
                    onClick={() => openFromPreview(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") openFromPreview(index);
                    }}
                  >
                    <h3 className="font-bold text-foreground mb-3 leading-snug">{faq.question}</h3>
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{faq.description}</p>

                    <motion.div
                      className="inline-flex"
                      initial={false}
                      whileHover={{ x: 4, rotate: 45 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              className="mt-10 md:mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <motion.div className="grid gap-3" variants={listStagger} initial="hidden" animate="show">
                <AnimatePresence initial={false}>
                  {expandedFaqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;

                    return (
                      <motion.div
                        key={faq.question}
                        variants={rowIn}
                        className="bg-background rounded-2xl border border-border/60 overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
                          className="w-full flex items-center justify-between gap-4 p-5 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-bold text-foreground leading-snug">{faq.question}</span>

                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 420, damping: 30 }}
                            className="shrink-0"
                          >
                            <ChevronDown className="w-5 h-5 text-primary" />
                          </motion.span>
                        </button>

                        <motion.div
                          className="grid"
                          initial={false}
                          animate={{
                            gridTemplateRows: isOpen ? "1fr" : "0fr",
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{
                            gridTemplateRows: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.18, ease: "easeOut" },
                          }}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 pb-5">
                              <p className="text-foreground/70 text-sm leading-relaxed">{faq.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
        >
          <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Button variant={expanded ? "hero" : "outline-dark"} size="lg" onClick={onToggleExpanded}>
              {expanded ? "See less" : "See all answers"}
            </Button>
          </motion.div>

          {expanded && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <a
                href="https://calendly.com/attractacquisition/attract-acquisition-1-1-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:opacity-90 transition-opacity"
              >
                Or Book A Call →
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
