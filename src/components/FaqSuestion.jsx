import { useState } from "react";
import { ChevronRight, ChevronLeft, Plus, Minus } from "lucide-react";

const allFaqs = [
  {
    question: "How long does a solar installation take?",
    answer:
      "Most rooftop solar + battery installs complete in 2-3 after our site survey, including mounting, wiring, and system commissioning.",
  },
  {
    question: "What financing options do you offer?",
    answer:
      "We provide flexible payment plans from 0% down monthly installments tailored to your cash flow so you can start saving immediately.",
  },
  {
    question: "How much will I save on my energy bills?",
    answer:
      "Clients typically see 20–30% savings in year one, with a full payback in 3–5 years depending on system size and usage.",
  },
  {
    question: "Can I expand my system later?",
    answer:
      "Yes. All our packages from Solar + Lithium to Tubular Backup are modular, so you can add solar panels or batteries at any time.",
  },
  {
    question: "Do you offer remote monitoring?",
    answer:
      "Absolutely. Our GhostHome™ analytics dashboard gives you 24/7 visibility into generation, storage levels, and consumption right on your phone.",
  },
  {
    question: "What maintenance is required?",
    answer:
      "Minimal upkeep: an annual panel cleaning and system health check. We also include real-time alerts so you know if anything needs attention.",
  },
  {
    question: "Are there any hidden or generator-upsell fees?",
    answer:
      "No. We believe in transparent pricing. what you see is what you pay. No generator packages unless you explicitly request one.",
  },
  {
    question: "What warranties do you provide?",
    answer:
      "We back our work with a 1-year workmanship warranty plus manufacturer warranties of up to 25 years on solar panels and 5 years on inverters and batteries.",
  },
  {
    question: "Do I need permits or approvals?",
    answer:
      "We handle all local approvals, permits, and grid-interconnection paperwork, so you don’t have to.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply [Get a Quote] or schedule a free site survey. We’ll assess your roof, loads, and goals then deliver a custom proposal with ROI projections.",
  },
];

export default function FaqSection() {
  const faqsPerPage = 5;
  const [page, setPage] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const currentFaqs = allFaqs.slice(
    page * faqsPerPage,
    page * faqsPerPage + faqsPerPage
  );

  const totalPages = Math.ceil(allFaqs.length / faqsPerPage);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-10 mx-4 md:mx-20 mt-8 rounded-xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div className="space-y-4">
          <span className="uppercase text-xs font-semibold text-gray-500">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Questions we have been asked
          </h2>
          <p className="text-gray-600">For clarity and endures. Reach out to us</p>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            Talk to Us
          </button>
        </div>

        {/* Right */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-4">
          {currentFaqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-2">
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-gray-800 text-sm font-medium">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-gray-600" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-between items-center pt-4">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === page ? "bg-gray-800" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setPage((prev) => Math.max(prev - 1, 0));
                  setOpenIndex(null);
                }}
                disabled={page === 0}
              >
                <ChevronLeft className="w-5 h-5 text-gray-500" />
              </button>
              <button
                onClick={() => {
                  setPage((prev) => Math.min(prev + 1, totalPages - 1));
                  setOpenIndex(null);
                }}
                disabled={page === totalPages - 1}
              >
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
