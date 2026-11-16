import { Search, FileCheck, Car, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Explore Your Options',
      description: 'Browse our competitive rates and flexible terms designed for your lifestyle. Find the perfect match for your dream car.',
      step: '01',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: FileCheck,
      title: 'Apply in Minutes',
      description: 'Complete our streamlined digital application in just 5 minutes. No paperwork, no hassle, just pure efficiency.',
      step: '02',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: Car,
      title: 'Drive Away Happy',
      description: 'Receive instant approval and get funded within 24 hours. Visit the dealership and drive away in your new car!',
      step: '03',
      gradient: 'from-gold-400 to-orange-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-luxury-500/10 border border-luxury-500/30 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4 text-luxury-400" />
          <span className="text-luxury-400 text-sm font-medium">Simple Process</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-white">How It </span>
          <span className="text-gradient">Works</span>
        </h2>
        <p className="text-xl text-navy-300 max-w-2xl mx-auto">
          Your journey to driving your dream new or used car is just three simple steps away. Experience the future of car financing.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-1 bg-gradient-to-r from-gold-500/50 via-luxury-500/50 to-gold-500/50 rounded-full"></div>

        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="relative group">
              <div className="card-luxury card-hover h-full relative overflow-hidden">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center text-navy-950 font-bold text-lg shadow-xl animate-pulse">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-navy-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-navy-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${step.gradient} transition-all duration-1000`}
                        style={{ width: index === 0 ? '33%' : index === 1 ? '66%' : '100%' }}
                      ></div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-gold-400" />
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-4">
                  <ArrowRight className="h-8 w-8 text-gold-400" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-luxury-500/20 rounded-3xl blur-3xl"></div>
        <div className="relative bg-glass rounded-3xl p-8 md:p-12 border border-gold-500/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-navy-300 mb-8 max-w-xl mx-auto text-lg">
            Join thousands of satisfied customers who found their perfect car loan with Wheels Web. Your dream car is waiting!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center btn-luxury group"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
