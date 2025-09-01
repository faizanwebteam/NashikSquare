"use client"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Users } from "lucide-react"
import {
  MapPin,
  TrendingUp,
  Building,
  Star,
  Navigation,
  Phone,
  Mail,
  Filter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ✅ Define a type for quick stats
type QuickStat = {
  label: string
  value: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// ✅ Define the quick stats array
const quickStats: QuickStat[] = [
  { label: "Prime Locations", value: "25+", icon: MapPin },
  { label: "Avg. Growth", value: "12%", icon: TrendingUp },
  { label: "Projects", value: "120+", icon: Building },
  { label: "Happy Clients", value: "500+", icon: Users },
]

export default function LocationsPage() {
  const [locations, setLocations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // ✅ Fetch API
  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await fetch("https://nashiksq.wtdemo.in/api/locations-list", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        })

        if (!res.ok) throw new Error("Failed to fetch locations")

        const data = await res.json()
        console.log("API Response:", data)

        // ✅ Correct mapping (API returns { success, data: [] })
        setLocations(data?.data || [])
      } catch (error) {
        console.error("Error fetching locations:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLocations()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-cream/20 to-white">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-brand-green to-brand-dark-green">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2" />
              Prime Locations in Nashik
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Discover Your Perfect{" "}
              <span className="text-brand-cream">Location</span>
            </h1>

            <p className="text-lg text-brand-cream/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Explore Nashik's most sought-after neighborhoods with detailed
              insights and investment opportunities.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search locations..."
                  className="pl-12 pr-16 py-3 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/50"
                />
                <Button className="absolute right-1 top-1 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-brand-cream/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="py-16 text-center">
          <p className="text-gray-500">Loading locations...</p>
        </div>
      )}

      {/* Locations Grid */}
      {!loading && locations.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative">
                    <Image
                      src={
                        location.image
                          ? `https://nashiksq.wtdemo.in/${location.image}`
                          : "/placeholder.svg"
                      }
                      alt={location.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-brand-green border-0">
                        {location.type}
                      </Badge>
                    </div>
                    {/* Rating */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">
                          {location.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-dark-green">
                        {location.name}
                      </h3>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">
                          {location.growth}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {location.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Properties Available
                        </span>
                        <span className="font-semibold text-gray-900">
                          {location.properties}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Price Range</span>
                        <span className="font-semibold text-brand-green">
                          ₹{location.avgPrice}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    {location.highlights?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {location.highlights.map((h: string, i: number) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-brand-cream/50 text-brand-dark-green"
                          >
                            {h}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Link href={`/locations/${location.slug}`} className="flex-1">
                        <Button className="w-full bg-brand-green hover:bg-brand-dark-green">
                          <Navigation className="w-4 h-4 mr-2" />
                          Explore
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-brand-dark-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Location?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get personalized location recommendations based on your preferences
            and budget. Our experts are here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-green hover:bg-brand-cream">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Site Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-green bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Location Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
