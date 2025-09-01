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
  Bed,
  Bath,
  Car,
  Home,
  Star,
  Heart,
  Share2,
  Phone,
  Download,
  Eye,
  Calendar,
  Shield,
  Trees,
  Building,
  Zap,
  CheckCircle,
} from "lucide-react"

export default function BungalowDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAllImages, setShowAllImages] = useState(false)

  // Mock data - in real app, fetch based on params.id
  const bungalow = {
    id: params.id,
    title: "Luxury Villa with Garden",
    location: "Gangapur Road, Nashik",
    price: "₹85,00,000",
    pricePerSqft: "₹3,200",
    area: "2,656 sq ft",
    plotSize: "4,500 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    age: "Ready to Move",
    facing: "East",
    furnished: "Semi-Furnished",
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
    views: 245,
    reviews: 18,
    description:
      "This stunning luxury villa offers the perfect blend of modern amenities and traditional charm. Located in the prestigious Gangapur Road area, this property features spacious rooms, a beautiful garden, and premium finishes throughout.",
    highlights: [
      "Premium location in Gangapur Road",
      "Spacious 4,500 sq ft plot",
      "Modern architecture with traditional elements",
      "Ready to move in condition",
      "East facing for natural light",
      "Well-maintained garden area",
    ],
    amenities: [
      { category: "Security", items: ["24/7 Security", "CCTV Surveillance", "Gated Community", "Security Guard"] },
      { category: "Recreation", items: ["Swimming Pool", "Garden Area", "Children Play Area", "Jogging Track"] },
      { category: "Utilities", items: ["Power Backup", "Water Supply", "Sewage Treatment", "Waste Management"] },
      { category: "Convenience", items: ["Parking Space", "Elevator", "Intercom", "Maintenance Staff"] },
    ],
    specifications: {
      "Built-up Area": "2,656 sq ft",
      "Plot Area": "4,500 sq ft",
      Floor: "Ground + 1",
      Facing: "East",
      "Age of Property": "Ready to Move",
      Furnishing: "Semi-Furnished",
      Flooring: "Vitrified Tiles",
      Parking: "2 Covered",
      "Water Source": "Borewell + Municipal",
      Electricity: "Regular + Backup",
    },
    nearbyFacilities: [
      { name: "Nashik International School", distance: "0.8 km", type: "Education", rating: 4.5 },
      { name: "Apollo Hospital", distance: "1.2 km", type: "Healthcare", rating: 4.7 },
      { name: "City Center Mall", distance: "2.1 km", type: "Shopping", rating: 4.3 },
      { name: "Nashik Railway Station", distance: "3.5 km", type: "Transport", rating: 4.0 },
      { name: "Mumbai-Nashik Highway", distance: "0.5 km", type: "Connectivity", rating: 4.8 },
    ],
    priceHistory: [
      { year: "2020", price: "₹65,00,000" },
      { year: "2021", price: "₹72,00,000" },
      { year: "2022", price: "₹78,00,000" },
      { year: "2023", price: "₹82,00,000" },
      { year: "2024", price: "₹85,00,000" },
    ],
    developer: "Pride Group",
    possession: "Immediate",
    rera: "MahaRERA P52100012345",
    features: [
      "Modular Kitchen",
      "Master Bedroom with Balcony",
      "Separate Servant Room",
      "Terrace Garden",
      "Car Porch",
      "Store Room",
    ],
  }

  const similarBungalows = [
    {
      id: 2,
      title: "Modern Independent House",
      location: "Adgaon, Nashik",
      price: "₹65,00,000",
      area: "2,321 sq ft",
      bedrooms: 3,
      bathrooms: 3,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Spacious Family Bungalow",
      location: "Pathardi Phata, Nashik",
      price: "₹55,00,000",
      area: "2,200 sq ft",
      bedrooms: 3,
      bathrooms: 2,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Premium Villa with Pool",
      location: "Makhmalabad, Nashik",
      price: "₹75,00,000",
      area: "2,500 sq ft",
      bedrooms: 4,
      bathrooms: 3,
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
                  src={bungalow.images[currentImageIndex] || "/placeholder.svg"}
                  alt={bungalow.title}
                  className="w-full h-96 object-cover"
                />

                {/* Image Navigation */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {bungalow.images.length}
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
                  {bungalow.images.map((image, index) => (
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
                  {bungalow.featured && (
                    <Badge className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white">Featured</Badge>
                  )}
                  {bungalow.verified && (
                    <Badge variant="secondary" className="bg-brand-cream text-brand-dark-green">
                      ✓ Verified
                    </Badge>
                  )}
                  <Badge variant="outline" className="border-brand-green text-brand-green">
                    {bungalow.age}
                  </Badge>
                </div>

                <h1 className="text-3xl font-bold text-brand-dark-green mb-2">{bungalow.title}</h1>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {bungalow.location}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{bungalow.rating}</span>
                    <span className="text-gray-600">({bungalow.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Eye className="w-4 h-4" />
                    <span>{bungalow.views} views</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-brand-dark-green">{bungalow.price}</span>
                  <span className="text-lg text-gray-600">({bungalow.pricePerSqft}/sq ft)</span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 p-3 bg-brand-cream/30 rounded-lg">
                    <Home className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="font-medium text-brand-dark-green">{bungalow.area}</div>
                      <div className="text-sm text-gray-600">Built-up Area</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-brand-cream/30 rounded-lg">
                    <Bed className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="font-medium text-brand-dark-green">{bungalow.bedrooms}</div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-brand-cream/30 rounded-lg">
                    <Bath className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="font-medium text-brand-dark-green">{bungalow.bathrooms}</div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-brand-cream/30 rounded-lg">
                    <Car className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="font-medium text-brand-dark-green">{bungalow.parking}</div>
                      <div className="text-sm text-gray-600">Parking</div>
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
                <TabsList className="grid w-full grid-cols-5 bg-brand-cream/30">
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
                </TabsList>

                <TabsContent value="overview" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-3">Description</h3>
                      <p className="text-gray-700 leading-relaxed">{bungalow.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-3">Key Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {bungalow.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-3">Features</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {bungalow.features.map((feature, index) => (
                          <div key={index} className="bg-brand-cream/30 rounded-lg p-3 text-center">
                            <div className="font-medium text-brand-dark-green">{feature}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="p-6">
                  <div className="space-y-6">
                    {bungalow.amenities.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-brand-dark-green mb-3 flex items-center gap-2">
                          {category.category === "Security" && <Shield className="w-5 h-5 text-brand-green" />}
                          {category.category === "Recreation" && <Trees className="w-5 h-5 text-brand-green" />}
                          {category.category === "Utilities" && <Zap className="w-5 h-5 text-brand-green" />}
                          {category.category === "Convenience" && <Building className="w-5 h-5 text-brand-green" />}
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
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-4">Nearby Facilities</h3>
                      <div className="space-y-3">
                        {bungalow.nearbyFacilities.map((facility, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-brand-cream/20 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center">
                                {facility.type === "Education" && <Building className="w-5 h-5 text-brand-green" />}
                                {facility.type === "Healthcare" && <Heart className="w-5 h-5 text-brand-green" />}
                                {facility.type === "Shopping" && <Building className="w-5 h-5 text-brand-green" />}
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
                      <h3 className="text-xl font-semibold text-brand-dark-green mb-4">Price History</h3>
                      <div className="space-y-3">
                        {bungalow.priceHistory.map((entry, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-brand-cream/20 rounded-lg"
                          >
                            <div className="font-medium text-brand-dark-green">{entry.year}</div>
                            <div className="text-lg font-semibold text-brand-dark-green">{entry.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-brand-green/10 to-brand-dark-green/10 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-dark-green mb-2">Price Appreciation</h4>
                      <p className="text-gray-700 mb-4">
                        This property has shown consistent growth over the years with an average appreciation of 7.5%
                        annually.
                      </p>
                      <div className="text-2xl font-bold text-brand-green">+30.8% in 4 years</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(bungalow.specifications).map(([key, value], index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-brand-cream/20 rounded-lg">
                        <span className="font-medium text-brand-dark-green">{key}</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
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
                <CardTitle className="text-center">Get More Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="border-gray-200 focus:border-brand-green" />
                  <Input placeholder="Phone Number" className="border-gray-200 focus:border-brand-green" />
                  <Input placeholder="Email Address" className="border-gray-200 focus:border-brand-green" />
                  <Textarea placeholder="Your Message" className="border-gray-200 focus:border-brand-green" />
                  <Button className="w-full bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green text-white">
                    Send Inquiry
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
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property Summary */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-dark-green">Property Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-brand-cream/30 rounded">
                  <span className="text-gray-700">Developer</span>
                  <span className="font-medium text-brand-dark-green">{bungalow.developer}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">RERA ID</span>
                  <span className="font-medium text-brand-dark-green">{bungalow.rera}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-brand-cream/30 rounded">
                  <span className="text-gray-700">Possession</span>
                  <span className="font-medium text-brand-dark-green">{bungalow.possession}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Facing</span>
                  <span className="font-medium text-brand-dark-green">{bungalow.facing}</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Properties */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-dark-green">Similar Bungalows</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {similarBungalows.map((similar) => (
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
                        <span className="text-xs text-gray-600">{similar.bedrooms}BHK</span>
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
