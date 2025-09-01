"use client";

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
  MapPin,
  Building,
  TrendingUp,
  Users,
  Search,
  Filter,
  Heart,
  Share2,
  Phone,
  Calendar,
  Bed,
  Bath,
  Car,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

const flatsData = [
  {
    id: 1,
    title: "Luxury 3BHK Flat in Nashik Road",
    location: "Nashik Road, Nashik",
    price: "₹65,00,000",
    area: "1200 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=3BHK+Luxury+Flat",
    features: ["3 BHK", "2 Bathrooms", "Parking", "Lift"],
    bedrooms: 3,
    bathrooms: 2,
    parking: true,
    posted: "2 days ago",
    verified: true,
    featured: true,
  },
  {
    id: 2,
    title: "Affordable 2BHK in City Center",
    location: "City Center, Nashik",
    price: "₹42,00,000",
    area: "900 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=2BHK+City+Center",
    features: ["2 BHK", "1 Bathroom", "Balcony", "Security"],
    bedrooms: 2,
    bathrooms: 1,
    parking: false,
    posted: "1 week ago",
    verified: true,
    featured: false,
  },
  {
    id: 3,
    title: "Spacious 4BHK Penthouse",
    location: "Gangapur Road, Nashik",
    price: "₹1,20,00,000",
    area: "2000 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=4BHK+Penthouse",
    features: ["4 BHK", "3 Bathrooms", "Terrace", "Premium"],
    bedrooms: 4,
    bathrooms: 3,
    parking: true,
    posted: "3 days ago",
    verified: true,
    featured: true,
  },
  {
    id: 4,
    title: "Modern 1BHK for Young Professionals",
    location: "College Road, Nashik",
    price: "₹28,00,000",
    area: "600 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=1BHK+Modern",
    features: ["1 BHK", "1 Bathroom", "Furnished", "Gym"],
    bedrooms: 1,
    bathrooms: 1,
    parking: true,
    posted: "5 days ago",
    verified: false,
    featured: false,
  },
  {
    id: 5,
    title: "Family 3BHK with Garden View",
    location: "Panchavati, Nashik",
    price: "₹55,00,000",
    area: "1100 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=3BHK+Garden+View",
    features: ["3 BHK", "2 Bathrooms", "Garden View", "Kids Play"],
    bedrooms: 3,
    bathrooms: 2,
    parking: true,
    posted: "1 day ago",
    verified: true,
    featured: false,
  },
  {
    id: 6,
    title: "Premium 2BHK with Amenities",
    location: "Indira Nagar, Nashik",
    price: "₹48,00,000",
    area: "950 sq ft",
    image: "/placeholder.svg?height=300&width=400&text=2BHK+Premium",
    features: ["2 BHK", "2 Bathrooms", "Swimming Pool", "Club"],
    bedrooms: 2,
    bathrooms: 2,
    parking: true,
    posted: "4 days ago",
    verified: true,
    featured: false,
  },
];

const marketStats = [
  {
    label: "Average Price",
    value: "₹52 Lakh",
    icon: TrendingUp,
    change: "+12%",
  },
  { label: "Total Listings", value: "150+", icon: Building, change: "+8%" },
  { label: "Active Buyers", value: "300+", icon: Users, change: "+25%" },
];

const popularAreas = [
  { name: "Nashik Road", properties: 45, avgPrice: "₹58L", growth: "+15%" },
  { name: "Gangapur Road", properties: 32, avgPrice: "₹72L", growth: "+18%" },
  { name: "City Center", properties: 28, avgPrice: "₹45L", growth: "+10%" },
  { name: "Panchavati", properties: 25, avgPrice: "₹52L", growth: "+12%" },
];

