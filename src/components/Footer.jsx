import { Car, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Car className="h-10 w-10 text-gold-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-gradient-navy">Wheels Web</span>
            </div>
            <p className="text-navy-300 leading-relaxed">
              Your trusted partner for new and used car financing. Making your dream car accessible with competitive rates and seamless service.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-12 h-12 bg-glass rounded-xl flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/50 border border-white/10 transition-all duration-300 group">
                <Facebook className="h-5 w-5 text-navy-300 group-hover:text-gold-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-glass rounded-xl flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/50 border border-white/10 transition-all duration-300 group">
                <Twitter className="h-5 w-5 text-navy-300 group-hover:text-gold-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-glass rounded-xl flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/50 border border-white/10 transition-all duration-300 group">
                <Instagram className="h-5 w-5 text-navy-300 group-hover:text-gold-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-glass rounded-xl flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/50 border border-white/10 transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-navy-300 group-hover:text-gold-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  New Car Loans
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  Used Car Loans
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  Refinancing
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  All Credit Welcome
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-300 hover:text-gold-400 transition-colors duration-300">
                  Lease Buyout
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-glass rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Phone className="h-5 w-5 text-gold-400" />
                </div>
                <span className="text-navy-300 group-hover:text-white transition-colors">8088915886</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-glass rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Mail className="h-5 w-5 text-gold-400" />
                </div>
                <span className="text-navy-300 group-hover:text-white transition-colors">4wheelsweb@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-glass rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <MapPin className="h-5 w-5 text-gold-400" />
                </div>
                <span className="text-navy-300 group-hover:text-white transition-colors">Tilak Nagar, Shimogga</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">
              © {currentYear} Wheels Web. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-navy-400 hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-navy-400 hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-navy-400 hover:text-gold-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
