"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Home,
  MapPin,
  TrendingUp,
  Users,
  Search,
  Factory,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";

const categories = [
  {
    id: "flats",
    title: "Flats & Apartments",
    description: "Modern residential apartments with all amenities",
    icon: Building2,
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    count: "1,250+ Properties",
    priceRange: "₹25L - ₹1.5Cr",
    features: ["Ready to Move", "Under Construction", "Luxury Amenities"],
    href: "/category/flats",
  },
  {
    id: "plots",
    title: "Plots & Land",
    description: "Residential and commercial plots in prime locations",
    icon: MapPin,
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    count: "850+ Properties",
    priceRange: "₹15L - ₹2Cr",
    features: ["Clear Title", "RERA Approved", "Ready to Build"],
    href: "/category/plots",
  },
  {
    id: "bungalows",
    title: "Bungalows & Villas",
    description: "Spacious independent houses with gardens",
    icon: Home,
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
    count: "420+ Properties",
    priceRange: "₹75L - ₹5Cr",
    features: ["Independent Houses", "Private Gardens", "Premium Locations"],
    href: "/category/bungalows",
  },
  {
    id: "commercial",
    title: "Commercial Properties",
    description: "Office spaces, shops, and commercial buildings",
    icon: Building2,
    color: "bg-orange-600",
    hoverColor: "hover:bg-orange-700",
    count: "320+ Properties",
    priceRange: "₹50L - ₹10Cr",
    features: ["Prime Locations", "High ROI", "Ready Offices"],
    href: "/category/commercial",
  },
  {
    id: "industrial-plots",
    title: "Industrial Plots",
    description: "MIDC approved industrial plots with infrastructure",
    icon: Factory,
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    count: "150+ Properties",
    priceRange: "₹50L - ₹3Cr",
    features: ["MIDC Approved", "Power Connection", "Road Access"],
    href: "/category/industrial-plots",
  },
  {
    id: "industrial-sheds",
    title: "Industrial Sheds",
    description: "Ready-to-move industrial sheds and warehouses",
    icon: Warehouse,
    color: "bg-gray-600",
    hoverColor: "hover:bg-gray-700",
    count: "85+ Properties",
    priceRange: "₹1Cr - ₹5Cr",
    features: ["Ready Infrastructure", "Power Backup", "Loading Dock"],
    href: "/category/industrial-sheds",
  },
];

const quickStats = [
  { label: "Total Properties", value: "3,000+", icon: Building2 },
  { label: "Happy Customers", value: "1,500+", icon: Users },
  { label: "Price Growth", value: "12%", icon: TrendingUp },
  { label: "Locations", value: "50+", icon: MapPin },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories from API
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(
          "https://nashiksq.wtdemo.in/api/categories-list"
        );
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data.data); // 👈 depends on API response shape
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  const quickStats = [
    { label: "Total Properties", value: "3,000+", icon: Building2 },
    { label: "Happy Customers", value: "1,500+", icon: Users },
    { label: "Price Growth", value: "12%", icon: TrendingUp },
    { label: "Locations", value: "50+", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Property Categories
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Explore our diverse range of properties across Nashik
            </p>

            {/* Quick Search */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by location, property type..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-900"
                  />
                </div>
                <Button className="bg-gray-600 hover:bg-gray-700 text-white px-8">
                  <Search className="w-4 h-4 mr-2" />
                  Search
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
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-gray-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect property that matches your needs from our
              comprehensive categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div
                    className={`${category.color} ${category.hoverColor} p-6 text-white transition-colors`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      {/* ✅ Fixed: render icon as <img /> */}
                      <img
                        src={`https://nashiksq.wtdemo.in${category.icon}`}
                        alt={category.title}
                        className="w-12 h-12 object-contain"
                      />

                      <Badge className="bg-white/20 text-white border-white/30">
                        {category.count}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-1">
                        Price Range
                      </div>
                      <div className="font-semibold text-gray-900">
                        {category.priceRange}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-gray-600 mb-2">
                        Key Features
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {category.features.map(
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
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <Link href={`/category/${category.id}`}>
                      <Button
                        className={`w-full ${category.color} ${category.hoverColor} text-white group-hover:shadow-lg transition-all`}
                      >
                        Explore Properties
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Locations
            </h2>
            <p className="text-gray-600">
              Discover properties in Nashik's most sought-after areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Nashik Road", properties: "450+", growth: "+15%" },
              { name: "College Road", properties: "320+", growth: "+12%" },
              { name: "Gangapur Road", properties: "280+", growth: "+18%" },
              { name: "Panchavati", properties: "220+", growth: "+10%" },
              { name: "Cidco", properties: "380+", growth: "+14%" },
              { name: "Satpur", properties: "190+", growth: "+16%" },
              { name: "Adgaon", properties: "150+", growth: "+20%" },
              { name: "Pathardi Phata", properties: "120+", growth: "+22%" },
            ].map((location, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <div className="text-sm text-gray-600 mb-1">
                    {location.properties} Properties
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {location.growth}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get expert guidance and find the perfect property that matches your
            budget and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3">
              Contact Our Experts
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
