import { Star, Quote, Sparkles } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'First-time Car Buyer',
      content: 'I was nervous about getting my first car loan, but Wheels Web made the process incredibly simple. I got approved in minutes and drove home in my new sedan the same day!',
      rating: 5,
      avatar: 'SJ',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'The competitive rates and flexible terms were exactly what I needed for my business vehicle. The customer service team was exceptional throughout the entire process.',
      rating: 5,
      avatar: 'MC',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Working Mom',
      content: 'As a busy mom, I appreciated how quick and easy the application was. No paperwork, no hassle - just a straightforward process that fit into my schedule.',
      rating: 5,
      avatar: 'ER',
      gradient: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4 text-gold-400" />
          <span className="text-gold-400 text-sm font-medium">Client Stories</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-white">What Our </span>
          <span className="text-gradient">Clients Say</span>
        </h2>
        <p className="text-xl text-navy-300 max-w-2xl mx-auto">
          Join thousands of satisfied customers who found their perfect car loan with Wheels Web.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group relative card-luxury card-hover overflow-hidden"
          >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            <div className="relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gold-400/30 group-hover:text-gold-400/60 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400 group-hover:scale-110 transition-transform" />
                ))}
              </div>

              <p className="text-navy-200 leading-relaxed mb-8 text-lg italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-gold-400 transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-navy-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
          </div>
        ))}
      </div>

      {/* Trust Badge */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 bg-glass rounded-full px-8 py-4 border border-gold-500/30">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[i % testimonials.length].gradient} border-2 border-navy-900 flex items-center justify-center text-white text-xs font-bold`}
              >
                {testimonials[i % testimonials.length].avatar}
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="text-white font-semibold">50,000+ Happy Customers</div>
            <div className="text-navy-400 text-sm">Trust us with their dreams</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
