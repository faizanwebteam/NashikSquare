"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Share2,
  MapPin,
  TrendingUp,
  Search,
  Filter,
  Phone,
  Eye,
} from "lucide-react";

const plotsData = [
  {
    id: 1,
    title: "Premium Residential Plot",
    location: "Nashik Road",
    area: "2400 sq ft",
    price: "₹48,00,000",
    pricePerSqft: "₹2,000",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    verified: true,
    facing: "East",
    plotType: "Residential",
    approvals: ["RERA", "DTCP"],
    amenities: ["Gated Community", "24/7 Security", "Water Supply"],
    description:
      "Prime residential plot in developing area with excellent connectivity",
  },
  {
    id: 2,
    title: "Commercial Plot - Highway Facing",
    location: "Mumbai-Nashik Highway",
    area: "5000 sq ft",
    price: "₹1,25,00,000",
    pricePerSqft: "₹2,500",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    verified: true,
    facing: "North",
    plotType: "Commercial",
    approvals: ["RERA", "DTCP", "NOC"],
    amenities: ["Highway Facing", "Corner Plot", "High Visibility"],
    description:
      "Excellent commercial plot with highway frontage and high visibility",
  },
  {
    id: 3,
    title: "Agricultural Land",
    location: "Dindori",
    area: "1 Acre",
    price: "₹25,00,000",
    pricePerSqft: "₹57",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    verified: true,
    facing: "South",
    plotType: "Agricultural",
    approvals: ["Revenue Records", "7/12 Extract"],
    amenities: ["Water Source", "Road Access", "Fertile Soil"],
    description:
      "Fertile agricultural land perfect for farming or future development",
  },
  {
    id: 4,
    title: "Industrial Plot",
    location: "Ambad MIDC",
    area: "10000 sq ft",
    price: "₹3,00,00,000",
    pricePerSqft: "₹3,000",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    verified: true,
    facing: "West",
    plotType: "Industrial",
    approvals: ["MIDC", "Pollution Board", "Fire NOC"],
    amenities: ["MIDC Area", "Power Supply", "Water Connection"],
    description: "Ready-to-use industrial plot in established MIDC area",
  },
  {
    id: 5,
    title: "Villa Plot - Gated Community",
    location: "Gangapur Road",
    area: "3600 sq ft",
    price: "₹90,00,000",
    pricePerSqft: "₹2,500",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    verified: true,
    facing: "North-East",
    plotType: "Residential",
    approvals: ["RERA", "DTCP"],
    amenities: ["Gated Community", "Club House", "Swimming Pool"],
    description:
      "Premium villa plot in exclusive gated community with luxury amenities",
  },
  {
    id: 6,
    title: "Corner Plot - Residential",
    location: "College Road",
    area: "1800 sq ft",
    price: "₹54,00,000",
    pricePerSqft: "₹3,000",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    verified: true,
    facing: "East",
    plotType: "Residential",
    approvals: ["RERA", "DTCP"],
    amenities: ["Corner Plot", "Wide Road", "Developed Area"],
    description: "Well-located corner plot in established residential area",
  },
];

const popularAreas = [
  { name: "Nashik Road", avgPrice: "₹2,200/sq ft", growth: "+12%", plots: 45 },
  {
    name: "Gangapur Road",
    avgPrice: "₹2,800/sq ft",
    growth: "+15%",
    plots: 32,
  },
  {
    name: "Mumbai Highway",
    avgPrice: "₹3,200/sq ft",
    growth: "+18%",
    plots: 28,
  },
  { name: "Ambad MIDC", avgPrice: "₹3,500/sq ft", growth: "+20%", plots: 22 },
];

