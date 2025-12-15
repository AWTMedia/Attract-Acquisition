import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How is this different from social media management?",
      description:
        "We don’t just post. We build the system behind your content so Instagram becomes a predictable acquisition channel.",
    },
    {
      question: "Do you guarantee results?",
      description:
        "We guarantee the engine build (profile funnel + content system + DM → booking flow). Outcomes depend on offer, location, pricing, and execution — but the system makes results repeatable.",
    },
    {
      question: "How long does it take?",
      description:
        "Most businesses can have the full engine installed in days, then improved weekly.",
    },
    {
      question: "Do you need access to our Instagram?",
      description:
        "Not always. We can build done-with-you (you post) or support execution depending on your setup.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  const card = (index: number) => ({
    hidden: { opacity: 0, y: 18, x: index % 2 === 0 ? -10 : 10, scale: 0.99 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  });

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-center mb-2 text-foreground">
            FAQ
          </h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto">
            Quick answers before you book.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.28 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={card(index)}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group border border-border/60"
            >
              <h3 className="font-bold text-foreground mb-3 leading-snug">
                {faq.question}
              </h3>
              <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                {faq.description}
              </p>

              {/* Chevron hover animation (rotate + slide) */}
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

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
        >
          <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Button variant="outline-dark" size="lg">
              See all answers
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
