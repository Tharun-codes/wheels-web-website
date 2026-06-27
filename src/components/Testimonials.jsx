import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'First-time Car Buyer',
      content: 'I was nervous about getting my first car loan, but Wheels Web made the process incredibly simple. I got approved in minutes and drove home in my new sedan the same day!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'The competitive rates and flexible terms were exactly what I needed for my business vehicle. The customer service team was exceptional throughout the entire process.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Working Mom',
      content: 'As a busy mom, I appreciated how quick and easy the application was. No paperwork, no hassle - just a straightforward process that fit into my schedule.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our <span className="text-gradient">Customers Say</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied customers who found their perfect car loan with Wheels Web.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg card-hover relative"
          >
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200" />
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-400 text-accent-400" />
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
