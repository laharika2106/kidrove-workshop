import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "Do students need prior coding knowledge?",
      answer:
        "No. This workshop is designed for complete beginners.",
    },
    {
      question: "Will students receive a certificate?",
      answer:
        "Yes. Every participant who completes the workshop will receive a certificate.",
    },
    {
      question: "What is required to attend?",
      answer:
        "A laptop or desktop with a stable internet connection is enough.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow mb-4 overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {faq.question}

              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;