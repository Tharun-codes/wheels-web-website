import { useState, useEffect } from 'react'
import { Car, Shield, Clock, Users, HeadphonesIcon, ArrowRight, CheckCircle, Menu, X, Sparkles, TrendingUp, Award, Zap } from 'lucide-react'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-glass-dark shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Car className="h-10 w-10 text-gold-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-gradient-navy">Wheels Web</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-navy-100 hover:text-gold-400 transition-colors duration-300 font-medium">Features</a>
              <a href="#how-it-works" className="text-navy-100 hover:text-gold-400 transition-colors duration-300 font-medium">How It Works</a>
              <a href="#testimonials" className="text-navy-100 hover:text-gold-400 transition-colors duration-300 font-medium">Testimonials</a>
              <a href="#faq" className="text-navy-100 hover:text-gold-400 transition-colors duration-300 font-medium">FAQ</a>
              <a href="#contact" className="btn-luxury">Get Started</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gold-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-glass-dark border-t border-navy-700">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-navy-100 hover:text-gold-400 text-lg font-medium py-2">Features</a>
              <a href="#how-it-works" className="block text-navy-100 hover:text-gold-400 text-lg font-medium py-2">How It Works</a>
              <a href="#testimonials" className="block text-navy-100 hover:text-gold-400 text-lg font-medium py-2">Testimonials</a>
              <a href="#faq" className="block text-navy-100 hover:text-gold-400 text-lg font-medium py-2">FAQ</a>
              <a href="#contact" className="btn-luxury inline-block text-center w-full">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="relative z-10 container-luxury pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-gold-400" />
                <span className="text-gold-400 text-sm font-medium">Premium Car Financing</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">New & Used </span>
                <span className="text-gradient text-glow">Car Loans</span>
                <br />
                <span className="text-white">Made Simple</span>
              </h1>
              
              <p className="text-xl text-navy-300 mb-8 leading-relaxed max-w-xl">
                Finance your dream car - whether new or used - with rates as low as 3.9% APR. Get approved in minutes with our seamless digital platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="btn-luxury text-center group">
                  Apply Now
                  <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#how-it-works" className="btn-outline text-center">
                  Learn More
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">50K+</div>
                  <div className="text-navy-400 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">$2B+</div>
                  <div className="text-navy-400 text-sm">Loans Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">4.9★</div>
                  <div className="text-navy-400 text-sm">Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative animate-scale-in">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl animate-float">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Car className="h-8 w-8 text-navy-950" />
                    </div>
                    <div>
                      <p className="text-navy-300 text-sm">Your Loan</p>
                      <p className="text-4xl font-bold text-gradient">$45,000</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-4 bg-navy-900/50 rounded-xl">
                      <span className="text-navy-300">Interest Rate</span>
                      <span className="text-gold-400 font-bold">3.9% APR</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-navy-900/50 rounded-xl">
                      <span className="text-navy-300">Term</span>
                      <span className="text-white font-bold">60 months</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-navy-900/50 rounded-xl">
                      <span className="text-navy-300">Monthly</span>
                      <span className="text-gold-400 font-bold text-xl">$826</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-gold-500/10 rounded-xl border border-gold-500/30">
                    <CheckCircle className="h-6 w-6 text-gold-400" />
                    <span className="text-gold-400 font-medium">Pre-approved in 2 minutes</span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 px-6 py-3 rounded-2xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-bold">Best Rates</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-luxury-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding relative">
        <div className="container-luxury">
          <Features />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-navy-900/50">
        <div className="container-luxury">
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding relative">
        <div className="container-luxury">
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-navy-900/50">
        <div className="container-luxury">
          <FAQ />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding relative">
        <div className="container-luxury">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
