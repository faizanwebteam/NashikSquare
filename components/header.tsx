"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, Search, Menu, MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@nasiksquare.com</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-300" />
                <span className="text-sm">4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="hover:text-yellow-300 transition-colors">
                  <Youtube className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="glass-effect border-b border-white/20 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo-dark.png" alt="NasikSquare.com" width={200} height={50} className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-brand-dark-gray hover:text-brand-green font-medium transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/properties"
                className="text-brand-dark-gray hover:text-brand-green font-medium transition-colors relative group"
              >
                Properties
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/categories"
                className="text-brand-dark-gray hover:text-brand-green font-medium transition-colors relative group"
              >
                Categories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/locations"
                className="text-brand-dark-gray hover:text-brand-green font-medium transition-colors relative group"
              >
                Locations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
              </Link>
              
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden md:flex text-brand-dark-gray hover:text-brand-green hover:bg-brand-green/10"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>

              {/* CTA Button */}
              <Button className="bg-brand-green hover:bg-brand-dark-green text-white shadow-lg hidden md:flex">
                Request Assistance
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-6">
                    <Image src="/logo-dark.png" alt="NasikSquare.com" width={150} height={40} className="h-10 w-auto" />

                    <nav className="flex flex-col space-y-4">
                      <Link href="/" className="text-brand-dark-gray hover:text-brand-green font-medium">
                        Home
                      </Link>
                      <Link href="/properties" className="text-brand-dark-gray hover:text-brand-green font-medium">
                        Properties
                      </Link>
                      <Link href="/categories" className="text-brand-dark-gray hover:text-brand-green font-medium">
                        Categories
                      </Link>
                      <Link href="/locations" className="text-brand-dark-gray hover:text-brand-green font-medium">
                        Locations
                      </Link>
                      <Link href="/about" className="text-brand-dark-gray hover:text-brand-green font-medium">
                        About
                      </Link>
                      <Link href="/contact" className="text-brand-dark-gray hover:text-brand-green font-medium">
                        Contact
                      </Link>
                    </nav>

                    <div className="space-y-4">
                      <Button className="w-full bg-brand-green hover:bg-brand-dark-green text-white">
                        Request Assistance
                      </Button>
                      <div className="flex items-center space-x-2 text-sm text-brand-brown">
                        <Phone className="w-4 h-4" />
                        <span>+91 98765 43210</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Search Bar (Expandable) */}
          {isSearchOpen && (
            <div className="mt-4 animate-fade-in-down">
              <div className="relative max-w-md">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-brand-green" />
                <Input
                  placeholder="Search properties, locations..."
                  className="pl-10 border-2 border-brand-green/20 focus:border-brand-green"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
