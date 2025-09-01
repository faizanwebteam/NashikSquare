import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MapPin, Search, Filter, CheckCircle, Heart, Share2, Eye, Factory } from "lucide-react"
import Link from "next/link"

// Mock data for industrial plots
const plotsData = [
  {
    id: "ip001",
    title: "Premium Industrial Plot - MIDC Ambad",
    location: "MIDC Ambad, Nashik",
    area: "5,000 sq ft",
    price: "₹75,00,000",
    pricePerSqFt: "₹1,500",
    type: "Industrial Plot",
    features: ["MIDC Approved", "Power Connection", "Road Access", "Water Supply"],
    image: "/placeholder.svg?height=200&width=300&text=Industrial+Plot+1",
    status: "Available",
    midc: "Ambad MIDC",
  },
  {
    id: "ip002",
    title: "Corner Plot - MIDC Sinnar",
    location: "MIDC Sinnar, Nashik",
    area: "8,000 sq ft",
    price: "₹1,20,00,000",
    pricePerSqFt: "₹1,500",
    type: "Industrial Plot",
    features: ["Corner Plot", "MIDC Approved", "Power Connection", "Highway Access"],
    image: "/placeholder.svg?height=200&width=300&text=Industrial+Plot+2",
    status: "Available",
    midc: "Sinnar MIDC",
  },
  {
    id: "ip003",
    title: "Large Manufacturing Plot",
    location: "MIDC Satpur, Nashik",
    area: "12,000 sq ft",
    price: "₹1,80,00,000",
    pricePerSqFt: "₹1,500",
    type: "Industrial Plot",
    features: ["Large Area", "MIDC Approved", "Power Connection", "Railway Access"],
    image: "/placeholder.svg?height=200&width=300&text=Industrial+Plot+3",
    status: "Available",
    midc: "Satpur MIDC",
  },
  {
    id: "ip004",
    title: "Ready Infrastructure Plot",
    location: "MIDC Waluj, Nashik",
    area: "6,000 sq ft",
    price: "₹90,00,000",
    pricePerSqFt: "₹1,500",
    type: "Industrial Plot",
    features: ["Ready Infrastructure", "MIDC Approved", "Power Connection", "Security"],
    image: "/placeholder.svg?height=200&width=300&text=Industrial+Plot+4",
    status: "Available",
    midc: "Waluj MIDC",
  },
  {
    id: "ip005",
    title: "Prime Location Plot",
    location: "MIDC Ambad, Nashik",
    area: "10,000 sq ft",
    price: "₹1,50,00,000",
    pricePerSqFt: "₹1,500",
    type: "Industrial Plot",
    features: ["Prime Location", "MIDC Approved", "Power Connection", "Main Road"],
    image: "/placeholder.svg?height=200&width=300&text=Industrial+Plot+5",
    status: "Available",
    midc: "Ambad MIDC",
  },
  {
    id: "ip006",
    title: "Affordable Industrial Plot",
    location: "MIDC Sinnar, Nashik",
    area: "4,000 sq ft",
    price: "₹60,00,000",
    pricePerSqFt: "₹1,500",
    type: "Industrial Plot",
    features: ["Affordable", "MIDC Approved", "Power Connection", "Water Supply"],
    image: "/placeholder.svg?height=200&width=300&text=Industrial+Plot+6",
    status: "Available",
    midc: "Sinnar MIDC",
  },
]

const midcAreas = [
  { name: "Ambad MIDC", plots: 45, growth: "+12%", avgPrice: "₹1,500/sq ft" },
  { name: "Sinnar MIDC", plots: 32, growth: "+8%", avgPrice: "₹1,400/sq ft" },
  { name: "Satpur MIDC", plots: 28, growth: "+15%", avgPrice: "₹1,600/sq ft" },
  { name: "Waluj MIDC", plots: 38, growth: "+10%", avgPrice: "₹1,550/sq ft" },
]

export default function IndustrialPlotsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Plots in Nashik</h1>
            <p className="text-xl mb-8 text-red-100">
              Discover premium MIDC approved industrial plots with ready infrastructure
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search by location..." className="pl-10 border-gray-300 focus:border-red-500" />
                </div>
                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-red-500">
                    <SelectValue placeholder="MIDC Area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ambad">Ambad MIDC</SelectItem>
                    <SelectItem value="sinnar">Sinnar MIDC</SelectItem>
                    <SelectItem value="satpur">Satpur MIDC</SelectItem>
                    <SelectItem value="waluj">Waluj MIDC</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="border-gray-300 focus:border-red-500">
                    <SelectValue placeholder="Plot Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Up to 5,000 sq ft</SelectItem>
                    <SelectItem value="medium">5,000 - 10,000 sq ft</SelectItem>
                    <SelectItem value="large">Above 10,000 sq ft</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Search className="w-4 h-4 mr-2" />
                  Search Plots
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
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">Total Plots</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">12%</div>
              <div className="text-gray-600">Avg Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Active Buyers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">4</div>
              <div className="text-gray-600">MIDC Areas</div>
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
                  <Slider defaultValue={[50, 200]} max={300} step={10} className="w-full" />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹50L</span>
                    <span>₹3Cr</span>
                  </div>
                </div>

                {/* Plot Area */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Plot Area (sq ft)</label>
                  <Slider defaultValue={[3000, 15000]} max={20000} step={500} className="w-full" />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>3K</span>
                    <span>20K</span>
                  </div>
                </div>

                {/* MIDC Area */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">MIDC Area</label>
                  <div className="space-y-2">
                    {["Ambad MIDC", "Sinnar MIDC", "Satpur MIDC", "Waluj MIDC"].map((area) => (
                      <label key={area} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Features</label>
                  <div className="space-y-2">
                    {["Power Connection", "Water Supply", "Road Access", "Railway Access", "Highway Access"].map(
                      (feature) => (
                        <label key={feature} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">{feature}</span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Industrial Plots</h2>
                <p className="text-gray-600">{plotsData.length} plots found</p>
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

            {/* Plot Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {plotsData.map((plot) => (
                <Card key={plot.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={plot.image || "/placeholder.svg"}
                        alt={plot.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600 text-white">{plot.status}</Badge>
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
                        <Badge variant="outline" className="text-red-600 border-red-600">
                          {plot.type}
                        </Badge>
                        <Badge className="bg-green-600 text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          MIDC Approved
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{plot.title}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{plot.location}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="font-bold text-red-600 text-lg">{plot.price}</div>
                          <div className="text-sm text-gray-600">{plot.pricePerSqFt}/sq ft</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{plot.area}</div>
                          <div className="text-sm text-gray-600">Plot Area</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {plot.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {plot.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{plot.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/industrial-plot/${plot.id}`} className="flex-1">
                          <Button className="w-full bg-red-600 hover:bg-red-700">
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

            {/* Popular MIDC Areas */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular MIDC Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {midcAreas.map((area, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Factory className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">{area.name}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Available Plots</span>
                          <span className="font-medium">{area.plots}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Growth</span>
                          <span className="font-medium text-green-600">{area.growth}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg Price</span>
                          <span className="font-medium">{area.avgPrice}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-red-600 hover:bg-red-700" size="sm">
                        View Plots
                      </Button>
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
