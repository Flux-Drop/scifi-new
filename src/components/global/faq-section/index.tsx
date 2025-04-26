// src/components/FAQSection.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { faqs } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("New Connection");

  return (
    <section className="min-h-screen text-gray-200 py-12 flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center items-start lg:items-center ">
        <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 text-black text-xs me-2 px-2.5 py-0.5 rounded-full font-bold">
          FAQ
        </span>
        <Text>Frequently Asked Questions</Text>
        <p className="text-lg text-start lg:text-center text-slate-200">
          We have compiled a list of answers to address your most pressing
          questions regarding to our services.
        </p>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <motion.nav
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-64 rounded-full p-6 shadow-lg"
        >
          {faqs.map((faq) => (
            <motion.button
              key={faq.category}
              onClick={() => setActiveCategory(faq.category)}
              className={`w-full text-left py-2 px-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-[#001816] transition-colors font-semibold ${
                activeCategory === faq.category
                  ? "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-[#39E6B9] to-purple-500 text-white shadow-lg shadow-purple-500/20"
                  : ""
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {faq.category}
            </motion.button>
          ))}
        </motion.nav>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 rounded-lg p-6 shadow-lg"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs
              .find((faq) => faq.category === activeCategory)
              ?.questions.map((q, index) => (
                <AccordionItem key={index} value={`item-${index}`} className=" my-4 rounded-2xl border-[#39E6B9]/20 border relative px-4 group transition-all duration-300">
                 <div className="absolute inset-0 group-hover:bg-gradient-to-r from-[#39E6B9] to-purple-500  opacity-[0.25]  rounded-2xl blur-xl -z-10 transition-all duration-300"></div>
                  <AccordionTrigger className="text-lg text-white ">
                    {q.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white mt-2"
                    >
                      {q.answer}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
          <div className="relative opacity-100 transform-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#39E6B9] to-purple-500  opacity-[0.15] transition-opacity duration-300 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/[0.03] border rounded-2xl overflow-hidden transition-all duration-300 border-[#39E6B9]/20">
              <div className="w-full px-8 py-6 flex items-center justify-between text-left">
                <p className="text-white max-w-[65%] font-medium">
                  Please note that the FAQs provided here are for general
                  information purposes. For specific inquiries or assistance,
                  please contact Scify's customer service team.
                </p>

                <Button className="bg-[url('/assets/cta.png')] bg-cover rounded-full font-semibold h-12 w-40 flex items-center justify-center ml-4">
                  <span className="text-black capitalize">Contact Support</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
