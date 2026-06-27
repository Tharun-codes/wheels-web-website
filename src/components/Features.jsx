import { Zap, ShieldCheck, Clock, HeadphonesIcon, Smartphone, Award, FileText, Wallet } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Approval',
      description: 'Get approved in as little as 2 minutes with our streamlined digital application process.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Level Security',
      description: 'Your personal and financial information is protected with 256-bit encryption.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: 'Flexible Terms',
      description: 'Choose loan terms from 24 to 84 months that fit your budget and lifestyle.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our dedicated team is always available to help you with any questions or concerns.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Friendly',
      description: 'Apply and manage your loan from anywhere with our responsive mobile experience.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Award,
      title: 'Competitive Rates',
      description: 'Enjoy some of the lowest interest rates in the industry, starting at 3.9% APR.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: FileText,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no application fees, prepayment penalties, or hidden charges.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Wallet,
      title: 'Bad Credit Welcome',
      description: 'We work with borrowers of all credit backgrounds to find the right loan solution.',
      color: 'bg-red-100 text-red-600'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-gradient">Wheels Web?</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're committed to making your car buying experience seamless, affordable, and stress-free.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
            <div className="text-primary-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">$2B+</div>
            <div className="text-primary-100">Loans Funded</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
            <div className="text-primary-100">Customer Rating</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div className="text-primary-100">Lender Partners</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
