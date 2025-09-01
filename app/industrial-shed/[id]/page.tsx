import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Ruler,
  Truck,
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
const shedData = {
  id: "is001",
  title: "Premium Manufacturing Shed",
  location: "MIDC Ambad, Nashik",
  area: "15,000 sq ft",
  price: "₹2,25,00,000",
  pricePerSqFt: "₹1,500",
  type: "Manufacturing Shed",
  description:
    "State-of-the-art manufacturing shed with modern amenities and infrastructure. This facility is designed for heavy manufacturing operations with high ceiling, crane facility, and dedicated loading docks. The shed comes with all necessary approvals and is ready for immediate occupation.",
  features: ["Ready Infrastructure", "Power Backup", "Loading Dock", "24x7 Security", "Crane Facility", "Fire Safety"],
  images: [
    "/placeholder.svg?height=400&width=600&text=Main+Shed+View",
    "/placeholder.svg?height=400&width=600&text=Interior+View",
    "/placeholder.svg?height=400&width=600&text=Loading+Dock",
    "/placeholder.svg?height=400&width=600&text=Crane+Facility",
  ],
  specifications: {
    builtUpArea: "15,000 sq ft",
    height: "25 ft",
    powerLoad: "500 KW",
    craneCapacity: "10 Ton",
    dockDoors: "4",
    floorLoad: "5 Ton/sq m",
    roofType: "Pre-engineered",
    ventilation: "Natural + Mechanical",
  },
  amenities: {
    infrastructure: ["Power Connection", "Water Supply", "Drainage System", "Fire Fighting"],
    facilities: ["Loading Dock", "Crane Facility", "Power Backup", "Security System"],
    connectivity: ["Highway Access", "Railway Station 5km", "Airport 25km", "Port 150km"],
    approvals: ["MIDC Approved", "Fire NOC", "Pollution Clearance", "Building Completion"],
  },
  locationDetails: {
    address: "Shed No. 12, MIDC Ambad, Nashik - 422010",
    coordinates: "19.9975° N, 73.7898° E",
    nearbyPlaces: [
      { name: "Nashik Road Railway Station", distance: "5 km", type: "Transport" },
      { name: "Mumbai-Nashik Highway", distance: "2 km", type: "Highway" },
      { name: "Ambad Industrial Area", distance: "1 km", type: "Industrial" },
      { name: "Government Hospital", distance: "3 km", type: "Healthcare" },
    ],
  },
  documents: [
    { name: "Building Completion Certificate", type: "PDF", size: "2.5 MB", verified: true },
    { name: "MIDC Approval", type: "PDF", size: "1.8 MB", verified: true },
    { name: "Fire NOC", type: "PDF", size: "1.2 MB", verified: true },
    { name: "Pollution Clearance", type: "PDF", size: "1.5 MB", verified: true },
  ],
  rentalYield: {
    expectedRent: "₹1,50,000/month",
    annualRent: "₹18,00,000",
    yieldPercentage: "8.0%",
    roi: "12-15%",
  },
  contact: {
    agent: "Priya Deshmukh",
    phone: "+91 98765 43210",
    email: "priya@nasiksquare.com",
    experience: "6 years",
  },
}

const similarSheds = [
  {
    id: "is002",
    title: "Logistics Warehouse",
    location: "Nashik-Pune Highway",
    area: "25,000 sq ft",
    price: "₹3,75,00,000",
    pricePerSqFt: "₹1,500",
    image: "/placeholder.svg?height=200&width=300&text=Similar+Shed+1",
  },
  {
    id: "is003",
    title: "Cold Storage Facility",
    location: "MIDC Sinnar",
    area: "8,000 sq ft",
    price: "₹1,60,00,000",
    pricePerSqFt: "₹2,000",
    image: "/placeholder.svg?height=200&width=300&text=Similar+Shed+2",
  },
  {
    id: "is004",
    title: "Multi-Purpose Godown",
    location: "Satpur MIDC",
    area: "12,000 sq ft",
    price: "₹1,80,00,000",
    pricePerSqFt: "₹1,500",
    image: "/placeholder.svg?height=200&width=300&text=Similar+Shed+3",
  },
]

