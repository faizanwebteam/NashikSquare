import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Ruler,
  Zap,
  TrendingUp,
  Heart,
  Share2,
  Phone,
  Mail,
  CheckCircle,
  Users,
  Calendar,
  FileText,
  Download,
  Eye,
  Factory,
} from "lucide-react"
import Link from "next/link"

// Mock data - in real app, this would come from API based on the ID
const plotData = {
  id: "ip001",
  title: "Premium Industrial Plot - MIDC Ambad",
  location: "MIDC Ambad, Nashik",
  area: "5,000 sq ft",
  price: "₹75,00,000",
  pricePerSqFt: "₹1,500",
  type: "Industrial Plot",
  description:
    "Prime industrial plot located in the heart of MIDC Ambad with excellent connectivity and infrastructure. This plot comes with all necessary approvals and is ready for immediate development. Perfect for manufacturing units, warehouses, or any industrial setup.",
  features: ["MIDC Approved", "Power Connection", "Road Access", "Water Supply", "Clear Title", "Ready to Build"],
  images: [
    "/placeholder.svg?height=400&width=600&text=Main+Plot+View",
    "/placeholder.svg?height=400&width=600&text=Road+Access",
    "/placeholder.svg?height=400&width=600&text=Infrastructure",
    "/placeholder.svg?height=400&width=600&text=Surroundings",
  ],
  specifications: {
    plotArea: "5,000 sq ft",
    frontage: "50 ft",
    depth: "100 ft",
    powerLoad: "100 KW",
    waterConnection: "Available",
    roadWidth: "40 ft",
    cornerPlot: "No",
    fsi: "1.5",
  },
  amenities: {
    infrastructure: ["Power Connection", "Water Supply", "Drainage System", "Street Lighting"],
    connectivity: ["Main Road Access", "Highway 5km", "Railway Station 8km", "Airport 25km"],
    approvals: ["MIDC Approved", "Title Clear", "Building Permission", "Environmental Clearance"],
    facilities: ["Security", "Boundary Wall", "Gate", "Approach Road"],
  },
  locationDetails: {
    address: "Plot No. 45, MIDC Ambad, Nashik - 422010",
    coordinates: "19.9975° N, 73.7898° E",
    nearbyPlaces: [
      { name: "Nashik Road Railway Station", distance: "8 km", type: "Transport" },
      { name: "Mumbai-Nashik Highway", distance: "5 km", type: "Highway" },
      { name: "Ambad Industrial Area", distance: "1 km", type: "Industrial" },
      { name: "Government Hospital", distance: "6 km", type: "Healthcare" },
    ],
  },
  documents: [
    { name: "Title Deed", type: "PDF", size: "2.1 MB", verified: true },
    { name: "MIDC Approval", type: "PDF", size: "1.8 MB", verified: true },
    { name: "Survey Settlement", type: "PDF", size: "1.5 MB", verified: true },
    { name: "Building Permission", type: "PDF", size: "1.2 MB", verified: true },
  ],
  priceHistory: {
    currentPrice: "₹75,00,000",
    priceGrowth: "+15%",
    yearlyAppreciation: "12%",
    marketTrend: "Bullish",
  },
  contact: {
    agent: "Rajesh Patil",
    phone: "+91 98765 43210",
    email: "rajesh@nasiksquare.com",
    experience: "8 years",
  },
}

const similarPlots = [
  {
    id: "ip002",
    title: "Corner Plot - MIDC Sinnar",
    location: "MIDC Sinnar, Nashik",
    area: "8,000 sq ft",
    price: "₹1,20,00,000",
    pricePerSqFt: "₹1,500",
    image: "/placeholder.svg?height=200&width=300&text=Similar+Plot+1",
  },
  {
    id: "ip003",
    title: "Large Manufacturing Plot",
    location: "MIDC Satpur, Nashik",
    area: "12,000 sq ft",
    price: "₹1,80,00,000",
    pricePerSqFt: "₹1,500",
    image: "/placeholder.svg?height=200&width=300&text=Similar+Plot+2",
  },
  {
    id: "ip004",
    title: "Ready Infrastructure Plot",
    location: "MIDC Waluj, Nashik",
    area: "6,000 sq ft",
    price: "₹90,00,000",
    pricePerSqFt: "₹1,500",
    image: "/placeholder.svg?height=200&width=300&text=Similar+Plot+3",
  },
]