export default function PlotsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const [plotsData, setPlotsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const safePlotsData = Array.isArray(plotsData) ? plotsData : [];

  useEffect(() => {
    async function fetchPlots() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://nashiksq.wtdemo.in/api/category/plots-land"
        );
        if (!res.ok) throw new Error("Failed to fetch plots data");

        const data = await res.json();

        // ✅ handle both array or object response
        setPlotsData(Array.isArray(data?.data) ? data.data : [data.data]);
      } catch (error) {
        console.error("Error fetching plots:", error);
        setPlotsData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPlots();
  }, []);

  if (loading) {
    return <p>Loading plots...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream/20 via-white to-brand-green/5">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-green/90 via-brand-green/80 to-brand-brown/70"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-white font-medium">
                Premium Plots in Nashik
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-brand-cream to-white bg-clip-text text-transparent">
                Plot of Land
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover premium residential, commercial, and agricultural plots
              in Nashik's most sought-after locations
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Available Plots", value: "500+" },
                { label: "Locations", value: "25+" },
                { label: "Avg. Growth", value: "15%" },
                { label: "Happy Buyers", value: "1000+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search plots..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/90 border-white/30 focus:border-brand-green"
                />
              </div>

              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="bg-white/90 border-white/30">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nashik-road">Nashik Road</SelectItem>
                  <SelectItem value="gangapur-road">Gangapur Road</SelectItem>
                  <SelectItem value="mumbai-highway">Mumbai Highway</SelectItem>
                  <SelectItem value="ambad-midc">Ambad MIDC</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-white/90 border-white/30">
                  <SelectValue placeholder="Plot Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="agricultural">Agricultural</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-white/90 border-white/30">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">Under ₹50L</SelectItem>
                  <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                  <SelectItem value="100-200">₹1Cr - ₹2Cr</SelectItem>
                  <SelectItem value="200+">Above ₹2Cr</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green text-white">
                <Filter className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      
      {/* Popular Areas */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark-green mb-8 text-center">
            Popular Areas for Plots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {popularAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-brand-green/20 hover:border-brand-green/40"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-brand-dark-green">
                      {area.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {area.growth}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-brand-green">
                      {area.avgPrice}
                    </div>
                    <div className="text-sm text-gray-600">
                      {area.plots} plots available
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plots Listing */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-brand-dark-green">
              Available Plots
            </h2>
            <div className="text-sm text-gray-600">
              {plotsData.length} plots found
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plotsData.map((plot) => (
              <Card
                key={plot.id}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-brand-green/20 hover:border-brand-green/40"
              >
                <div className="relative">
                  <img
                    src={plot.image || "/placeholder.svg"}
                    alt={plot.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {plot.featured && (
                      <Badge className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white">
                        Featured
                      </Badge>
                    )}
                    {plot.verified && (
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-700"
                      >
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-brand-dark-green text-lg group-hover:text-brand-green transition-colors">
                      {plot.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {plot.plotType}
                    </Badge>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{plot.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Area</div>
                      <div className="font-semibold text-brand-dark-green">
                        {plot.area}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Facing</div>
                      <div className="font-semibold text-brand-dark-green">
                        {plot.facing}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Approvals</div>
                    <div className="flex flex-wrap gap-1">
                      {(plot.approvals ?? []).map(
                        (approval: string, index: number) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs bg-green-50 text-green-700"
                          >
                            {approval}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">
                      Key Features
                    </div>
                    <div className="text-sm text-gray-600">
                      {(typeof plot.amenities === "string"
                        ? plot.amenities.split(",")
                        : plot.amenities ?? []
                      )
                        .slice(0, 2)
                        .join(", ")}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-brand-green">
                        {plot.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {plot.pricePerSqft}/sq ft
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/plot/${plot.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-brand-green to-brand-dark-green hover:from-brand-dark-green hover:to-brand-green text-white">
                        <Eye className="w-4 h-4 mr-2" />
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-dark-green to-brand-green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Invest in Your Dream Plot?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert guidance and find the perfect plot that matches your
            requirements and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-green hover:bg-brand-cream"
            >
              Schedule Site Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-green bg-transparent"
            >
              Get Expert Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