export default function IndustrialShedDetailPage({ params }: { params: { id: string } }) {
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
            <Link href="/category/industrial-sheds" className="hover:text-gray-600">
              Industrial Sheds
            </Link>
            <span>/</span>
            <span className="text-gray-900">{shedData.title}</span>
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
                    <Badge className="bg-gray-600 text-white">{shedData.type}</Badge>
                    <Badge className="bg-green-600 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Ready to Move
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{shedData.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{shedData.location}</span>
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
                  <div className="text-3xl font-bold text-gray-600">{shedData.price}</div>
                  <div className="text-gray-600">{shedData.pricePerSqFt}/sq ft</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600">
                    <Ruler className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">{shedData.area}</span>
                  </div>
                  <div className="text-gray-600">Built-up Area</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600">
                    <Factory className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">{shedData.specifications.height}</span>
                  </div>
                  <div className="text-gray-600">Height</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600">
                    <Truck className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-gray-900">{shedData.specifications.dockDoors}</span>
                  </div>
                  <div className="text-gray-600">Loading Docks</div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Shed Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <img
                    src={shedData.images[0] || "/placeholder.svg"}
                    alt="Main shed view"
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
                {shedData.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Shed view ${index + 2}`}
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
                  <h3 className="text-xl font-semibold mb-4">Shed Overview</h3>
                  <p className="text-gray-600 mb-6">{shedData.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {shedData.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Investment Analysis</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Expected Rent</span>
                          <span className="font-medium">{shedData.rentalYield.expectedRent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Annual Rent</span>
                          <span className="font-medium">{shedData.rentalYield.annualRent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rental Yield</span>
                          <span className="font-medium text-green-600">{shedData.rentalYield.yieldPercentage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Expected ROI</span>
                          <span className="font-medium text-green-600">{shedData.rentalYield.roi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Shed Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(shedData.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Amenities & Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(shedData.amenities).map(([category, items]) => (
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
                      <div className="font-medium mb-1">{shedData.locationDetails.address}</div>
                      <div className="text-gray-600 text-sm">{shedData.locationDetails.coordinates}</div>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3">Nearby Places</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {shedData.locationDetails.nearbyPlaces.map((place, index) => (
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
                    {shedData.documents.map((doc, index) => (
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
                    <div className="font-medium">{shedData.contact.agent}</div>
                    <div className="text-sm text-gray-600">{shedData.contact.experience} experience</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Phone" />
                  <Input placeholder="Your Email" />
                  <Textarea placeholder="Your Message" rows={3} />
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-gray-600 hover:bg-gray-700">
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

            {/* Investment Summary */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Investment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purchase Price</span>
                    <span className="font-medium text-gray-600">{shedData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Rent</span>
                    <span className="font-medium">{shedData.rentalYield.expectedRent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Income</span>
                    <span className="font-medium">{shedData.rentalYield.annualRent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rental Yield</span>
                    <span className="font-medium text-green-600">{shedData.rentalYield.yieldPercentage}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-600">Expected ROI</span>
                    <span className="font-medium text-green-600">{shedData.rentalYield.roi}</span>
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
                    Get ROI Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Sheds */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Industrial Sheds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarSheds.map((shed) => (
              <Card key={shed.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={shed.image || "/placeholder.svg"}
                    alt={shed.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{shed.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{shed.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-gray-600">{shed.price}</div>
                        <div className="text-sm text-gray-600">{shed.pricePerSqFt}/sq ft</div>
                      </div>
                      <div className="text-sm text-gray-600">{shed.area}</div>
                    </div>
                    <Link href={`/industrial-shed/${shed.id}`}>
                      <Button className="w-full mt-4 bg-gray-600 hover:bg-gray-700">View Details</Button>
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
