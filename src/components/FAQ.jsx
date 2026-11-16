import { useState } from 'react'
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What credit score do I need to qualify?',
      answer: 'We work with borrowers of all credit backgrounds. While higher credit scores may qualify for better rates, we have options available for most credit situations. Our lenders consider multiple factors beyond just credit score.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      question: 'How long does the approval process take?',
      answer: 'Most applicants receive a decision within 2-5 minutes of completing their application. Once approved, funding can be processed within 24 hours, allowing you to visit the dealership and complete your purchase quickly.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      question: 'Can I pay off my loan early without penalties?',
      answer: 'Absolutely! All our loans come with no prepayment penalties. You can pay off your loan early or make additional payments without any fees, helping you save on interest over the life of the loan.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      question: 'What documents do I need to apply?',
      answer: 'The application process is streamlined and typically requires basic information such as your ID, proof of income, and details about the vehicle you wish to purchase. Our digital process minimizes paperwork and makes document submission easy.',
      gradient: 'from-orange-400 to-amber-500'
    },
    {
      question: 'Do you offer refinancing options?',
      answer: 'Yes, we offer refinancing for existing car loans. If you have improved your credit score or market rates have dropped since you originally financed, we can help you secure better terms and lower monthly payments.',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      question: 'What types of vehicles can I finance?',
      answer: 'We finance new and used cars, trucks, SUVs, and motorcycles from dealerships and private sellers. Our flexible lending options accommodate a wide range of vehicle types and price points.',
      gradient: 'from-teal-400 to-cyan-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-luxury-500/10 border border-luxury-500/30 rounded-full px-4 py-2 mb-6">
          <HelpCircle className="h-4 w-4 text-luxury-400" />
          <span className="text-luxury-400 text-sm font-medium">FAQ</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-white">Frequently Asked </span>
          <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-xl text-navy-300 max-w-2xl mx-auto">
          Find answers to common questions about our premium car loan services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group relative card-luxury overflow-hidden transition-all duration-500"
          >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${faq.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            <button
              className="relative w-full px-8 py-6 text-left flex items-center justify-between"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-semibold text-white text-lg pr-8 group-hover:text-gold-400 transition-colors">
                {faq.question}
              </span>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${openIndex === index ? `bg-gradient-to-br ${faq.gradient} rotate-180` : 'bg-navy-700 group-hover:bg-navy-600'}`}>
                <ChevronDown className={`h-6 w-6 ${openIndex === index ? 'text-white' : 'text-gold-400'}`} />
              </div>
            </button>
            
            {openIndex === index && (
              <div className="relative px-8 pb-6 animate-fade-in">
                <div className="h-px w-full bg-gradient-to-r from-gold-500/50 to-transparent mb-4"></div>
                <p className="text-navy-200 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            )}

            {/* Bottom Accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${faq.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
          </div>
        ))}
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-luxury-500/20 rounded-3xl blur-3xl"></div>
        <div className="relative bg-glass rounded-3xl p-8 md:p-12 border border-gold-500/30 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">Need Help?</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-navy-300 mb-8 max-w-xl mx-auto text-lg">
            Our premium concierge team is here to help you with any questions you may have.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center btn-luxury group"
          >
            Contact Our Team
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform rotate-90" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
