"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Shield,
  Heart,
  Target,
  Eye,
  Handshake,
  Star,
  Building,
  Phone,
  Mail,
  Linkedin,
  Calendar,
  TrendingUp,
  MapPin,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

const stats = [
  { label: "Years of Excellence", value: "12+", icon: Calendar },
  { label: "Properties Sold", value: "5,000+", icon: Building },
  { label: "Happy Families", value: "4,500+", icon: Users },
  { label: "Client Satisfaction", value: "98%", icon: Star },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We believe in complete transparency in all our dealings, ensuring our clients make informed decisions.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Our clients' dreams and satisfaction are at the heart of everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in service delivery and maintain the highest quality standards.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "We conduct business with honesty, ethics, and respect for all stakeholders.",
  },
]

const team = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    experience: "15+ Years",
    image: "/placeholder.svg?height=300&width=300&text=Rajesh+Sharma",
    specialization: "Real Estate Strategy",
    achievements: "RERA Certified, MBA Finance",
  },
  {
    name: "Priya Patel",
    role: "Head of Sales",
    experience: "12+ Years",
    image: "/placeholder.svg?height=300&width=300&text=Priya+Patel",
    specialization: "Residential Properties",
    achievements: "Top Performer 2023, Customer Choice Award",
  },
  {
    name: "Amit Desai",
    role: "Commercial Head",
    experience: "10+ Years",
    image: "/placeholder.svg?height=300&width=300&text=Amit+Desai",
    specialization: "Commercial & Industrial",
    achievements: "Industry Expert, Investment Advisor",
  },
  {
    name: "Sneha Kulkarni",
    role: "Legal Advisor",
    experience: "8+ Years",
    image: "/placeholder.svg?height=300&width=300&text=Sneha+Kulkarni",
    specialization: "Property Law",
    achievements: "LLB, Property Law Specialist",
  },
]

const milestones = [
  {
    year: "2012",
    event: "NasikSquare Founded",
    description: "Started with a vision to transform Nashik's real estate landscape",
  },
  { year: "2015", event: "RERA Registration", description: "Among the first to get RERA certification in Maharashtra" },
  {
    year: "2018",
    event: "1000+ Properties",
    description: "Crossed the milestone of 1000 successful property transactions",
  },
  { year: "2020", event: "Digital Transformation", description: "Launched online platform for virtual property tours" },
  { year: "2022", event: "Industry Recognition", description: "Awarded 'Best Real Estate Company' by Nashik Chamber" },
  { year: "2024", event: "5000+ Happy Clients", description: "Celebrating 5000+ satisfied families and growing" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2f7333]/5 via-[#053921]/5 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#2f7333]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#053921]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Top Badge */}
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-[#2f7333]/10 to-[#053921]/10 text-[#2f7333] border-[#2f7333]/20 px-6 py-2 text-sm font-medium backdrop-blur-sm">
                <Building className="w-4 h-4 mr-2" />
                About NasikSquare
              </Badge>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Building Dreams,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2f7333] to-[#053921]">
                    Creating Homes
                  </span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed">
                  For over a decade, we've been Nashik's trusted real estate partner, helping thousands of families find
                  their perfect homes and investors discover lucrative opportunities.
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
                    <Award className="w-4 h-4 text-[#2f7333]" />
                    <span className="text-sm font-medium text-gray-700">Industry Leader</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-[#2f7333] to-[#053921] hover:from-[#053921] hover:to-[#2f7333] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <Phone className="w-4 h-4 mr-2" />
                    Talk to Expert
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#2f7333] text-[#2f7333] hover:bg-[#2f7333] hover:text-white px-8 py-3 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Visit Office
                  </Button>
                </div>
              </div>

              {/* Right Content - Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bottom Achievement Bar */}
            <div className="mt-12 pt-8 border-t border-gray-200/50">
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-[#2f7333]" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">25%</span> YoY Growth
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">100%</span> Legal Compliance
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#2f7333]" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">50+</span> Expert Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-[#2f7333] mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To democratize real estate by providing transparent, reliable, and customer-centric services that
                    make property buying and selling accessible to everyone in Nashik and beyond.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Eye className="w-8 h-8 text-[#2f7333] mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be the most trusted and innovative real estate platform in Maharashtra, setting new standards for
                    customer service and technological advancement in the industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Our+Office"
                alt="NasikSquare Office"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#2f7333] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">RERA Certified</div>
                    <div className="text-sm text-gray-600">MahaRERA/12345/2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our every decision and interaction with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2f7333] to-[#053921] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to making your real estate journey smooth and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#2f7333] text-white">{member.experience}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#2f7333] font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.specialization}</p>
                  <p className="text-xs text-gray-500 mb-4">{member.achievements}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#2f7333] text-[#2f7333] hover:bg-[#2f7333] hover:text-white bg-transparent"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our growth and success over the years
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#2f7333]/20"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-[#2f7333] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2f7333] rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2f7333] to-[#053921] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Real Estate Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trusted us with their property dreams. Let's make your real estate
            goals a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2f7333] hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2f7333] bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
