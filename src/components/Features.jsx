import { Zap, ShieldCheck, Clock, HeadphonesIcon, Smartphone, Award, FileText, Wallet, Sparkles, TrendingUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Approval',
      description: 'Get approved in as little as 2 minutes with our streamlined digital application process.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Level Security',
      description: 'Your personal and financial information is protected with 256-bit encryption.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Flexible Terms',
      description: 'Choose loan terms from 24 to 84 months that fit your budget and lifestyle.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Concierge Support',
      description: 'Our dedicated team is always available to help you with any questions or concerns.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Premium Mobile Experience',
      description: 'Apply and manage your loan from anywhere with our responsive mobile experience.',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      icon: Award,
      title: 'Industry-Leading Rates',
      description: 'Enjoy some of the lowest interest rates in the industry, starting at 3.9% APR.',
      gradient: 'from-orange-400 to-amber-500'
    },
    {
      icon: FileText,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no application charges, no prepayment penalties. Complete transparency.',
      gradient: 'from-teal-400 to-cyan-500'
    },
    {
      icon: Wallet,
      title: 'All Credit Welcome',
      description: 'We work with borrowers of all credit backgrounds to find the right loan solution.',
      gradient: 'from-red-400 to-pink-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4 text-gold-400" />
          <span className="text-gold-400 text-sm font-medium">Premium Features</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-white">Why Choose </span>
          <span className="text-gradient">Wheels Web?</span>
        </h2>
        <p className="text-xl text-navy-300 max-w-2xl mx-auto">
          Experience the future of new and used car financing with our premium features designed for all your automotive needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="group relative card-luxury card-hover overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-navy-300 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-luxury-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          )
        })}
      </div>

      {/* Stats Section */}
      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-luxury-500/20 rounded-3xl blur-3xl"></div>
        <div className="relative bg-glass rounded-3xl p-8 md:p-12 border border-gold-500/30">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">50K+</div>
              <div className="text-navy-300">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">$2B+</div>
              <div className="text-navy-300">Loans Funded</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">4.9★</div>
              <div className="text-navy-300">Rating</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-navy-300">Lender Partners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
