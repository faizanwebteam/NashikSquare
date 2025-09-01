"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Share2,
  Heart,
  Download,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  Car,
  Shield,
  TreePine,
  Building,
  Users,
  Star,
  Eye,
  Bookmark,
} from "lucide-react"

// Mock data for the plot
const plotData = {
  id: 1,
  title: "Premium Residential Plot - Nashik Road",
  location: "Nashik Road, Nashik",
  area: "2400 sq ft",
  price: "₹48,00,000",
  pricePerSqft: "₹2,000",
  plotType: "Residential",
  facing: "East",
  verified: true,
  featured: true,
  rera: "MH-RERA-P12345678",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  description:
    "Premium residential plot located in the heart of Nashik Road with excellent connectivity and modern infrastructure. Perfect for building your dream home with all necessary approvals in place.",
  highlights: [
    "RERA Approved",
    "Clear Title",
    "Corner Plot",
    "Wide Road Access",
    "Developed Infrastructure",
    "Gated Community",
  ],
  specifications: {
    "Plot Area": "2400 sq ft",
    "Plot Type": "Residential",
    Facing: "East",
    "Road Width": "40 feet",
    "Boundary Wall": "Completed",
    Electricity: "Available",
    "Water Supply": "Municipal",
    Drainage: "Proper",
    "Soil Type": "Black Cotton",
    FSI: "1.5",
    "Ground Coverage": "60%",
    Setbacks: "As per norms",
  },
  amenities: {
    Infrastructure: ["Wide Roads", "Street Lighting", "Underground Drainage", "Water Supply", "Electricity Connection"],
    Security: ["Gated Community", "24/7 Security", "CCTV Surveillance", "Security Cabin"],
    Convenience: ["Park & Garden", "Community Hall", "Children's Play Area", "Jogging Track"],
  },
  connectivity: [
    { place: "Nashik Road Railway Station", distance: "2 km", time: "5 mins" },
    { place: "Mumbai-Nashik Highway", distance: "1 km", time: "3 mins" },
    { place: "Nashik Airport", distance: "15 km", time: "25 mins" },
    { place: "City Center", distance: "8 km", time: "15 mins" },
  ],
  nearbyFacilities: [
    { name: "DPS School", type: "Education", distance: "500m", rating: 4.5 },
    { name: "Apollo Hospital", type: "Healthcare", distance: "2 km", rating: 4.3 },
    { name: "City Center Mall", type: "Shopping", distance: "3 km", rating: 4.2 },
    { name: "HDFC Bank", type: "Banking", distance: "800m", rating: 4.0 },
  ],
  priceHistory: [
    { year: "2020", price: "₹1,500/sq ft" },
    { year: "2021", price: "₹1,650/sq ft" },
    { year: "2022", price: "₹1,800/sq ft" },
    { year: "2023", price: "₹1,950/sq ft" },
    { year: "2024", price: "₹2,000/sq ft" },
  ],
  documents: [
    "7/12 Extract",
    "Property Card",
    "Survey Settlement",
    "RERA Certificate",
    "Approved Layout Plan",
    "NOC Documents",
  ],
  stats: {
    views: 1250,
    interested: 45,
    rating: 4.6,
    reviews: 23,
  },
}

