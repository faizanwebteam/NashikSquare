"use client";

import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Search,
  Home,
  Building,
  Factory,
  TreePine,
  Phone,
  Star,
  ArrowRight,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// 🔹 Types
interface Property {
  category: ReactNode;
  id: number;
  title: string;
  type: string;
  location: string;
  price: string;
  area: string;
  image: string;
  features: string[];
  isNew?: boolean;
}

interface Category {
  id: number;
  name: string;
  description?: string;
  count?: string;
  icon?: any;
  color?: string;
  image?: string;
}

// Map category name to Icon
const categoryIcons: Record<string, any> = {
  Flats: Building,
  Plots: TreePine,
  Bungalows: Home,
  Commercial: Factory,
};

// Static stats
const stats = [
  { label: "Properties Listed", value: "500+", icon: Home },
  { label: "Happy Customers", value: "1000+", icon: Users },
  { label: "Years Experience", value: "10+", icon: TrendingUp },
  { label: "Verified Listings", value: "100%", icon: Shield },
];

export default function HomePage() {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [searchQuery, setSearchQuery] = useState<{
  location: string
  property_type: string
  budget: string
}>({
  location: "",
  property_type: "",
  budget: "",
})

  useEffect(() => {
    async function fetchData() {
      try {
        const [featuredRes, categoriesRes] = await Promise.all([
          fetch("https://nashiksq.wtdemo.in/api/featured-properties"),
          fetch("https://nashiksq.wtdemo.in/api/homepage/categories"),
        ]);

        if (!featuredRes.ok || !categoriesRes.ok) {
          throw new Error("Failed to fetch homepage data");
        }

        const featuredData = await featuredRes.json();
        const categoriesData = await categoriesRes.json();

        const categoriesWithIcons = (categoriesData?.data || []).map(
          (cat: Category) => ({
            ...cat,
            icon: categoryIcons[cat.name] || Home,
            color:
              cat.name === "Flats"
                ? "bg-brand-green/10 text-brand-green border-brand-green/20"
                : cat.name === "Plots"
                ? "bg-brand-dark-green/10 text-brand-dark-green border-brand-dark-green/20"
                : cat.name === "Bungalows"
                ? "bg-brand-brown/10 text-brand-brown border-brand-brown/20"
                : cat.name === "Commercial"
                ? "bg-brand-dark-gray/10 text-brand-dark-gray border-brand-dark-gray/20"
                : "",
          })
        );

        setFeaturedProperties(featuredData?.data || []);
        setCategories(categoriesWithIcons);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // 👉 Search function
  async function handleSearch() {
    try {
      setSearchLoading(true);

      const params = new URLSearchParams();

      if (searchQuery.location) params.append("location", searchQuery.location);
      if (searchQuery.property_type)
        params.append("property_type", searchQuery.property_type);
      if (searchQuery.budget) params.append("budget", searchQuery.budget);

      const res = await fetch(
        `https://nashiksq.wtdemo.in/api/properties/search?${params.toString()}`
      );

      if (!res.ok) throw new Error("Failed to search properties");

      const data = await res.json();
      setSearchResults(data?.data || []);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setSearchLoading(false);
    }
  }

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark-green via-brand-green to-brand-dark-green text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Nashik+Cityscape')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Find Your Perfect Property in{" "}
              <span className="text-yellow-300 relative">
                Nasik
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-300 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              Discover verified properties across Nasik district. From
              residential flats to commercial spaces, we connect you with the
              right property through our trusted platform.
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <Card className="max-w-5xl mx-auto shadow-2xl border-0 mt-10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Location Input */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-brand-green" />
                  <Input
                    placeholder="Location (e.g., Nashik Road)"
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-brand-green rounded-xl"
                    value={searchQuery.location}
                    onChange={(e) =>
                      setSearchQuery({
                        ...searchQuery,
                        location: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Property Type */}
                <Select
                  onValueChange={(value) =>
                    setSearchQuery({ ...searchQuery, property_type: value })
                  }
                >
                  <SelectTrigger className="h-14 text-lg border-2 border-gray-200 focus:border-brand-green rounded-xl">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                    <SelectItem value="bungalow">Bungalow</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>

                {/* Budget */}
                <Select
                  onValueChange={(value) =>
                    setSearchQuery({ ...searchQuery, budget: value })
                  }
                >
                  <SelectTrigger className="h-14 text-lg border-2 border-gray-200 focus:border-brand-green rounded-xl">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2500000">₹0 - 25 Lakh</SelectItem>
                    <SelectItem value="5000000">₹25 - 50 Lakh</SelectItem>
                    <SelectItem value="10000000">₹50 Lakh - 1 Crore</SelectItem>
                    <SelectItem value="20000000">₹1 Crore+</SelectItem>
                  </SelectContent>
                </Select>

                {/* Search Button */}
                <Button
                  size="lg"
                  className="h-14 text-lg bg-brand-green hover:bg-brand-dark-green shadow-lg rounded-xl"
                  onClick={handleSearch}
                  disabled={searchLoading}
                >
                  <Search className="w-5 h-5 mr-2" />
                  {searchLoading ? "Searching..." : "Search Properties"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{property.title}</h3>
                    <p className="text-gray-600">{property.location}</p>
                    <p className="text-sm">
                      {property.category} • {property.type}
                    </p>
                    <p className="font-semibold text-brand-green mt-2">
                      {property.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-brand-green" />
                </div>
                <div className="text-3xl font-bold text-brand-dark-gray mb-2">
                  {stat.value}
                </div>
                <div className="text-brand-brown font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-brand-dark-gray">
              Browse by Category
            </h2>
            <p className="text-xl text-brand-brown max-w-3xl mx-auto leading-relaxed">
              Explore different types of properties available across Nasik
              district with our curated categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon || Home;
              return (
                <Link
                  key={index}
                  href={`/category/${category.name.toLowerCase()}`}
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-brand-green/30 group bg-white">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-20 h-20 rounded-2xl ${category.color} border-2 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-brand-dark-gray group-hover:text-brand-green transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-brand-brown mb-4">
                        {category.description}
                      </p>
                      <p className="text-brand-green font-semibold">
                        {category.count}
                      </p>
                      <ArrowRight className="w-5 h-5 mx-auto mt-4 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-brand-dark-gray">
              Featured Properties
            </h2>
            <p className="text-xl text-brand-brown max-w-3xl mx-auto">
              Handpicked premium properties across Nasik district
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property) => (
              <Link key={property.id} href={`/property/${property.id}`}>
                <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden bg-white border-2 hover:border-brand-green/30">
                  <div className="relative overflow-hidden">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-brand-green text-white shadow-lg">
                      {property.type}
                    </Badge>
                    {property.isNew && (
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-white shadow-lg">
                        New
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3 line-clamp-2 text-brand-dark-gray group-hover:text-brand-green transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-brand-brown mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-brand-green">
                        {property.price}
                      </span>
                      <span className="text-brand-brown font-medium">
                        {property.area}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.features?.slice(0, 2).map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-brand-cream text-brand-brown"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
            >
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-brand-dark-gray">
                Why Choose NasikSquare.com?
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-dark-gray">
                      Verified Properties
                    </h3>
                    <p className="text-brand-brown leading-relaxed">
                      All listings are verified by our team to ensure
                      authenticity and accuracy, giving you peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-dark-gray">
                      Centralized Support
                    </h3>
                    <p className="text-brand-brown leading-relaxed">
                      All inquiries are handled by our professional team for
                      consistent, reliable service experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-dark-gray">
                      Local Expertise
                    </h3>
                    <p className="text-brand-brown leading-relaxed">
                      Deep knowledge of Nasik district properties, market
                      trends, and local regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-green/10 rounded-3xl transform rotate-3"></div>
              <Image
                src="/placeholder.svg?height=500&width=600&text=Nasik+City+View"
                alt="Nasik City"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-dark-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-white/90">
            Let our experts help you discover the perfect property in Nasik
            district with personalized assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-brand-green hover:bg-brand-cream text-lg px-8 py-4"
            >
              Browse Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-2 border-white hover:bg-white hover:text-brand-green bg-transparent text-lg px-8 py-4"
            >
              Request Assistance
              <Phone className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
