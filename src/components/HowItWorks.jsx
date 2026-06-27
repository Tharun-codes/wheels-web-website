import { Search, FileCheck, Car, ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Calculate Your Loan',
      description: 'Use our interactive calculator to estimate your monthly payments and find the perfect loan terms.',
      step: '01'
    },
    {
      icon: FileCheck,
      title: 'Apply Online',
      description: 'Complete our simple online application in just 5 minutes with basic information about yourself and the car.',
      step: '02'
    },
    {
      icon: Car,
      title: 'Get Approved & Drive',
      description: 'Receive instant approval and get funded within 24 hours. Visit the dealership and drive away in your new car!',
      step: '03'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How It <span className="text-gradient">Works</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Getting your car loan is simple and straightforward. Just three easy steps to driving your dream car.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>

        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-primary-400" />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-accent-50 to-orange-50 rounded-2xl p-8 border border-accent-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join thousands of satisfied customers who found their perfect car loan with Wheels Web. Your dream car is waiting!
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center btn-primary"
          >
            Calculate Your Loan
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
