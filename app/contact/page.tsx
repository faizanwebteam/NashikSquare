"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Calendar,
  Star,
  Shield,
  Award,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Navigation,
  Headphones,
  Users,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our property experts",
    primary: "+91 98765 43210",
    secondary: "+91 98765 43211",
    availability: "Mon-Sat: 9 AM - 8 PM",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get detailed responses to your queries",
    primary: "info@nasiksquare.com",
    secondary: "sales@nasiksquare.com",
    availability: "Response within 2 hours",
    action: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant support for quick questions",
    primary: "Available on website",
    secondary: "WhatsApp: +91 98765 43210",
    availability: "24/7 Available",
    action: "Start Chat",
  },
  {
    icon: Calendar,
    title: "Schedule Visit",
    description: "Book a meeting at our office",
    primary: "Free consultation",
    secondary: "Property site visits",
    availability: "Flexible timings",
    action: "Book Now",
  },
]

const offices = [
  {
    name: "Head Office",
    address: "123 Real Estate Plaza, Nashik Road, Nashik - 422101",
    phone: "+91 98765 43210",
    email: "info@nasiksquare.com",
    hours: "Mon-Sat: 9 AM - 8 PM, Sun: 10 AM - 6 PM",
    image: "/placeholder.svg?height=200&width=300&text=Head+Office",
    specialization: "All Property Types",
  },
  {
    name: "CIDCO Branch",
    address: "456 CIDCO Complex, CIDCO, Nashik - 422008",
    phone: "+91 98765 43212",
    email: "cidco@nasiksquare.com",
    hours: "Mon-Sat: 10 AM - 7 PM",
    image: "/placeholder.svg?height=200&width=300&text=CIDCO+Branch",
    specialization: "Residential Properties",
  },
  {
    name: "Commercial Hub",
    address: "789 Business Center, Gangapur Road, Nashik - 422005",
    phone: "+91 98765 43213",
    email: "commercial@nasiksquare.com",
    hours: "Mon-Fri: 9 AM - 6 PM",
    image: "/placeholder.svg?height=200&width=300&text=Commercial+Hub",
    specialization: "Commercial & Industrial",
  },
]

const faqs = [
  {
    question: "What documents do I need to buy a property?",
    answer:
      "You'll need identity proof, address proof, income documents, and bank statements. We'll guide you through the complete documentation process.",
  },
  {
    question: "Do you provide home loan assistance?",
    answer:
      "Yes, we have partnerships with leading banks and can help you get pre-approved loans at competitive rates with minimal documentation.",
  },
  {
    question: "What are your service charges?",
    answer:
      "Our brokerage is competitive and transparent. We charge 1-2% for residential and 2-3% for commercial properties, with no hidden fees.",
  },
  {
    question: "Do you handle property registration?",
    answer: "We provide end-to-end services including legal verification, registration, and post-sale support.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2f7333]/5 via-[#053921]/5 to-transparent" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2f7333]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#053921]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Top Badge */}
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-[#2f7333]/10 to-[#053921]/10 text-[#2f7333] border-[#2f7333]/20 px-6 py-2 text-sm font-medium backdrop-blur-sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Let's Find Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2f7333] to-[#053921]">
                    Perfect Property
                  </span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Ready to take the next step? Our expert team is here to guide you through every aspect of your real
                  estate journey. Reach out today!
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-[#2f7333]/10">
                    <Shield className="w-4 h-4 text-[#2f7333]" />
                    <span className="text-sm font-medium text-gray-700">RERA Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-[#2f7333]/10">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">4.8/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-[#2f7333]/10">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">5000+ Happy Clients</span>
                  </div>
                </div>

                {/* Quick Contact Info */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">+91 98765 43210</p>
                      <p className="text-sm text-gray-600">Available Mon-Sat: 9 AM - 8 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">info@nasiksquare.com</p>
                      <p className="text-sm text-gray-600">Response within 2 hours</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-[#2f7333] to-[#053921] hover:from-[#053921] hover:to-[#2f7333] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#2f7333] text-[#2f7333] hover:bg-[#2f7333] hover:text-white px-8 py-3 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                </div>
              </div>

              {/* Right Content - Contact Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Expert Team</div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
                    <div className="text-sm text-gray-600">Office Locations</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Achievement Bar */}
            <div className="mt-12 pt-8 border-t border-gray-200/50">
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">2 Hours</span> Response Time
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#2f7333]" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">100%</span> Legal Compliance
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#2f7333]" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">12+</span> Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>

                  <div className="space-y-1 mb-4">
                    <p className="font-semibold text-[#2f7333]">{method.primary}</p>
                    <p className="text-sm text-gray-600">{method.secondary}</p>
                    <p className="text-xs text-gray-500">{method.availability}</p>
                  </div>

                  <Button className="w-full bg-[#2f7333] hover:bg-[#053921]">{method.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="plots">Plots & Land</SelectItem>
                      <SelectItem value="rental">Rental</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25">Under ₹25 Lakhs</SelectItem>
                      <SelectItem value="25-50">₹25-50 Lakhs</SelectItem>
                      <SelectItem value="50-75">₹50-75 Lakhs</SelectItem>
                      <SelectItem value="75-100">₹75 Lakhs - ₹1 Crore</SelectItem>
                      <SelectItem value="above-100">Above ₹1 Crore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your property requirements..." rows={4} />
                </div>

                <Button className="w-full bg-[#2f7333] hover:bg-[#053921] text-lg py-3">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </CardContent>
            </Card>

            {/* Map & Quick Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="h-64 bg-gradient-to-r from-[#2f7333] to-[#053921] flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                    <p className="text-white/90">Interactive map coming soon</p>
                    <Button className="mt-4 bg-white text-[#2f7333] hover:bg-gray-100">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Quick Contact Info */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#2f7333]" />
                      <div>
                        <p className="font-semibold">+91 98765 43210</p>
                        <p className="text-sm text-gray-600">Primary Contact</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#2f7333]" />
                      <div>
                        <p className="font-semibold">info@nasiksquare.com</p>
                        <p className="text-sm text-gray-600">General Inquiries</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#2f7333]" />
                      <div>
                        <p className="font-semibold">Mon-Sat: 9 AM - 8 PM</p>
                        <p className="text-sm text-gray-600">Sunday: 10 AM - 6 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-3">Follow Us</h4>
                    <div className="flex space-x-3">
                      {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                        <a
                          key={index}
                          href="#"
                          className="w-10 h-10 bg-[#2f7333] rounded-full flex items-center justify-center text-white hover:bg-[#053921] transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our convenient locations across Nashik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                <Image
                  src={office.image || "/placeholder.svg"}
                  alt={office.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{office.name}</h3>
                    <Badge className="bg-[#2f7333]/10 text-[#2f7333]">{office.specialization}</Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-[#2f7333] mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#2f7333]" />
                      <p className="text-sm text-gray-600">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#2f7333]" />
                      <p className="text-sm text-gray-600">{office.email}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#2f7333]" />
                      <p className="text-sm text-gray-600">{office.hours}</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-[#2f7333] hover:bg-[#053921]">
                      <Navigation className="w-4 h-4 mr-2" />
                      Visit
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#2f7333] text-[#2f7333] hover:bg-[#2f7333] hover:text-white bg-transparent"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-[#2f7333] hover:bg-[#053921]">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2f7333] to-[#053921] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't wait! The perfect property might be just a call away. Connect with our experts today and take the
            first step towards your dream home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2f7333] hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2f7333] bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
