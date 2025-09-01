import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MapPin, Search, Filter, Zap, CheckCircle, Heart, Share2, Eye, Truck, Shield } from "lucide-react"
import Link from "next/link"

// Mock data for industrial sheds
const shedsData = [
  {
    id: "is001",
    title: "Premium Manufacturing Shed",
    location: "MIDC Ambad, Nashik",
    area: "15,000 sq ft",
    price: "₹2,25,00,000",
    pricePerSqFt: "₹1,500",
    type: "Manufacturing Shed",
    features: ["Power Backup", "Loading Dock", "24x7 Security", "Crane Facility"],
    image: "/placeholder.svg?height=200&width=300&text=Manufacturing+Shed",
    status: "Ready to Move",
    shedType: "Manufacturing",
  },
  {
    id: "is002",
    title: "Logistics Warehouse",
    location: "Nashik-Pune Highway",
    area: "25,000 sq ft",
    price: "₹3,75,00,000",
    pricePerSqFt: "₹1,500",
    type: "Warehouse",
    features: ["Highway Access", "Loading Dock", "Power Backup", "Security"],
    image: "/placeholder.svg?height=200&width=300&text=Logistics+Warehouse",
    status: "Ready to Move",
    shedType: "Warehouse",
  },
  {
    id: "is003",
    title: "Cold Storage Facility",
    location: "MIDC Sinnar",
    area: "8,000 sq ft",
    price: "₹1,60,00,000",
    pricePerSqFt: "₹2,000",
    type: "Cold Storage",
    features: ["Temperature Control", "Power Backup", "Loading Dock", "Security"],
    image: "/placeholder.svg?height=200&width=300&text=Cold+Storage",
    status: "Ready to Move",
    shedType: "Cold Storage",
  },
  {
    id: "is004",
    title: "Multi-Purpose Godown",
    location: "Satpur MIDC",
    area: "12,000 sq ft",
    price: "₹1,80,00,000",
    pricePerSqFt: "₹1,500",
    type: "Godown",
    features: ["Flexible Space", "Power Connection", "Loading Dock", "Security"],
    image: "/placeholder.svg?height=200&width=300&text=Multi+Purpose+Godown",
    status: "Ready to Move",
    shedType: "Godown",
  },
  {
    id: "is005",
    title: "Textile Manufacturing Unit",
    location: "MIDC Ambad, Nashik",
    area: "20,000 sq ft",
    price: "₹3,00,00,000",
    pricePerSqFt: "₹1,500",
    type: "Manufacturing Shed",
    features: ["High Ceiling", "Power Backup", "Loading Dock", "Ventilation"],
    image: "/placeholder.svg?height=200&width=300&text=Textile+Unit",
    status: "Ready to Move",
    shedType: "Manufacturing",
  },
  {
    id: "is006",
    title: "Food Processing Unit",
    location: "MIDC Waluj",
    area: "10,000 sq ft",
    price: "₹2,00,00,000",
    pricePerSqFt: "₹2,000",
    type: "Processing Unit",
    features: ["Food Grade", "Power Backup", "Loading Dock", "Drainage"],
    image: "/placeholder.svg?height=200&width=300&text=Food+Processing",
    status: "Ready to Move",
    shedType: "Processing",
  },
]

const shedFeatures = [
  { name: "Power Backup", icon: Zap, description: "Uninterrupted power supply" },
  { name: "Loading Dock", icon: Truck, description: "Easy loading and unloading" },
  { name: "24x7 Security", icon: Shield, description: "Round the clock security" },
  { name: "Ready to Move", icon: CheckCircle, description: "Immediate possession" },
]

export default function IndustrialShedsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Sheds in Nashik</h1>
            <p className="text-xl mb-8 text-gray-200">
              Ready-to-move industrial sheds with modern facilities and infrastructure
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search by location..." className="pl-10 border-gray-300 focus:border-gray-500" />
                </div>
                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-gray-500">
                    <SelectValue placeholder="Shed Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="cold-storage">Cold Storage</SelectItem>
                    <SelectItem value="godown">Godown</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-gray-500">
                    <SelectValue placeholder="Area Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Up to 10,000 sq ft</SelectItem>
                    <SelectItem value="medium">10,000 - 20,000 sq ft</SelectItem>
                    <SelectItem value="large">Above 20,000 sq ft</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-gray-700 hover:bg-gray-800 text-white">
                  <Search className="w-4 h-4 mr-2" />
                  Search Sheds
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-700 mb-2">85+</div>
              <div className="text-gray-600">Total Sheds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-700 mb-2">15%</div>
              <div className="text-gray-600">Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-700 mb-2">300+</div>
              <div className="text-gray-600">Active Buyers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-700 mb-2">65</div>
              <div className="text-gray-600">Ready Units</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Filter className="w-5 h-5 text-gray-500" />
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <Slider defaultValue={[100, 400]} max={500} step={25} className="w-full" />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹1Cr</span>
                    <span>₹5Cr</span>
                  </div>
                </div>

                {/* Shed Area */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Shed Area (sq ft)</label>
                  <Slider defaultValue={[8000, 25000]} max={30000} step={1000} className="w-full" />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>8K</span>
                    <span>30K</span>
                  </div>
                </div>

                {/* Shed Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Shed Type</label>
                  <div className="space-y-2">
                    {["Manufacturing", "Warehouse", "Cold Storage", "Godown", "Processing"].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Features</label>
                  <div className="space-y-2">
                    {["Power Backup", "Loading Dock", "24x7 Security", "Crane Facility", "Fire Safety"].map(
                      (feature) => (
                        <label key={feature} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">{feature}</span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gray-700 hover:bg-gray-800">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Industrial Sheds</h2>
                <p className="text-gray-600">{shedsData.length} sheds found</p>
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="area-small">Area: Small to Large</SelectItem>
                  <SelectItem value="area-large">Area: Large to Small</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Shed Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {shedsData.map((shed) => (
                <Card key={shed.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={shed.image || "/placeholder.svg"}
                        alt={shed.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gray-700 text-white">{shed.status}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button variant="outline" size="sm" className="bg-white/90">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="bg-white/90">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-gray-700 border-gray-700">
                          {shed.type}
                        </Badge>
                        <Badge className="bg-green-600 text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Ready Infrastructure
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{shed.title}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{shed.location}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="font-bold text-gray-700 text-lg">{shed.price}</div>
                          <div className="text-sm text-gray-600">{shed.pricePerSqFt}/sq ft</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{shed.area}</div>
                          <div className="text-sm text-gray-600">Built-up Area</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {shed.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {shed.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{shed.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/industrial-shed/${shed.id}`} className="flex-1">
                          <Button className="w-full bg-gray-700 hover:bg-gray-800">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                        <Button variant="outline" className="px-3 bg-transparent">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Industrial Sheds</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {shedFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <feature.icon className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.name}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
