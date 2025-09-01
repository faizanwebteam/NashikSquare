"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Building,
  Car,
  Star,
  Heart,
  Share2,
  Phone,
  Download,
  Eye,
  Calendar,
  Shield,
  Briefcase,
  Users,
  CheckCircle,
  FileText,
} from "lucide-react"

export default function CommercialDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock data - in real app, fetch based on params.id
  const commercial = {
    id: params.id,
    title: "Premium Office Space",
    location: "MG Road, Nashik",
    price: "₹85,00,000",
    pricePerSqft: "₹8,500",
    area: "1,000 sq ft",
    type: "Office Space",
    floor: "3rd Floor",
    totalFloors: 8,
    parking: 4,
    furnished: "Fully Furnished",
    possession: "Ready to Move",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    featured: true,
    verified: true,
    rating: 4.8,
    views: 345,
    reviews: 24,
    expectedRent: "₹45,000/month",
    description:
      "This premium office space is strategically located on MG Road, offering excellent connectivity and modern amenities. Perfect for IT companies, consultancies, and corporate offices looking for a prestigious address in Nashik.",
    highlights: [
      "Prime location on MG Road",
      "Fully furnished with modern interiors",
      "High-speed internet connectivity",
      "Professional building with elevator",
      "Ample parking space available",
      "Ready to move in condition",
    ],
    amenities: [
      {
        category: "Office Features",
        items: ["Central AC", "High Speed Internet", "Conference Room", "Reception Area"],
      },
      { category: "Building Amenities", items: ["Elevator", "Power Backup", "Security System", "Parking"] },
      { category: "Business Services", items: ["Cafeteria", "ATM", "Courier Service", "Maintenance"] },
      { category: "Safety & Security", items: ["CCTV Surveillance", "24/7 Security", "Fire Safety", "Access Control"] },
    ],
    specifications: {
      "Carpet Area": "1,000 sq ft",
      "Built-up Area": "1,200 sq ft",
      Floor: "3rd of 8 floors",
      Facing: "North-East",
      "Age of Building": "5 years",
      Furnishing: "Fully Furnished",
      Flooring: "Vitrified Tiles",
      Parking: "4 Reserved Spots",
      "Ceiling Height": "10 feet",
      Washrooms: "2 (Male & Female)",
    },
    nearbyFacilities: [
      { name: "Nashik Central Mall", distance: "0.3 km", type: "Shopping", rating: 4.4 },
      { name: "HDFC Bank Branch", distance: "0.1 km", type: "Banking", rating: 4.2 },
      { name: "Hotel Express Inn", distance: "0.5 km", type: "Hospitality", rating: 4.1 },
      { name: "Nashik Railway Station", distance: "2.8 km", type: "Transport", rating: 4.0 },
      { name: "Mumbai-Nashik Highway", distance: "1.2 km", type: "Connectivity", rating: 4.8 },
    ],
    priceHistory: [
      { year: "2020", price: "₹65,00,000", rent: "₹35,000" },
      { year: "2021", price: "₹72,00,000", rent: "₹38,000" },
      { year: "2022", price: "₹78,00,000", rent: "₹41,000" },
      { year: "2023", price: "₹82,00,000", rent: "₹43,000" },
      { year: "2024", price: "₹85,00,000", rent: "₹45,000" },
    ],
    developer: "Commercial Realty",
    tenantType: "IT/Software",
    rera: "MahaRERA C52100012345",
    features: ["Reception Area", "Manager Cabin", "Open Workspace", "Meeting Room", "Pantry", "Server Room"],
    legalDocuments: [
      "Property Title Deed",
      "RERA Certificate",
      "Occupancy Certificate",
      "Fire NOC",
      "Building Plan Approval",
      "Tax Receipts",
    ],
  }

  const similarProperties = [
    {
      id: 2,
      title: "Retail Showroom Space",
      location: "College Road, Nashik",
      price: "₹1,20,00,000",
      area: "1,667 sq ft",
      type: "Showroom",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "IT Office Complex",
      location: "Gangapur Road, Nashik",
      price: "₹2,50,00,000",
      area: "4,032 sq ft",
      type: "Office Complex",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Medical Center Space",
      location: "MG Road, Nashik",
      price: "₹95,00,000",
      area: "1,118 sq ft",
      type: "Medical Center",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-cream/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <Card className="mb-8 overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <img
                  src={commercial.images[currentImageIndex] || "/placeholder.svg"}
                  alt={commercial.title}
                  className="w-full h-96 object-cover"
                />

                {/* Image Navigation */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {commercial.images.length}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4 bg-white/80 backdrop-blur-sm">
                <div className="flex gap-2 overflow-x-auto">
                  {commercial.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className={`w-20 h-16 object-cover rounded cursor-pointer border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-brand-green"
                          : "border-transparent hover:border-brand-green/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Property Header */}
            <Card className="mb-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {commercial.featured && (
                    <Badge className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white">Featured</Badge>
                  )}
                  {commercial.verified && (
                    <Badge variant="secondary" className="bg-brand-cream text-brand-dark-green">
                      ✓ Verified
                    </Badge>
                  )}
                  <Badge variant="outline" className="border-brand-green text-brand-green">
                    {commercial.type}
                  </Badge>
                  <Badge variant="outline" className="border-brand-green text-brand-green">
                    {commercial.possession}
                  </Badge>
                </div>

                <h1 className="text-3xl font-bold text-brand-dark-green mb-2">{commercial.title}</h1>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {commercial.location}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{commercial.rating}</span>
                    <span className="text-gray-600">({commercial.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Eye className="w-4 h-4" />
                    <span>{commercial.views} views</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Purchase Price</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-brand-dark-green">{commercial.price}</span>
                      <span className="text-lg text-gray-600">({commercial.pricePerSqft}/sq ft)</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Expected Rent</div>
                    <div className="text-2xl font-bold text-brand-green">{commercial.expectedRent}</div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 p-3 bg-brand-cream/30 rounded-lg">
                    <Building className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="font-medium text-brand-dark-green">{commercial.area}</div>
                      <div className="text-sm text-gray-600">Carpet Area</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-brand-cream/30 rounded-lg">
                    <Briefcase className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="font-medium text-brand-dark-green">{commercial.floor}</div>
                      <div className="text-sm text-gray-600">Floor</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-brand-cream/30 rounded-lg">
                    <Car className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="font-medium text-brand-dark-green">{commercial.parking}</div>
                      <div className="text-sm text-gray-600">Parking</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-brand-cream/30 rounded-lg">
                    <Users className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="font-medium text-brand-dark-green">{commercial.furnished}</div>
                      <div className="text-sm text-gray-600">Furnishing</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                  >
                    Request Callback
                  </Button>
                  <Button
                    variant="outline"
                    className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                  <Button
                    variant="outline"
                    className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information Tabs */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-6 bg-brand-cream/30">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="amenities"
                    className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
                  >
                    Amenities
                  </TabsTrigger>
                  <TabsTrigger
                    value="location"
                    className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
                  >
                    Location
                  </TabsTrigger>
                  <TabsTrigger
                    value="pricing"
                    className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
                  >
                    Pricing
                  </TabsTrigger>
                  <TabsTrigger
                    value="specs"
                    className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
                  >
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="legal"
                    className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
                  >
                    Legal
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-3">Description</h3>
                      <p className="text-gray-700 leading-relaxed">{commercial.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-3">Key Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {commercial.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-3">Office Features</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {commercial.features.map((feature, index) => (
                          <div key={index} className="bg-brand-cream/30 rounded-lg p-3 text-center">
                            <div className="font-medium text-brand-dark-green">{feature}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-brand-green/10 to-brand-dark-green/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-dark-green mb-2">Ideal For</h4>
                      <p className="text-gray-700 mb-2">This space is perfect for: {commercial.tenantType}</p>
                      <div className="text-sm text-gray-600">
                        Suitable for teams of 15-20 people with modern office requirements
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="p-6">
                  <div className="space-y-6">
                    {commercial.amenities.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-brand-dark-green mb-3 flex items-center gap-2">
                          {category.category === "Office Features" && (
                            <Briefcase className="w-5 h-5 text-brand-green" />
                          )}
                          {category.category === "Building Amenities" && (
                            <Building className="w-5 h-5 text-brand-green" />
                          )}
                          {category.category === "Business Services" && <Users className="w-5 h-5 text-brand-green" />}
                          {category.category === "Safety & Security" && <Shield className="w-5 h-5 text-brand-green" />}
                          {category.category}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2 p-3 bg-brand-cream/20 rounded-lg">
                              <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-4">Nearby Business Facilities</h3>
                      <div className="space-y-3">
                        {commercial.nearbyFacilities.map((facility, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-brand-cream/20 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center">
                                {facility.type === "Shopping" && <Building className="w-5 h-5 text-brand-green" />}
                                {facility.type === "Banking" && <Briefcase className="w-5 h-5 text-brand-green" />}
                                {facility.type === "Hospitality" && <Users className="w-5 h-5 text-brand-green" />}
                                {facility.type === "Transport" && <Car className="w-5 h-5 text-brand-green" />}
                                {facility.type === "Connectivity" && <MapPin className="w-5 h-5 text-brand-green" />}
                              </div>
                              <div>
                                <div className="font-medium text-brand-dark-green">{facility.name}</div>
                                <div className="text-sm text-gray-600">{facility.type}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-brand-dark-green">{facility.distance}</div>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-gray-600">{facility.rating}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="pricing" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-4">Price & Rent History</h3>
                      <div className="space-y-3">
                        {commercial.priceHistory.map((entry, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-brand-cream/20 rounded-lg"
                          >
                            <div className="font-medium text-brand-dark-green">{entry.year}</div>
                            <div className="flex gap-6">
                              <div>
                                <div className="text-sm text-gray-600">Purchase Price</div>
                                <div className="text-lg font-semibold text-brand-dark-green">{entry.price}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">Monthly Rent</div>
                                <div className="text-lg font-semibold text-brand-green">{entry.rent}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-brand-green/10 to-brand-dark-green/10 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-brand-dark-green mb-2">Price Appreciation</h4>
                        <p className="text-gray-700 mb-4">Consistent growth in commercial real estate value</p>
                        <div className="text-2xl font-bold text-brand-green">+30.8% in 4 years</div>
                      </div>

                      <div className="bg-gradient-to-r from-brand-brown/10 to-brand-cream/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-brand-dark-green mb-2">Rental Yield</h4>
                        <p className="text-gray-700 mb-4">Expected annual rental return</p>
                        <div className="text-2xl font-bold text-brand-brown">6.35% per annum</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(commercial.specifications).map(([key, value], index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-brand-cream/20 rounded-lg">
                        <span className="font-medium text-brand-dark-green">{key}</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="legal" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-4">Available Documents</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {commercial.legalDocuments.map((doc, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-brand-cream/20 rounded-lg"
                          >
                            <div className="flex items-center gap-2">
                              <FileText className="w-5 h-5 text-brand-green" />
                              <span className="text-gray-700">{doc}</span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-brand-green/10 to-brand-dark-green/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-dark-green mb-2">Legal Compliance</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-green" />
                          <span className="text-gray-700">RERA Registered: {commercial.rera}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-green" />
                          <span className="text-gray-700">All approvals and NOCs in place</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-green" />
                          <span className="text-gray-700">Clear title and ownership documents</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white rounded-t-lg">
                <CardTitle className="text-center">Business Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input placeholder="Company Name" className="border-gray-200 focus:border-brand-green" />
                  <Input placeholder="Contact Person" className="border-gray-200 focus:border-brand-green" />
                  <Input placeholder="Phone Number" className="border-gray-200 focus:border-brand-green" />
                  <Input placeholder="Email Address" className="border-gray-200 focus:border-brand-green" />
                  <Textarea placeholder="Business Requirements" className="border-gray-200 focus:border-brand-green" />
                  <Button className="w-full bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green text-white">
                    Send Business Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: +91 98765 43210
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Site Visit
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Floor Plan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Investment Summary */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-dark-green">Investment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-brand-cream/30 rounded">
                  <span className="text-gray-700">Purchase Price</span>
                  <span className="font-medium text-brand-dark-green">{commercial.price}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Monthly Rent</span>
                  <span className="font-medium text-brand-green">{commercial.expectedRent}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-brand-cream/30 rounded">
                  <span className="text-gray-700">Rental Yield</span>
                  <span className="font-medium text-brand-brown">6.35% p.a.</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">ROI Period</span>
                  <span className="font-medium text-brand-dark-green">15.7 years</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Properties */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-dark-green">Similar Commercial Properties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {similarProperties.map((similar) => (
                  <div
                    key={similar.id}
                    className="flex gap-3 p-3 bg-brand-cream/20 rounded-lg hover:bg-brand-cream/30 transition-colors cursor-pointer"
                  >
                    <img
                      src={similar.image || "/placeholder.svg"}
                      alt={similar.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-brand-dark-green text-sm mb-1">{similar.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{similar.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-brand-green">{similar.price}</span>
                        <span className="text-xs text-gray-600">{similar.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
