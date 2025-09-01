import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="footer-bg text-white/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2f7333] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NS</span>
              </div>
              <span className="text-xl font-bold text-white">NasikSquare</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property in Nashik. We connect dreams with reality through
              premium real estate solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="social-icon facebook">
                <div className="icon-bg bg-blue-600"></div>
                <Facebook size={18} className="relative z-10" />
              </a>
              <a href="#" className="social-icon twitter">
                <div className="icon-bg bg-sky-500"></div>
                <Twitter size={18} className="relative z-10" />
              </a>
              <a href="#" className="social-icon instagram">
                <div className="icon-bg bg-pink-600"></div>
                <Instagram size={18} className="relative z-10" />
              </a>
              <a href="#" className="social-icon linkedin">
                <div className="icon-bg bg-blue-700"></div>
                <Linkedin size={18} className="relative z-10" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link text-white/70 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="footer-link text-white/70 hover:text-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/categories" className="footer-link text-white/70 hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link text-white/70 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link text-white/70 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/flats" className="footer-link text-white/70 hover:text-white">
                  Flats & Apartments
                </Link>
              </li>
              <li>
                <Link href="/category/plots" className="footer-link text-white/70 hover:text-white">
                  Plots & Land
                </Link>
              </li>
              <li>
                <Link href="/category/bungalows" className="footer-link text-white/70 hover:text-white">
                  Bungalows & Villas
                </Link>
              </li>
              <li>
                <Link href="/category/commercial" className="footer-link text-white/70 hover:text-white">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/category/rental" className="footer-link text-white/70 hover:text-white">
                  Rental Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#2f7333] mt-1 flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  123 Real Estate Plaza,
                  <br />
                  Nashik Road, Nashik - 422101
                  <br />
                  Maharashtra, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#2f7333] flex-shrink-0" />
                <p className="text-white/70 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#2f7333] flex-shrink-0" />
                <p className="text-white/70 text-sm">info@nasiksquare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© 2024 NasikSquare. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/60 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
