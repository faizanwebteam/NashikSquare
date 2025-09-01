"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Star,
  Calendar,
  Phone,
  Download,
  Share2,
  Heart,
  CheckCircle,
  Clock,
  TrendingUp,
  Eye,
  MessageCircle,
  ArrowLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for the project
const projectData = {
  id: 1,
  name: "Pride World City",
  developer: "Pride Group",
  location: "Loni Kalbhor, Nashik",
  priceRange: "₹45L - ₹1.2Cr",
  image: "/placeholder.svg?height=500&width=800&text=Pride+World+City+Main",
  logo: "/placeholder.svg?height=80&width=120&text=Pride+Logo",
  totalUnits: 850,
  possession: "Dec 2025",
  rating: 4.5,
  reviews: 127,
  views: 2847,
  status: "Under Construction",
  completionPercentage: 65,
  launchDate: "Jan 2023",
  reraNumber: "P52100047890",
  description:
    "Pride World City is a premium integrated township spread across 50 acres, offering world-class amenities and modern infrastructure. This thoughtfully planned community features a perfect blend of residential options including apartments, villas, and plots, designed to cater to diverse lifestyle needs.",
  highlights: [
    "RERA Approved Project",
    "80% Open Green Spaces",
    "24/7 Gated Security",
    "School & Hospital Within Complex",
    "Metro Connectivity Planned",
    "Earthquake Resistant Structure",
  ],
  propertyTypes: [
    {
      type: "2 BHK Apartments",
      area: "650-750 sq ft",
      price: "₹45L - ₹55L",
      available: 120,
      total: 200,
      image: "/placeholder.svg?height=300&width=400&text=2BHK+Apartment",
    },
    {
      type: "3 BHK Apartments",
      area: "950-1200 sq ft",
      price: "₹65L - ₹85L",
      available: 85,
      total: 300,
      image: "/placeholder.svg?height=300&width=400&text=3BHK+Apartment",
    },
    {
      type: "4 BHK Villas",
      area: "1800-2200 sq ft",
      price: "₹95L - ₹1.2Cr",
      available: 25,
      total: 150,
      image: "/placeholder.svg?height=300&width=400&text=4BHK+Villa",
    },
    {
      type: "Residential Plots",
      area: "1200-2000 sq ft",
      price: "₹35L - ₹65L",
      available: 45,
      total: 200,
      image: "/placeholder.svg?height=300&width=400&text=Residential+Plot",
    },
  ],
  amenities: [
    { name: "Swimming Pool", icon: "🏊", category: "Recreation" },
    { name: "Gymnasium", icon: "💪", category: "Fitness" },
    { name: "Club House", icon: "🏛️", category: "Social" },
    { name: "Children's Play Area", icon: "🎪", category: "Kids" },
    { name: "Jogging Track", icon: "🏃", category: "Fitness" },
    { name: "Tennis Court", icon: "🎾", category: "Sports" },
    { name: "Basketball Court", icon: "🏀", category: "Sports" },
    { name: "Yoga Deck", icon: "🧘", category: "Wellness" },
    { name: "Amphitheater", icon: "🎭", category: "Entertainment" },
    { name: "Landscaped Gardens", icon: "🌳", category: "Nature" },
    { name: "24/7 Security", icon: "🛡️", category: "Security" },
    { name: "Power Backup", icon: "⚡", category: "Utilities" },
    { name: "Water Treatment Plant", icon: "💧", category: "Utilities" },
    { name: "Waste Management", icon: "♻️", category: "Environment" },
    { name: "CCTV Surveillance", icon: "📹", category: "Security" },
    { name: "Intercom Facility", icon: "📞", category: "Communication" },
  ],
  specifications: {
    Structure: "RCC Frame Structure with Earthquake Resistant Design",
    Flooring: "Vitrified tiles in living areas, Anti-skid tiles in bathrooms",
    Kitchen: "Granite platform with stainless steel sink",
    Bathroom: "Premium sanitary fittings with hot & cold water supply",
    Doors: "Main door - Teak wood frame, Internal doors - Flush doors",
    Windows: "UPVC windows with mosquito mesh",
    Electrical: "Concealed copper wiring with modular switches",
    Painting: "Premium emulsion paint on walls, Weather proof paint exterior",
  },
  connectivity: [
    { place: "Nashik Railway Station", distance: "12 km", time: "25 mins" },
    { place: "Mumbai-Nashik Highway", distance: "3 km", time: "8 mins" },
    { place: "Nashik Airport", distance: "18 km", time: "35 mins" },
    { place: "City Center Mall", distance: "8 km", time: "18 mins" },
    { place: "Nashik Road", distance: "6 km", time: "15 mins" },
    { place: "IT Park", distance: "10 km", time: "22 mins" },
  ],
  nearbyFacilities: [
    { name: "Delhi Public School", type: "School", distance: "2 km", rating: 4.5 },
    { name: "Wockhardt Hospital", type: "Hospital", distance: "4 km", rating: 4.3 },
    { name: "Phoenix Mall", type: "Shopping", distance: "6 km", rating: 4.2 },
    { name: "HDFC Bank", type: "Bank", distance: "1.5 km", rating: 4.0 },
    { name: "Reliance Fresh", type: "Grocery", distance: "1 km", rating: 4.1 },
    { name: "PVR Cinemas", type: "Entertainment", distance: "7 km", rating: 4.4 },
  ],
  gallery: [
    "/placeholder.svg?height=400&width=600&text=Project+Entrance",
    "/placeholder.svg?height=400&width=600&text=Swimming+Pool",
    "/placeholder.svg?height=400&width=600&text=Club+House",
    "/placeholder.svg?height=400&width=600&text=Garden+View",
    "/placeholder.svg?height=400&width=600&text=Apartment+Interior",
    "/placeholder.svg?height=400&width=600&text=Villa+Exterior",
    "/placeholder.svg?height=400&width=600&text=Kids+Play+Area",
    "/placeholder.svg?height=400&width=600&text=Gymnasium",
  ],
  floorPlans: [
    { type: "2 BHK", area: "750 sq ft", image: "/placeholder.svg?height=400&width=600&text=2BHK+Floor+Plan" },
    { type: "3 BHK", area: "1100 sq ft", image: "/placeholder.svg?height=400&width=600&text=3BHK+Floor+Plan" },
    { type: "4 BHK Villa", area: "2000 sq ft", image: "/placeholder.svg?height=400&width=600&text=4BHK+Villa+Plan" },
  ],
  paymentPlan: [
    { stage: "Booking", percentage: 10, amount: "₹4.5L - ₹12L" },
    { stage: "Agreement", percentage: 15, amount: "₹6.75L - ₹18L" },
    { stage: "Foundation", percentage: 20, amount: "₹9L - ₹24L" },
    { stage: "Plinth Level", percentage: 15, amount: "₹6.75L - ₹18L" },
    { stage: "Slab Completion", percentage: 20, amount: "₹9L - ₹24L" },
    { stage: "Finishing", percentage: 15, amount: "₹6.75L - ₹18L" },
    { stage: "Possession", percentage: 5, amount: "₹2.25L - ₹6L" },
  ],
  priceHistory: [
    { date: "Jan 2023", price: "₹42L" },
    { date: "Jun 2023", price: "₹44L" },
    { date: "Dec 2023", price: "₹45L" },
    { date: "Jun 2024", price: "₹47L" },
    { date: "Dec 2024", price: "₹49L" },
  ],
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/properties"
          className="inline-flex items-center text-brand-green hover:text-brand-dark-green font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image Gallery */}
          <div className="lg:col-span-2">
            <div className="relative">
              <Image
                src={projectData.gallery[selectedImageIndex] || "/placeholder.svg"}
                alt={projectData.name}
                width={800}
                height={500}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />

              {/* Image Overlay Info */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="flex space-x-2">
                  <Badge
                    className={`${
                      projectData.status === "Ready to Move"
                        ? "bg-green-600"
                        : projectData.status === "Under Construction"
                          ? "bg-yellow-600"
                          : "bg-blue-600"
                    } text-white shadow-lg`}
                  >
                    {projectData.status}
                  </Badge>
                  <Badge className="bg-brand-green text-white shadow-lg">RERA Approved</Badge>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                {selectedImageIndex + 1} / {projectData.gallery.length}
              </div>

              {/* Construction Progress */}
              {projectData.status === "Under Construction" && (
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 min-w-64">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-brand-dark-gray">Construction Progress</span>
                    <span className="text-sm font-bold text-brand-green">{projectData.completionPercentage}%</span>
                  </div>
                  <Progress value={projectData.completionPercentage} className="h-2" />
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {projectData.gallery.slice(0, 8).map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  width={200}
                  height={150}
                  className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all ${
                    selectedImageIndex === index ? "ring-2 ring-brand-green" : "hover:opacity-80"
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Project Info Sidebar */}
          <div className="space-y-6">
            {/* Developer Logo & Basic Info */}
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={projectData.logo || "/placeholder.svg"}
                    alt={projectData.developer}
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-brand-dark-gray">{projectData.name}</h1>
                    <p className="text-brand-brown">by {projectData.developer}</p>
                  </div>
                </div>

                <div className="flex items-center text-brand-brown mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{projectData.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{projectData.rating}</span>
                    <span className="text-sm text-brand-brown">({projectData.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-brand-brown">
                    <Eye className="w-4 h-4" />
                    <span>{projectData.views} views</span>
                  </div>
                </div>

                <div className="text-3xl font-bold text-brand-green mb-4">{projectData.priceRange}</div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-brand-brown">Total Units:</span>
                    <div className="font-semibold text-brand-dark-gray">{projectData.totalUnits}</div>
                  </div>
                  <div>
                    <span className="text-brand-brown">Possession:</span>
                    <div className="font-semibold text-brand-dark-gray">{projectData.possession}</div>
                  </div>
                  <div>
                    <span className="text-brand-brown">Launch Date:</span>
                    <div className="font-semibold text-brand-dark-gray">{projectData.launchDate}</div>
                  </div>
                  <div>
                    <span className="text-brand-brown">RERA No:</span>
                    <div className="font-semibold text-brand-dark-gray text-xs">{projectData.reraNumber}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-brand-green hover:bg-brand-dark-green text-white rounded-xl">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-xl bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request Callback
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 text-brand-dark-gray hover:bg-gray-50 rounded-xl bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Form */}
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white rounded-t-lg">
                <CardTitle className="text-lg">Get Best Price</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="border-2 border-gray-200 focus:border-brand-green rounded-xl"
                  />
                  <Input
                    placeholder="Phone Number"
                    className="border-2 border-gray-200 focus:border-brand-green rounded-xl"
                  />
                  <Input
                    placeholder="Email Address"
                    className="border-2 border-gray-200 focus:border-brand-green rounded-xl"
                  />
                  <Select>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-brand-green rounded-xl">
                      <SelectValue placeholder="Interested In" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2bhk">2 BHK Apartments</SelectItem>
                      <SelectItem value="3bhk">3 BHK Apartments</SelectItem>
                      <SelectItem value="villa">4 BHK Villas</SelectItem>
                      <SelectItem value="plot">Residential Plots</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Message (Optional)"
                    className="border-2 border-gray-200 focus:border-brand-green rounded-xl"
                  />
                  <Button className="w-full bg-brand-green hover:bg-brand-dark-green text-white rounded-xl">
                    Get Best Price
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="container mx-auto px-4 pb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white border-2 border-gray-200 rounded-xl p-1">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-lg font-medium"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="units"
              className="data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-lg font-medium"
            >
              Units
            </TabsTrigger>
            <TabsTrigger
              value="amenities"
              className="data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-lg font-medium"
            >
              Amenities
            </TabsTrigger>
            <TabsTrigger
              value="location"
              className="data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-lg font-medium"
            >
              Location
            </TabsTrigger>
            <TabsTrigger
              value="plans"
              className="data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-lg font-medium"
            >
              Floor Plans
            </TabsTrigger>
            <TabsTrigger
              value="pricing"
              className="data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-lg font-medium"
            >
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Project Description */}
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark-gray">About {projectData.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-brown leading-relaxed mb-6">{projectData.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-brand-cream rounded-xl">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-sm font-medium text-brand-dark-gray">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark-gray">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(projectData.specifications).map(([key, value], index) => (
                    <div key={index} className="border-l-4 border-brand-green pl-4">
                      <h4 className="font-semibold text-brand-dark-gray mb-1">{key}</h4>
                      <p className="text-sm text-brand-brown">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Units Tab */}
          <TabsContent value="units" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectData.propertyTypes.map((unit, index) => (
                <Card
                  key={index}
                  className="border-2 border-white bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={unit.image || "/placeholder.svg"}
                      alt={unit.type}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-brand-green text-white">
                      {unit.available} Available
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brand-dark-gray mb-2">{unit.type}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-brand-brown">{unit.area}</span>
                      <span className="text-2xl font-bold text-brand-green">{unit.price}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-brand-brown mb-2">
                        <span>Availability</span>
                        <span>
                          {unit.available} of {unit.total} units
                        </span>
                      </div>
                      <Progress value={(unit.available / unit.total) * 100} className="h-2" />
                    </div>
                    <Button className="w-full bg-brand-green hover:bg-brand-dark-green text-white rounded-xl">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Amenities Tab */}
          <TabsContent value="amenities" className="space-y-8">
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark-gray">World-Class Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                {["Recreation", "Fitness", "Social", "Security", "Utilities"].map((category) => (
                  <div key={category} className="mb-8">
                    <h3 className="text-lg font-semibold text-brand-dark-gray mb-4 border-b border-brand-green/20 pb-2">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {projectData.amenities
                        .filter((amenity) => amenity.category === category)
                        .map((amenity, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-brand-cream rounded-xl hover:bg-brand-green/10 transition-colors"
                          >
                            <span className="text-2xl">{amenity.icon}</span>
                            <span className="text-sm font-medium text-brand-dark-gray">{amenity.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Location Tab */}
          <TabsContent value="location" className="space-y-8">
            {/* Connectivity */}
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark-gray">Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectData.connectivity.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-brand-cream rounded-xl">
                      <div>
                        <h4 className="font-semibold text-brand-dark-gray">{item.place}</h4>
                        <p className="text-sm text-brand-brown">{item.distance}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-brand-green">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="font-semibold">{item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Facilities */}
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark-gray">Nearby Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectData.nearbyFacilities.map((facility, index) => (
                    <div key={index} className="p-4 bg-brand-cream rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-brand-dark-gray">{facility.name}</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm font-semibold">{facility.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs bg-white text-brand-brown">
                          {facility.type}
                        </Badge>
                        <span className="text-sm text-brand-brown">{facility.distance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Floor Plans Tab */}
          <TabsContent value="plans" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.floorPlans.map((plan, index) => (
                <Card key={index} className="border-2 border-white bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-brand-dark-gray">{plan.type}</CardTitle>
                    <p className="text-brand-brown">{plan.area}</p>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={`${plan.type} Floor Plan`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <Button className="w-full bg-brand-green hover:bg-brand-dark-green text-white rounded-xl">
                      <Download className="w-4 h-4 mr-2" />
                      Download Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-8">
            {/* Payment Plan */}
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark-gray">Payment Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectData.paymentPlan.map((stage, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-brand-cream rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-dark-gray">{stage.stage}</h4>
                          <p className="text-sm text-brand-brown">{stage.percentage}% of total cost</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-brand-green">{stage.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Price History */}
            <Card className="border-2 border-white bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark-gray flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-brand-green" />
                  Price Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {projectData.priceHistory.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-brand-cream rounded-xl">
                      <span className="text-brand-brown">{entry.date}</span>
                      <span className="font-semibold text-brand-green">{entry.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-brand-green/10 to-brand-dark-green/10 rounded-xl border border-brand-green/20">
                  <div className="flex items-center justify-between">
                    <span className="text-brand-dark-gray font-medium">Price Appreciation</span>
                    <span className="text-brand-green font-bold text-lg">+16.7%</span>
                  </div>
                  <p className="text-sm text-brand-brown mt-1">Since launch in Jan 2023</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-brand-green to-brand-dark-green py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make {projectData.name} Your Home?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of Nashik's most prestigious residential project. Contact our experts
            today for the best deals and site visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100 rounded-xl">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-green rounded-xl bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
