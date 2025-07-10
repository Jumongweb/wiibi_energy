import { useState } from "react";
import { ChevronRight, ChevronLeft, Plus, Minus } from "lucide-react";

const allFaqs = [
  {
    question: "Can I speak to your customer Service?",
    answer:
      "Yes, you can contact our customer service through the 'Talk to Us' button or by emailing support@wiibi.com. Our team is available 24/7 to assist you.",
  },
  {
    question: "Can I get a payment plan for your products",
    answer:
      "Absolutely! We offer flexible payment plans on most of our products. Simply select 'Payment Options' at checkout or reach out to our support.",
  },
  {
    question: "What platforms and devices are compatible with Wiibi products?",
    answer:
      "Wiibi products are compatible with Android, iOS, Windows, and macOS platforms. Ensure your device meets the minimum system requirements listed on the product page.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship globally. Shipping fees and delivery times vary depending on your location. View our shipping policy for more info.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all purchases. Items must be in original condition. Contact support for return instructions.",
  },
  {
    question: "Is technical support available after purchase?",
    answer:
      "Yes, every purchase includes free technical support for the first 6 months. We also offer extended support plans.",
  },
  {
    question: "Are your products eco-friendly?",
    answer:
      "We’re committed to sustainability. Most of our products use recyclable packaging and energy-efficient components.",
  },
  {
    question: "Can I cancel my order after placing it?",
    answer:
      "Orders can be canceled within 2 hours of placement. After that, you’ll need to go through our return process.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, we provide installation for select regions. Installation can be added during the checkout process.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you’ll receive an email with a tracking number. You can also track it in your account dashboard.",
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