export default function FlatsPage() {
  const [flatsData, setFlatsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const safeFlatsData = Array.isArray(flatsData) ? flatsData : [];
  useEffect(() => {
    async function fetchFlats() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://nashiksq.wtdemo.in/api/category/flats-apartments"
        );
        if (!res.ok) throw new Error("Failed to fetch flats data");

        const data = await res.json();

        // ✅ ensure flatsData is always an array
        setFlatsData(Array.isArray(data?.data) ? data.data : [data.data]);
      } catch (error) {
        console.error("Error fetching flats:", error);
        setFlatsData([]);
      } finally {
        setLoading(false);
      }
    }
    fetchFlats();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-cream/50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-dark-green via-brand-green to-brand-dark-green text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.05%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/80 mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/categories"
                className="hover:text-white transition-colors"
              >
                Categories
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Flats in Nashik</span>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Premium <span className="text-yellow-400">Flats</span> in Nashik
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in-up">
                Discover your dream home among our curated collection of
                verified flats across Nashik's most sought-after locations
              </p>

              {/* Search Bar */}
              <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Search by location..."
                        className="pl-10 bg-white border-0 h-12 text-gray-900 placeholder:text-gray-500"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="bg-white border-0 h-12 text-gray-900">
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1bhk">1 BHK</SelectItem>
                        <SelectItem value="2bhk">2 BHK</SelectItem>
                        <SelectItem value="3bhk">3 BHK</SelectItem>
                        <SelectItem value="4bhk">4+ BHK</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="bg-white border-0 h-12 text-gray-900">
                        <SelectValue placeholder="Budget Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-30">₹0 - 30 Lakh</SelectItem>
                        <SelectItem value="30-50">₹30 - 50 Lakh</SelectItem>
                        <SelectItem value="50-80">₹50 - 80 Lakh</SelectItem>
                        <SelectItem value="80+">₹80+ Lakh</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-brand-brown hover:bg-brand-brown/90 text-white h-12 font-semibold">
                      <Search className="w-5 h-5 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>

              {/* Market Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {marketStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-white/80 mb-1">{stat.label}</div>
                    <div className="text-green-400 text-sm font-medium">
                      {stat.change} this month
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Popular Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-dark-gray mb-8 text-center">
              Popular Areas in Nashik
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularAreas.map((area, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg text-brand-dark-gray mb-2">
                      {area.name}
                    </h3>
                    <div className="text-2xl font-bold text-brand-green mb-1">
                      {area.avgPrice}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {area.properties} Properties
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {area.growth} growth
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Filters and Results */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark-gray mb-2">
                  Available Flats
                </h2>
                <p className="text-gray-600">
                  {loading
                    ? "Loading..."
                    : `${flatsData.length} properties found`}
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="area">Area: Large to Small</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flatsData.map((flat) => (
                <Card
                  key={flat.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={flat.icon || "/assets/category_icons/cat_icon_6899da7a49072.png"}
                      alt={flat.category_name || "Property image"}
                      width={150}
                      height={50}
                      priority // ✅ preload important images
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {flat.featured && (
                        <Badge className="bg-yellow-500 text-white hover:bg-yellow-500">
                          Featured
                        </Badge>
                      )}
                      {flat.verified && (
                        <Badge className="bg-brand-green text-white hover:bg-brand-green">
                          Verified
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                    {/* Price Badge */}
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-brand-dark-green text-white px-3 py-1 rounded-full font-bold">
                        {flat.price}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg text-brand-dark-gray mb-2 line-clamp-2 group-hover:text-brand-green transition-colors">
                        {flat.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1 text-brand-green" />
                        <span className="text-sm">{flat.location}</span>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1 text-brand-green" />
                          <span>{flat.bedrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1 text-brand-green" />
                          <span>{flat.bathrooms}</span>
                        </div>
                        {flat.parking && (
                          <div className="flex items-center">
                            <Car className="w-4 h-4 mr-1 text-brand-green" />
                            <span>1</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center text-brand-green font-medium">
                        <Home className="w-4 h-4 mr-1" />
                        <span>{flat.area}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {flat.key_feature
                        .slice(0, 3)
                        .map(
                          (
                            feature:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactElement<
                                  unknown,
                                  string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactPortal
                                  | ReactElement<
                                      unknown,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined,
                            index: Key | null | undefined
                          ) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs bg-brand-cream text-brand-dark-gray"
                            >
                              {feature}
                            </Badge>
                          )
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-xs text-gray-500">
                        Posted {flat.posted}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </Button>
                        <Link href={`/property/${flat.id}`}>
                          <Button
                            size="sm"
                            className="bg-brand-green hover:bg-brand-dark-green text-white"
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mb-16">
            <Button
              size="lg"
              variant="outline"
              className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
            >
              Load More Properties
            </Button>
          </div>

          {/* Why Choose Section */}
          <div className="bg-gradient-to-r from-brand-green/5 to-brand-dark-green/5 rounded-3xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-dark-gray mb-6 text-center">
                Why Choose Flats in Nashik?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-center text-lg">
                Nashik, known as the Wine Capital of India, offers excellent
                opportunities for residential investment. The city's growing IT
                sector, educational institutions, and proximity to Mumbai make
                it an ideal location for both end-users and investors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-xl text-brand-dark-gray mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-brand-green" />
                    Popular Areas for Flats
                  </h3>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                      <span>
                        <strong>Nashik Road</strong> - IT Hub with modern
                        amenities
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                      <span>
                        <strong>Gangapur Road</strong> - Premium residential
                        area
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                      <span>
                        <strong>City Center</strong> - Close to markets and
                        schools
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                      <span>
                        <strong>Panchavati</strong> - Traditional area with
                        connectivity
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-xl text-brand-dark-gray mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-brand-green" />
                    Price Ranges
                  </h3>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex justify-between items-center">
                      <span>
                        <strong>1BHK:</strong>
                      </span>
                      <span className="text-brand-green font-semibold">
                        ₹25-35 Lakh
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>
                        <strong>2BHK:</strong>
                      </span>
                      <span className="text-brand-green font-semibold">
                        ₹40-60 Lakh
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>
                        <strong>3BHK:</strong>
                      </span>
                      <span className="text-brand-green font-semibold">
                        ₹55-80 Lakh
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>
                        <strong>4BHK+:</strong>
                      </span>
                      <span className="text-brand-green font-semibold">
                        ₹80L - 1.5Cr
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-brand-dark-green to-brand-green rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Looking for Something Specific?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Can't find the perfect flat? Our property experts can help you
              discover off-market properties and upcoming projects that match
              your exact requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-green hover:bg-brand-cream"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Site Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-green bg-transparent"
              >
                <Search className="w-5 h-5 mr-2" />
                Request Custom Search
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
