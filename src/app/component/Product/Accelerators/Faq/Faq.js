"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "When can I access Agentic CMS?",
    answer:
      "You can access Agentic CMS once you’ve registered and received confirmation. We provide onboarding to help you get started quickly.",
  },
  {
    question: "Is my content data safe?",
    answer:
      "Yes. Your content is encrypted in transit and at rest, and we follow strict security protocols to ensure safety.",
  },
  {
    question: "How is Agentic CMS different from other AI-powered CMSs?",
    answer:
      "Agentic CMS focuses on autonomous AI agents that assist with workflow automation, unlike others that only provide AI-assisted features.",
  },
  {
    question: "How does Agentic AI work with headless CMS?",
    answer:
      "Agentic AI integrates seamlessly with headless CMS APIs, letting you automate publishing, content updates, and analytics without interfering with your front-end.",
  },
  {
    question: "What happens if an agent makes a mistake?",
    answer:
      "If an agent makes a mistake, you can easily roll back changes using our version control and audit logs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-20 lg:px-32 py-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-12">FAQs</h2>

      <div className="divide-y divide-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="py-8">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full justify-between items-center text-left"
            >
              <span
                className={`text-2xl md:text-3xl font-normal tracking-tight ${
                  openIndex === index ? "text-indigo-400" : "text-white"
                }`}
              >
                {faq.question}
              </span>

              {openIndex === index ? (
                <Minus className="h-7 w-7 text-indigo-400" />
              ) : (
                <Plus className="h-7 w-7 text-gray-400" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 text-xl mt-5 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
