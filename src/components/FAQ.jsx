import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What credit score do I need to qualify?',
      answer: 'We work with borrowers of all credit backgrounds. While higher credit scores may qualify for better rates, we have options available for most credit situations. Our lenders consider multiple factors beyond just credit score.'
    },
    {
      question: 'How long does the approval process take?',
      answer: 'Most applicants receive a decision within 2-5 minutes of completing their application. Once approved, funding can be processed within 24 hours, allowing you to visit the dealership and complete your purchase quickly.'
    },
    {
      question: 'Can I pay off my loan early without penalties?',
      answer: 'Absolutely! All our loans come with no prepayment penalties. You can pay off your loan early or make additional payments without any fees, helping you save on interest over the life of the loan.'
    },
    {
      question: 'What documents do I need to apply?',
      answer: 'The application process is streamlined and typically requires basic information such as your ID, proof of income, and details about the vehicle you wish to purchase. Our digital process minimizes paperwork and makes document submission easy.'
    },
    {
      question: 'Do you offer refinancing options?',
      answer: 'Yes, we offer refinancing for existing car loans. If you have improved your credit score or market rates have dropped since you originally financed, we can help you secure better terms and lower monthly payments.'
    },
    {
      question: 'What types of vehicles can I finance?',
      answer: 'We finance new and used cars, trucks, SUVs, and motorcycles from dealerships and private sellers. Our flexible lending options accommodate a wide range of vehicle types and price points.'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our car loan services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-semibold text-gray-900 pr-8">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-primary-600 flex-shrink-0" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4 animate-fade-in">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our friendly team is here to help you with any questions you may have.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center btn-primary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