export default function PlotDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream/20 via-white to-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {plotData.featured && (
                  <Badge className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white">Featured</Badge>
                )}
                {plotData.verified && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
                <Badge variant="outline">{plotData.plotType}</Badge>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-brand-dark-green mb-4">{plotData.title}</h1>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{plotData.location}</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{plotData.stats.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>
                    {plotData.stats.rating} ({plotData.stats.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{plotData.stats.interested} interested</span>
                </div>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="text-4xl font-bold text-brand-green mb-2">{plotData.price}</div>
              <div className="text-lg text-gray-600 mb-4">{plotData.pricePerSqft}/sq ft</div>
              <div className="flex gap-2 lg:justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={isBookmarked ? "text-brand-green border-brand-green" : ""}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <Card className="mb-8 overflow-hidden border-brand-green/20">
              <div className="relative">
                <img
                  src={plotData.images[currentImageIndex] || "/placeholder.svg"}
                  alt={plotData.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {plotData.images.length}
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2">
                  {plotData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-lg overflow-hidden ${
                        currentImageIndex === index ? "ring-2 ring-brand-green" : ""
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`View ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="border-brand-green/20">
                  <CardHeader>
                    <CardTitle className="text-brand-dark-green">Plot Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">{plotData.description}</p>

                    <h4 className="font-semibold text-brand-dark-green mb-4">Key Highlights</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {plotData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-brand-green/20">
                  <CardHeader>
                    <CardTitle className="text-brand-dark-green">Price History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {plotData.priceHistory.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg"
                        >
                          <span className="font-medium">{item.year}</span>
                          <span className="text-brand-green font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="space-y-6">
                <Card className="border-brand-green/20">
                  <CardHeader>
                    <CardTitle className="text-brand-dark-green">Plot Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(plotData.specifications).map(([key, value], index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg"
                        >
                          <span className="font-medium text-gray-700">{key}</span>
                          <span className="text-brand-dark-green font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="space-y-6">
                {Object.entries(plotData.amenities).map(([category, items], categoryIndex) => (
                  <Card key={categoryIndex} className="border-brand-green/20">
                    <CardHeader>
                      <CardTitle className="text-brand-dark-green flex items-center gap-2">
                        {category === "Infrastructure" && <Building className="w-5 h-5" />}
                        {category === "Security" && <Shield className="w-5 h-5" />}
                        {category === "Convenience" && <TreePine className="w-5 h-5" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {items.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-2 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="location" className="space-y-6">
                <Card className="border-brand-green/20">
                  <CardHeader>
                    <CardTitle className="text-brand-dark-green">Connectivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {plotData.connectivity.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <Car className="w-5 h-5 text-brand-green" />
                            <span className="font-medium">{item.place}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-brand-green font-semibold">{item.distance}</div>
                            <div className="text-sm text-gray-600">{item.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-brand-green/20">
                  <CardHeader>
                    <CardTitle className="text-brand-dark-green">Nearby Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {plotData.nearbyFacilities.map((facility, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg"
                        >
                          <div>
                            <div className="font-medium">{facility.name}</div>
                            <div className="text-sm text-gray-600">{facility.type}</div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm">{facility.rating}</span>
                            </div>
                            <div className="text-sm text-brand-green">{facility.distance}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card className="border-brand-green/20">
                  <CardHeader>
                    <CardTitle className="text-brand-dark-green">Available Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {plotData.documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="font-medium">{doc}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card className="border-brand-green/20 sticky top-4">
              <CardHeader className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white rounded-t-lg">
                <CardTitle className="text-center">Get More Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" className="focus:border-brand-green" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone" className="focus:border-brand-green" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="I'm interested in this plot..."
                      className="focus:border-brand-green"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green">
                    Send Inquiry
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plot Summary */}
            <Card className="border-brand-green/20">
              <CardHeader>
                <CardTitle className="text-brand-dark-green">Plot Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg">
                  <span className="text-gray-600">Plot Area</span>
                  <span className="font-semibold text-brand-dark-green">{plotData.area}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-brand-green/10 to-brand-cream/20 rounded-lg">
                  <span className="text-gray-600">Price per sq ft</span>
                  <span className="font-semibold text-brand-dark-green">{plotData.pricePerSqft}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg">
                  <span className="text-gray-600">Facing</span>
                  <span className="font-semibold text-brand-dark-green">{plotData.facing}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-brand-green/10 to-brand-cream/20 rounded-lg">
                  <span className="text-gray-600">RERA ID</span>
                  <span className="font-semibold text-brand-dark-green text-sm">{plotData.rera}</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Plots */}
            <Card className="border-brand-green/20">
              <CardHeader>
                <CardTitle className="text-brand-dark-green">Similar Plots</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 p-3 bg-gradient-to-r from-brand-cream/20 to-brand-green/10 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <img
                      src="/placeholder.svg?height=60&width=80"
                      alt="Similar plot"
                      className="w-20 h-15 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-brand-dark-green">Residential Plot</h4>
                      <p className="text-xs text-gray-600">Gangapur Road</p>
                      <p className="text-sm font-semibold text-brand-green">₹45,00,000</p>
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