export default function IndustrialPlotDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/category/industrial-plots" className="hover:text-gray-600">
              Industrial Plots
            </Link>
            <span>/</span>
            <span className="text-gray-900">{plotData.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-red-600 text-white">{plotData.type}</Badge>
                    <Badge className="bg-green-600 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      MIDC Approved
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{plotData.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{plotData.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-red-600">{plotData.price}</div>
                  <div className="text-gray-600">{plotData.pricePerSqFt}/sq ft</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600">
                    <Ruler className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">{plotData.area}</span>
                  </div>
                  <div className="text-gray-600">Plot Area</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600">
                    <Zap className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">{plotData.specifications.powerLoad}</span>
                  </div>
                  <div className="text-gray-600">Power Load</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600">
                    <Factory className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">{plotData.specifications.fsi}</span>
                  </div>
                  <div className="text-gray-600">FSI</div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Plot Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <img
                    src={plotData.images[0] || "/placeholder.svg"}
                    alt="Main plot view"
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
                {plotData.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Plot view ${index + 2}`}
                    className="w-full h-32 md:h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Plot Overview</h3>
                  <p className="text-gray-600 mb-6">{plotData.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {plotData.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Price Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Current Price</span>
                          <span className="font-medium">{plotData.priceHistory.currentPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price Growth</span>
                          <span className="font-medium text-green-600">{plotData.priceHistory.priceGrowth}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Yearly Appreciation</span>
                          <span className="font-medium text-green-600">{plotData.priceHistory.yearlyAppreciation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Market Trend</span>
                          <span className="font-medium text-green-600">{plotData.priceHistory.marketTrend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Plot Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(plotData.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Amenities & Infrastructure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(plotData.amenities).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="font-semibold mb-3 capitalize">{category}</h4>
                        <div className="space-y-2">
                          {items.map((item, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Location Details</h3>
                  <div className="mb-6">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <div className="font-medium mb-1">{plotData.locationDetails.address}</div>
                      <div className="text-gray-600 text-sm">{plotData.locationDetails.coordinates}</div>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3">Nearby Places</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plotData.locationDetails.nearbyPlaces.map((place, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{place.name}</div>
                          <div className="text-sm text-gray-600">{place.type}</div>
                        </div>
                        <div className="text-sm font-medium text-gray-600">{place.distance}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="documents" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Legal Documents</h3>
                  <div className="space-y-4">
                    {plotData.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center">
                          <FileText className="w-8 h-8 text-gray-600 mr-3" />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-gray-600">
                              {doc.type} • {doc.size}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {doc.verified && (
                            <Badge className="bg-green-600 text-white">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Contact Form */}
            <Card className="sticky top-4 mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">{plotData.contact.agent}</div>
                    <div className="text-sm text-gray-600">{plotData.contact.experience} experience</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Phone" />
                  <Input placeholder="Your Email" />
                  <Textarea placeholder="Your Message" rows={3} />
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Price Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plot Price</span>
                    <span className="font-medium text-red-600">{plotData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per sq ft</span>
                    <span className="font-medium">{plotData.pricePerSqFt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registration</span>
                    <span className="font-medium">₹2,50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stamp Duty</span>
                    <span className="font-medium">₹3,75,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-600">Total Cost</span>
                    <span className="font-medium text-red-600">₹81,25,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Site Visit
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="w-4 h-4 mr-2" />
                    Request Brochure
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Get Price Trends
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Plots */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Industrial Plots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarPlots.map((plot) => (
              <Card key={plot.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={plot.image || "/placeholder.svg"}
                    alt={plot.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{plot.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{plot.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-red-600">{plot.price}</div>
                        <div className="text-sm text-gray-600">{plot.pricePerSqFt}/sq ft</div>
                      </div>
                      <div className="text-sm text-gray-600">{plot.area}</div>
                    </div>
                    <Link href={`/industrial-plot/${plot.id}`}>
                      <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
