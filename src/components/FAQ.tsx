import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-100 hover:shadow-md transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left p-6 text-lg font-bold hover:text-primary transition-colors"
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-800">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'How does home delivery work?',
      answer: "Once your financing is approved, we'll schedule a time that works for you. Our professional drivers bring the car right to your driveway for a touchless delivery experience."
    },
    {
      question: 'What kind of warranty comes with the vehicle?',
      answer: "All our vehicles come with a complimentary 90-day/3,000-mile limited warranty and a 7-day money-back guarantee for total peace of mind."
    },
    {
      question: 'Can I trade in my current car?',
      answer: "Absolutely! You can get an instant offer online in under 2 minutes. We'll even pick up your old car when we deliver your new one."
    },
    {
      question: 'Do you offer financing for all credit types?',
      answer: "Yes, we work with a wide network of lenders to provide financing options for various credit profiles. You can get pre-approved in minutes on our site."
    },
    {
      question: 'Are there any hidden fees?',
      answer: "None. The price you see is the price you pay. We believe in total transparency, so all taxes and registration fees are clearly itemized before you sign."
    },
    {
      question: 'How do you inspect your cars?',
      answer: "Every car undergoes a rigorous 150-point inspection by our certified technicians to ensure it meets our high standards for safety and performance."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <FAQItem {...faq} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
