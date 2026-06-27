import { useState } from 'react'
import { Car, Calculator, Shield, Clock, Users, HeadphonesIcon, ArrowRight, CheckCircle, Menu, X } from 'lucide-react'
import LoanCalculator from './components/LoanCalculator'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gradient">Wheels Web</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#calculator" className="text-gray-600 hover:text-primary-600 transition-colors">Calculator</a>
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors">FAQ</a>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#calculator" className="block text-gray-600 hover:text-primary-600">Calculator</a>
              <a href="#features" className="block text-gray-600 hover:text-primary-600">Features</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-primary-600">How It Works</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-primary-600">Testimonials</a>
              <a href="#faq" className="block text-gray-600 hover:text-primary-600">FAQ</a>
              <a href="#contact" className="btn-primary inline-block">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Dream Car,
                <span className="text-gradient"> One Loan Away</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get approved for your car loan in minutes with competitive rates, flexible terms, and a seamless digital experience. Drive away with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#calculator" className="btn-primary text-center">
                  Calculate Your Loan
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </a>
                <a href="#how-it-works" className="btn-secondary text-center">
                  Learn More
                </a>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700 font-medium">Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700 font-medium">Quick Approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-700 font-medium">50K+ Happy Customers</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative animate-fade-in">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Car className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Loan Amount</p>
                      <p className="text-3xl font-bold text-primary-600">$35,000</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-semibold text-gray-900">4.5% APR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Term</span>
                      <span className="font-semibold text-gray-900">60 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Payment</span>
                      <span className="font-semibold text-gray-900">$652</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Pre-approved in 2 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent-400 text-white px-4 py-2 rounded-full shadow-lg animate-pulse-slow">
                <span className="font-semibold">Rates as low as 3.9%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your <span className="text-gradient">Perfect Loan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use our interactive calculator to estimate your monthly payments and find the perfect loan terms for your budget.
            </p>
          </div>
          <LoanCalculator />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Features />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FAQ />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
