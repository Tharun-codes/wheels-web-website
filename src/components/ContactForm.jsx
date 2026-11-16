import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, MessageCircle } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your message. Please try again.')
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
      }, 3000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setSubmitError('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
          <MessageCircle className="h-4 w-4 text-gold-400" />
          <span className="text-gold-400 text-sm font-medium">Contact Us</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-white">Get In </span>
          <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-xl text-navy-300 max-w-2xl mx-auto">
          Have questions about new or used car financing? Our premium concierge team is here to help you find the perfect loan solution.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-navy-300 mb-8 leading-relaxed">
              Our team is available Monday through Friday, 9 AM to 6 PM. Reach out to us through any of the following channels for premium assistance.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group flex items-start gap-4 p-4 bg-glass rounded-xl border border-white/10 hover:border-gold-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-navy-950" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors">Phone</h4>
                <p className="text-navy-300">8088915886</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-4 bg-glass rounded-xl border border-white/10 hover:border-gold-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-luxury-400 to-luxury-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors">Email</h4>
                <p className="text-navy-300">4wheelsweb@gmail.com</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-4 bg-glass rounded-xl border border-white/10 hover:border-gold-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors">Office</h4>
                <p className="text-navy-300">Tilak Nagar, Shimogga</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gold-500/20 to-luxury-500/20 rounded-2xl p-6 border border-gold-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-luxury-400/10 animate-shimmer"></div>
            <div className="relative">
              <h4 className="font-bold text-lg text-white mb-2">Need Immediate Help?</h4>
              <p className="text-navy-300 mb-4">
                Our loan specialists are ready to assist you with personalized guidance.
              </p>
              <a
                href="tel:1800934357932"
                className="inline-flex items-center btn-luxury group"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-luxury relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-navy-300 text-lg">
                Thank you for reaching out. Our premium team will get back to you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-red-200">
                  {submitError}
                </p>
              )}
              <div>
                <label className="block text-sm font-medium text-navy-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700 rounded-xl text-white placeholder-navy-500 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={320}
                  className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700 rounded-xl text-white placeholder-navy-500 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={40}
                  className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700 rounded-xl text-white placeholder-navy-500 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  rows={5}
                  className="w-full px-5 py-4 bg-navy-900/50 border border-navy-700 rounded-xl text-white placeholder-navy-500 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your car loan needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-luxury flex items-center justify-center group"
              >
                {!isSubmitting && <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />}
                {isSubmitting ? 'Saving...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactForm
