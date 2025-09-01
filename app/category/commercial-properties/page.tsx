"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Building, TrendingUp, Star, Heart, Share2, Phone, Eye, Car, Briefcase } from "lucide-react"

export default function CommercialPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [propertyType, setPropertyType] = useState("all")

  const popularAreas = [
    {
      name: "MG Road",
      avgPrice: "₹8,500/sq ft",
      growth: "+15%",
      properties: 67,
      type: "Prime Commercial",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Gangapur Road",
      avgPrice: "₹6,200/sq ft",
      growth: "+22%",
      properties: 89,
      type: "IT Hub",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Ambad MIDC",
      avgPrice: "₹4,800/sq ft",
      growth: "+18%",
      properties: 124,
      type: "Industrial",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "College Road",
      avgPrice: "₹7,200/sq ft",
      growth: "+12%",
      properties: 45,
      type: "Retail Hub",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]


  const [commercialProperties, setCommercialProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


   // ✅ Fetch API
  useEffect(() => {
    async function fetchCommercialProperties() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://nashiksq.wtdemo.in/api/category/commercial"
        );
        if (!res.ok) throw new Error("Failed to fetch commercial properties");

        const data = await res.json();

        // handle array or object response
        setCommercialProperties(
          Array.isArray(data?.data) ? data.data : [data.data]
        );
      } catch (error) {
        console.error("Error fetching commercial properties:", error);
        setCommercialProperties([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCommercialProperties();
  }, [])



  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-cream/30">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/10 via-brand-dark-green/5 to-brand-brown/10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-green/20 mb-6">
              <Building className="w-4 h-4 text-brand-green" />
              <span className="text-sm font-medium text-brand-dark-green">Commercial Real Estate</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark-green mb-4">
              Premium <span className="text-brand-green">Commercial</span> Spaces
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover prime office spaces, retail showrooms, and commercial properties in Nashik's business districts
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by location, type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-brand-green"
                  />
                </div>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="border-gray-200 focus:border-brand-green">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="office">Office Space</SelectItem>
                    <SelectItem value="retail">Retail/Showroom</SelectItem>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border-gray-200 focus:border-brand-green">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="area">Area: Large to Small</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green text-white">
                  Search Properties
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Properties", value: "325", icon: Building },
              { label: "Avg Price/sq ft", value: "₹6,800", icon: TrendingUp },
              { label: "Price Growth", value: "+17%", icon: TrendingUp },
              { label: "Ready Spaces", value: "198", icon: Star },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 transition-all duration-300"
              >
                <CardContent className="p-4 text-center">
                  <stat.icon className="w-6 h-6 text-brand-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-brand-dark-green">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark-green mb-4">Prime Commercial Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most sought-after business districts and commercial hubs in Nashik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image || "/placeholder.svg"}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-brand-green text-white">{area.growth}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{area.name}</h3>
                    <p className="text-sm opacity-90">{area.type}</p>
                    <p className="text-xs opacity-75">{area.properties} Properties</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-brand-dark-green">{area.avgPrice}</div>
                      <div className="text-sm text-gray-600">Avg Price</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                    >
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Properties Listing */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark-green mb-2">Featured Commercial Properties</h2>
              <p className="text-gray-600">Premium office spaces and commercial properties for your business</p>
            </div>
            <div className="text-sm text-gray-600">Showing {commercialProperties.length} of 325 properties</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProperties.map((property: any) => (
              <Card
                key={property.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {property.featured && (
                      <Badge className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white">
                        Featured
                      </Badge>
                    )}
                    {property.verified && (
                      <Badge variant="secondary" className="bg-white/90 text-brand-dark-green">
                        ✓ Verified
                      </Badge>
                    )}
                    <Badge variant="outline" className="bg-white/90 text-brand-green border-brand-green">
                      {property.type}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Views and Rating */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Eye className="w-3 h-3" />
                      {property.views}
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {property.rating}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-brand-dark-green mb-2 group-hover:text-brand-green transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-brand-dark-green">{property.price}</span>
                      <span className="text-sm text-gray-500">({property.pricePerSqft}/sq ft)</span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-brand-green" />
                      <span>{property.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-brand-green" />
                      <span>{property.floor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-brand-green" />
                      <span>{property.parking} Parking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-brand-green rounded-full flex-shrink-0"></span>
                      <span>{property.furnished}</span>
                    </div>
                  </div>

                  {/* Expected Rent */}
                  <div className="bg-brand-cream/50 rounded-lg p-3 mb-4">
                    <div className="text-sm text-gray-600">Expected Rent</div>
                    <div className="text-lg font-semibold text-brand-dark-green">{property.expectedRent}</div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {property.amenities.slice(0, 3).map((amenity: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs border-brand-green/30 text-brand-green">
                          {amenity}
                        </Badge>
                      ))}
                      {property.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                          +{property.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Developer and Tenant Type */}
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>By {property.developer}</span>
                    <span>{property.tenantType}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link href={`/commercial/${property.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green text-white">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
            >
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-green via-brand-dark-green to-brand-green">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">
            Find the perfect commercial space for your business with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100">
              Schedule Site Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-green bg-transparent"
            >
              Get Business Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
